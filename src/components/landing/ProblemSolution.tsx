import React from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'

export function ProblemSolution() {
  return (
    <section id="benefits" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight uppercase">
              Tired of Grey Hair Making You Look Older?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Regular hair dyes are messy, full of toxic chemicals, and cost a fortune at the salon. Dexe changes everything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#111111] p-8 rounded-[16px] border border-[#22C55E]/10 space-y-6">
              <h3 className="text-xl font-bold text-destructive flex items-center gap-2">
                <XCircle className="h-5 w-5" /> The Hassle
              </h3>
              <ul className="space-y-4 text-muted-foreground font-medium">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  Hours spent waiting at barbing salons
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  Messy creams that stain your clothes and skin
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  Harsh chemicals that cause itching and dandruff
                </li>
              </ul>
            </div>

            <div className="bg-[#22C55E]/5 p-8 rounded-[16px] border border-[#22C55E]/20 space-y-6">
              <h3 className="text-xl font-bold text-[#22C55E] flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" /> The Dexe Way
              </h3>
              <ul className="space-y-4 text-white font-semibold">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" />
                  Apply like normal shampoo - wash in 5 mins
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" />
                  Natural herbal formula - gentle on scalp
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" />
                  Lasts up to 4 weeks with a single wash
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center pt-8">
             <p className="text-xl font-bold italic text-[#22C55E]">
              "I didn't believe it would work in 5 minutes until I tried it. My hair is pitch black and looks so natural!"
             </p>
             <p className="mt-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">— James O., Lagos</p>
          </div>
        </div>
      </div>
    </section>
  )
}