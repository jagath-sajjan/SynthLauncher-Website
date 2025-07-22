"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Rocket, Bell } from "lucide-react"
import Link from "next/link"

export default function ReleasePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const milestones = [
    {
      date: "December 2024",
      title: "Pre-Release (Dev/Contributors)",
      description: "Early access for developers and contributors",
      status: "completed",
    },
    {
      date: "March 2025",
      title: "Alpha Testing",
      description: "Expanded testing with community feedback",
      status: "current",
    },
    {
      date: "June 2025",
      title: "Beta Release",
      description: "Public beta testing and final improvements",
      status: "upcoming",
    },
    {
      date: "TBD",
      title: "Official Launch",
      description: "Full public release for everyone",
      status: "upcoming",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "current":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
      case "upcoming":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  if (!mounted) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse text-slate-400">Loading...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-20">
          <Badge variant="secondary" className="bg-card text-primary-foreground border-border shadow-lg">
            <Rocket className="mr-2 h-4 w-4" />
            Official Launch Timeline
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold">
            <span className="text-foreground">The Official Launch is </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            While a pre-release is available for developers and contributors, the official public launch date will be
            announced soon. Get ready for the most advanced Minecraft launcher ever created.
          </p>
          <div className="bg-card/80 border border-border rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              <strong className="text-cyan-400">Note:</strong> A pre-release version is currently available for
              developers and contributors. The official launch date will be announced when ready.
            </p>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="bg-card/90 border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-foreground flex items-center justify-center gap-2">
                <Clock className="h-8 w-8 text-cyan-400" />
                Launch Date To Be Announced
              </CardTitle>
              <p className="text-muted-foreground mt-2">Official release date coming soon</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="space-y-2">
                  <div className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    XX
                  </div>
                  <div className="text-muted-foreground uppercase tracking-wide">Days</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    XX
                  </div>
                  <div className="text-muted-foreground uppercase tracking-wide">Hours</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    XX
                  </div>
                  <div className="text-gray-400 uppercase tracking-wide">Minutes</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    XX
                  </div>
                  <div className="text-gray-400 uppercase tracking-wide">Seconds</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Release Timeline */}
        <div className="space-y-8 mb-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Release Timeline</h2>
            <p className="text-xl text-gray-300">Track our journey to the official public launch</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-800/50 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <Badge className={getStatusColor(milestone.status)}>
                          <Calendar className="mr-2 h-4 w-4" />
                          {milestone.date}
                        </Badge>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>
                      <div className="flex-shrink-0">
                        {milestone.status === "completed" && (
                          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-green-400" />
                          </div>
                        )}
                        {milestone.status === "current" && (
                          <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse" />
                          </div>
                        )}
                        {milestone.status === "upcoming" && (
                          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-purple-400" />
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Launch Day Features */}
        <div className="space-y-8 mb-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">What to Expect on Launch Day</h2>
            <p className="text-xl text-gray-300">Everything will be ready for the public release</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-900/50 border-slate-800/50">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Public Release</h3>
                <p className="text-gray-400">Full public release available for everyone to download</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800/50">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Bell className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Launch Notifications</h3>
                <p className="text-gray-400">Get notified the moment the official version goes live</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800/50">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Complete Documentation</h3>
                <p className="text-gray-400">Full user guides and documentation will be available</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white">Don't Miss the Official Launch</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our waitlist to be the first to know when the official public version of SynthLauncher is available
              for download.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
              asChild
            >
              <Link href="/waitlist">
                <Bell className="mr-2 h-5 w-5" />
                Get Launch Notification
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 bg-transparent"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
