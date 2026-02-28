"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Header() {
  const scrollToOrder = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-brand-coral" />
          <span className="text-xl font-black tracking-tighter uppercase">Sadoer Youth</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-medium hover:text-brand-coral transition-colors">Benefits</button>
          <button onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-medium hover:text-brand-coral transition-colors">Reviews</button>
          <button onClick={() => document.getElementById('how-to-use')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-medium hover:text-brand-coral transition-colors">How to Use</button>
        </div>

        <div className="flex items-center gap-4">
          <Badge variant="outline" className="hidden sm:flex border-brand-red text-brand-red animate-pulse-subtle">
            Limited Discount
          </Badge>
          <Button 
            onClick={scrollToOrder}
            className="rounded-full bg-brand-red hover:bg-brand-red/90 text-white font-bold px-6 shadow-lg shadow-brand-red/20"
          >
            ORDER NOW
          </Button>
        </div>
      </div>
    </header>
  )
}
