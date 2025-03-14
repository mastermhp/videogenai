import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  Eye,
  ThumbsUp,
  Calendar,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import DashboardHeader from "@/app/components/dashboard-header"
import DashboardNav from "@/app/components/dashboard-nav"

export const metadata = {
  title: "Analytics | VideoGenAI",
  description: "Track and analyze your video performance",
}

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <DashboardNav />
        <main className="flex flex-col gap-6 p-6 md:gap-8 max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
              <p className="text-muted-foreground">Track and analyze your video performance metrics.</p>
            </div>
            <div className="ml-auto flex flex-col sm:flex-row gap-2">
              <Button variant="outline" className="gap-1">
                <Calendar className="h-4 w-4" />
                Last 30 Days
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
              <Button variant="outline">Export Report</Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24,781</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500 font-medium">+18.2%</span> from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Watch Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,432 hrs</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500 font-medium">+12.5%</span> from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Engagement</CardTitle>
                <ThumbsUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5.7%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowDownRight className="mr-1 h-3 w-3 text-red-500" />
                  <span className="text-red-500 font-medium">-2.3%</span> from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Audience</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,842</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500 font-medium">+7.4%</span> from last month
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="audience">Audience</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                  <CardDescription>View your video performance metrics over time.</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="space-x-2">
                      <Button variant="outline" size="sm" className="h-8">
                        Views
                      </Button>
                      <Button variant="outline" size="sm" className="h-8">
                        Watch Time
                      </Button>
                      <Button variant="outline" size="sm" className="h-8">
                        Engagement
                      </Button>
                    </div>
                    <Select defaultValue="30days">
                      <SelectTrigger className="w-[180px] h-8">
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7days">Last 7 days</SelectItem>
                        <SelectItem value="30days">Last 30 days</SelectItem>
                        <SelectItem value="90days">Last 90 days</SelectItem>
                        <SelectItem value="year">Last year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="h-[300px]">
                    {/* This is a placeholder for the chart component */}
                    <div className="w-full h-full bg-muted/20 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Performing Videos</CardTitle>
                    <CardDescription>Your best performing videos by views.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { title: "Top 10 Productivity Tips", views: "12,345", growth: "+24%" },
                        { title: "Amazon Echo Review", views: "8,721", growth: "+12%" },
                        { title: "How to Start a YouTube Channel", views: "6,543", growth: "+8%" },
                        { title: "Morning Routine for Productivity", views: "4,321", growth: "+5%" },
                      ].map((video, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                              {i + 1}
                            </div>
                            <div>
                              <p className="text-sm font-medium">{video.title}</p>
                              <p className="text-xs text-muted-foreground">{video.views} views</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-green-500">
                            <TrendingUp className="h-4 w-4" />
                            <span className="text-xs font-medium">{video.growth}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Videos
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Audience Demographics</CardTitle>
                    <CardDescription>Breakdown of your audience by age and gender.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Age Groups</h4>
                        <div className="space-y-2">
                          {[
                            { group: "18-24", percentage: 35 },
                            { group: "25-34", percentage: 42 },
                            { group: "35-44", percentage: 15 },
                            { group: "45-54", percentage: 5 },
                            { group: "55+", percentage: 3 },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-24 text-xs">{item.group}</div>
                              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-primary rounded-full"
                                  style={{ width: `${item.percentage}%` }}
                                ></div>
                              </div>
                              <div className="w-10 text-xs text-right">{item.percentage}%</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Gender</h4>
                        <div className="flex gap-4">
                          <div className="flex-1 p-4 bg-muted/20 rounded-lg text-center">
                            <p className="text-2xl font-bold">58%</p>
                            <p className="text-xs text-muted-foreground">Male</p>
                          </div>
                          <div className="flex-1 p-4 bg-muted/20 rounded-lg text-center">
                            <p className="text-2xl font-bold">42%</p>
                            <p className="text-xs text-muted-foreground">Female</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="audience" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Audience Insights</CardTitle>
                  <CardDescription>Detailed information about your audience demographics and behavior.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Detailed audience analytics will be available soon. This feature is currently in development.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="engagement" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Metrics</CardTitle>
                  <CardDescription>Track likes, comments, shares, and other engagement metrics.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Detailed engagement analytics will be available soon. This feature is currently in development.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="revenue" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Analytics</CardTitle>
                  <CardDescription>Track your earnings and monetization performance.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Revenue analytics will be available soon. This feature is currently in development.
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

