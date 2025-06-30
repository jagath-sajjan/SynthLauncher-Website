"use client"

import { useState, useEffect } from "react"
import { GlowingCard } from "@/components/ui/glowing-card"
import { Badge } from "@/components/ui/badge"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GitCommit, User, Calendar, RefreshCw, ExternalLink, Clock, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GitHubCommit {
  sha: string
  commit: {
    author: {
      name: string
      email: string
      date: string
    }
    message: string
  }
  author: {
    login: string
    avatar_url: string
    html_url: string
  } | null
  html_url: string
  stats?: {
    additions: number
    deletions: number
    total: number
  }
  files?: Array<{
    filename: string
    status: string
    additions: number
    deletions: number
    changes: number
  }>
}

export default function CommitsPage() {
  const [commits, setCommits] = useState<GitHubCommit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const [nextRetryTime, setNextRetryTime] = useState<Date | null>(null)

  const fetchCommits = async (showRefreshing = false, isRetry = false) => {
    try {
      if (showRefreshing) setIsRefreshing(true)

      // Basic commits without detailed stats to reduce API calls
      const response = await fetch("https://api.github.com/repos/SynthLauncher/SynthLauncher/commits?per_page=20", {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Add cache control to help with rate limiting
          "Cache-Control": "public, max-age=300", // 5 minutes cache
        },
      })

      if (!response.ok) {
        if (response.status === 403) {
          // Rate limited - implement exponential backoff
          const retryAfter = response.headers.get("retry-after")
          const waitTime = retryAfter
            ? Number.parseInt(retryAfter) * 1000
            : Math.min(300000, Math.pow(2, retryCount) * 60000) // Max 5 minutes

          setNextRetryTime(new Date(Date.now() + waitTime))
          setRetryCount((prev) => prev + 1)

          throw new Error(`Rate limited. Please wait ${Math.ceil(waitTime / 60000)} minutes before trying again.`)
        }
        throw new Error(`GitHub API error: ${response.status}`)
      }

      const commitsData = await response.json()

      // Use basic commit data without fetching detailed stats to avoid additional API calls
      const processedCommits = commitsData.map((commit: GitHubCommit) => ({
        ...commit,
        // Don't fetch detailed stats to avoid rate limiting
        stats: null,
        files: null,
      }))

      setCommits(processedCommits)
      setLastUpdated(new Date())
      setError(null)
      setRetryCount(0) // Reset retry count on success
      setNextRetryTime(null)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch commits"
      setError(errorMessage)

      // If it's a rate limit error and not a manual retry, schedule automatic retry
      if (errorMessage.includes("Rate limited") && !isRetry) {
        const waitTime = Math.min(300000, Math.pow(2, retryCount) * 60000) // Max 5 minutes
        setTimeout(() => {
          fetchCommits(false, true)
        }, waitTime)
      }
    } finally {
      setLoading(false)
      if (showRefreshing) setIsRefreshing(false)
    }
  }

  useEffect(() => {
    fetchCommits()

    // Increase interval to 2 minutes to be more conservative with rate limits
    const interval = setInterval(() => {
      // Only auto-fetch if we're not currently rate limited
      if (!error || !error.includes("Rate limited")) {
        fetchCommits()
      }
    }, 120000) // 2 minutes

    return () => clearInterval(interval)
  }, [error])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (diffInSeconds < 60) return `${diffInSeconds}s ago`
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`

    return date.toLocaleDateString()
  }

  const getTimeUntilRetry = () => {
    if (!nextRetryTime) return ""
    const now = new Date()
    const diff = Math.max(0, nextRetryTime.getTime() - now.getTime())
    const minutes = Math.ceil(diff / 60000)
    return minutes > 0 ? `${minutes} minutes` : "now"
  }

  if (loading) {
    return (
      <>
        <AnimatedBackground />
        <div className="min-h-screen py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto" />
              <p className="text-slate-400">Loading commits...</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <AnimatedBackground />
        <div className="min-h-screen py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlowingCard glowColor="purple" className="p-8 text-center space-y-6">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-500/20 rounded-full">
                <AlertTriangle className="h-8 w-8 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Unable to Load Commits</h2>
              <div className="space-y-4">
                <p className="text-red-400">{error}</p>
                {error.includes("Rate limited") && nextRetryTime && (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <p className="text-yellow-400 text-sm">
                      <strong>Rate Limited:</strong> GitHub limits API requests to prevent abuse.
                      <br />
                      Automatic retry in: <strong>{getTimeUntilRetry()}</strong>
                    </p>
                  </div>
                )}
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 text-left">
                  <h3 className="text-white font-semibold mb-2">Why this happens:</h3>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• GitHub limits unauthenticated requests to 60 per hour</li>
                    <li>• Multiple users accessing this page share the same limit</li>
                    <li>• This is normal and will resolve automatically</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => fetchCommits(true)}
                  disabled={isRefreshing || (nextRetryTime && new Date() < nextRetryTime)}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                >
                  {isRefreshing ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Retrying...
                    </>
                  ) : (
                    "Try Again"
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://github.com/SynthLauncher/SynthLauncher/commits", "_blank")}
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </div>
            </GlowingCard>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-6 mb-12">
            <Badge variant="secondary" className="bg-slate-800/50 text-blue-300 border-slate-700/50">
              <GitCommit className="mr-2 h-4 w-4" />
              Live Development Feed
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Latest Commits
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Real-time development activity from the SynthLauncher repository. See what's being built right now.
            </p>

            {/* Refresh Info */}
            <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {lastUpdated && `Last updated: ${formatDate(lastUpdated.toISOString())}`}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => fetchCommits(true)}
                disabled={isRefreshing}
                className="text-slate-400 hover:text-white"
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
                Refresh
              </Button>
            </div>
          </div>

          {/* Commits List */}
          <div className="space-y-6">
            {commits.map((commit, index) => (
              <GlowingCard
                key={commit.sha}
                glowColor={index % 3 === 0 ? "blue" : index % 3 === 1 ? "purple" : "cyan"}
                className="p-6 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Commit Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      {commit.author?.avatar_url && (
                        <img
                          src={commit.author.avatar_url || "/placeholder.svg"}
                          alt={commit.author.login}
                          className="w-10 h-10 rounded-full border-2 border-slate-700/50"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold text-lg leading-tight mb-2">
                          {commit.commit.message.split("\n")[0]}
                        </h3>
                        {commit.commit.message.split("\n").length > 1 && (
                          <p className="text-slate-400 text-sm mb-3">
                            {commit.commit.message.split("\n").slice(1).join("\n").trim()}
                          </p>
                        )}
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {commit.author?.login || commit.commit.author.name}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(commit.commit.author.date)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href={commit.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>

                  {/* Commit SHA */}
                  <div className="pt-2 border-t border-slate-700/50">
                    <code className="text-xs text-slate-500 font-mono">{commit.sha.substring(0, 7)}</code>
                  </div>
                </div>
              </GlowingCard>
            ))}
          </div>

          {/* Footer Info */}
          <div className="text-center mt-12 text-slate-400 text-sm space-y-2">
            <p>Showing latest 20 commits • Updates every 2 minutes</p>
            <p>
              <a
                href="https://github.com/SynthLauncher/SynthLauncher/commits"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View all commits on GitHub →
              </a>
            </p>
            <p className="text-xs text-slate-500">
              Rate limited? This is normal - GitHub limits API requests to prevent abuse.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
