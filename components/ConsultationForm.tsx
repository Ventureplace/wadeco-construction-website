"use client"

import { Card, CardContent } from "@/components/ui/card"
import Script from "next/script"

export default function ConsultationForm() {
  return (
    <Card className="border-0 shadow-xl">
      <CardContent className="p-8">
        <div className="calendly-inline-widget" 
             data-url="https://calendly.com/wadeconcreteco/30min" 
             style={{minWidth: '320px', height: '700px'}}></div>
        <Script 
          src="https://assets.calendly.com/assets/external/widget.js" 
          strategy="lazyOnload"
        />
        
        <div className="text-center mt-6">
          <p className="text-slate-500 text-sm">
            Or call us directly at <a href="tel:925-503-3200" className="text-blue-600 font-semibold">(925) 503-3200</a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}