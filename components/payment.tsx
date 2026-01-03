"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function PaymentPendingPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, 3000) // show after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={open}>
      <DialogContent className="max-w-[480px] p-0 overflow-hidden border-none shadow-2xl">

        {/* HEADER */}
        <div className="bg-red-600 p-6 text-white text-center">
          <h2 className="text-2xl font-bold">
            Payment Pending
          </h2>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-4 bg-white text-center">
          <p className="text-gray-800 leading-relaxed">
            Payment of <strong>₹2,600</strong> for the
            <strong> additional revision / additional features</strong>
             &nbsp;is currently pending.
          </p>

          <p className="text-sm text-gray-600">
            Website services are temporarily limited until the payment is cleared.
          </p>

          <p className="mt-4 font-semibold text-red-600">
            Please contact <br />
            <a href="tel:6363053425" className="underline">
              6363053425
            </a>{" "}
            for more details.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
