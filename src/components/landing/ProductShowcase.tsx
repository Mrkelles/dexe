
import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export function ProductShowcase() {

  return (
    <section className="py-24 bg-[#FAFAF9]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <Badge className="bg-[#F0A500]/10 text-[#F0A500] border-none rounded-full px-4 py-1 uppercase text-[10px] font-bold tracking-widest">
            Why It's Different
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-black text-[#1A1A1A] tracking-tight">The Dexe Secret</h2>
          <p className="text-lg text-[#6B6B6B] font-medium">
            Unlike regular dyes, Dexe works at the cuticle level to deposit color while nourishing your hair strands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="group space-y-8 bg-white p-10 rounded-[16px] border border-[#EBEBEB] transition-all hover:shadow-cardHover">
            <div className="aspect-square relative rounded-xl overflow-hidden bg-[#FAFAF9]">
              <Image 
                src="https://picsum.photos/seed/hair-nature/600/600"
                alt="Natural Ingredients"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint="natural hair ingredients"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-[#1A1A1A]">Herbal Nourishment</h3>
              <p className="text-[#F0A500] font-bold text-sm uppercase tracking-widest">Safe & Healthy</p>
              <ul className="space-y-3">
                {[
                  "Contains Noni extract for scalp health",
                  "Enriched with Ginseng for root strength",
                  "No Ammonia - no stinging or bad smells",
                  "Safe for frequent use on all hair types"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#6B6B6B] font-semibold text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F0A500]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group space-y-8 bg-white p-10 rounded-[16px] border border-[#EBEBEB] transition-all hover:shadow-cardHover">
            <div className="aspect-square relative rounded-xl overflow-hidden bg-[#FAFAF9]">
              <Image 
                src="https://picsum.photos/seed/hair-fast/600/600"
                alt="Quick Results"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint="fast hair results"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-[#1A1A1A]">Instant Transformation</h3>
              <p className="text-[#1A1A1A] font-bold text-sm uppercase tracking-widest opacity-60">Convenient</p>
              <ul className="space-y-3">
                {[
                  "Works in as little as 5 minutes",
                  "Easy as washing your hair in the shower",
                  "Stain-free formula for hands and scalp",
                  "Economical - 1 box lasts for months"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#6B6B6B] font-semibold text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1A1A1A] opacity-20" />
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
