"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, Video, Plus, Youtube, ShoppingBag, Settings, HelpCircle, BarChart3 } from "lucide-react"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "My Videos",
    href: "/dashboard/videos",
    icon: <Video className="h-5 w-5" />,
  },
  {
    title: "Create New",
    href: "/dashboard/create",
    icon: <Plus className="h-5 w-5" />,
  },
  {
    title: "Editor",
    href: "/dashboard/editor",
    icon: <Plus className="h-5 w-5" />,
  },
  {
    title: "YouTube Tools",
    href: "/dashboard/youtube",
    icon: <Youtube className="h-5 w-5" />,
  },
  {
    title: "Amazon Reviews",
    href: "/dashboard/amazon",
    icon: <ShoppingBag className="h-5 w-5" />,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    title: "Help & Support",
    href: "/dashboard/help",
    icon: <HelpCircle className="h-5 w-5" />,
  },
]

export default function DashboardNav() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <ScrollArea className="h-[calc(100vh-64px)]">
        <div className="flex flex-col gap-2 p-4">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn("justify-start gap-2", pathname === item.href ? "bg-secondary" : "")}
              asChild
            >
              <Link href={item.href}>
                {item.icon}
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

