"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { Stats } from "@/components/home/stats"
import { Courses } from "@/components/home/courses"
import { Showcase } from "@/components/home/showcase"
import { FAQ } from "@/components/home/faq"
import { ContactForm } from "@/components/home/contact-form"
import { CTA } from "@/components/home/cta"
import { Social } from "@/components/home/social"
import { ScrollToTop } from "@/components/scroll-to-top"

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'

export default function Home() {
  const { toast } = useToast()

  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <Courses />
      <Showcase />
      <FAQ />
      <ContactForm />
      <CTA />
      <Social />
      <ScrollToTop />
    </main>
  )
}