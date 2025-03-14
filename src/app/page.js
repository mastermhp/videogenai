"use client"

import Link from "next/link"
import { ArrowRight, Video, Zap, Youtube, ShoppingBag, BarChart3, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import FeatureCard from "./components/feature-card"
import HeroAnimation from "./components/hero-animation"
import PricingCard from "./components/pricing-card"
import TestimonialCard from "./components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Video className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">VideoGenAI</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block w-56 rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  INTRODUCING VIDEOGENAI
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Create Professional Videos with AI
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Transform your content into engaging videos in minutes. Perfect for marketers, content creators, and
                  educators.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1.5 group">
                      Start Creating
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="#demo">
                    <Button size="lg" variant="outline">
                      Watch Demo
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <HeroAnimation />
            </div>
          </div>
        </section>

        <section id="features" className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need to Create Amazing Videos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered platform makes video creation simple, fast, and professional.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="AI Script Generation"
                description="Generate engaging scripts for your videos with just a few clicks."
              />
              <FeatureCard
                icon={<Youtube className="h-10 w-10 text-primary" />}
                title="YouTube Optimization"
                description="Get AI-powered titles, descriptions, and thumbnails optimized for YouTube."
              />
              <FeatureCard
                icon={<ShoppingBag className="h-10 w-10 text-primary" />}
                title="Amazon Product Reviews"
                description="Create compelling product review videos with Amazon API integration."
              />
              <FeatureCard
                icon={<BarChart3 className="h-10 w-10 text-primary" />}
                title="Analytics Dashboard"
                description="Track performance and get insights to improve your videos."
              />
              <FeatureCard
                icon={<Sparkles className="h-10 w-10 text-primary" />}
                title="AI Voice Generation"
                description="Choose from dozens of natural-sounding AI voices for your videos."
              />
              <FeatureCard
                icon={<Video className="h-10 w-10 text-primary" />}
                title="Scene Generation"
                description="Automatically generate scenes based on your script with AI."
              />
            </div>
          </div>
        </section>

        <section id="demo" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">See It in Action</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Watch how easy it is to create professional videos with VideoGenAI.
                </p>
              </div>
              <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg border bg-background shadow-xl">
                <div className="aspect-video relative bg-black flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Video demo placeholder"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" variant="outline" className="bg-background/80 backdrop-blur-sm">
                      Play Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Choose the Perfect Plan for Your Needs
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Flexible pricing options to fit your budget and requirements.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <PricingCard
                title="Free Trial"
                price="$0"
                description="Try basic features with watermarked exports"
                features={["3 video exports", "Basic AI script generation", "720p resolution", "Watermarked exports"]}
                buttonText="Start Free Trial"
                buttonVariant="outline"
              />
              <PricingCard
                title="Starter"
                price="$29"
                period="/month"
                description="Perfect for beginners and small creators"
                features={[
                  "10 video exports",
                  "Advanced script generation",
                  "1080p resolution",
                  "Access to stock footage",
                  "YouTube optimization",
                ]}
                buttonText="Get Started"
                buttonVariant="default"
                popular={true}
              />
              <PricingCard
                title="Pro"
                price="$79"
                period="/month"
                description="For professional content creators"
                features={[
                  "Unlimited exports",
                  "Advanced customization",
                  "4K resolution",
                  "Premium stock footage",
                  "Amazon product integration",
                  "Analytics dashboard",
                ]}
                buttonText="Upgrade to Pro"
                buttonVariant="default"
              />
              <PricingCard
                title="Enterprise"
                price="$199"
                period="/month"
                description="For teams and businesses"
                features={[
                  "Everything in Pro",
                  "Team collaboration",
                  "Custom branding",
                  "Priority support",
                  "API access",
                  "Dedicated account manager",
                ]}
                buttonText="Contact Sales"
                buttonVariant="default"
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied creators who use VideoGenAI every day.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
              <TestimonialCard
                quote="VideoGenAI has completely transformed my content creation process. I can now create professional videos in minutes instead of hours."
                author="Sarah Johnson"
                role="Content Creator"
                avatarSrc="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="The AI script generation is mind-blowing. It's like having a professional copywriter on your team. Highly recommended!"
                author="Michael Chen"
                role="Marketing Director"
                avatarSrc="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="As an Amazon affiliate, the product review feature has been a game-changer. My conversion rates have increased by 35% since using VideoGenAI."
                author="Jessica Williams"
                role="Affiliate Marketer"
                avatarSrc="/placeholder.svg?height=100&width=100"
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Content?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of creators who are already using VideoGenAI to create amazing videos.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" variant="secondary" className="gap-1.5 group">
                    Get Started for Free
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="#demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                  >
                    Watch Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Video className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">VideoGenAI</span>
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © 2025 VideoGenAI. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

