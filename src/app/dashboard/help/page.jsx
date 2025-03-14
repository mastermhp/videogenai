import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  FileText,
  MessageSquare,
  Video,
  BookOpen,
  ArrowRight,
  Youtube,
  ShoppingBag,
  Mic,
  BarChart3,
  Play,
} from "lucide-react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import DashboardHeader from "@/app/components/dashboard-header"
import DashboardNav from "@/app/components/dashboard-nav"

export const metadata = {
  title: "Help & Support | VideoGenAI",
  description: "Get help and support for VideoGenAI",
}

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <DashboardNav />
        <main className="flex flex-col gap-6 p-6 md:gap-8 max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">Help & Support</h1>
              <p className="text-muted-foreground">Find answers to common questions and get support.</p>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search for help articles..." className="pl-10 h-12 text-base" />
          </div>

          <Tabs defaultValue="faq" className="space-y-6">
            <TabsList>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="tutorials">Video Tutorials</TabsTrigger>
              <TabsTrigger value="contact">Contact Support</TabsTrigger>
            </TabsList>

            <TabsContent value="faq" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Find answers to the most common questions about VideoGenAI.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How do I create my first video?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground">
                          To create your first video, navigate to the Dashboard and click on the "New Video" button. You
                          can choose from different creation methods: Script-based, YouTube Optimized, or Amazon Product
                          Review. Follow the prompts to enter your content, customize settings, and generate your video.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>What file formats are supported for export?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground">
                          VideoGenAI supports exporting videos in MP4, MOV, and WebM formats. You can choose the format
                          that best suits your needs during the export process. For social media platforms, we recommend
                          using MP4 as it's widely supported.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How many videos can I create with my subscription?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground">
                          The number of videos you can create depends on your subscription plan:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Free Trial: 3 video exports with watermark</li>
                            <li>Starter Plan: 10 video exports per month</li>
                            <li>Pro Plan: Unlimited video exports</li>
                            <li>Enterprise Plan: Unlimited video exports with team collaboration</li>
                          </ul>
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Can I use my own voiceover?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground">
                          Yes, you can upload your own voiceover audio files in MP3 or WAV format. During the video
                          creation process, select "Custom Audio" in the Voice section and upload your file. You can
                          also use our AI voice generation if you prefer.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>How do I edit a video after it's been generated?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground">
                          To edit a generated video, go to "My Videos" in the dashboard, find the video you want to
                          edit, and click the "Edit" button. This will open the video editor where you can make changes
                          to the script, visuals, audio, and other elements. After making your changes, click "Save" to
                          update the video.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger>What's the maximum video length I can create?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground">
                          The maximum video length depends on your subscription plan:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Free Trial: Up to 3 minutes</li>
                            <li>Starter Plan: Up to 10 minutes</li>
                            <li>Pro Plan: Up to 30 minutes</li>
                            <li>Enterprise Plan: Up to 60 minutes</li>
                          </ul>
                          For longer videos, we recommend breaking them into multiple segments for better viewer
                          engagement.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="guides" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Guides</CardTitle>
                  <CardDescription>Step-by-step guides to help you get the most out of VideoGenAI.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      {
                        title: "Getting Started Guide",
                        description: "Learn the basics of VideoGenAI and create your first video",
                        icon: <FileText className="h-8 w-8 text-primary" />,
                      },
                      {
                        title: "Advanced Video Editing",
                        description: "Master the video editor for professional results",
                        icon: <Video className="h-8 w-8 text-primary" />,
                      },
                      {
                        title: "YouTube Optimization",
                        description: "Maximize your video's performance on YouTube",
                        icon: <Youtube className="h-8 w-8 text-primary" />,
                      },
                      {
                        title: "Amazon Product Reviews",
                        description: "Create compelling product review videos",
                        icon: <ShoppingBag className="h-8 w-8 text-primary" />,
                      },
                      {
                        title: "Voice and Audio Guide",
                        description: "Perfect your video's audio and voiceover",
                        icon: <Mic className="h-8 w-8 text-primary" />,
                      },
                      {
                        title: "Analytics and Performance",
                        description: "Understand and improve your video metrics",
                        icon: <BarChart3 className="h-8 w-8 text-primary" />,
                      },
                    ].map((guide, i) => (
                      <Card key={i} className="overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="rounded-full bg-primary/10 p-2">{guide.icon}</div>
                            <div className="space-y-1">
                              <h3 className="font-medium">{guide.title}</h3>
                              <p className="text-sm text-muted-foreground">{guide.description}</p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="bg-muted/50 p-4">
                          <Button variant="ghost" className="w-full justify-between">
                            Read Guide
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tutorials" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Video Tutorials</CardTitle>
                  <CardDescription>Watch step-by-step video tutorials to learn how to use VideoGenAI.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="group cursor-pointer">
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden relative mb-2">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="h-12 w-12 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                          </div>
                        </div>
                        <h3 className="font-medium group-hover:text-primary transition-colors">
                          Tutorial {item}: Getting Started
                        </h3>
                        <p className="text-sm text-muted-foreground">3:45 • Beginner</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Tutorials
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Support</CardTitle>
                  <CardDescription>Get in touch with our support team for personalized assistance.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center gap-2">
                          <div className="rounded-full bg-primary/10 p-3 mb-2">
                            <MessageSquare className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="font-medium">Live Chat</h3>
                          <p className="text-sm text-muted-foreground">Chat with our support team in real-time</p>
                          <Button className="mt-2">Start Chat</Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center gap-2">
                          <div className="rounded-full bg-primary/10 p-3 mb-2">
                            <BookOpen className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="font-medium">Knowledge Base</h3>
                          <p className="text-sm text-muted-foreground">Browse our comprehensive documentation</p>
                          <Button variant="outline" className="mt-2">
                            View Articles
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Send a Support Ticket</h3>
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="Enter the subject of your inquiry" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="category">Category</Label>
                        <Select defaultValue="technical">
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technical">Technical Issue</SelectItem>
                            <SelectItem value="billing">Billing Question</SelectItem>
                            <SelectItem value="feature">Feature Request</SelectItem>
                            <SelectItem value="account">Account Help</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Describe your issue in detail..."
                          className="min-h-[150px]"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="attachment">Attachment (optional)</Label>
                        <Input id="attachment" type="file" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Submit Ticket</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

