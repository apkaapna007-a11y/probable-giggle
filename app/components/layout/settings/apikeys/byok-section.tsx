"use client"

import MistralIcon from "@/components/icons/mistral"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/toast"
import { fetchClient } from "@/lib/fetch"
import { cn } from "@/lib/utils"
import { KeyIcon, PlusIcon } from "@phosphor-icons/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Loader2, Trash2 } from "lucide-react"
import { useState } from "react"

type Provider = {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  placeholder: string
  getKeyUrl: string
  defaultKey: string
}

const PROVIDERS: Provider[] = [
  {
    id: "mistral",
    name: "Mistral",
    icon: MistralIcon,
    placeholder: "your_mistral_api_key...",
    getKeyUrl: "https://console.mistral.ai/api-keys",
    defaultKey: "............................",
  },
]

export function ByokSection() {
  const [activeProvider, setActiveProvider] = useState<Provider | null>(null)
  const queryClient = useQueryClient()

  const { mutate: deleteKey, isPending: isDeleting } = useMutation({
    mutationFn: async (providerId: string) => {
      const response = await fetchClient("/api/user-keys", {
        method: "DELETE",
        body: JSON.stringify({ provider: providerId }),
      })
      if (!response.ok) {
        throw new Error("Failed to delete API key")
      }
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-keys"] })
      toast({
        title: "API key deleted successfully",
        description: "Your Mistral API key has been removed.",
      })
    },
    onError: (error) => {
      toast({
        title: "Failed to delete API key",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      })
    },
  })

  const { mutate: saveKey, isPending: isSaving } = useMutation({
    mutationFn: async ({
      provider,
      apiKey,
    }: {
      provider: Provider
      apiKey: string
    }) => {
      const response = await fetchClient("/api/user-keys", {
        method: "POST",
        body: JSON.stringify({
          provider: provider.id,
          key: apiKey,
        }),
      })
      if (!response.ok) {
        throw new Error("Failed to save API key")
      }
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-keys"] })
      toast({
        title: "API key saved successfully",
        description: "Your Mistral API key has been stored securely.",
      })
      setActiveProvider(null)
    },
    onError: (error) => {
      toast({
        title: "Failed to save API key",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      })
    },
  })

  const handleSaveKey = async (apiKey: string) => {
    if (!activeProvider) return
    await saveKey({ provider: activeProvider, apiKey })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Mistral API Key</h3>
        <p className="text-muted-foreground text-sm">
          Add your Mistral API key to use NelsonGPT. Your key is stored securely and never shared.
        </p>
      </div>

      <div className="space-y-4">
        {PROVIDERS.map((provider) => (
          <div key={provider.id} className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <provider.icon className="text-muted-foreground size-5" />
              <div>
                <div className="font-medium">{provider.name}</div>
                <div className="text-muted-foreground text-sm">
                  Required for NelsonGPT functionality
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(provider.getKeyUrl, "_blank")}
              >
                Get Key
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveProvider(provider)}
              >
                <PlusIcon className="mr-2 size-4" />
                Add Key
              </Button>
            </div>
          </div>
        ))}
      </div>

      <AlertDialog
        open={!!activeProvider}
        onOpenChange={(open) => !open && setActiveProvider(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Add {activeProvider?.name} API Key</AlertDialogTitle>
            <AlertDialogDescription>
              Enter your API key from {activeProvider?.name}. You can find it in your{" "}
              <a
                href={activeProvider?.getKeyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                {activeProvider?.name} console
              </a>
              .
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="api-key">API Key</Label>
              <Input
                id="api-key"
                placeholder={activeProvider?.placeholder}
                type="password"
                onChange={(e) => {
                  // You can add real-time validation here
                }}
              />
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                const input = document.getElementById("api-key") as HTMLInputElement
                if (input?.value) {
                  handleSaveKey(input.value)
                }
              }}
              disabled={isSaving}
            >
              {isSaving && <Loader2 className="mr-2 size-4" />}
              Save Key
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}