import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Video, Plus, MoreVertical, Play, Edit, Download, Trash, Filter, Search, ArrowUpDown } from "lucide-react"
import DashboardHeader from "@/app/components/dashboard-header"
import DashboardNav from "@/app/components/dashboard-nav"

export const metadata = {
  title: "My Videos | VideoGenAI",
  description: "Manage your AI-generated videos",
}

export default function VideosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <DashboardNav />
        <main className="flex flex-col gap-6 p-6 md:gap-8 max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">My Videos</h1>
              <p className="text-muted-foreground">Manage and organize all your AI-generated videos.</p>
            </div>
            <div className="ml-auto flex flex-col sm:flex-row gap-2">
              <Link href="/dashboard/create">
                <Button className="gap-1">
                  <Plus className="h-4 w-4" />
                  New Video
                </Button>
              </Link>
            </div>
          </div>

          <Tabs defaultValue="all" className="space-y-6">
            <TabsList>
              <TabsTrigger value="all">All Videos</TabsTrigger>
              <TabsTrigger value="published">Published</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search videos..." className="pl-8" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="h-9 gap-1">
                        <Filter className="h-4 w-4" />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm" className="h-9 gap-1">
                        <ArrowUpDown className="h-4 w-4" />
                        Sort
                      </Button>
                      <Select defaultValue="all">
                        <SelectTrigger className="h-9 w-[130px]">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="amazon">Amazon</SelectItem>
                          <SelectItem value="youtube">YouTube</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium">Video</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Type</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Duration</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                          {[
                            {
                              title: "Top 10 Productivity Tips",
                              type: "Standard",
                              status: "Published",
                              date: "2023-05-15",
                              duration: "5:24",
                            },
                            {
                              title: "Amazon Echo Review",
                              type: "Amazon",
                              status: "Published",
                              date: "2023-05-12",
                              duration: "8:12",
                            },
                            {
                              title: "How to Start a YouTube Channel",
                              type: "YouTube",
                              status: "Processing",
                              date: "2023-05-10",
                              duration: "10:45",
                            },
                            {
                              title: "Best Budget Laptops 2023",
                              type: "Amazon",
                              status: "Draft",
                              date: "2023-05-08",
                              duration: "-",
                            },
                            {
                              title: "Morning Routine for Productivity",
                              type: "Standard",
                              status: "Published",
                              date: "2023-05-05",
                              duration: "7:18",
                            },
                            {
                              title: "Social Media Marketing Tips",
                              type: "YouTube",
                              status: "Archived",
                              date: "2023-05-01",
                              duration: "12:33",
                            },
                          ].map((video, i) => (
                            <tr
                              key={i}
                              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                            >
                              <td className="p-4 align-middle">
                                <div className="flex items-center gap-3">
                                  <div className="h-12 w-16 bg-muted rounded flex items-center justify-center">
                                    <Video className="h-6 w-6 text-muted-foreground" />
                                  </div>
                                  <span className="font-medium">{video.title}</span>
                                </div>
                              </td>
                              <td className="p-4 align-middle">{video.type}</td>
                              <td className="p-4 align-middle">
                                <Badge
                                  variant={
                                    video.status === "Published"
                                      ? "default"
                                      : video.status === "Processing"
                                        ? "secondary"
                                        : video.status === "Draft"
                                          ? "outline"
                                          : "destructive"
                                  }
                                >
                                  {video.status}
                                </Badge>
                              </td>
                              <td className="p-4 align-middle">{video.date}</td>
                              <td className="p-4 align-middle">{video.duration}</td>
                              <td className="p-4 align-middle">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <MoreVertical className="h-4 w-4" />
                                      <span className="sr-only">Actions</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem className="cursor-pointer">
                                      <Play className="mr-2 h-4 w-4" />
                                      Play
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="cursor-pointer">
                                      <Edit className="mr-2 h-4 w-4" />
                                      Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="cursor-pointer">
                                      <Download className="mr-2 h-4 w-4" />
                                      Download
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="cursor-pointer text-destructive">
                                      <Trash className="mr-2 h-4 w-4" />
                                      Delete
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-6">
                  <div className="text-sm text-muted-foreground">
                    Showing <strong>6</strong> of <strong>12</strong> videos
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="published" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Published Videos</CardTitle>
                  <CardDescription>Videos that are live and available for viewing.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    You have 3 published videos. These videos are publicly available and can be shared.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="drafts" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Draft Videos</CardTitle>
                  <CardDescription>Videos that are still in progress.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    You have 1 draft video. Continue editing or publish when ready.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="archived" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Archived Videos</CardTitle>
                  <CardDescription>Videos that have been archived.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    You have 1 archived video. Archived videos are hidden from your main library but can be restored.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

