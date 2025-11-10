export function AppInfoContent() {
  return (
    <div className="space-y-4">
      <p className="text-foreground leading-relaxed">
        <span className="font-medium">NelsonGPT</span> is the AI-powered clinical companion for pediatricians.
        <br />
        Built on RAG architecture with the Nelson Textbook of Pediatrics.
        <br />
        Clinical Mode for quick answers, Academic Mode for detailed explanations.
        <br />
      </p>
      <p className="text-foreground leading-relaxed">
        The code is available on{" "}
        <a
          href="https://github.com/your-repo/nelsongpt"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  )
}
