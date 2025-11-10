# I’ve linked  the open-source repository “Zola” (https://github.com/ibelick/zola.git). 
I want you to modify this project to create a new AI chat webapp called **NelsonGPT**.Nelson-GPT is a specialized AI-powered clinical companion designed for pediatricians, built on a RAG (Retrieval-Augmented Generation) architecture. Instead of being just another chatbot, it’s like having the Nelson Textbook of Pediatrics sitting on your shoulder, whispering the latest evidence-based answers—without the 3 kg backache.


---

🩺 Core Idea

Acts as a real-time pediatric support system for clinical decision-making.

Uses LangChain + LangGraph pipelines with Supabase vector DB to fetch precise, structured information from Nelson’s textbook index.

Reasoning handled by Mistral API (with optional extension to other frontier models).



---


🧠 Features

Context-aware answers → cites Nelson textbook sections as evidence.

Clinical mode switch → quick toggling between concise “on-the-go” answers and detailed academic explanations.

Customizable settings → font size, dark/light mode, privacy 


---

🚀 Why It’s Different

Unlike generic AI assistants, Nelson-GPT is laser-focused on pediatrics.

Unlike static reference apps, it’s dynamic, interactive, and citation-backed.

Unlike textbooks, it doesn’t require flipping through 1000+ pages while the nurse waits.



---

Think of it as:
👨‍⚕️ Dr. Nelson wrote the book.
🤖 Nelson-GPT carries it in its silicon brain.



Here are the requirements:

1. **General goal**
   - Keep the entire Zola UI/UX and frontend structure: chat interface, sidebar/menubar, settings, and authentication flow.
   - Rebrand everything from “Zola” to **“NelsonGPT”** (names, titles, metadata, etc.).
   - The app should look and function like Zola, but be powered by my own backend instead of Morphic’s AI/search integration.

2. **Branding changes**
   - Replace all instances of the name “Zola” in code and UI with “NelsonGPT” subtitle Smart Pediatric Assistant.
   - Update app metadata, favicon, and logo (you can use a placeholder logo called “nelson-logo.png” in the `/public` folder).
   - Change `NEXT_PUBLIC_APP_NAME` and related environment variables accordingly.

3. **Backend/API**
   - Remove or disable existing multi-provider AI logic (OpenAI, Anthropic, Tavily, etc.).
Replace model selecter toggle in chatbar with Academic and clinical modes 
   - Instead, connect the chat interface to a mistral api key 
    
   - The API should return standard ChatGPT-like responses that the frontend displays.

4. **Authentication**
   - Keep Supabase authentication for login/sign-up/logout.
   - Update `.env.local.example` to include new variables like:
     - `NELSON_API_KEY=`
     - `NEXT_PUBLIC_APP_NAME=NelsonGPT`
     - `SUPABASE_URL=`
     - `SUPABASE_ANON_KEY=`

5. **Frontend adjustments**
 
   - Ensure that chat messages, inputs, and history still function.
  

6. **Deployment**
  
   - Keep compatibility for Vercel deployment.
   - Update `package.json` name and description to reflect NelsonGPT.

Deliverables:
- A working NelsonGPT version of the app that runs locally.
- All references to “Zola” replaced.
- Supabase auth still functional.

In short: reuse zola’s elegant frontend, rebrand it to NelsonGPT, and connect it to my custom chat API.
