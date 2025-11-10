import { openproviders } from "@/lib/openproviders"
import { ModelConfig } from "../types"

// NelsonGPT specific models - only Mistral for clinical use
const nelsongptModels: ModelConfig[] = [
  {
    id: "mistral-large-latest",
    name: "Clinical Mode",
    provider: "Mistral",
    providerId: "mistral",
    baseProviderId: "mistral",
    modelFamily: "Mistral",
    description: "Fast, concise answers for bedside clinical decisions",
    tags: ["clinical", "fast", "reasoning"],
    contextWindow: 128000,
    inputCost: 2.0,
    outputCost: 6.0,
    priceUnit: "per 1M tokens",
    vision: false,
    tools: true,
    audio: false,
    reasoning: true,
    openSource: false,
    speed: "Medium",
    intelligence: "High",
    website: "https://mistral.ai",
    apiDocs: "https://docs.mistral.ai/models",
    modelPage: "https://mistral.ai/news/mistral-large/",
    releasedAt: "2024-02-26",
    icon: "mistral",
    apiSdk: (apiKey?: string) =>
      openproviders("mistral-large-latest", undefined, apiKey),
  },
  {
    id: "mistral-large-latest-academic",
    name: "Academic Mode",
    provider: "Mistral",
    providerId: "mistral",
    baseProviderId: "mistral",
    modelFamily: "Mistral",
    description: "Detailed explanations with evidence-based citations",
    tags: ["academic", "detailed", "research"],
    contextWindow: 128000,
    inputCost: 2.0,
    outputCost: 6.0,
    priceUnit: "per 1M tokens",
    vision: false,
    tools: true,
    audio: false,
    reasoning: true,
    openSource: false,
    speed: "Medium",
    intelligence: "High",
    website: "https://mistral.ai",
    apiDocs: "https://docs.mistral.ai/models",
    modelPage: "https://mistral.ai/news/mistral-large/",
    releasedAt: "2024-02-26",
    icon: "mistral",
    apiSdk: (apiKey?: string) =>
      openproviders("mistral-large-latest", undefined, apiKey),
  },
]

export { nelsongptModels }