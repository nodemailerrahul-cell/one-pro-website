"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface QuotePopupProps {
  isOpen: boolean
  onClose: () => void
}

export function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    elevatorType: "",
    message: "",
  })

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.error || "Something went wrong")
    }

    console.log("Quote sent successfully")
    onClose()

    // Optional: reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      elevatorType: "",
      message: "",
    })
  } catch (err) {
    console.error("Submit error:", err)
    alert("Failed to submit quote. Please try again.")
  }
}


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="
          sm:max-w-[540px]
          w-[calc(100vw-2rem)]
          max-h-[90vh]
          p-0
          flex
          flex-col
          gap-0
          overflow-hidden
          overflow-x-hidden
          border-none
          shadow-2xl
        "
      >
        {/* Header */}
        <DialogHeader className="p-8 pb-4 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none" />
          <DialogTitle className="text-2xl font-bold tracking-tight">
            Request a Free Quote
          </DialogTitle>
          <DialogDescription className="text-primary-foreground/80 font-medium">
            Fill out the form below and our team will get back to you within 24
            hours.
          </DialogDescription>
        </DialogHeader>

        {/* Scrollable Form (Scrollbar hidden) */}
        <ScrollArea className="flex-1 max-h-[calc(90vh-140px)] w-full overflow-y-auto scrollbar-hide">
          <form
            onSubmit={handleSubmit}
            className="p-8 pt-6 space-y-6 w-full max-w-full overflow-x-hidden"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">
                  Full Name *
                </Label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Ramesh Kumar"
                  className="w-full bg-muted/30 border-muted-foreground/20 focus:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">
                  Email *
                </Label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="ramesh@gmail.com"
                  className="w-full bg-muted/30 border-muted-foreground/20 focus:border-primary/50"
                />
              </div>
            </div>

            {/* Phone + Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">
                  Phone Number *
                </Label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+91 98765 43210"
                  className="w-full bg-muted/30 border-muted-foreground/20 focus:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">
                  Company Name
                </Label>
                <Input
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="ABC Constructions"
                  className="w-full bg-muted/30 border-muted-foreground/20 focus:border-primary/50"
                />
              </div>
            </div>

            {/* Elevator Type */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">
                Elevator Type
              </Label>
              <Select
                value={formData.elevatorType}
                onValueChange={(value) =>
                  setFormData({ ...formData, elevatorType: value })
                }
              >
                <SelectTrigger className="w-full bg-muted/30 border-muted-foreground/20 focus:border-primary/50">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="passenger">Passenger Elevator</SelectItem>
                  <SelectItem value="goods">Goods Elevator</SelectItem>
                  <SelectItem value="hospital">Hospital Elevator</SelectItem>
                  <SelectItem value="home">Home Elevator</SelectItem>
                  <SelectItem value="hotel">Hotel Elevator</SelectItem>
                  <SelectItem value="panoramic">Panoramic Elevator</SelectItem>
                  <SelectItem value="dumbwaiter">Dumbwaiter</SelectItem>
                  <SelectItem value="hydraulic">Hydraulic Elevator</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">
                Project Details
              </Label>
              <Textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell us about your project requirements..."
                maxLength={500}
                className="
                  w-full
                  max-w-full
                  min-h-[120px]
                  resize-none
                  bg-muted/30
                  border-muted-foreground/20
                  focus:border-primary/50
                  overflow-x-hidden
                  break-words
                  break-all
                  whitespace-pre-wrap
                "
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="w-full h-12 text-lg font-bold shadow-lg hover:shadow-xl"
            >
              <Send className="mr-2 h-5 w-5" />
              Submit Quote Request
            </Button>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
  