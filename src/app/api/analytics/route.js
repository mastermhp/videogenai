import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    // Get the time period from query parameters
    const { searchParams } = new URL(request.url)
    const period = searchParams.get("period") || "30days"

    // Generate analytics data based on the period
    const analyticsData = generateAnalytics(period)

    return NextResponse.json({
      success: true,
      analytics: analyticsData,
      metadata: {
        period,
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Analytics error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch analytics data",
        details: error.message,
      },
      { status: 500 },
    )
  }
}

// Generate analytics data
function generateAnalytics(period) {
  // Determine number of data points based on period
  let dataPoints
  const startDate = new Date()

  switch (period) {
    case "7days":
      dataPoints = 7
      startDate.setDate(startDate.getDate() - 7)
      break
    case "90days":
      dataPoints = 90
      startDate.setDate(startDate.getDate() - 90)
      break
    case "year":
      dataPoints = 12 // Monthly data points for a year
      startDate.setMonth(startDate.getMonth() - 12)
      break
    case "30days":
    default:
      dataPoints = 30
      startDate.setDate(startDate.getDate() - 30)
      break
  }

  // Generate time series data
  const timeSeriesData = []
  const currentDate = new Date(startDate)

  // Base values
  let views = 800 + Math.floor(Math.random() * 200)
  let watchTime = 45 + Math.floor(Math.random() * 15)
  let engagement = 4 + Math.random() * 2

  for (let i = 0; i < dataPoints; i++) {
    // Add some randomness and trend
    views += Math.floor(Math.random() * 100) - 30
    watchTime += Math.floor(Math.random() * 10) - 3
    engagement += Math.random() * 0.4 - 0.1

    // Ensure values stay reasonable
    views = Math.max(views, 500)
    watchTime = Math.max(watchTime, 30)
    engagement = Math.max(Math.min(engagement, 10), 2)

    timeSeriesData.push({
      date: new Date(currentDate).toISOString().split("T")[0],
      views,
      watchTime,
      engagement: engagement.toFixed(1),
    })

    // Increment date based on period
    if (period === "year") {
      currentDate.setMonth(currentDate.getMonth() + 1)
    } else {
      currentDate.setDate(currentDate.getDate() + 1)
    }
  }

  // Generate summary metrics
  const totalViews = timeSeriesData.reduce((sum, day) => sum + day.views, 0)
  const avgWatchTime = timeSeriesData.reduce((sum, day) => sum + Number.parseFloat(day.watchTime), 0) / dataPoints
  const avgEngagement = timeSeriesData.reduce((sum, day) => sum + Number.parseFloat(day.engagement), 0) / dataPoints

  // Generate top performing videos
  const topVideos = [
    { title: "Top 10 Productivity Tips", views: 12345, growth: "+24%" },
    { title: "Amazon Echo Review", views: 8721, growth: "+12%" },
    { title: "How to Start a YouTube Channel", views: 6543, growth: "+8%" },
    { title: "Morning Routine for Productivity", views: 4321, growth: "+5%" },
  ]

  // Generate audience demographics
  const demographics = {
    ageGroups: [
      { group: "18-24", percentage: 35 },
      { group: "25-34", percentage: 42 },
      { group: "35-44", percentage: 15 },
      { group: "45-54", percentage: 5 },
      { group: "55+", percentage: 3 },
    ],
    gender: {
      male: 58,
      female: 42,
    },
    countries: [
      { name: "United States", percentage: 45 },
      { name: "United Kingdom", percentage: 15 },
      { name: "Canada", percentage: 10 },
      { name: "Australia", percentage: 8 },
      { name: "Germany", percentage: 5 },
      { name: "Other", percentage: 17 },
    ],
  }

  return {
    summary: {
      totalViews,
      avgWatchTime: avgWatchTime.toFixed(1),
      avgEngagement: avgEngagement.toFixed(1),
      totalVideos: 12,
      newSubscribers: Math.floor(totalViews * 0.02),
    },
    timeSeriesData,
    topVideos,
    demographics,
  }
}

