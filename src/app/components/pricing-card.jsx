"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function PricingCard({
  title,
  price,
  period = "",
  description,
  features,
  buttonText,
  buttonVariant = "default",
  popular = false,
}) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative"
    >
      {popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <div className="bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full">
            Most Popular
          </div>
        </div>
      )}
      <Card className={`h-full ${popular ? "border-primary shadow-lg" : ""}`}>
        <CardHeader>
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">{price}</span>
            {period && <span className="ml-1 text-muted-foreground">{period}</span>}
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant={buttonVariant}>
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

