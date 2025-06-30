"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/logo.webp" alt="SynthLauncher Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              SynthLauncher
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="/waitlist" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Join Waitlist
            </Link>
            <Link href="/release" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Release
            </Link>
            <Link href="/commits" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Commits
            </Link>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              onClick={() =>
                window.open("https://github.com/SynthLauncher/SynthLauncher/releases/tag/v0.0.2", "_blank")
              }
            >
              Download Pre-Release
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/20">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link href="/waitlist" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Join Waitlist
              </Link>
              <Link href="/release" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Release
              </Link>
              <Link href="/commits" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Commits
              </Link>
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-fit"
                onClick={() =>
                  window.open("https://github.com/SynthLauncher/SynthLauncher/releases/tag/v0.0.2", "_blank")
                }
              >
                Download Pre-Release
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
