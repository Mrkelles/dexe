import React from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'

export function ProblemSolution() {
  return (
    <section id="benefits" className="py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Does Your Face Look Dull, Tired & Older Than Your Age?
            </h2>
            <p className="text-lg text-brand-offwhite/70 max-w-2xl mx-auto">
              Many people wake up to a face that doesn't match how they feel inside. Most products either bleach your skin or just sit on the surface without working.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-darkBrown p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-2xl font-bold text-brand-red flex items-center gap-2">
                <XCircle className="h-6 w-6" /> The Struggle
              </h3>
              <ul className="space-y-4 text-brand-offwhite/80">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red mt-2 shrink-0" />
                  Dark spots that won't go away, no matter what you use
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red mt-2 shrink-0" />
                  Wrinkles & fine lines making you look old and tired
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red mt-2 shrink-0" />
                  Dry, rough skin stealing your natural glow
                </li>
              </ul>
            </div>

            <div className="bg-brand-coral p-8 rounded-3xl space-y-6 shadow-2xl shadow-brand-coral/20">
              <h3 className="text-2xl font-bold text-brand-dark flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" /> The Solution
              </h3>
              <ul className="space-y-4 text-brand-dark font-medium">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-dark mt-2 shrink-0" />
                  Deeply penetrates to fix the root cause
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-dark mt-2 shrink-0" />
                  Guaranteed transformation without bleaching
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-dark mt-2 shrink-0" />
                  Natural ingredients safe for all skin types
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center pt-8">
             <p className="text-2xl font-semibold italic text-brand-coral">
              "Just 2 weeks in, my face felt smoother, brighter, and even my husband noticed..."
             </p>
             <p className="mt-4 text-sm text-brand-offwhite/50 uppercase tracking-widest">— Satisfied Mom & User</p>
          </div>
        </div>
      </div>
    </section>
  )
}
