import {
  FileUpload,
  FileUploadContent,
  FileUploadTrigger,
} from "@/components/prompt-kit/file-upload"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { isSupabaseEnabled } from "@/lib/supabase/config"
import { cn } from "@/lib/utils"
import { FileArrowUp, Paperclip } from "@phosphor-icons/react"
import React from "react"
import { PopoverContentAuth } from "./popover-content-auth"

type ButtonFileUploadProps = {
  onFileUpload: (files: File[]) => void
  isUserAuthenticated: boolean
}

export function ButtonFileUpload({
  onFileUpload,
  isUserAuthenticated,
}: ButtonFileUploadProps) {
  if (!isSupabaseEnabled) {
    return null
  }

  // NelsonGPT supports file uploads for clinical cases
  const isFileUploadAvailable = true

  if (!isFileUploadAvailable) {
    return null // Shouldn't happen for NelsonGPT
  }

  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button
              size="sm"
              variant="secondary"
              className="border-border dark:bg-secondary size-9 rounded-full border bg-transparent"
            >
              <FileArrowUp className="size-4" />
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>Upload files</TooltipContent>
      </Tooltip>

      <PopoverContent className="w-80">
        {isUserAuthenticated ? (
          <FileUpload
            onFileUpload={onFileUpload}
            maxFiles={5}
            maxSize={10 * 1024 * 1024} // 10MB
          />
        ) : (
          <PopoverContentAuth />
        )}
      </PopoverContent>
    </Popover>
  )
}