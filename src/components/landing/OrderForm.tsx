
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
        form.reset()
        router.push('/thank-you')
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: result.error || "There was an error processing your order.",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="order-form" className="py-24 bg-[#F2F2F0] border-t border-[#EBEBEB]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[20px] shadow-card border border-[#EBEBEB] space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] tracking-tight">Complete Your Order</h2>
            <p className="text-[#6B6B6B] font-semibold flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
              <Truck className="h-4 w-4 text-[#F0A500]" />
              Pay on Delivery + Free Delivery Nationwide
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="package"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-xs font-bold text-[#6B6B6B] uppercase tracking-widest">Select Your Package</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="grid grid-cols-1 gap-3"
                      >
                        {[
                          { id: '1-pack', label: '1 Pack Dexe Shampoo (10 Sachets)', price: '₦18,500' },
                          { id: '2-packs', label: '2 Packs Dexe Shampoo (Promo Value)', price: '₦32,000' },
                          { id: '3-packs', label: '3 Packs Dexe Shampoo (Best Savings)', price: '₦45,000' },
                        ].map((pkg) => (
                          <div
                            key={pkg.id}
                            className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                              field.value === pkg.id 
                                ? 'border-[#F0A500] bg-[#F0A500]/5 shadow-sm' 
                                : 'border-[#EBEBEB] bg-[#FAFAF9] hover:border-gray-300'
                            }`}
                            onClick={() => field.onChange(pkg.id)}
                          >
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value={pkg.id} id={pkg.id} className="border-[#F0A500] text-[#F0A500]" />
                              <span className="font-bold text-sm text-[#1A1A1A]">{pkg.label}</span>
                            </div>
                            <span className="font-black text-[#F0A500] text-sm tabular-nums">{pkg.price}</span>
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
                      <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-[#A8A8A8]">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" className="rounded-[10px] border-[#EBEBEB] bg-[#FAFAF9] h-11 text-sm focus:ring-[#F0A500]" {...field} />
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
                      <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-[#A8A8A8]">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" className="rounded-[10px] border-[#EBEBEB] bg-[#FAFAF9] h-11 text-sm focus:ring-[#F0A500]" {...field} />
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
                      <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-[#A8A8A8]">WhatsApp Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your WhatsApp number" className="rounded-[10px] border-[#EBEBEB] bg-[#FAFAF9] h-11 text-sm focus:ring-[#F0A500]" {...field} />
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
                      <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-[#A8A8A8]">Requested Delivery</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-[10px] border-[#EBEBEB] bg-[#FAFAF9] h-11 text-sm focus:ring-[#F0A500]">
                            <SelectValue placeholder="Select delivery day" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-md">
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="tomorrow">Tomorrow</SelectItem>
                          <SelectItem value="within-3-days">Within 3 Days</SelectItem>
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
                    <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-[#A8A8A8]">Delivery Address (With State)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter your full delivery address" className="rounded-[10px] border-[#EBEBEB] bg-[#FAFAF9] min-h-[100px] text-sm focus:ring-[#F0A500]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4 pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-full bg-[#F0A500] hover:bg-[#C88000] text-white text-lg font-bold shadow-none transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      PROCESSING ORDER...
                    </>
                  ) : (
                    'SUBMIT MY ORDER'
                  )}
                </Button>
                <p className="flex items-center justify-center gap-2 text-[10px] text-[#A8A8A8] uppercase font-bold tracking-widest">
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
