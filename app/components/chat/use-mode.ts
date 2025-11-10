import { Chats } from "@/lib/chat-store/types"
import { MODEL_DEFAULT } from "@/lib/config"
import type { UserProfile } from "@/lib/user/types"
import { useCallback, useState } from "react"

type Mode = "clinical" | "academic"

interface UseModeProps {
  currentChat: Chats | null
  user: UserProfile | null
  updateChatModel?: (chatId: string, model: string) => Promise<void>
  chatId: string | null
}

/**
 * Hook to manage the current selected mode (Clinical/Academic) with proper fallback logic
 * Handles both cases: with existing chat (persists to DB) and without chat (local state only)
 * @param currentChat - The current chat object
 * @param user - The current user object
 * @param updateChatModel - Function to update chat model in the database
 * @param chatId - The current chat ID
 * @returns Object containing selected mode and handler function
 */
export function useMode({
  currentChat,
  user,
  updateChatModel,
  chatId,
}: UseModeProps) {
  // Calculate the effective mode based on chat model
  const getEffectiveMode = useCallback((): Mode => {
    const model = currentChat?.model || MODEL_DEFAULT
    return model === "mistral-large-latest-academic" ? "academic" : "clinical"
  }, [currentChat?.model])

  // Use local state only for temporary overrides, derive base value from props
  const [localSelectedMode, setLocalSelectedMode] = useState<Mode | null>(null)

  // The actual selected mode: local override or computed effective mode
  const selectedMode = localSelectedMode || getEffectiveMode()

  // Function to handle mode changes with proper validation and error handling
  const handleModeChange = useCallback(
    async (newMode: Mode) => {
      // Convert mode to model ID
      const modelId = newMode === "academic" 
        ? "mistral-large-latest-academic" 
        : "mistral-large-latest"

      // For authenticated users without a chat, we can't persist yet
      // but we still allow the mode selection for when they create a chat
      if (!user?.id && !chatId) {
        // For unauthenticated users without chat, just update local state
        setLocalSelectedMode(newMode)
        return
      }

      // For authenticated users with a chat, persist the change
      if (chatId && updateChatModel && user?.id) {
        // Optimistically update the state
        setLocalSelectedMode(newMode)

        try {
          await updateChatModel(chatId, modelId)
          // Clear local override since it's now persisted in the chat
          setLocalSelectedMode(null)
        } catch (err) {
          // Revert on error
          setLocalSelectedMode(null)
          console.error("Failed to update chat mode:", err)
          throw err
        }
      } else if (user?.id) {
        // Authenticated user but no chat yet - just update local state
        // The mode will be used when creating a new chat
        setLocalSelectedMode(newMode)
      }
    },
    [chatId, updateChatModel, user?.id]
  )

  return {
    selectedMode,
    handleModeChange,
  }
}