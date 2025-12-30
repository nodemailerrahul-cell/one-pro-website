"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, X } from "lucide-react"
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
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    elevatorType: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed")

      onClose()
      setFormData({
        name: "",
        email: "",
        phone: "",
        elevatorType: "",
        message: "",
      })
    } catch {
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[520px] p-0 overflow-hidden border-none shadow-2xl">
        {/* Header */}
        <DialogHeader className="relative p-6 bg-primary text-primary-foreground">
         

          <DialogTitle className="text-2xl font-bold">
            Request a Free Quote & Site Visit
          </DialogTitle>
          <DialogDescription className="text-primary-foreground/80">
            Share your requirements — we’ll contact you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        <ScrollArea className="max-h-[70vh]">
          <form
            onSubmit={handleSubmit}
            className="p-6 space-y-5"
          >
            {/* Name */}
            <div className="space-y-2">
              <Label>Full Name *</Label>
              <Input
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Ramesh Kumar"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label>Email *</Label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="ramesh@gmail.com"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label>Phone Number *</Label>
              <Input
                type="tel"
                required
                pattern="[6-9][0-9]{9}"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="9876543210"
              />
            </div>

            {/* Elevator Type */}
            <div className="space-y-2">
              <Label>Elevator Type</Label>
              <Select
                value={formData.elevatorType}
                onValueChange={(value) =>
                  setFormData({ ...formData, elevatorType: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select elevator type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="passenger">Passenger</SelectItem>
                  <SelectItem value="goods">Goods</SelectItem>
                  <SelectItem value="hospital">Hospital</SelectItem>
                  <SelectItem value="home">Home</SelectItem>
                  <SelectItem value="hotel">Hotel</SelectItem>
                  <SelectItem value="panoramic">Panoramic</SelectItem>
                  <SelectItem value="dumbwaiter">Dumbwaiter</SelectItem>
                  <SelectItem value="hydraulic">Hydraulic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label>Project Details</Label>
              <Textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Briefly describe your project..."
                maxLength={500}
                className="min-h-[110px]"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 text-lg font-semibold"
            >
              {loading ? "Submitting..." : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Get Free Quote
                </>
              )}
            </Button>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
