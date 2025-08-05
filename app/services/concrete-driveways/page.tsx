"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  FileText, 
  CheckCircle, 
  Star, 
  Clock,
  Shield,
  Award,
  ArrowLeft,
  Truck,
  Home,
  Settings
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ConcreteDrivewaysPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-slate-700">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">(925) 503-3200</span>
              </div>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
              >
                Schedule Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Professional Concrete Driveway Installation
                <span className="text-blue-600"> Bay Area Experts</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Durable, attractive concrete driveways designed for Bay Area conditions. From standard residential driveways to heavy-duty RV pads, we deliver superior construction that lasts decades. Serving Oakland, Berkeley, Fremont, Pleasanton, Dublin, Livermore, and San Jose.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Get Free Estimate
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (925) 503-3200
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/driveway-construction.jpg"
                alt="Professional concrete driveway installation by Wade & Co Construction in Bay Area"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Complete Driveway Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Home className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Residential Driveways</h3>
                <p className="text-slate-600">Standard and decorative concrete driveways for single-family homes with proper drainage and long-lasting finishes.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Truck className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">RV Pads & Heavy-Duty</h3>
                <p className="text-slate-600">Reinforced concrete pads designed for RVs, boats, and heavy vehicles with proper load distribution and drainage.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Settings className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Commercial Driveways</h3>
                <p className="text-slate-600">High-traffic commercial and industrial driveways with reinforced designs for delivery trucks and customer parking.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Bay Area Concrete Driveway Installation Process</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Site Assessment & Planning</h3>
                  <p>
                    Every concrete driveway project begins with comprehensive site evaluation specific to Bay Area conditions. We assess soil composition, drainage patterns, and existing infrastructure to design optimal solutions. In areas like Fremont and Hayward with expansive clay soils, we implement specialized base preparation and moisture control systems.
                  </p>
                  <p className="mt-4">
                    Our team coordinates with local building departments for permit requirements and utility companies for underground service locations. We understand the specific requirements of each municipality, from Oakland's hillside construction challenges to San Jose's strict stormwater management ordinances.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Excavation & Base Preparation</h3>
                  <p>
                    Proper excavation depth varies based on local soil conditions and intended use. Standard residential driveways typically require 6-8 inches of excavation, while RV pads and heavy-duty applications may need 10-12 inches. We install properly graded aggregate base material compacted to 95% standard Proctor density.
                  </p>
                  <p className="mt-4">
                    Drainage considerations are critical in Bay Area locations. We install French drains, adjust grades for proper water flow, and coordinate with existing landscape drainage systems. Special attention is paid to areas with high water tables or seasonal flooding concerns.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Concrete Specifications & Materials</h3>
              <p>
                Wade & Co. Construction uses high-quality concrete mixes specifically designed for Bay Area conditions. Our standard driveway mix includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Portland Cement:</strong> Type II cement for enhanced durability and sulfate resistance</li>
                <li><strong>Aggregate:</strong> Properly graded sand and gravel from approved Bay Area suppliers</li>
                <li><strong>Water-Cement Ratio:</strong> Optimized for local climate conditions and strength requirements</li>
                <li><strong>Admixtures:</strong> Air entrainment for freeze-thaw resistance and plasticizers for workability</li>
                <li><strong>Reinforcement:</strong> Welded wire mesh or rebar as required by local codes</li>
              </ul>

              <p>
                For heavy-duty applications like RV pads, we increase concrete thickness to 6-8 inches and utilize higher strength mixes (4000+ PSI) with additional reinforcement. Fiber reinforcement is added to minimize shrinkage cracking and improve long-term durability.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Bay Area Climate Considerations</h3>
              <p>
                The diverse microclimates across our service area require specialized installation techniques. Coastal areas like Berkeley experience significant temperature variations due to marine layer effects, requiring adjusted concrete placement timing and curing procedures. Inland locations such as Pleasanton and Livermore face extreme temperature swings that influence our material selection and construction scheduling.
              </p>
              <p>
                During hot summer months common in Tri-Valley areas, we utilize early morning concrete placement, evaporation retardants, and specialized curing compounds to prevent rapid moisture loss. Winter construction requires heating systems and protective coverings to maintain proper curing temperatures, especially in frost-prone areas.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Finishing Options & Aesthetics</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-3">Standard Finishes</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Smooth trowel finish for easy maintenance</li>
                    <li>• Broom finish for improved traction</li>
                    <li>• Exposed aggregate for decorative appeal</li>
                    <li>• Integral color for uniform appearance</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-3">Decorative Options</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Stamped patterns (stone, brick, slate)</li>
                    <li>• Acid staining for marbled effects</li>
                    <li>• Decorative borders and accent strips</li>
                    <li>• Custom scoring and joint patterns</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Quality Control & Inspection</h3>
              <p>
                Our quality control process includes pre-pour inspections of formwork and reinforcement, concrete testing for strength and consistency, and post-placement monitoring of curing conditions. We coordinate with city inspectors for required approvals and maintain detailed documentation of all materials and procedures.
              </p>
              <p>
                Final inspection includes verification of proper grades, drainage function, and surface finish quality. We provide comprehensive warranties on materials and workmanship, with ongoing support for maintenance questions and periodic inspections.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Maintenance & Longevity</h3>
              <p>
                Properly constructed concrete driveways provide 20-30 years of service life with minimal maintenance. We provide detailed care instructions specific to Bay Area conditions, including sealer application schedules, crack prevention measures, and seasonal maintenance recommendations.
              </p>
              <p>
                Our maintenance program includes periodic inspections, joint sealing, and proactive repairs to address minor issues before they become major problems. Bay Area homeowners appreciate the long-term value and low maintenance requirements of professionally installed concrete driveways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for Your New Concrete Driveway?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact Wade & Co. Construction for a comprehensive driveway consultation and detailed estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
            >
              <FileText className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Phone className="w-5 h-5 mr-2" />
              Call (925) 503-3200
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}