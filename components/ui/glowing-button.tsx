"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlowingButtonProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary"
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit"
}

export function GlowingButton({
  children,
  className,
  variant = "primary",
  onClick,
  disabled,
  type = "button",
}: GlowingButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:shadow-2xl",
    secondary:
      "border border-cyan-400/50 bg-slate-800/50 hover:bg-cyan-500/20 text-cyan-300 hover:text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:border-cyan-400/80",
  }

  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative overflow-hidden transition-all duration-300 transform hover:scale-105 text-white font-medium",
        "border-0 shadow-2xl backdrop-blur-sm",
        variants[variant],
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />
      {children}
    </Button>
  )
}
