import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlowingCardProps {
  children: ReactNode
  className?: string
  glowColor?: "blue" | "purple" | "cyan"
}

export function GlowingCard({ children, className, glowColor = "blue" }: GlowingCardProps) {
  const glowColors = {
    blue: "shadow-blue-500/25 border-blue-500/20 hover:shadow-blue-500/40 hover:border-blue-500/40",
    purple: "shadow-purple-500/25 border-purple-500/20 hover:shadow-purple-500/40 hover:border-purple-500/40",
    cyan: "shadow-cyan-500/25 border-cyan-500/20 hover:shadow-cyan-500/40 hover:border-cyan-500/40",
  }

  return (
    <div
      className={cn(
        "relative rounded-xl border bg-slate-900/50 backdrop-blur-sm transition-all duration-300",
        "shadow-2xl hover:shadow-2xl",
        glowColors[glowColor],
        className,
      )}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      {children}
    </div>
  )
}
