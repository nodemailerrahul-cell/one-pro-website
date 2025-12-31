"use client"

import { useEffect, useState } from "react"
import { X, Send } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function LeadPopup() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    elevatorType: "",
    message: "",
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error("Failed")

      setOpen(false)
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[520px] p-0 overflow-hidden border-none shadow-2xl">

        {/* HEADER */}
        <div className="relative bg-[#0B2A4A] p-6 text-white">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-md p-1 hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <h2 className="text-2xl font-bold">
            Best Elevator Company in Bangalore
          </h2>

          <p className="mt-2 text-sm text-white/80">
            ⭐ 4.8/5 based on 245+ Google reviews
          </p>

          {/* PRICE BADGE */}
          <div className="mt-3 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold">
            Starts from <span className="text-[#B9FF66]">₹5.25 Lakhs</span>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={submit} className="p-6 space-y-4 bg-white">

          <Input
            required
            placeholder="Full Name *"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <Input
            type="email"
            required
            placeholder="Email Address *"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <Input
            type="tel"
            required
            pattern="[6-9][0-9]{9}"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <Input
            placeholder="Company / Builder (Optional)"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />

          <Select
            value={form.elevatorType}
            onValueChange={(v) =>
              setForm({ ...form, elevatorType: v })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Elevator Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Passenger Elevator">Passenger Elevator</SelectItem>
              <SelectItem value="Home Lift">Home Lift</SelectItem>
              <SelectItem value="Hospital Elevator">Hospital Elevator</SelectItem>
              <SelectItem value="Goods Elevator">Goods Elevator</SelectItem>
              <SelectItem value="Panoramic Elevator">Panoramic Elevator</SelectItem>
              <SelectItem value="Dumbwaiter Lift">Dumbwaiter Lift</SelectItem>
              <SelectItem value="Hydraulic Elevator">Hydraulic Elevator</SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Project details / No. of floors / Location"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="min-h-[90px]"
          />

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-[#0B2A4A] hover:bg-[#0B2A4A]/90 text-lg font-semibold"
          >
            {loading ? "Submitting..." : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Get Free Quote
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
