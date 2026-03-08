import React from 'react'
import Image from 'next/image'

export function StoryFeature() {

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full lg:max-w-5xl bg-brand-amber rounded-heroPanel overflow-hidden shadow-heroPanel flex flex-col md:flex-row items-center p-8 md:p-12 gap-10 border border-brand-amber/20">
          <div className="w-full md:w-1/2 aspect-square relative rounded-card overflow-hidden shadow-lg shrink-0">
            <Image
              src="https://i.ibb.co/7xgc3NFz/Whats-App-Image-2024-09-09-at-13-06-03-da9ab460-768x768-1.jpg"
              alt="pregnancy-before-after"
              fill
              className="object-cover"
              data-ai-hint="story-feature"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tighter">
              "After Having My Second Baby, My Skin Just Changed"
            </h3>
            <p className="text-lg font-medium text-white/90 leading-relaxed">
              I Had Dark Patches, Dullness, And Wrinkles That Made Me Feel Older Than I Am. Nothing I Tried Worked—Until I Heard Someone At A Bridal Shower Mention The Sadoer Glow & Firm Set. Just 2 Weeks In, My Face Felt Smoother, Brighter, And Even My Husband Noticed.
            </p>
            <div className="pt-2">
               <p className="text-[11px] font-bold uppercase bg-white/20 text-white inline-block px-4 py-1.5 rounded-badge backdrop-blur-sm border border-white/20">Real Customer Story</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}