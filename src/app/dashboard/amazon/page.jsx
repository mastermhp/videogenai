import DashboardHeader from "@/app/components/dashboard-header"
import DashboardNav from "@/app/components/dashboard-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ShoppingBag, Star, Search, ArrowRight } from "lucide-react"
// import DashboardHeader from "@/components/dashboard-header"
// import DashboardNav from "@/components/dashboard-nav"

export const metadata = {
  title: "Amazon Product Reviews | VideoGenAI",
  description: "Create compelling Amazon product review videos",
}

export default function AmazonReviewPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <DashboardNav />
        <main className="flex flex-col gap-6 p-6 md:gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">Amazon Product Reviews</h1>
              <p className="text-muted-foreground">
                Create compelling product review videos with Amazon API integration.
              </p>
            </div>
          </div>

          <Tabs defaultValue="search" className="space-y-6">
            <TabsList>
              <TabsTrigger value="search">Search Products</TabsTrigger>
              <TabsTrigger value="url">Product URL</TabsTrigger>
              <TabsTrigger value="history">Review History</TabsTrigger>
            </TabsList>

            <TabsContent value="search" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Search Amazon Products</CardTitle>
                  <CardDescription>Find products to review by searching the Amazon catalog.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input placeholder="Search for products..." className="flex-1" />
                    <Button>
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <Card key={item} className="overflow-hidden">
                        <div className="aspect-video bg-muted flex items-center justify-center">
                          <ShoppingBag className="h-10 w-10 text-muted-foreground" />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium text-sm line-clamp-2 mb-1">
                            Premium Wireless Headphones with Noise Cancellation
                          </h3>
                          <div className="flex items-center gap-1 mb-2">
                            <Star className="h-3 w-3 fill-primary text-primary" />
                            <Star className="h-3 w-3 fill-primary text-primary" />
                            <Star className="h-3 w-3 fill-primary text-primary" />
                            <Star className="h-3 w-3 fill-primary text-primary" />
                            <Star className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">(432)</span>
                          </div>
                          <p className="text-sm font-bold">$129.99</p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button size="sm" className="w-full">
                            Create Review
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline">Load More Products</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="url" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Amazon Product URL</CardTitle>
                  <CardDescription>Enter an Amazon product URL to create a review video.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="amazon-url">Amazon Product URL</Label>
                    <div className="flex gap-2">
                      <Input id="amazon-url" placeholder="Paste Amazon product URL" className="flex-1" />
                      <Button>Fetch</Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 space-y-4">
                    <p className="text-sm font-medium">Product Preview</p>
                    <div className="flex items-center gap-4">
                      <div className="h-20 w-20 bg-muted rounded-md flex items-center justify-center">
                        <ShoppingBag className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">Product Name</p>
                        <p className="text-sm text-muted-foreground">$XX.XX</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="review-angle">Review Angle</Label>
                    <Input id="review-angle" placeholder="What aspects of the product do you want to highlight?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="review-script">Review Script</Label>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-muted-foreground">Write your own script or generate one with AI.</p>
                      <Button variant="outline" size="sm">
                        Generate Script
                      </Button>
                    </div>
                    <Textarea
                      id="review-script"
                      placeholder="Enter your review script here..."
                      className="min-h-[200px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Review Tone</Label>
                    <div className="grid grid-cols-3 gap-4">
                      <Button variant="outline" className="h-auto py-2">
                        Positive
                      </Button>
                      <Button variant="outline" className="h-auto py-2">
                        Balanced
                      </Button>
                      <Button variant="outline" className="h-auto py-2">
                        Critical
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Save Draft</Button>
                  <Button>Generate Product Review</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Review History</CardTitle>
                  <CardDescription>Your previously created Amazon product reviews.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center gap-4 p-4 border rounded-lg">
                        <div className="h-16 w-16 bg-muted rounded-md flex items-center justify-center">
                          <ShoppingBag className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium truncate">Wireless Noise Cancelling Headphones</h4>
                          <p className="text-sm text-muted-foreground">Created 2 weeks ago</p>
                        </div>
                        <Button variant="outline" size="sm" className="shrink-0">
                          <ArrowRight className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Reviews
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

