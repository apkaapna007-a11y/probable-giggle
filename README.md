# NelsonGPT

[nelsongpt.chat](https://nelsongpt.chat)

**NelsonGPT** is the AI-powered clinical companion for pediatricians, built on RAG (Retrieval-Augmented Generation) architecture with the Nelson Textbook of Pediatrics.

![nelsongpt cover](./public/cover_nelsongpt.jpg)

## Features

- 🩺 Clinical Mode: Quick, concise answers for bedside decisions
- 📚 Academic Mode: Detailed explanations with evidence-based citations
- 🔐 Secure authentication via Supabase
- 🎨 Customizable UI (dark/light mode, font size)
- 🚀 Built with Next.js, TypeScript, Tailwind CSS
- 📖 Powered by Nelson Textbook of Pediatrics knowledge base
- 🤖 Mistral AI for reasoning and responses
- 📊 RAG architecture for evidence-based answers

## Quick Start

### Option 1: Local Development

```bash
git clone https://github.com/ibelick/zola.git
cd nelsongpt
npm install
echo "MISTRAL_API_KEY=your-key" > .env.local
npm run dev
```

### Option 2: Docker

```bash
git clone https://github.com/ibelick/zola.git
cd nelsongpt
docker build -t nelsongpt .
docker run -p 3000:3000 nelsongpt
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/nelsongpt)

To unlock features like auth, file uploads, see [INSTALL.md](./INSTALL.md).

## Built with

- [Next.js](https://nextjs.org/) — React framework
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [shadcn/ui](https://ui.shadcn.com) — UI components
- [Mistral AI](https://mistral.ai/) — AI reasoning
- [Supabase](https://supabase.com) — Auth and vector database
- [Vercel AI SDK](https://vercel.com/blog/introducing-the-vercel-ai-sdk) — Streaming responses

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# App Configuration
NEXT_PUBLIC_APP_NAME=NelsonGPT
NEXT_PUBLIC_APP_DESCRIPTION=Smart Pediatric AI Assistant

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE=your_supabase_service_role_key

# AI Model API Keys
MISTRAL_API_KEY=your_mistral_api_key
```

## License

Apache License 2.0

## Notes

This is a specialized medical AI assistant. The system provides clinical decision support and should be used as a reference tool alongside professional medical judgment.
