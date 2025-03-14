import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Wand2,
  Search,
  TrendingUp,
  BarChart3,
  Tag,
  FileText,
  Image,
  ArrowRight,
  Clock,
  ThumbsUp,
  Plus,
  Download,
} from "lucide-react"
import DashboardHeader from "@/app/components/dashboard-header"
import DashboardNav from "@/app/components/dashboard-nav"

export const metadata = {
  title: "YouTube Tools | VideoGenAI",
  description: "Optimize your videos for YouTube with AI-powered tools",
}

export default function YouTubeToolsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <DashboardNav />
        <main className="flex flex-col gap-6 p-6 md:gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">YouTube Tools</h1>
              <p className="text-muted-foreground">Optimize your videos for YouTube with AI-powered tools.</p>
            </div>
          </div>

          <Tabs defaultValue="optimizer" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="optimizer">Video Optimizer</TabsTrigger>
              <TabsTrigger value="keywords">Keyword Research</TabsTrigger>
              <TabsTrigger value="thumbnails">Thumbnail Generator</TabsTrigger>
            </TabsList>

            <TabsContent value="optimizer" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>YouTube Video Optimizer</CardTitle>
                  <CardDescription>
                    Generate SEO-optimized titles, descriptions, and tags for your YouTube videos.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="video-topic">Video Topic</Label>
                    <Input id="video-topic" placeholder="Enter your video topic or title" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="target-audience">Target Audience</Label>
                    <Input id="target-audience" placeholder="Who is your video for?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="keywords">Main Keywords (separated by commas)</Label>
                    <Input id="keywords" placeholder="Enter keywords related to your topic" />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Content Type</Label>
                      <Select defaultValue="educational">
                        <SelectTrigger>
                          <SelectValue placeholder="Select content type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="educational">Educational</SelectItem>
                          <SelectItem value="entertainment">Entertainment</SelectItem>
                          <SelectItem value="tutorial">Tutorial</SelectItem>
                          <SelectItem value="vlog">Vlog</SelectItem>
                          <SelectItem value="review">Review</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Video Length</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger>
                          <SelectValue placeholder="Select video length" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="short">Short (&lt; 5 min)</SelectItem>
                          <SelectItem value="medium">Medium (5-15 min)</SelectItem>
                          <SelectItem value="long">Long (&gt; 15 min)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Checkbox id="include-hashtags" />
                      <Label htmlFor="include-hashtags">Include trending hashtags</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="include-timestamps" />
                      <Label htmlFor="include-timestamps">Generate timestamps</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="include-cta" defaultChecked />
                      <Label htmlFor="include-cta">Include call-to-action</Label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Save Preferences</Button>
                  <Button className="gap-1">
                    <Wand2 className="h-4 w-4" />
                    Generate Optimization
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Optimization Results</CardTitle>
                  <CardDescription>Your AI-generated YouTube optimization suggestions.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Title Suggestions</Label>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/50 rounded-md">
                        <p className="font-medium">Top 10 Budget-Friendly Headphones That Sound Expensive (2025)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-md">
                        <p className="font-medium">Headphone Buying Guide: How to Choose the PERFECT Pair!</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-md">
                        <p className="font-medium">I Tested 20 Headphones So You Don't Have To | Best Picks 2025</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Description</Label>
                    <Textarea
                      className="min-h-[150px]"
                      defaultValue={`🎧 ULTIMATE HEADPHONE GUIDE 2025 🎧

In this video, I'll walk you through everything you need to know about choosing the perfect headphones for your needs and budget. Whether you're an audiophile, gamer, or casual listener, this guide has you covered!

⏱️ TIMESTAMPS:
00:00 - Introduction
01:23 - Types of Headphones
03:45 - Sound Quality Explained
06:12 - Comfort & Design Features
08:37 - Wireless vs. Wired
10:52 - Budget Options
13:28 - Premium Picks
15:40 - Final Recommendations

🔥 BEST BUDGET PICKS:
- SoundCore Life Q30: https://example.com
- Audio-Technica M40x: https://example.com
- JBL Tune 760NC: https://example.com

#HeadphoneGuide #AudioReview #BudgetHeadphones #TechReview`}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Tags</Label>
                    <Input defaultValue="headphones, headphone review, best headphones 2025, budget headphones, wireless headphones, noise cancelling headphones, audiophile, tech review, sound quality, bluetooth headphones" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Regenerate</Button>
                  <Button>Copy All</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="keywords" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>YouTube Keyword Research</CardTitle>
                  <CardDescription>
                    Find high-performing keywords to improve your video's discoverability.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-2">
                    <Input placeholder="Enter a topic or keyword" className="flex-1" />
                    <Button>
                      <Search className="h-4 w-4 mr-2" />
                      Research
                    </Button>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-12 bg-muted p-3 text-sm font-medium">
                      <div className="col-span-5">Keyword</div>
                      <div className="col-span-2 text-center">Search Volume</div>
                      <div className="col-span-2 text-center">Competition</div>
                      <div className="col-span-3 text-center">Trending</div>
                    </div>
                    <div className="divide-y">
                      {[
                        { keyword: "best headphones 2025", volume: "74,000", competition: "High", trending: "Up" },
                        {
                          keyword: "wireless headphones review",
                          volume: "40,500",
                          competition: "Medium",
                          trending: "Stable",
                        },
                        {
                          keyword: "budget headphones under $100",
                          volume: "33,200",
                          competition: "Medium",
                          trending: "Up",
                        },
                        {
                          keyword: "noise cancelling headphones",
                          volume: "27,800",
                          competition: "High",
                          trending: "Stable",
                        },
                        { keyword: "headphones for gaming", volume: "22,300", competition: "Medium", trending: "Up" },
                      ].map((item, i) => (
                        <div key={i} className="grid grid-cols-12 p-3 text-sm items-center">
                          <div className="col-span-5 font-medium">{item.keyword}</div>
                          <div className="col-span-2 text-center">{item.volume}</div>
                          <div className="col-span-2 text-center">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                item.competition === "High"
                                  ? "bg-red-100 text-red-800"
                                  : item.competition === "Medium"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-green-100 text-green-800"
                              }`}
                            >
                              {item.competition}
                            </span>
                          </div>
                          <div className="col-span-3 text-center flex justify-center">
                            {item.trending === "Up" ? (
                              <TrendingUp className="h-4 w-4 text-green-500" />
                            ) : (
                              <ArrowRight className="h-4 w-4 text-yellow-500" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Export Keyword Report
                  </Button>
                </CardFooter>
              </Card>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-primary" />
                      Top Performing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {["best headphones 2025", "wireless earbuds review", "noise cancelling comparison"].map(
                        (item, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <span className="text-sm">{item}</span>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Trending Now
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {["spatial audio headphones", "gaming headset with mic", "headphones for content creators"].map(
                        (item, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <span className="text-sm">{item}</span>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Tag className="h-4 w-4 text-primary" />
                      Low Competition
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        "headphones for small ears",
                        "best headphones for podcasting",
                        "headphones with long battery life",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-sm">{item}</span>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="thumbnails" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Thumbnail Generator</CardTitle>
                  <CardDescription>
                    Create eye-catching thumbnails that increase your click-through rate.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="thumbnail-title">Thumbnail Title</Label>
                    <Input id="thumbnail-title" placeholder="Enter a catchy title for your thumbnail" />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Style</Label>
                      <Select defaultValue="modern">
                        <SelectTrigger>
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="modern">Modern</SelectItem>
                          <SelectItem value="bold">Bold & Vibrant</SelectItem>
                          <SelectItem value="minimal">Minimal</SelectItem>
                          <SelectItem value="tech">Tech</SelectItem>
                          <SelectItem value="lifestyle">Lifestyle</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Color Scheme</Label>
                      <Select defaultValue="blue">
                        <SelectTrigger>
                          <SelectValue placeholder="Select colors" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="blue">Blue & Orange</SelectItem>
                          <SelectItem value="red">Red & Black</SelectItem>
                          <SelectItem value="green">Green & White</SelectItem>
                          <SelectItem value="purple">Purple & Yellow</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Elements to Include</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <Checkbox id="include-face" defaultChecked />
                        <Label htmlFor="include-face">Face/Reaction</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="include-product" defaultChecked />
                        <Label htmlFor="include-product">Product Image</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="include-text" defaultChecked />
                        <Label htmlFor="include-text">Bold Text</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="include-arrow" />
                        <Label htmlFor="include-arrow">Arrows/Pointers</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="thumbnail-description">Description (optional)</Label>
                    <Textarea
                      id="thumbnail-description"
                      placeholder="Describe what you want in your thumbnail"
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Upload Custom Image</Button>
                  <Button className="gap-1">
                    <Wand2 className="h-4 w-4" />
                    Generate Thumbnails
                  </Button>
                </CardFooter>
              </Card>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Generated Thumbnails</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <div className="aspect-video bg-muted relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image className="h-10 w-10 text-muted-foreground" />
                        </div>
                        <div className="absolute bottom-2 right-2 flex gap-1">
                          <Button variant="outline" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardFooter className="p-3 flex justify-between">
                        <div className="flex items-center gap-2">
                          <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                          <Clock className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <Button size="sm">Use This</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

