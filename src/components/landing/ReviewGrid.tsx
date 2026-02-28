import React from 'react'
import { Star } from 'lucide-react'

const extraReviews = [
  {
    name: "Ma. Grace",
    location: "Lagos",
    title: "This Combo Deserves It!",
    text: "My face used to have visible wrinkles and fine lines, and my skin looked tired all the time. But since I started using both the serum and the cream together, the difference has been clear. My skin is now brighter, smoother."
  },
  {
    name: "Vincent E.",
    location: "Port Harcourt",
    title: "No More Tired-Looking Face",
    text: "My job keeps me constantly stressed, and it was really showing on my face—dull skin, dark under-eyes. My skin now looks fresher, brighter, and more alive. Highly recommend it!"
  },
  {
    name: "Adesuwa",
    location: "Abeokuta",
    title: "Thank God for this product",
    text: "My skin was looking tired and I had some dark patches from pregnancy. I've been using this sadoer set for about two months now and the changes are clear. My face just looks fresh!"
  },
  {
    name: "Mrs. Olayinka",
    location: "Lagos",
    title: "My Skin Feels Young Again!",
    text: "At 50, I had tried so many products with no real results. But using the Sadoer Serum and Cream together changed everything. My skin is now softer, brighter."
  }
]

export function ReviewGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {extraReviews.map((rev, i) => (
            <div key={i} className="bg-[#F8F7F5] p-8 rounded-[32px] space-y-4 hover:shadow-lg transition-all border border-transparent hover:border-brand-coral/10">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-3 w-3 fill-current" />)}
              </div>
              <h4 className="font-black text-brand-dark line-clamp-1">{rev.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{rev.text}"
              </p>
              <div className="pt-4 mt-auto">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-coral">{rev.name}</p>
                <p className="text-[10px] text-muted-foreground">{rev.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
