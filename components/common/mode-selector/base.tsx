"use client"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useModel } from "@/lib/model-store/provider"
import { cn } from "@/lib/utils"
import { Stethoscope, BookOpen } from "@phosphor-icons/react"

type Mode = "clinical" | "academic"

type ModeSelectorProps = {
  selectedMode: Mode
  onModeChange: (mode: Mode) => void
  className?: string
}

export function ModeSelector({
  selectedMode,
  onModeChange,
  className,
}: ModeSelectorProps) {
  const { models } = useModel()
  const clinicalModel = models.find((m) => m.id === "mistral-large-latest")
  const academicModel = models.find((m) => m.id === "mistral-large-latest-academic")

  return (
    <div className={cn("flex items-center gap-1 rounded-lg border p-1", className)}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={selectedMode === "clinical" ? "default" : "ghost"}
            size="sm"
            onClick={() => onModeChange("clinical")}
            className="h-8 px-3"
            disabled={!clinicalModel?.accessible}
          >
            <Stethoscope className="mr-2 size-4" />
            Clinical
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Quick, concise answers for bedside decisions</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={selectedMode === "academic" ? "default" : "ghost"}
            size="sm"
            onClick={() => onModeChange("academic")}
            className="h-8 px-3"
            disabled={!academicModel?.accessible}
          >
            <BookOpen className="mr-2 size-4" />
            Academic
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Detailed explanations with evidence-based citations</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}