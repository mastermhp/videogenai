"use client"

import { useEffect, useState } from "react"
import { X, CheckCircle, AlertCircle, Info } from "lucide-react"

export function Toaster({ toasts, dismiss }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 w-full max-w-sm">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} dismiss={() => dismiss(toast.id)} />
      ))}
    </div>
  )
}

function Toast({ toast, dismiss }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Animate in
    const timer = setTimeout(() => setIsVisible(true), 10)
    return () => clearTimeout(timer)
  }, [])

  const getIcon = () => {
    switch (toast.variant) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "destructive":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      default:
        return <Info className="h-5 w-5 text-blue-500" />
    }
  }

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex gap-3 transform transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="flex-shrink-0">{getIcon()}</div>
      <div className="flex-1">
        {toast.title && <h3 className="font-medium">{toast.title}</h3>}
        {toast.description && <p className="text-sm text-muted-foreground">{toast.description}</p>}
      </div>
      <button onClick={dismiss} className="flex-shrink-0">
        <X className="h-5 w-5 text-muted-foreground hover:text-foreground" />
      </button>
    </div>
  )
}

