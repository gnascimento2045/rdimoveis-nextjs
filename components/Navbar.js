'use client'

import Link from 'next/link'
import { Home, Building2, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-rd-blue" />
            <div>
              <h1 className="text-2xl font-bold text-rd-blue">RD IMÓVEIS DF</h1>
              <p className="text-xs text-gray-600 tracking-wide">Idealize! Sonhe! Realize!</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-rd-blue transition-colors">
              <Home className="h-5 w-5" />
              <span className="font-medium">Início</span>
            </Link>
            <Link href="/properties" className="flex items-center space-x-2 text-gray-700 hover:text-rd-blue transition-colors">
              <Building2 className="h-5 w-5" />
              <span className="font-medium">Imóveis</span>
            </Link>
            <a
              href="https://wa.me/5561993336757"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rd-blue hover:bg-rd-blue-hover text-white rounded-full px-6 py-2 font-semibold shadow-lg transition-colors flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Contato</span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}