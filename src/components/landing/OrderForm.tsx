
"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useToast } from '@/hooks/use-toast'
import { Lock, Truck, Loader2 } from 'lucide-react'
import { submitOrder } from '@/app/actions/order'

const formSchema = z.object({
  package: z.string().min(1, 'Please select a package'),
  fullName: z.string().min(2, 'Full name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  whatsapp: z.string().min(10, 'WhatsApp number is required'),
  address: z.string().min(10, 'Full address with state is required'),
  deliveryTime: z.string().min(1, 'Please select a delivery time'),
  questions: z.string().optional(),
})

export function OrderForm() {
  const { toast } = useToast()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      package: '',
      fullName: '',
      phone: '',
      whatsapp: '',
      address: '',
      deliveryTime: '',
      questions: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const result = await submitOrder(values)
      
      if (result.success) {
        toast({
          title: "Order Submitted Successfully!",
          description: "We will contact you shortly to confirm your delivery.",
        })
        form.reset()
        router.push('/thank-you')
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: "There was an error processing your order. Please try again.",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="order-form" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-[#F8F7F5] p-8 md:p-12 rounded-[40px] shadow-2xl space-y-10 border border-white">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark">Fill The Form Below To Place Your Order</h2>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Truck className="h-5 w-5 text-brand-red" />
              Pay on Delivery + Free Doorstep Delivery Included
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="package"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-lg font-black text-brand-dark">Select Your Package (Required)</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="grid grid-cols-1 gap-4"
                      >
                        {[
                          { id: '1-combo', label: '1 Combo set (1 serum & 1 Cream) + Free Delivery', price: '₦29,500' },
                          { id: '2-combo', label: '2 Combo set + Free Doorstep Delivery', price: '₦52,000' },
                          { id: '1-serum', label: '1 Sadoer Collagen Serum + Delivery Fee', price: '₦21,500' },
                          { id: '2-serums', label: '2 Sadoer Collagen Serums + Free Delivery', price: '₦30,000' },
                          { id: '1-cream', label: '1 Sadoer Collagen Cream + Delivery Fee', price: '₦26,000' },
                          { id: '2-creams', label: '2 Sadoer Collagen Creams + Free Delivery', price: '₦35,000' },
                        ].map((pkg) => (
                          <div
                            key={pkg.id}
                            className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                              field.value === pkg.id 
                                ? 'border-brand-coral bg-brand-coral/5 shadow-md' 
                                : 'border-white bg-white hover:border-gray-200'
                            }`}
                            onClick={() => field.onChange(pkg.id)}
                          >
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value={pkg.id} id={pkg.id} className="border-brand-coral text-brand-coral" />
                              <span className="font-bold text-sm md:text-base text-brand-dark">{pkg.label}</span>
                            </div>
                            <span className="font-black text-brand-coral whitespace-nowrap">{pkg.price}</span>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" className="rounded-xl border-white bg-white h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" className="rounded-xl border-white bg-white h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">WhatsApp Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your WhatsApp number" className="rounded-xl border-white bg-white h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="deliveryTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">When do you want delivery?</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-xl border-white bg-white h-12">
                            <SelectValue placeholder="Select delivery day" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-xl">
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="tomorrow">Tomorrow</SelectItem>
                          <SelectItem value="day-after">The Day After Tomorrow</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Full Address (Including State)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter your full delivery address" className="rounded-xl border-white bg-white min-h-[100px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="questions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Any Questions? (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Anything else you'd like to ask us?" className="rounded-xl border-white bg-white min-h-[80px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4 pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-16 rounded-full bg-brand-red hover:bg-brand-red/90 text-white text-xl font-black shadow-2xl shadow-brand-red/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-6 w-6 animate-spin" />
                      PROCESSING ORDER...
                    </>
                  ) : (
                    'SUBMIT MY ORDER'
                  )}
                </Button>
                <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground uppercase font-bold tracking-widest">
                  <Lock className="h-3 w-3" /> Secure Order Processing
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
