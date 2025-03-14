"use client"
// import DashboardHeader from "@/components/dashboard-header"
// import DashboardNav from "@/components/dashboard-nav"
import { Toaster } from "@/components/ui/sonner"
// import { toast } from "sonner"
import DashboardHeader from "../components/dashboard-header"
import DashboardNav from "../components/dashboard-nav"
import { useToast } from "@/hooks/use-toast"

export default function DashboardLayout({ children }) {
  const { toasts, dismiss } = useToast()

  return (
    <div className="">
      {/* <DashboardHeader /> */}
        {/* <DashboardNav /> */}
        <main className="flex flex-col gap-6 p-6 md:gap-8">{children}</main>
      <Toaster toasts={toasts} dismiss={dismiss} />
    </div>
  )
}

