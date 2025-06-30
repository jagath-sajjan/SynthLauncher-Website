import Link from "next/link"
import Image from "next/image"
import { Github, MessageCircle, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-950/80 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/images/logo.webp" alt="SynthLauncher Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                SynthLauncher
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs">Modern, Open-Source, Free Minecraft Launcher For Everyone</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/SynthLauncher/SynthLauncher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/synthlauncher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/SynthLauncher/SynthLauncher/releases/tag/v0.0.2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Download
                </a>
              </li>
              <li>
                <Link href="/release" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Release Timeline
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/SynthLauncher/SynthLauncher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/synthlauncher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/synthlauncher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/waitlist" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Join Waitlist
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/SynthLauncher/SynthLauncher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Open Source
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2025 SynthLauncher ORG. All rights reserved.</p>
          <p className="text-slate-400 text-sm flex items-center mt-4 sm:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by SynthLauncher Team
          </p>
        </div>
      </div>
    </footer>
  )
}
