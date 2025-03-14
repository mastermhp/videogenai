import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, CreditCard, Bell, Lock, Globe, Palette } from "lucide-react"
import DashboardHeader from "@/app/components/dashboard-header"
import DashboardNav from "@/app/components/dashboard-nav"

export const metadata = {
  title: "Settings | VideoGenAI",
  description: "Manage your account settings and preferences",
}

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <DashboardNav />
        <main className="flex flex-col gap-6 p-6 md:gap-8 max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
              <p className="text-muted-foreground">Manage your account settings and preferences.</p>
            </div>
          </div>

          <Tabs defaultValue="account" className="space-y-6">
            <TabsList className="grid grid-cols-5 w-full">
              <TabsTrigger value="account" className="flex gap-2 items-center">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Account</span>
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex gap-2 items-center">
                <CreditCard className="h-4 w-4" />
                <span className="hidden sm:inline">Billing</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex gap-2 items-center">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex gap-2 items-center">
                <Palette className="h-4 w-4" />
                <span className="hidden sm:inline">Appearance</span>
              </TabsTrigger>
              <TabsTrigger value="api" className="flex gap-2 items-center">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">API</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                  <CardDescription>Manage your public profile information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center gap-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm">
                        Change Avatar
                      </Button>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="John Doe" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" defaultValue="john.doe@example.com" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea id="bio" placeholder="Tell us about yourself" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                  <CardDescription>Manage your account security settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                      <Switch id="2fa" />
                      <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
                    </div>
                    <Button variant="outline" size="sm">
                      <Lock className="h-4 w-4 mr-2" />
                      Setup 2FA
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Update Password</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="billing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Subscription Plan</CardTitle>
                  <CardDescription>Manage your subscription and billing information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <p className="font-medium">Pro Plan</p>
                        <p className="text-sm text-muted-foreground">$79/month</p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline">Change Plan</Button>
                        <Button variant="destructive">Cancel Subscription</Button>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="space-y-1">
                      <p className="text-sm">
                        Your plan renews on <strong>June 15, 2023</strong>
                      </p>
                      <p className="text-sm text-muted-foreground">Next billing amount: $79.00</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                    <div className="rounded-lg border p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-16 bg-muted rounded flex items-center justify-center">
                            <CreditCard className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">Visa ending in 4242</p>
                            <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <Button variant="outline">Add Payment Method</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Billing History</CardTitle>
                  <CardDescription>View your past invoices and billing history.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium">Invoice</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Amount</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                            <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                          {[
                            { id: "INV-001", date: "May 15, 2023", amount: "$79.00", status: "Paid" },
                            { id: "INV-002", date: "Apr 15, 2023", amount: "$79.00", status: "Paid" },
                            { id: "INV-003", date: "Mar 15, 2023", amount: "$79.00", status: "Paid" },
                          ].map((invoice, i) => (
                            <tr
                              key={i}
                              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                            >
                              <td className="p-4 align-middle font-medium">{invoice.id}</td>
                              <td className="p-4 align-middle">{invoice.date}</td>
                              <td className="p-4 align-middle">{invoice.amount}</td>
                              <td className="p-4 align-middle">{invoice.status}</td>
                              <td className="p-4 align-middle text-right">
                                <Button variant="ghost" size="sm">
                                  Download
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Manage how and when you receive notifications.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Video Processing Updates</p>
                          <p className="text-sm text-muted-foreground">Get notified when your videos are processed</p>
                        </div>
                        <Switch id="video-processing" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Performance Reports</p>
                          <p className="text-sm text-muted-foreground">Weekly summary of your video performance</p>
                        </div>
                        <Switch id="performance-reports" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Product Updates</p>
                          <p className="text-sm text-muted-foreground">New features and improvements</p>
                        </div>
                        <Switch id="product-updates" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Marketing Emails</p>
                          <p className="text-sm text-muted-foreground">Promotions, tips, and resources</p>
                        </div>
                        <Switch id="marketing-emails" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">In-App Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Video Comments</p>
                          <p className="text-sm text-muted-foreground">When someone comments on your videos</p>
                        </div>
                        <Switch id="video-comments" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">New Followers</p>
                          <p className="text-sm text-muted-foreground">When someone follows your channel</p>
                        </div>
                        <Switch id="new-followers" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Mentions</p>
                          <p className="text-sm text-muted-foreground">When someone mentions you</p>
                        </div>
                        <Switch id="mentions" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>Customize the look and feel of your dashboard.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Theme</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50 bg-muted">
                        <div className="h-20 w-full rounded bg-background border"></div>
                        <p className="text-sm font-medium">Dark (Default)</p>
                      </div>
                      <div className="border rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50">
                        <div className="h-20 w-full rounded bg-white border"></div>
                        <p className="text-sm font-medium">Light</p>
                      </div>
                      <div className="border rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50">
                        <div className="h-20 w-full rounded bg-background border">
                          <div className="h-1/2 bg-white"></div>
                        </div>
                        <p className="text-sm font-medium">System</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Accent Color</h3>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="border rounded-lg p-2 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50 bg-muted">
                        <div className="h-10 w-full rounded bg-purple-500"></div>
                        <p className="text-xs font-medium">Purple</p>
                      </div>
                      <div className="border rounded-lg p-2 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50">
                        <div className="h-10 w-full rounded bg-blue-500"></div>
                        <p className="text-xs font-medium">Blue</p>
                      </div>
                      <div className="border rounded-lg p-2 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50">
                        <div className="h-10 w-full rounded bg-green-500"></div>
                        <p className="text-xs font-medium">Green</p>
                      </div>
                      <div className="border rounded-lg p-2 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50">
                        <div className="h-10 w-full rounded bg-red-500"></div>
                        <p className="text-xs font-medium">Red</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Font Size</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm">Interface Font Size</p>
                        <Select defaultValue="medium">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="api" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>API Access</CardTitle>
                  <CardDescription>Manage your API keys and access tokens.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">API Keys</h3>
                    <div className="rounded-md border">
                      <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                          <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                              <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                              <th className="h-12 px-4 text-left align-middle font-medium">Created</th>
                              <th className="h-12 px-4 text-left align-middle font-medium">Last Used</th>
                              <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="[&_tr:last-child]:border-0">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                              <td className="p-4 align-middle font-medium">Production API Key</td>
                              <td className="p-4 align-middle">May 15, 2023</td>
                              <td className="p-4 align-middle">Today</td>
                              <td className="p-4 align-middle text-right">
                                <Button variant="ghost" size="sm">
                                  Revoke
                                </Button>
                              </td>
                            </tr>
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                              <td className="p-4 align-middle font-medium">Development API Key</td>
                              <td className="p-4 align-middle">Apr 10, 2023</td>
                              <td className="p-4 align-middle">Yesterday</td>
                              <td className="p-4 align-middle text-right">
                                <Button variant="ghost" size="sm">
                                  Revoke
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <Button className="mt-4">Generate New API Key</Button>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Webhooks</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Configure webhooks to receive real-time updates about your videos.
                    </p>
                    <Button variant="outline">Configure Webhooks</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

