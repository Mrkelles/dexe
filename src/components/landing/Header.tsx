"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Header() {
  const scrollToOrder = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1A1A1A] bg-black/90 backdrop-blur-md shadow-nav h-14">
      <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-[#22C55E]" />
          <span className="text-base font-bold tracking-tight text-white">DEXE INSTANT BLACK</span>
        </div>
        
        <div className="hidden md:flex items-center gap-2">
          <button 
            onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })} 
            className="text-[13px] font-medium px-4 py-2 text-muted-foreground hover:bg-[#1A1A1A] hover:text-white rounded-full transition-colors"
          >
            Benefits
          </button>
          <button 
            onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })} 
            className="text-[13px] font-medium px-4 py-2 text-muted-foreground hover:bg-[#1A1A1A] hover:text-white rounded-full transition-colors"
          >
            Reviews
          </button>
          <button 
            onClick={() => document.getElementById('how-to-use')?.scrollIntoView({ behavior: 'smooth' })} 
            className="text-[13px] font-medium px-4 py-2 text-muted-foreground hover:bg-[#1A1A1A] hover:text-white rounded-full transition-colors"
          >
            Usage
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Badge variant="outline" className="hidden sm:flex border-[#22C55E] text-[#22C55E] bg-[#22C55E]/5 rounded-full px-3 py-0.5 text-[10px] font-bold">
            Limited Promo
          </Badge>
          <Button 
            onClick={scrollToOrder}
            className="rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold h-9 px-6 text-[13px] shadow-none transition-all hover:scale-105"
          >
            ORDER NOW
          </Button>
        </div>
      </div>
    </header>
  )
}