
import React from 'react'
import Image from 'next/image'
import { Leaf } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function NaturalIngredients() {
  const botanicalImage = PlaceHolderImages.find(img => img.id === 'botanical-main')

  const ingredients = [
    {
      name: "Chinese Ginseng Extract",
      desc: "Fortifies the hair roots, boosts elasticity, and prevents breakage."
    },
    {
      name: "Ginger Extract",
      desc: "Stimulates the scalp environment, balances sebum levels, and promotes resilient hair growth."
    },
    {
      name: "Ganoderma Lucidum (Reishi Mushroom)",
      desc: "A powerful antioxidant that locks in deep, rich moisture while preserving natural melanin."
    }
  ]

  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none">
                Powered by Nature, <br />
                <span className="text-[#22C55E]">Perfected by Science</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                Dexe shifts hair coloring from "renting artificial pigment" to treating your hair with real nutrients. Our formula is infused with traditional active botanicals:
              </p>
            </div>

            <div className="space-y-8">
              {ingredients.map((ing, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="mt-1 h-6 w-6 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0">
                    <Leaf className="h-3 w-3 text-black" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-white uppercase">{ing.name}</h4>
                    <p className="text-muted-foreground leading-relaxed">{ing.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square relative rounded-[40px] overflow-hidden shadow-2xl bg-[#0A0A0A]">
              {botanicalImage && (
                <Image 
                  src={botanicalImage.imageUrl}
                  alt={botanicalImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={botanicalImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="text-[#22C55E] font-black text-2xl uppercase italic tracking-tighter">100% Herbal Based</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
