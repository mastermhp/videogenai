"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ShoppingBag, Youtube, Presentation, MessageSquare, Lightbulb } from "lucide-react"

const templates = [
  {
    id: "product-review",
    title: "Product Review",
    description: "Create engaging product reviews with pros and cons.",
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
  },
  {
    id: "tutorial",
    title: "Tutorial",
    description: "Step-by-step educational content with clear instructions.",
    icon: <Presentation className="h-8 w-8 text-primary" />,
  },
  {
    id: "explainer",
    title: "Explainer",
    description: "Explain complex topics in a simple, engaging way.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
  },
  {
    id: "social-media",
    title: "Social Media",
    description: "Short-form content optimized for social platforms.",
    icon: <Youtube className="h-8 w-8 text-primary" />,
  },
  {
    id: "interview",
    title: "Interview",
    description: "Q&A format with AI-generated responses.",
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
  },
  {
    id: "listicle",
    title: "Listicle",
    description: "Top 10 style videos with engaging transitions.",
    icon: <FileText className="h-8 w-8 text-primary" />,
  },
]

export default function VideoTemplates() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {templates.map((template) => (
        <Card key={template.id} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="bg-primary/10 p-3 rounded-full">{template.icon}</div>
              <h3 className="font-medium">{template.title}</h3>
              <p className="text-sm text-muted-foreground">{template.description}</p>
            </div>
          </CardContent>
          <CardFooter className="bg-muted/50 px-6 py-4">
            <Button variant="outline" className="w-full">
              Use Template
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

