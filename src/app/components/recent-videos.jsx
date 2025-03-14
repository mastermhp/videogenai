"use client"

import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical, Play, Edit, Trash } from "lucide-react"

const recentVideos = [
  {
    id: "1",
    title: "Top 10 Kitchen Gadgets Review",
    date: "2 days ago",
    thumbnail: "/placeholder.svg?height=80&width=120",
    duration: "5:32",
  },
  {
    id: "2",
    title: "How to Use AI for Content Creation",
    date: "1 week ago",
    thumbnail: "/placeholder.svg?height=80&width=120",
    duration: "8:15",
  },
  {
    id: "3",
    title: "Best Budget Smartphones 2025",
    date: "2 weeks ago",
    thumbnail: "/placeholder.svg?height=80&width=120",
    duration: "12:47",
  },
]

export default function RecentVideos() {
  const [videos, setVideos] = useState(recentVideos)

  return (
    <div className="space-y-4">
      {videos.length === 0 ? (
        <p className="text-sm text-muted-foreground">No videos created yet.</p>
      ) : (
        videos.map((video) => (
          <div key={video.id} className="flex items-center gap-4">
            <div className="relative flex-shrink-0">
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="h-20 w-32 rounded-md object-cover"
              />
              <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                {video.duration}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="bg-black/50 rounded-full p-2">
                  <Play className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium truncate">{video.title}</h4>
              <p className="text-xs text-muted-foreground">{video.date}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-1 rounded-md hover:bg-muted">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  <span>Play</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <Edit className="h-4 w-4" />
                  <span>Edit</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 text-destructive focus:text-destructive">
                  <Trash className="h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))
      )}
    </div>
  )
}

