
import React from 'react'
import { Zap, Calendar, ShieldCheck } from 'lucide-react'

export function GlobalTrust() {
  const features = [
    {
      title: "Speed & Convenience",
      icon: <Zap className="h-8 w-8 text-[#22C55E]" />,
      body: "No bowls, no brushes, no hassle. Restore your uniform, natural-looking rich black pigment in the time it takes to take a normal shower."
    },
    {
      title: "Long-Lasting Vibrancy",
      icon: <Calendar className="h-8 w-8 text-[#22C55E]" />,
      body: "One single application locks intense black tones deeply into the hair shaft, resisting fading and lasting seamlessly for up to 4 to 5 weeks."
    },
    {
      title: "Scalp Protection & Repair",
      icon: <ShieldCheck className="h-8 w-8 text-[#22C55E]" />,
      body: "Our high-tech, non-toxic, and low-sensitivity formula is engineered to build up and reinforce hair fibers from the inside out, reducing frizz while enhancing a brilliant, silky shine."
    }
  ]

  return (
    <section className="py-24 bg-black border-y border-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Why Millions Choose <span className="text-[#22C55E]">Dexe Global</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div key={i} className="bg-[#0A0A0A] p-10 rounded-[20px] border border-[#1A1A1A] space-y-6 hover:border-[#22C55E]/30 transition-all group">
              <div className="bg-[#22C55E]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white uppercase">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
