"use client"

import { useEffect, useState } from "react"
import {
  ChartContainer,
  ChartTooltip,
  ChartGrid,
  ChartLine,
  ChartArea,
  ChartXAxis,
  ChartYAxis,
} from "@/components/ui/chart"

const data = [
  { date: "Jan 1", views: 100, engagement: 10 },
  { date: "Jan 2", views: 150, engagement: 15 },
  { date: "Jan 3", views: 200, engagement: 20 },
  { date: "Jan 4", views: 320, engagement: 25 },
  { date: "Jan 5", views: 250, engagement: 22 },
  { date: "Jan 6", views: 400, engagement: 30 },
  { date: "Jan 7", views: 450, engagement: 35 },
  { date: "Jan 8", views: 500, engagement: 40 },
  { date: "Jan 9", views: 550, engagement: 45 },
  { date: "Jan 10", views: 600, engagement: 50 },
  { date: "Jan 11", views: 650, engagement: 55 },
  { date: "Jan 12", views: 700, engagement: 60 },
  { date: "Jan 13", views: 750, engagement: 65 },
  { date: "Jan 14", views: 800, engagement: 70 },
]

export default function VideoStats() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[300px] flex items-center justify-center">Loading chart...</div>
  }

  return (
    <div className="h-[300px] w-full">
      <ChartContainer
        data={data}
        xAxisKey="date"
        yAxisWidth={50}
        series={[
          { key: "views", label: "Views", color: "hsl(var(--primary))" },
          { key: "engagement", label: "Engagement", color: "hsl(var(--secondary))" },
        ]}
      >
        <ChartXAxis tickCount={5} />
        <ChartYAxis tickCount={5} />
        <ChartGrid />
        <ChartLine curve="monotone" />
        <ChartArea curve="monotone" />
        <ChartTooltip />
      </ChartContainer>
    </div>
  )
}

