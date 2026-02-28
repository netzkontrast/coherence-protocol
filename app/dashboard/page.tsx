'use client'

import { useSession, signOut } from "next-auth/react"
import { useChat } from "ai/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  })

  if (status === 'loading') {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-muted-foreground">Loading...</div>
      </main>
    )
  }

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <main className="min-h-screen coherence-spacing">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-trauma">Novel Writing Assistant</h1>
            <p className="text-muted-foreground mt-2">
              Powered by Gemini AI · {session.user?.email}
            </p>
          </div>
          <Button onClick={() => signOut()} variant="outline">
            Sign Out
          </Button>
        </div>

        {/* Chat Interface */}
        <Card className="min-h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl text-steel">Coherence Protocol Chat</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto mb-4">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground py-12">
                  <p className="text-lg mb-2">Welcome to the Coherence Protocol</p>
                  <p className="text-sm">Ask me anything about your narrative world</p>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-trauma/10 ml-12 text-trauma'
                      : 'bg-hope/10 mr-12 text-steel'
                  }`}
                >
                  <div className="font-semibold mb-1 text-xs uppercase tracking-wide opacity-70">
                    {message.role === 'user' ? 'You' : 'Assistant'}
                  </div>
                  <div className="whitespace-pre-wrap">{message.content}</div>
                </div>
              ))}

              {isLoading && (
                <div className="bg-hope/10 mr-12 p-4 rounded-lg text-steel">
                  <div className="font-semibold mb-1 text-xs uppercase tracking-wide opacity-70">
                    Assistant
                  </div>
                  <div className="animate-pulse">Thinking...</div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Describe your narrative challenge..."
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-trauma"
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading} size="lg">
                Send
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm text-muted-foreground">AI Model</div>
              <div className="text-lg font-semibold text-trauma">Gemini 2.0 Flash</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm text-muted-foreground">Authentication</div>
              <div className="text-lg font-semibold text-hope">Google OAuth</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm text-muted-foreground">Protocol</div>
              <div className="text-lg font-semibold text-steel">A2UI + TSDP</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
