"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X, AlertTriangle, MessageCircle, Loader2 } from "lucide-react"
import { submitWaitlistEmail } from "@/app/actions/waitlist"

export default function WaitlistPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccessMessage("")

    const formData = new FormData()
    formData.append("email", email)

    try {
      const result = await submitWaitlistEmail(formData)

      if (result.success) {
        setIsSubmitted(true)
        setSuccessMessage(result.message || "Successfully added to waitlist")
        setEmail("")
      } else {
        setError(result.error || "Failed to add email to waitlist")
      }
    } catch (error) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const comparisonData = [
    {
      feature: "Open Source",
      synthLauncher: { status: "check", text: "Fully open-source, transparent" },
      skLauncher: { status: "x", text: "Closed core, community clients only" },
      prismLauncher: { status: "check", text: "Fully open-source, GPL-3" },
    },
    {
      feature: "UI Customization",
      synthLauncher: { status: "check", text: "Fully customizable UI & themes" },
      skLauncher: { status: "x", text: "Fixed UI, no theming" },
      prismLauncher: { status: "check", text: "Custom themes & menu layouts" },
    },
    {
      feature: "Modpack Support",
      synthLauncher: { status: "check", text: "One-click installs: CurseForge, Modrinth, FTB" },
      skLauncher: { status: "warning", text: "Basic modpacks; often fails/crashes" },
      prismLauncher: { status: "check", text: "Seamless CurseForge & Modrinth support" },
    },
    {
      feature: "Loader Support",
      synthLauncher: { status: "check", text: "Built-in Forge, Fabric, Quilt + auto dependencies" },
      skLauncher: { status: "check", text: "Has loader support, but unreliable" },
      prismLauncher: { status: "check", text: "Built-in loader installer for Forge/Fabric/Quilt" },
    },
    {
      feature: "Speed & Performance",
      synthLauncher: { status: "check", text: "Instant launch & downloads" },
      skLauncher: { status: "warning", text: "Moderate speed; laggy downloads & startup" },
      prismLauncher: { status: "check", text: "Fast & lightweight, minimal bloat" },
    },
    {
      feature: "Stability",
      synthLauncher: { status: "check", text: "Designed for reliability" },
      skLauncher: { status: "warning", text: "Frequent modpack crashes" },
      prismLauncher: { status: "warning", text: "Some users report FPS loss vs default launcher" },
    },
    {
      feature: "Security & Trust",
      synthLauncher: { status: "check", text: "Transparent Rust codebase" },
      skLauncher: { status: "warning", text: "Reports of corrupted downloads & crash bugs" },
      prismLauncher: { status: "check", text: "Auditable code, no red flags" },
    },
    {
      feature: "Resource Usage",
      synthLauncher: { status: "check", text: "Minimal Rust binary, low RAM usage" },
      skLauncher: { status: "warning", text: "Moderate JavaFX overhead" },
      prismLauncher: { status: "check", text: "Lightweight Qt-based (no Electron)" },
    },
    {
      feature: "Platform Support",
      synthLauncher: { status: "check", text: "Cross-platform: Win/Mac/Linux/ARM" },
      skLauncher: { status: "warning", text: "Windows/Linux/macOS, but issues across platforms" },
      prismLauncher: { status: "check", text: "Win/Mac/Linux/Steam Deck native" },
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "check":
        return <Check className="h-4 w-4 text-green-400" />
      case "x":
        return <X className="h-4 w-4 text-red-400" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-400" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "check":
        return "text-green-400"
      case "x":
        return "text-red-400"
      case "warning":
        return "text-yellow-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="min-h-screen py-20 gradient-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-20">
          <Badge variant="outline" className="glass-card text-primary animate-float px-4 py-2 text-lg animate-glow">
            Early Access
          </Badge>
          <h1 className="text-4xl lg:text-7xl font-bold tracking-tight">
            <span className="gradient-text">
              Join the Revolution
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto glass-card p-6 rounded-lg">
            Be among the first to experience the future of Minecraft launchers. Join 130+ players already on the
            waitlist for early access and exclusive updates.
          </p>
        </div>

        {/* Waitlist Form */}
        <div className="max-w-md mx-auto mb-20">
          <Card className="glass-card animate-glow">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold gradient-text">
                Join the Waitlist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="glass-input"
                  />

                  {error && (
                    <div className="text-destructive text-sm text-center bg-destructive/10 border border-destructive/20 rounded p-2">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 animate-glow"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Adding to Waitlist...
                      </>
                    ) : (
                      "Join Waitlist"
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                    <Check className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">You're In</h3>
                  <p className="text-gray-300">{successMessage}</p>
                  <Button
                    variant="outline"
                    className="border-border text-muted-foreground hover:bg-muted bg-transparent"
                    onClick={() => {
                      setIsSubmitted(false)
                      setSuccessMessage("")
                      setError("")
                    }}
                  >
                    Add Another Email
                  </Button>
                </div>
              )}

              <div className="text-center">
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                  onClick={() => window.open("https://discord.gg/synthlauncher", "_blank")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Join Discord Server
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold gradient-text">SynthLauncher vs SKLauncher vs Prism Launcher</h2>
            <p className="text-xl text-muted-foreground">See why SynthLauncher is the superior choice</p>
          </div>

          <Card className="glass-card minimal-scroll">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                    <TableHead className="text-foreground font-bold text-lg">Feature</TableHead>
                    <TableHead className="text-primary font-bold text-lg">SynthLauncher</TableHead>
                    <TableHead className="text-accent font-bold text-lg">SKLauncher</TableHead>
                    <TableHead className="gradient-text font-bold text-lg">
                      Prism Launcher
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow key={index} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                      <TableCell className="font-semibold text-foreground">{row.feature}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0">{getStatusIcon(row.synthLauncher.status)}</div>
                          <span className={`${getStatusColor(row.synthLauncher.status)} font-medium`}>{row.synthLauncher.text}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0">{getStatusIcon(row.skLauncher.status)}</div>
                          <span className={getStatusColor(row.skLauncher.status)}>{row.skLauncher.text}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0">{getStatusIcon(row.prismLauncher.status)}</div>
                          <span className={getStatusColor(row.prismLauncher.status)}>{row.prismLauncher.text}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">
              Ready to make the switch?
            </h3>
            <p className="text-muted-foreground text-lg">
              Join thousands of players who are waiting for the next generation launcher.
            </p>
            <Button
              variant="default"
              className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 animate-float animate-glow"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Join Waitlist Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
