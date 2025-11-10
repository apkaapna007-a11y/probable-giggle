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
import { FileArrowUp } from "@phosphor-icons/react"
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

  if (!isUserAuthenticated) {
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
          <PopoverContentAuth />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <FileUpload onFilesAdded={onFileUpload}>
      <Tooltip>
        <TooltipTrigger asChild>
          <FileUploadTrigger asChild>
            <Button
              size="sm"
              variant="secondary"
              className="border-border dark:bg-secondary size-9 rounded-full border bg-transparent"
            >
              <FileArrowUp className="size-4" />
            </Button>
          </FileUploadTrigger>
        </TooltipTrigger>
        <TooltipContent>Upload files</TooltipContent>
      </Tooltip>

      <FileUploadContent className="pointer-events-none select-none">
        <div className="bg-background/60 text-foreground rounded-lg p-6 shadow-lg">
          Drop files to upload
        </div>
      </FileUploadContent>
    </FileUpload>
  )
}
