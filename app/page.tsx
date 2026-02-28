import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen coherence-spacing">
      <div className="max-w-4xl mx-auto coherence-gap">
        <header className="text-center space-y-4">
          <h1 className="text-6xl font-bold text-trauma">
            Coherence Protocol
          </h1>
          <p className="text-xl text-muted-foreground">
            AI-driven narrative coherence system powered by Google Gemini
          </p>
        </header>

        <div className="pen-stroke-border bg-card p-8 space-y-6 text-trauma">
          <h2 className="text-3xl font-semibold">Welcome</h2>
          <p className="text-lg leading-relaxed">
            The Coherence Protocol is an AI-powered system for maintaining 
            narrative coherence in complex fiction writing, now powered by 
            Google's Gemini 2.0 Flash with OAuth authentication.
          </p>

          <div className="pt-4">
            <Link href="/auth/signin">
              <Button size="lg" className="w-full md:w-auto">
                Get Started with Google →
              </Button>
            </Link>
          </div>

          <div className="grid gap-4 mt-8">
            <div className="pen-stroke-border bg-hope/10 p-6 text-hope">
              <h3 className="font-semibold text-lg mb-2">Gemini 2.0 Flash</h3>
              <p className="text-sm">
                Powered by Google's latest multimodal AI with OAuth integration
              </p>
            </div>
            <div className="pen-stroke-border bg-crystal/10 p-6 text-steel">
              <h3 className="font-semibold text-lg mb-2">Narrative Ontology</h3>
              <p className="text-sm">
                Structured world-building with Story.ncp.json
              </p>
            </div>
            <div className="pen-stroke-border bg-insight/10 p-6 text-nostalgia">
              <h3 className="font-semibold text-lg mb-2">TSDP Integration</h3>
              <p className="text-sm">
                Character depth via Theory of Structural Dissociation
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
