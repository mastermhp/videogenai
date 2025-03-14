import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  Mic,
  Image,
  Type,
  Layers,
  Download,
  Share2,
  Save,
  Undo,
  Redo,
  Plus,
  Trash2,
} from "lucide-react"
import DashboardHeader from "@/app/components/dashboard-header"
import DashboardNav from "@/app/components/dashboard-nav"

export const metadata = {
  title: "Video Editor | VideoGenAI",
  description: "Edit and customize your AI-generated videos",
}

export default function EditorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <DashboardNav />
        <main className="flex flex-col gap-6 p-6 md:gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">Video Editor</h1>
              <p className="text-muted-foreground">Edit and customize your AI-generated video.</p>
            </div>
            <div className="ml-auto flex flex-col sm:flex-row gap-2">
              <Button variant="outline" className="gap-1">
                <Save className="h-4 w-4" />
                Save
              </Button>
              <Button className="gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
            <div className="space-y-6">
              {/* Video Preview */}
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-black relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-black/50 text-white hover:bg-black/70 hover:text-white"
                      >
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon">
                          <SkipBack className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <SkipForward className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Volume2 className="h-4 w-4 text-muted-foreground" />
                        <Slider defaultValue={[75]} max={100} step={1} className="w-24" />
                      </div>
                    </div>
                    <div className="h-12 bg-muted rounded-md relative">
                      <div className="absolute inset-y-0 left-0 w-1/3 bg-primary/20 border-r-2 border-primary"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">00:45 / 02:30</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Timeline</h3>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon">
                        <Undo className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Redo className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <div className="w-24 shrink-0 flex flex-col gap-2">
                        <div className="h-10 flex items-center">
                          <span className="text-sm font-medium">Audio</span>
                        </div>
                        <div className="h-10 flex items-center">
                          <span className="text-sm font-medium">Visuals</span>
                        </div>
                        <div className="h-10 flex items-center">
                          <span className="text-sm font-medium">Text</span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-x-auto">
                        <div className="min-w-[800px]">
                          <div className="h-10 bg-muted/50 rounded-md mb-2 relative">
                            <div className="absolute inset-y-0 left-0 w-1/2 bg-blue-500/20 rounded-md"></div>
                          </div>
                          <div className="h-10 bg-muted/50 rounded-md mb-2 relative">
                            <div className="absolute inset-y-0 left-[10%] w-1/4 bg-green-500/20 rounded-md"></div>
                            <div className="absolute inset-y-0 left-[40%] w-1/5 bg-green-500/20 rounded-md"></div>
                          </div>
                          <div className="h-10 bg-muted/50 rounded-md relative">
                            <div className="absolute inset-y-0 left-[20%] w-1/6 bg-yellow-500/20 rounded-md"></div>
                            <div className="absolute inset-y-0 left-[60%] w-1/6 bg-yellow-500/20 rounded-md"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Editor Sidebar */}
            <div className="space-y-6">
              <Tabs defaultValue="script">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="script">
                    <Type className="h-4 w-4" />
                  </TabsTrigger>
                  <TabsTrigger value="visuals">
                    <Image className="h-4 w-4" />
                  </TabsTrigger>
                  <TabsTrigger value="audio">
                    <Mic className="h-4 w-4" />
                  </TabsTrigger>
                  <TabsTrigger value="scenes">
                    <Layers className="h-4 w-4" />
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="script" className="space-y-4 mt-4">
                  <Card>
                    <CardContent className="p-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Video Title</Label>
                        <Input id="title" defaultValue="How to Choose the Perfect Headphones" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="script">Script</Label>
                        <Textarea
                          id="script"
                          className="min-h-[300px]"
                          defaultValue="In this video, we'll explore how to choose the perfect headphones for your needs. We'll cover sound quality, comfort, battery life, and price points to help you make an informed decision."
                        />
                      </div>
                      <Button className="w-full">Update Script</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="visuals" className="space-y-4 mt-4">
                  <Card>
                    <CardContent className="p-4 space-y-4">
                      <div className="space-y-2">
                        <Label>Visual Style</Label>
                        <Select defaultValue="modern">
                          <SelectTrigger>
                            <SelectValue placeholder="Select style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="modern">Modern</SelectItem>
                            <SelectItem value="minimal">Minimal</SelectItem>
                            <SelectItem value="bold">Bold</SelectItem>
                            <SelectItem value="retro">Retro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Scene Images</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                            <Image className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                            <Image className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                            <Image className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div className="aspect-video bg-muted rounded-md flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                            <Plus className="h-6 w-6 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                      <Button className="w-full">Generate Visuals</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="audio" className="space-y-4 mt-4">
                  <Card>
                    <CardContent className="p-4 space-y-4">
                      <div className="space-y-2">
                        <Label>Voice</Label>
                        <Select defaultValue="emma">
                          <SelectTrigger>
                            <SelectValue placeholder="Select voice" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emma">Emma (Female)</SelectItem>
                            <SelectItem value="james">James (Male)</SelectItem>
                            <SelectItem value="sophia">Sophia (Female)</SelectItem>
                            <SelectItem value="michael">Michael (Male)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Background Music</Label>
                        <Select defaultValue="upbeat">
                          <SelectTrigger>
                            <SelectValue placeholder="Select music" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="upbeat">Upbeat</SelectItem>
                            <SelectItem value="relaxed">Relaxed</SelectItem>
                            <SelectItem value="corporate">Corporate</SelectItem>
                            <SelectItem value="inspirational">Inspirational</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label>Music Volume</Label>
                          <span className="text-sm">50%</span>
                        </div>
                        <Slider defaultValue={[50]} max={100} step={1} />
                      </div>
                      <Button className="w-full">Generate Audio</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="scenes" className="space-y-4 mt-4">
                  <Card>
                    <CardContent className="p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Scenes</h3>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Plus className="h-4 w-4" />
                          Add Scene
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {[1, 2, 3].map((scene) => (
                          <div key={scene} className="flex items-center gap-2 p-2 border rounded-md">
                            <div className="h-12 w-16 bg-muted rounded-md flex-shrink-0"></div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">Scene {scene}</p>
                              <p className="text-xs text-muted-foreground">Duration: 0:30</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-muted-foreground hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="w-full gap-1">
                          <Share2 className="h-4 w-4" />
                          Preview
                        </Button>
                        <Button className="w-full gap-1">
                          <Download className="h-4 w-4" />
                          Export
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

