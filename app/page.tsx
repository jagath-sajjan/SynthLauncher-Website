"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { GlowingCard } from "@/components/ui/glowing-card"
import { GlowingButton } from "@/components/ui/glowing-button"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Zap, Shield, Code, Users, Monitor, Palette, Gauge } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-400" />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance",
      color: "blue" as const,
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      title: "Secure by Default",
      description: "Enterprise-grade security built-in",
      color: "purple" as const,
    },
    {
      icon: <Code className="h-6 w-6 text-cyan-400" />,
      title: "Developer Friendly",
      description: "Very customizable UI and functions",
      color: "cyan" as const,
    },
    {
      icon: <Users className="h-6 w-6 text-blue-400" />,
      title: "Multiplayer",
      description: "Play with your friends",
      color: "blue" as const,
    },
    {
      icon: <Monitor className="h-6 w-6 text-purple-400" />,
      title: "Responsive Design",
      description: "Perfectly adapts to any screen size",
      color: "purple" as const,
    },
    {
      icon: <Palette className="h-6 w-6 text-cyan-400" />,
      title: "Customizable Themes",
      description: "Easily match your brand identity",
      color: "cyan" as const,
    },
    {
      icon: <Gauge className="h-6 w-6 text-blue-400" />,
      title: "Performance Optimized",
      description: "Blazing fast load times",
      color: "blue" as const,
    },
  ]

  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen relative">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge
                    variant="secondary"
                    className="bg-card text-primary-foreground border-border shadow-lg"
                  >
                    Pre-Release Available
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    <span className="text-foreground">Secure and modern</span>
                    <br />
                    <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
                      Minecraft Launcher
                    </span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                    A secure, modern Minecraft launcher with a sleek interface. Open-source, free, and built for the
                    next generation of players.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <GlowingButton
                    variant="primary"
                    onClick={() =>
                      window.open("https://github.com/SynthLauncher/SynthLauncher/releases/tag/v0.0.2", "_blank")
                    }
                    className="px-8"
                  >
                    Download
                  </GlowingButton>
                  <GlowingButton
                    variant="secondary"
                    onClick={() => window.open("https://discord.gg/synthlauncher", "_blank")}
                    className="px-8"
                  >
                    Get Started
                  </GlowingButton>
                </div>

                <p className="text-sm text-muted-foreground">Supported on Windows, Linux, and macOS</p>
              </div>

              <div className="relative lg:ml-4 xl:ml-8 w-full max-w-4xl mx-auto lg:mx-0">
                {/* Enhanced background effects */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 blur-3xl rounded-3xl animate-pulse" />
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl" />

                {/* Main container with glow */}
                <GlowingCard glowColor="blue" className="overflow-hidden">
                  {/* Top bar to simulate window */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-card/80 border-b border-border">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive/80 shadow-lg shadow-destructive/50" />
                      <div className="w-3 h-3 rounded-full bg-accent/80 shadow-lg shadow-accent/50" />
                      <div className="w-3 h-3 rounded-full bg-primary/80 shadow-lg shadow-primary/50" />
                    </div>
                    <div className="flex-1 text-center">
                    <span className="text-xs text-muted-foreground font-medium">SynthLauncher v0.0.2</span>
                    </div>
                  </div>

                  {/* Image container */}
                  <div className="relative">
                    <Image
                      src="/images/launcher-interface-new.jpeg"
                      alt="SynthLauncher Interface showing Modrinth modpack browser"
                      width={800}
                      height={500}
                      className="w-full h-auto"
                      priority
                    />

                    {/* Enhanced overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/5 to-cyan-500/0 hover:from-blue-500/10 hover:via-purple-500/10 hover:to-cyan-500/10 transition-all duration-500 pointer-events-none" />
                  </div>

                  {/* Bottom status bar */}
                  <div className="px-4 py-2 bg-card/60 border-t border-border">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
                        Connected to Modrinth
                      </span>
                      <span>Rust • Secure • Fast</span>
                    </div>
                  </div>
                </GlowingCard>

                {/* Enhanced floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse shadow-2xl shadow-blue-500/20" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl shadow-2xl shadow-purple-500/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Powerful Features</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to start your Minecraft journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <GlowingCard
                  key={index}
                  glowColor={feature.color}
                  className="p-6 space-y-4 hover:scale-105 transition-transform duration-300 bg-card border border-border"
                >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-card/80 border border-border shadow-lg">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </GlowingCard>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold">
                <span className="text-foreground">Why Choose </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  SynthLauncher
                </span>
                <span className="text-foreground">?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">The next generation launcher</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <GlowingCard glowColor="cyan" className="p-8 space-y-4 hover:scale-105 transition-transform duration-300 bg-card border border-border">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-card/80 border border-border shadow-lg">
                  <Monitor className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Responsive Design</h3>
                <p className="text-muted-foreground">Perfectly adapts to any screen size</p>
              </GlowingCard>

              <GlowingCard
                glowColor="purple"
                className="p-8 space-y-4 hover:scale-105 transition-transform duration-300 bg-card border border-border"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-card/80 border border-border shadow-lg">
                  <Palette className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Customizable Themes</h3>
                <p className="text-muted-foreground">Easily match your brand identity</p>
              </GlowingCard>

              <GlowingCard glowColor="blue" className="p-8 space-y-4 hover:scale-105 transition-transform duration-300 bg-card border border-border">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-card/80 border border-border shadow-lg">
                  <Gauge className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Performance Optimized</h3>
                <p className="text-muted-foreground">Blazing fast load times</p>
              </GlowingCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Ready to Experience the Future?</h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of players who have already made the switch to SynthLauncher.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlowingButton variant="primary" className="px-8">
                  <Link href="/waitlist">Join Waitlist</Link>
                </GlowingButton>
                <GlowingButton variant="secondary" className="px-8">
                  <Link href="/waitlist">Learn More</Link>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
