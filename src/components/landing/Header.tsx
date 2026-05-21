
"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Header() {
  const scrollToOrder = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#EBEBEB] bg-white shadow-nav h-14">
      <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-[#F0A500]" />
          <span className="text-base font-bold tracking-tight text-[#1A1A1A]">DEXE INSTANT BLACK</span>
        </div>
        
        <div className="hidden md:flex items-center gap-2">
          <button 
            onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })} 
            className="text-[13px] font-medium px-4 py-2 text-[#8A8A8A] hover:bg-[#F2F1EE] hover:text-[#1A1A1A] rounded-full transition-colors"
          >
            Benefits
          </button>
          <button 
            onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })} 
            className="text-[13px] font-medium px-4 py-2 text-[#8A8A8A] hover:bg-[#F2F1EE] hover:text-[#1A1A1A] rounded-full transition-colors"
          >
            Reviews
          </button>
          <button 
            onClick={() => document.getElementById('how-to-use')?.scrollIntoView({ behavior: 'smooth' })} 
            className="text-[13px] font-medium px-4 py-2 text-[#8A8A8A] hover:bg-[#F2F1EE] hover:text-[#1A1A1A] rounded-full transition-colors"
          >
            Usage
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Badge variant="outline" className="hidden sm:flex border-[#F0A500] text-[#F0A500] bg-[#F0A500]/5 rounded-full px-3 py-0.5 text-[10px] font-bold">
            Limited Promo
          </Badge>
          <Button 
            onClick={scrollToOrder}
            className="rounded-full bg-[#F0A500] hover:bg-[#C88000] text-white font-bold h-9 px-6 text-[13px] shadow-none transition-all hover:scale-105"
          >
            ORDER NOW
          </Button>
        </div>
      </div>
    </header>
  )
}
