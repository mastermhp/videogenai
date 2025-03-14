// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { ShoppingBag, FileText, Mic, Image, Wand2 } from "lucide-react"
import CreateVideoForm from "@/app/components/create-video-form"
import DashboardHeader from "@/app/components/dashboard-header"
import DashboardNav from "@/app/components/dashboard-nav"
// import VideoTemplates from "@/app/components/video-templates"

export const metadata = {
  title: "Create Video - AI Video Generator",
  description: "Create AI-powered videos from scripts or product reviews",
}

export default function CreateVideoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <DashboardNav />
        <main className="flex flex-col gap-6 p-6 md:gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">Create New Video</h1>
              <p className="text-muted-foreground">Generate a professional video with AI in minutes.</p>
            </div>
          </div>

          <CreateVideoForm />
        </main>
      </div>
    </div>
  )
}