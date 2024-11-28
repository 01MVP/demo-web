"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { CTA } from "@/components/home/cta"
import { Social } from "@/components/home/social"

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'

export default function IndexPage() {
  const { toast } = useToast()

  return (
    <main>
      <Hero />
      <Features />
      <CTA />
      <Social />
    </main>
  )
}
