
import React from 'react'
import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { PromoBanner } from '@/components/landing/PromoBanner'
import { SideFeature } from '@/components/landing/SideFeature'
import { StoryFeature } from '@/components/landing/StoryFeature'
import { ProblemSolution } from '@/components/landing/ProblemSolution'
import { ProductShowcase } from '@/components/landing/ProductShowcase'
import { TestimonialSlider } from '@/components/landing/TestimonialSlider'
import { ReviewGrid } from '@/components/landing/ReviewGrid'
import { UsageGuide } from '@/components/landing/UsageGuide'
import { OrderForm } from '@/components/landing/OrderForm'
import { BeforeAfter } from '@/components/landing/BeforeAfter'
import { ResultFocus } from '@/components/landing/ResultFocus'
import { GlobalTrust } from '@/components/landing/GlobalTrust'
import { NaturalIngredients } from '@/components/landing/NaturalIngredients'
import { Toaster } from '@/components/ui/toaster'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <Hero />
      
      {/* Trust Banner */}
      <div className="bg-[#0A0A0A] py-12 border-y border-[#1A1A1A]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-8">Trusted by families in Lagos, Abuja, Ibadan & more</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale invert">
            {['Beauty Daily', 'Glow Mag', 'Health Hub', 'Nigeria Skincare'].map((name, i) => (
              <span key={i} className="text-xl font-black text-white">{name}</span>
            ))}
          </div>
        </div>
      </div>

      <StoryFeature />

      <BeforeAfter />

      <PromoBanner />

      <ProblemSolution />

      <GlobalTrust />

      <ReviewGrid />
 
      <ResultFocus />

      <ProductShowcase />

      <NaturalIngredients />

      <UsageGuide />

      {/* WhatsApp Testimonials */}
    {/*  <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4 text-center space-y-12">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">More WhatsApp Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#1A1A1A]">
              <Image 
                src="https://i.ibb.co/WWdgWfgW/IMG-20251013-WA0036.jpg"
                alt="WhatsApp Proof"
                width={400} 
                height={600} 
                className="w-full"
                data-ai-hint="WhatsApp Proof" 
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#1A1A1A]">
              <Image 
                src="https://i.ibb.co/Xf2Mb8c9/IMG-20251014-WA0009-533x1024.jpg" 
                alt="WhatsApp Proof 2" 
                width={400} 
                height={600} 
                className="w-full"
                data-ai-hint="WhatsApp Proof 2" 
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#1A1A1A]">
              <Image 
                src="https://i.ibb.co/pBT4PYwQ/IMG-20251015-WA0019-1.jpg"
                alt="WhatsApp Proof 3" 
                width={400} 
                height={600} 
                className="w-full"
                data-ai-hint="WhatsApp Proof 3" 
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#1A1A1A]">
                <Image 
                  src="https://i.ibb.co/zTqsjdnb/IMG-20250731-WA00061.jpg"
                  alt="WhatsApp Proof 4" 
                  width={400} 
                  height={600} 
                  className="w-full"
                  data-ai-hint="WhatsApp Proof 4" 
                />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#1A1A1A]">
                <Image 
                  src="https://i.ibb.co/svgW9yBB/IMG-20250731-WA00001.jpg"
                  alt="WhatsApp Proof 5" 
                  width={400} 
                  height={600} 
                  className="w-full"
                  data-ai-hint="WhatsApp Proof 5" 
                />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#1A1A1A]">
                <Image 
                  src="https://i.ibb.co/G3C0sNdn/IMG-20251011-WA0005.jpg"
                  alt="WhatsApp Proof 6" 
                  width={400} 
                  height={600} 
                  className="w-full"
                  data-ai-hint="WhatsApp Proof 6" 
                />
            </div>
          </div>
        </div>
      </section>
      */}

      <OrderForm />

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-xs text-muted-foreground">
              This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.
            </p>
            <div className="pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <p>&copy; 2026 Oello Shop. All Rights Reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[#22C55E]">Privacy Policy</a>
                <a href="#" className="hover:text-[#22C55E]">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Toaster />
    </main>
  )
}
