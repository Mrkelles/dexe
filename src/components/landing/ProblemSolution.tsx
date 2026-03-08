import React from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'

export function ProblemSolution() {
  return (
    <section id="benefits" className="py-24 bg-white text-brand-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              Does Your Face Look Dull, Tired & Older Than Your Age?
            </h2>
            <p className="text-lg text-secondary-foreground max-w-2xl mx-auto font-medium">
              Many products either bleach your skin or just sit on the surface without working. We fix the root cause.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-warmGrey p-8 rounded-card border border-border space-y-6">
              <h3 className="text-xl font-bold text-brand-dark flex items-center gap-2">
                <XCircle className="h-5 w-5 text-destructive" /> The Struggle
              </h3>
              <ul className="space-y-4 text-secondary-foreground font-medium">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  Dark spots that won't go away
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  Wrinkles & fine lines making you look old
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  Dry, rough skin stealing your natural glow
                </li>
              </ul>
            </div>

            <div className="bg-brand-amber/5 p-8 rounded-card border border-brand-amber/20 space-y-6">
              <h3 className="text-xl font-bold text-brand-amber flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" /> The Solution
              </h3>
              <ul className="space-y-4 text-brand-dark font-semibold">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-amber mt-2 shrink-0" />
                  Deeply penetrates to repair cells
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-amber mt-2 shrink-0" />
                  Guaranteed transformation without bleaching
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-amber mt-2 shrink-0" />
                  Natural ingredients safe for all skin types
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center pt-8">
             <p className="text-xl font-bold italic text-brand-amber">
              "Just 2 weeks in, my face felt smoother, brighter, and even my husband noticed..."
             </p>
             <p className="mt-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">— Satisfied Mom & User</p>
          </div>
        </div>
      </div>
    </section>
  )
}