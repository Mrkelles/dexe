import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export function ProductShowcase() {

  return (
    <section className="py-24 bg-brand-warmGrey">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <Badge className="bg-brand-amber/10 text-brand-amber border-none rounded-full px-4 py-1 uppercase text-[10px] font-bold tracking-widest">
            The Dynamic Duo
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-black text-brand-dark tracking-tight">Why You Need Both</h2>
          <p className="text-lg text-secondary-foreground font-medium">
            For fast and long-lasting results, your skin needs both the deep treatment (serum) and the daily protection (cream).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Serum Section */}
          <div className="group space-y-8 bg-white p-10 rounded-card border border-border transition-all hover:shadow-cardHover">
            <div className="aspect-square relative rounded-xl overflow-hidden bg-brand-warmGrey/50">
              <Image 
                src="https://i.ibb.co/yM2Jzwk/IMG-20250222-WA0008-1-1024x1024-removebg-preview.png"
                alt="Anti-Aging Serum"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint="Anti-Aging Serum"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-brand-dark">Anti-Aging Collagen Serum</h3>
              <p className="text-brand-amber font-bold text-sm uppercase tracking-widest">Deep Treatment</p>
              <ul className="space-y-3">
                {[
                  "Firm sagging areas & smooth out rough spots",
                  "Clear wrinkles and fine lines at the root",
                  "Clear dark spots, sunburn & even out skin tone",
                  "Clears every form of pimples and acne scars"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-secondary-foreground font-semibold text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cream Section */}
          <div className="group space-y-8 bg-white p-10 rounded-card border border-border transition-all hover:shadow-cardHover">
            <div className="aspect-square relative rounded-xl overflow-hidden bg-brand-warmGrey/50">
              <Image 
                src="https://i.ibb.co/6RC0cCxb/Screenshot-20250419-113017-Ali-Express-1024x1012-removebg-preview.png"
                alt="Collagen Face Cream"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint="Collagen Face Cream"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-brand-dark">Collagen Face Cream</h3>
              <p className="text-brand-dark font-bold text-sm uppercase tracking-widest opacity-60">Daily Protection</p>
              <ul className="space-y-3">
                {[
                  "Lock in hydration all day for a soft glow",
                  "Seal in the serum's work so you don't lose progress",
                  "Protect skin from sun and dryness that cause aging",
                  "Keep skin smooth and glowing without irritation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-secondary-foreground font-semibold text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-dark opacity-20" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}