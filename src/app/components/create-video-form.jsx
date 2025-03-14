"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingBag, FileText, Mic, Image, Wand2, Loader2 } from "lucide-react"
import {
  generateScript,
  generateVideo,
  generateVoice,
  optimizeForYouTube,
  generateAmazonReview,
} from "@/lib/api-client"
import { useToast } from "@/hooks/use-toast"
// import { useToast } from "@/hooks/use-toast"

export default function CreateVideoForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("script")

  // Script tab state
  const [scriptForm, setScriptForm] = useState({
    title: "",
    script: "",
    voiceStyle: "professional",
    visualStyle: "modern",
  })
  const [generatedContent, setGeneratedContent] = useState({
    script: null,
    audioUrl: null,
    videoUrl: null,
  })

  // YouTube tab state
  const [youtubeForm, setYoutubeForm] = useState({
    videoTitle: "",
    videoDescription: "",
    keywords: "",
    targetAudience: "general",
    videoStyle: "educational",
  })
  const [youtubeResults, setYoutubeResults] = useState(null)

  // Amazon tab state
  const [amazonForm, setAmazonForm] = useState({
    amazonUrl: "",
    reviewStyle: "balanced",
    keyPoints: "",
  })
  const [amazonProduct, setAmazonProduct] = useState(null)
  const [amazonReview, setAmazonReview] = useState(null)

  // Handle input changes for script form
  const handleScriptInputChange = (e) => {
    const { name, value } = e.target
    setScriptForm((prev) => ({ ...prev, [name]: value }))
  }

  // Handle input changes for YouTube form
  const handleYoutubeInputChange = (e) => {
    const { name, value } = e.target
    setYoutubeForm((prev) => ({ ...prev, [name]: value }))
  }

  // Handle input changes for Amazon form
  const handleAmazonInputChange = (e) => {
    const { name, value } = e.target
    setAmazonForm((prev) => ({ ...prev, [name]: value }))
  }

  // Handle select changes
  const handleSelectChange = (name, value, formType) => {
    if (formType === "script") {
      setScriptForm((prev) => ({ ...prev, [name]: value }))
    } else if (formType === "youtube") {
      setYoutubeForm((prev) => ({ ...prev, [name]: value }))
    } else if (formType === "amazon") {
      setAmazonForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  // Generate script
  const handleGenerateScript = async () => {
    try {
      setIsLoading(true)

      toast({
        title: "Generating script...",
        description: "Our AI is crafting your script. This may take a moment.",
      })

      const result = await generateScript({
        topic: scriptForm.title,
        tone: scriptForm.voiceStyle,
        length: "Medium (3-5 minutes)",
      })

      if (result.success) {
        setGeneratedContent((prev) => ({ ...prev, script: result.script }))
        setScriptForm((prev) => ({ ...prev, script: result.script }))

        toast({
          title: "Script generated!",
          description: "Your script has been created successfully.",
        })
      } else {
        throw new Error(result.error || "Failed to generate script")
      }
    } catch (error) {
      console.error("Script generation error:", error)
      toast({
        title: "Script generation failed",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Generate voice
  const handleGenerateVoice = async () => {
    try {
      setIsLoading(true)

      toast({
        title: "Generating voiceover...",
        description: "Creating your voiceover with AI. This may take a moment.",
      })

      const result = await generateVoice({
        script: scriptForm.script,
        voiceStyle: scriptForm.voiceStyle,
      })

      if (result.success) {
        setGeneratedContent((prev) => ({ ...prev, audioUrl: result.audioUrl }))

        toast({
          title: "Voiceover generated!",
          description: "Your audio has been created successfully.",
        })
      } else {
        throw new Error(result.error || "Failed to generate voiceover")
      }
    } catch (error) {
      console.error("Voice generation error:", error)
      toast({
        title: "Voiceover generation failed",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Generate video
  const handleGenerateVideo = async () => {
    try {
      setIsLoading(true)

      toast({
        title: "Generating video...",
        description: "Creating your video with AI. This may take a few minutes.",
      })

      const result = await generateVideo({
        script: scriptForm.script,
        style: scriptForm.visualStyle,
        aspectRatio: "16:9",
      })

      if (result.success) {
        setGeneratedContent((prev) => ({ ...prev, videoUrl: result.previewUrl }))

        toast({
          title: "Video generated!",
          description: "Your video has been created successfully.",
        })
      } else {
        throw new Error(result.error || "Failed to generate video")
      }
    } catch (error) {
      console.error("Video generation error:", error)
      toast({
        title: "Video generation failed",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Optimize for YouTube
  const handleYoutubeOptimize = async () => {
    try {
      setIsLoading(true)

      toast({
        title: "Optimizing for YouTube...",
        description: "Our AI is creating SEO-optimized content for your video.",
      })

      const result = await optimizeForYouTube({
        videoTitle: youtubeForm.videoTitle,
        videoDescription: youtubeForm.videoDescription,
        keywords: youtubeForm.keywords,
        targetAudience: youtubeForm.targetAudience,
      })

      if (result.success) {
        setYoutubeResults(result.optimization)

        toast({
          title: "YouTube optimization complete!",
          description: "Your SEO-optimized content is ready.",
        })
      } else {
        throw new Error(result.error || "Failed to optimize for YouTube")
      }
    } catch (error) {
      console.error("YouTube optimization error:", error)
      toast({
        title: "YouTube optimization failed",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch Amazon product
  const handleFetchAmazonProduct = async () => {
    try {
      setIsLoading(true)

      toast({
        title: "Fetching product data...",
        description: "Getting information about the Amazon product.",
      })

      // In a real implementation, you'd have a separate API for this
      // For now, we'll use the review API to get product data
      const result = await generateAmazonReview({
        productUrl: amazonForm.amazonUrl,
        reviewStyle: amazonForm.reviewStyle,
        keyPoints: amazonForm.keyPoints,
      })

      if (result.success) {
        setAmazonProduct(result.productData)
        setAmazonReview(result.reviewScript)

        toast({
          title: "Product fetched!",
          description: "Amazon product data retrieved successfully.",
        })
      } else {
        throw new Error(result.error || "Failed to fetch Amazon product")
      }
    } catch (error) {
      console.error("Amazon product fetch error:", error)
      toast({
        title: "Product fetch failed",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Tabs defaultValue="script" className="space-y-6" onValueChange={setActiveTab} value={activeTab}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="script">Script-Based</TabsTrigger>
        <TabsTrigger value="youtube">YouTube Video</TabsTrigger>
        <TabsTrigger value="amazon">Amazon Product</TabsTrigger>
      </TabsList>

      <TabsContent value="script" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Create from Script</CardTitle>
            <CardDescription>Generate a video from a script or let AI create one for you.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Video Title</Label>
              <Input
                id="title"
                name="title"
                value={scriptForm.title}
                onChange={handleScriptInputChange}
                placeholder="Enter a title for your video"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="script">Script</Label>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1"
                  onClick={handleGenerateScript}
                  disabled={!scriptForm.title || isLoading}
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}
                  Generate Script
                </Button>
              </div>
              <Textarea
                id="script"
                name="script"
                value={scriptForm.script}
                onChange={handleScriptInputChange}
                placeholder="Enter your script or generate one with AI..."
                className="min-h-[200px]"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Voice</Label>
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mic className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">AI Voice</p>
                      <Select
                        value={scriptForm.voiceStyle}
                        onValueChange={(value) => handleSelectChange("voiceStyle", value, "script")}
                      >
                        <SelectTrigger className="w-full border-0 p-0 h-auto text-sm text-muted-foreground focus:ring-0">
                          <SelectValue placeholder="Select a voice style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="friendly">Friendly</SelectItem>
                          <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                          <SelectItem value="serious">Serious</SelectItem>
                          <SelectItem value="casual">Casual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleGenerateVoice}
                      disabled={!scriptForm.script || isLoading}
                    >
                      {isLoading && activeTab === "script" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Generate"}
                    </Button>
                  </CardContent>
                </Card>
                {generatedContent.audioUrl && (
                  <div className="mt-2">
                    <audio src={generatedContent.audioUrl} controls className="w-full" />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label>Visuals</Label>
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Image className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">AI Visuals</p>
                      <Select
                        value={scriptForm.visualStyle}
                        onValueChange={(value) => handleSelectChange("visualStyle", value, "script")}
                      >
                        <SelectTrigger className="w-full border-0 p-0 h-auto text-sm text-muted-foreground focus:ring-0">
                          <SelectValue placeholder="Select a visual style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="modern">Modern</SelectItem>
                          <SelectItem value="minimalist">Minimalist</SelectItem>
                          <SelectItem value="corporate">Corporate</SelectItem>
                          <SelectItem value="vibrant">Vibrant</SelectItem>
                          <SelectItem value="elegant">Elegant</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleGenerateVideo}
                      disabled={!scriptForm.script || !generatedContent.audioUrl || isLoading}
                    >
                      {isLoading && activeTab === "script" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Generate"}
                    </Button>
                  </CardContent>
                </Card>
                {generatedContent.videoUrl && (
                  <div className="mt-2 aspect-video rounded-md overflow-hidden">
                    <video src={generatedContent.videoUrl} controls className="w-full h-full" />
                  </div>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Save Draft</Button>
            <Button disabled={!generatedContent.videoUrl || isLoading}>Finalize Video</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="youtube" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>YouTube Optimization</CardTitle>
            <CardDescription>
              Create videos optimized for YouTube with AI-generated titles, descriptions, and thumbnails.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="videoTitle">Video Title</Label>
              <Input
                id="videoTitle"
                name="videoTitle"
                value={youtubeForm.videoTitle}
                onChange={handleYoutubeInputChange}
                placeholder="Enter the main title of your video"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="videoDescription">Video Description</Label>
              <Textarea
                id="videoDescription"
                name="videoDescription"
                value={youtubeForm.videoDescription}
                onChange={handleYoutubeInputChange}
                placeholder="Enter a brief description of your video"
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="keywords">Keywords (separated by commas)</Label>
              <Input
                id="keywords"
                name="keywords"
                value={youtubeForm.keywords}
                onChange={handleYoutubeInputChange}
                placeholder="Enter keywords related to your topic"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetAudience">Target Audience</Label>
              <Select
                value={youtubeForm.targetAudience}
                onValueChange={(value) => handleSelectChange("targetAudience", value, "youtube")}
              >
                <SelectTrigger id="targetAudience">
                  <SelectValue placeholder="Select target audience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="beginners">Beginners</SelectItem>
                  <SelectItem value="professionals">Professionals</SelectItem>
                  <SelectItem value="enthusiasts">Enthusiasts</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Video Style</Label>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant={youtubeForm.videoStyle === "educational" ? "default" : "outline"}
                  className="h-auto py-4 justify-start gap-2"
                  onClick={() => handleSelectChange("videoStyle", "educational", "youtube")}
                >
                  <FileText className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">Educational</p>
                    <p className="text-xs text-muted-foreground">Informative content</p>
                  </div>
                </Button>
                <Button
                  variant={youtubeForm.videoStyle === "entertainment" ? "default" : "outline"}
                  className="h-auto py-4 justify-start gap-2"
                  onClick={() => handleSelectChange("videoStyle", "entertainment", "youtube")}
                >
                  <Wand2 className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">Entertainment</p>
                    <p className="text-xs text-muted-foreground">Engaging and fun</p>
                  </div>
                </Button>
              </div>
            </div>

            {youtubeResults && (
              <div className="space-y-4 border rounded-lg p-4">
                <h3 className="font-medium">Optimization Results</h3>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Title Options:</h4>
                  <ul className="space-y-1">
                    {youtubeResults.titleOptions.map((title, index) => (
                      <li key={index} className="text-sm p-2 bg-muted rounded-md">
                        {title}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Description:</h4>
                  <div className="text-sm p-2 bg-muted rounded-md whitespace-pre-line">
                    {youtubeResults.optimizedDescription}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Tags:</h4>
                  <div className="flex flex-wrap gap-1">
                    {youtubeResults.tags.slice(0, 10).map((tag, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                    {youtubeResults.tags.length > 10 && (
                      <span className="text-xs px-2 py-1 bg-muted rounded-full">
                        +{youtubeResults.tags.length - 10} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Hashtags:</h4>
                  <div className="flex flex-wrap gap-1">
                    {youtubeResults.hashtags.map((tag, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Save Results</Button>
            <Button
              onClick={handleYoutubeOptimize}
              disabled={!youtubeForm.videoTitle || !youtubeForm.videoDescription || isLoading}
            >
              {isLoading && activeTab === "youtube" ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              Optimize for YouTube
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="amazon" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Amazon Product Review</CardTitle>
            <CardDescription>Create compelling product review videos with Amazon API integration.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="amazonUrl">Amazon Product URL</Label>
              <div className="flex gap-2">
                <Input
                  id="amazonUrl"
                  name="amazonUrl"
                  value={amazonForm.amazonUrl}
                  onChange={handleAmazonInputChange}
                  placeholder="Paste Amazon product URL"
                  className="flex-1"
                />
                <Button onClick={handleFetchAmazonProduct} disabled={!amazonForm.amazonUrl || isLoading}>
                  {isLoading && activeTab === "amazon" ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                  Fetch
                </Button>
              </div>
            </div>

            {amazonProduct && (
              <div className="border rounded-lg p-4 space-y-4">
                <p className="text-sm font-medium">Product Preview</p>
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 bg-muted rounded-md flex items-center justify-center overflow-hidden">
                    {amazonProduct.imageUrl ? (
                      <img
                        src={amazonProduct.imageUrl || "/placeholder.svg"}
                        alt={amazonProduct.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <ShoppingBag className="h-8 w-8 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{amazonProduct.title}</p>
                    <p className="text-sm text-muted-foreground">{amazonProduct.price}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-500 text-sm">★★★★★</span>
                      <span className="text-xs ml-1 text-muted-foreground">
                        {amazonProduct.rating} ({amazonProduct.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="keyPoints">Review Angle</Label>
              <Input
                id="keyPoints"
                name="keyPoints"
                value={amazonForm.keyPoints}
                onChange={handleAmazonInputChange}
                placeholder="What aspects of the product do you want to highlight?"
              />
            </div>

            <div className="space-y-2">
              <Label>Review Tone</Label>
              <div className="grid grid-cols-3 gap-4">
                <Button
                  variant={amazonForm.reviewStyle === "positive" ? "default" : "outline"}
                  className="h-auto py-2"
                  onClick={() => handleSelectChange("reviewStyle", "positive", "amazon")}
                >
                  Positive
                </Button>
                <Button
                  variant={amazonForm.reviewStyle === "balanced" ? "default" : "outline"}
                  className="h-auto py-2"
                  onClick={() => handleSelectChange("reviewStyle", "balanced", "amazon")}
                >
                  Balanced
                </Button>
                <Button
                  variant={amazonForm.reviewStyle === "critical" ? "default" : "outline"}
                  className="h-auto py-2"
                  onClick={() => handleSelectChange("reviewStyle", "critical", "amazon")}
                >
                  Critical
                </Button>
              </div>
            </div>

            {amazonReview && (
              <div className="space-y-2 border rounded-lg p-4">
                <h3 className="font-medium">Generated Review Script</h3>
                <div className="max-h-60 overflow-y-auto text-sm whitespace-pre-line">{amazonReview}</div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Save Draft</Button>
            <Button
              disabled={!amazonProduct || isLoading}
              onClick={() => {
                // In a real app, this would generate a video from the review
                toast({
                  title: "Creating review video...",
                  description: "Your Amazon product review video is being generated.",
                })
              }}
            >
              Generate Product Review
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

