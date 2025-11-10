import {
  BookOpenText,
  Brain,
  Code,
  Lightbulb,
  Notepad,
  PaintBrush,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr"

export const NON_AUTH_DAILY_MESSAGE_LIMIT = 5
export const AUTH_DAILY_MESSAGE_LIMIT = 1000
export const REMAINING_QUERY_ALERT_THRESHOLD = 2
export const DAILY_FILE_UPLOAD_LIMIT = 5
export const DAILY_LIMIT_PRO_MODELS = 500

export const NON_AUTH_ALLOWED_MODELS = ["mistral-large-latest"]

export const FREE_MODELS_IDS = [
  "mistral-large-latest",
  "mistral-large-latest-academic",
]

export const MODEL_DEFAULT = "mistral-large-latest"

export const APP_NAME = "NelsonGPT"
export const APP_DOMAIN = "https://nelsongpt.chat"

export const SUGGESTIONS = [
  {
    label: "Diagnosis",
    highlight: "Diagnose",
    prompt: `Diagnose`,
    items: [
      "Diagnose possible causes of fever in 3-year-old",
      "Diagnose approach to pediatric asthma exacerbation",
      "Diagnose evaluation of failure to thrive",
      "Diagnose causes of pediatric abdominal pain",
    ],
    icon: Brain,
  },
  {
    label: "Treatment",
    highlight: "Treatment",
    prompt: `Treatment`,
    items: [
      "Treatment guidelines for otitis media in children",
      "Treatment approach to pediatric dehydration",
      "Treatment options for ADHD in adolescents",
      "Treatment protocol for pediatric pneumonia",
    ],
    icon: BookOpenText,
  },
  {
    label: "Dosing",
    highlight: "Calculate",
    prompt: `Calculate`,
    items: [
      "Calculate pediatric medication dosage for acetaminophen",
      "Calculate fluid requirements for dehydrated child",
      "Calculate appropriate antibiotic dose for strep throat",
      "Calculate nutritional needs for pediatric patient",
    ],
    icon: Code,
  },
  {
    label: "Development",
    highlight: "Assess",
    prompt: `Assess`,
    items: [
      "Assess developmental milestones for 18-month-old",
      "Assess growth patterns in pediatric patients",
      "Assess language development concerns",
      "Assess autism screening recommendations",
    ],
    icon: Lightbulb,
  },
  {
    label: "Emergency",
    highlight: "Manage",
    prompt: `Manage`,
    items: [
      "Manage pediatric anaphylaxis in emergency setting",
      "Manage status epilepticus in children",
      "Manage pediatric trauma assessment protocol",
      "Manage acute respiratory distress in infant",
    ],
    icon: Sparkle,
  },
  {
    label: "Prevention",
    highlight: "Prevent",
    prompt: `Prevent`,
    items: [
      "Prevent vaccine schedule recommendations",
      "Prevent common childhood injuries",
      "Prevent infectious disease spread in daycare",
      "Prevent nutritional deficiencies in children",
    ],
    icon: PaintBrush,
  },
  {
    label: "Guidelines",
    highlight: "Guidelines",
    prompt: `Guidelines`,
    items: [
      "Guidelines for well-child visits",
      "Guidelines for pediatric hypertension",
      "Guidelines for newborn screening",
      "Guidelines for pediatric mental health screening",
    ],
    icon: Notepad,
  },
]

export const SYSTEM_PROMPT_DEFAULT = `You are NelsonGPT, an AI-powered clinical companion for pediatricians. Your knowledge is based on Nelson Textbook of Pediatrics and evidence-based medical literature. Provide accurate, concise, and clinically relevant information for pediatric healthcare professionals. Always cite evidence when possible and maintain a professional, medical tone. Your answers should support clinical decision-making while emphasizing that you are a reference tool, not a replacement for professional medical judgment.`

export const MESSAGE_MAX_LENGTH = 10000