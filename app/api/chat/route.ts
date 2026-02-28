import { auth } from "@/auth"
import { google } from "@ai-sdk/google"
import { streamText } from "ai"

export const runtime = 'edge'

export async function POST(req: Request) {
  const session = await auth()

  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 })
  }

  const { messages } = await req.json()

  const result = streamText({
    model: google('gemini-2.0-flash-exp'),
    messages,
    system: `You are a Novel Writing Assistant specialized in the Coherence Protocol.

Your role is to help writers maintain narrative coherence using:
- The Story.ncp.json ontology for world state tracking
- TSDP (Theory of Structural Dissociation) for character depth
- A2UI (Agent-to-User Interface) declarative tool calling

When analyzing narrative elements:
1. Check temporal consistency
2. Validate character continuity
3. Detect relationship symmetry issues
4. Identify potential fissures (inconsistencies)

Use the five A2UI tools when appropriate:
- renderCoreWorld: Display world state
- displayEntityProfile: Show character details
- triggerFissureAlert: Alert inconsistencies
- renderDialogueSurface: Render dialogue interface
- invokeMoonshineLink: Special narrative connections

Respond with empathy and precision.`,
  })

  return result.toDataStreamResponse()
}
