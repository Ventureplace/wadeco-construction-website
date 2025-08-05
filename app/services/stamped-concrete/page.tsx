"use client"

import { Button } from "@/components/ui/button"
import { 
  Phone, 
  ArrowLeft,
  FileText
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function StampedConcretePage() {
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
                Professional Stamped Concrete Installation
                <span className="text-blue-600"> Bay Area Specialists</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Transform your outdoor spaces with decorative stamped concrete that replicates the beauty of natural stone, slate, brick, or wood at a fraction of the cost. Serving Oakland, Berkeley, Fremont, Pleasanton, Dublin, Livermore, and San Jose with 25+ years of specialized experience.
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
                src="/stamped-concrete.jpg"
                alt="Professional stamped concrete installation by Wade & Co Construction in Bay Area"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Bay Area Stamped Concrete Excellence</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p className="text-xl leading-relaxed">
                Stamped concrete offers Bay Area homeowners and businesses an exceptional combination of aesthetic appeal, durability, and cost-effectiveness. Our specialized stamped concrete installation process creates surfaces that authentically replicate natural materials while providing superior longevity and lower maintenance requirements than traditional materials like natural stone, brick pavers, or wood decking.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mt-12 mb-6">Comprehensive Stamped Concrete Process</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Site Preparation Expertise</h4>
                  <p>
                    Our Bay Area stamped concrete projects begin with thorough site evaluation and preparation tailored to local soil conditions. In areas like Fremont and Hayward with expansive clay soils, we implement specialized base preparation including proper excavation depths, aggregate base installation, and moisture barrier systems. For hillside locations in Oakland and Berkeley, we address drainage requirements and slope stabilization before concrete placement.
                  </p>
                  <p className="mt-4">
                    We coordinate with local utility companies to identify underground services and obtain proper permits from city building departments. Our team understands the specific requirements of each Bay Area municipality, from San Jose&apos;s strict drainage ordinances to Dublin&apos;s residential concrete specifications.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Advanced Stamping Techniques</h4>
                  <p>
                    Wade & Co. Construction utilizes professional-grade stamping tools and techniques developed over 25+ years of Bay Area concrete experience. Our extensive pattern library includes slate, stone, brick, wood plank, and custom designs that complement your property&apos;s architectural style. We achieve authentic textures and realistic joint patterns that are virtually indistinguishable from natural materials.
                  </p>
                  <p className="mt-4">
                    Color integration is achieved through both integral coloring mixed directly into the concrete and surface-applied color hardeners that create depth and variation. Our color specialists help you select combinations that complement your home&apos;s exterior and landscape design while considering how Bay Area sunlight and weather conditions will affect long-term appearance.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Bay Area Climate Considerations</h3>
              <p>
                The unique microclimates across our service area require specialized approach to stamped concrete installation. Coastal areas like Berkeley and parts of Oakland experience significant temperature variations due to marine layer effects, requiring adjusted concrete mix designs and curing procedures. Inland locations such as Pleasanton, Dublin, and Livermore face temperature extremes that influence our scheduling and material selection.
              </p>
              <p>
                During hot summer months common in Tri-Valley locations, we utilize specialized curing compounds, adjust placement timing to avoid peak heat, and implement moisture retention techniques to ensure optimal concrete strength development. Winter installation in areas prone to frost requires heating systems and protective coverings to maintain proper curing temperatures.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Applications & Design Options</h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Driveways & Parking Areas</h4>
                  <p className="text-sm">
                    Decorative driveways that withstand Bay Area traffic loads while adding significant curb appeal. Popular patterns include cobblestone, brick, and slate designs with integrated borders and accent colors.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Patios & Entertainment Areas</h4>
                  <p className="text-sm">
                    Custom outdoor living spaces designed for year-round Bay Area outdoor entertainment. Features include integrated fire pit areas, seating walls, and lighting systems within the stamped concrete design.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Pool Decks & Water Features</h4>
                  <p className="text-sm">
                    Slip-resistant stamped concrete pool decks with proper drainage slopes and decorative borders. We coordinate with pool contractors and landscape designers for seamless integration.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Quality Materials & Techniques</h3>
              <p>
                Our stamped concrete projects utilize high-quality Portland cement, properly graded aggregates, and advanced admixture systems designed for Bay Area conditions. We maintain relationships with local concrete suppliers to ensure consistent quality and optimal delivery scheduling. All materials meet or exceed California building code requirements and are selected for their performance in local climate conditions.
              </p>
              <p>
                Reinforcement systems include welded wire mesh or rebar placement as required by local codes and project specifications. Control joint placement follows engineered patterns to minimize random cracking while maintaining the aesthetic integrity of the stamped design. We apply professional-grade sealers that provide UV protection, stain resistance, and enhanced color depth.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Maintenance & Longevity</h3>
              <p>
                Properly installed and maintained stamped concrete provides decades of service life with minimal upkeep. We provide comprehensive maintenance recommendations specific to Bay Area conditions, including sealer reapplication schedules, cleaning procedures, and seasonal care instructions. Our maintenance program includes periodic inspections and proactive repairs to address minor issues before they become major problems.
              </p>
              <p>
                Bay Area homeowners appreciate the long-term value of stamped concrete installations. Unlike natural stone that can shift or crack, or pavers that require periodic releveling, stamped concrete maintains its appearance and structural integrity for years with proper care. We back our installations with comprehensive warranties and provide ongoing support for all our Bay Area customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Property?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact Wade & Co. Construction today for a comprehensive stamped concrete consultation and free estimate.
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