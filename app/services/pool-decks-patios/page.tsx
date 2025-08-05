"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  ArrowLeft,
  Waves,
  Sun,
  Palette,
  Shield,
  FileText
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PoolDecksPatiosPage() {
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
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Beautiful Pool Decks & Concrete Patios
                <span className="text-blue-600"> Bay Area Outdoor Living</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Create stunning outdoor living spaces with custom concrete patios, slip-resistant pool decks, and outdoor kitchen areas. Professional installation across Oakland, Berkeley, Fremont, Pleasanton, Dublin, Livermore, and San Jose with decorative finishes that enhance your property value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Get Design Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (925) 503-3200
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hero-concrete.jpg"
                alt="Beautiful concrete pool deck and patio by Wade & Co Construction in Bay Area"
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
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Complete Outdoor Concrete Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Waves className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Pool Decks</h3>
                <p className="text-sm text-slate-600">Slip-resistant concrete pool decks with decorative finishes and proper drainage.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Sun className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Entertainment Patios</h3>
                <p className="text-sm text-slate-600">Custom concrete patios designed for Bay Area outdoor entertaining and relaxation.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Palette className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Decorative Finishes</h3>
                <p className="text-sm text-slate-600">Stamped patterns, exposed aggregate, acid staining, and custom color options.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Outdoor Kitchens</h3>
                <p className="text-sm text-slate-600">Heat-resistant concrete counters and cooking areas for outdoor kitchen installations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Bay Area Pool Deck & Patio Expertise</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                Bay Area homeowners invest significantly in outdoor living spaces, and concrete pool decks and patios provide the perfect foundation for year-round enjoyment. Wade & Co. Construction specializes in creating beautiful, functional outdoor concrete surfaces that withstand the region&apos;s diverse climate conditions while enhancing property value and lifestyle quality.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Pool Deck Safety & Design</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Safety-First Engineering</h4>
                  <p>
                    Pool deck safety is paramount in Bay Area installations. We engineer slip-resistant surfaces using specialized texturing techniques, anti-slip additives, and proper drainage systems that prevent water accumulation. Our designs meet California pool safety codes and ADA accessibility requirements where applicable.
                  </p>
                  <p className="mt-4">
                    Proper slope and drainage are critical for pool deck longevity and safety. We design surfaces with precise grades that direct water away from pool areas and structures while maintaining comfortable walking surfaces. French drain systems and deck drains are integrated seamlessly into decorative designs.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Climate Adaptation</h4>
                  <p>
                    Bay Area pool decks must withstand temperature variations from coastal fog in Berkeley and Oakland to intense summer heat in Tri-Valley locations like Pleasanton and Livermore. We adjust concrete mix designs, curing procedures, and joint placement to accommodate thermal expansion and contraction.
                  </p>
                  <p className="mt-4">
                    UV-resistant sealers and color-stable pigments ensure long-term appearance retention in California&apos;s intense sunlight. We recommend maintenance schedules specific to each location&apos;s environmental conditions and usage patterns.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Decorative Concrete Options</h3>
              <p>
                Our decorative concrete options transform ordinary pool decks and patios into stunning outdoor features that complement your home&apos;s architecture and landscape design. Popular Bay Area applications include:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-3">Stamped Concrete Patterns</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Natural stone (slate, flagstone, limestone)</li>
                    <li>• Brick and cobblestone patterns</li>
                    <li>• Wood plank textures</li>
                    <li>• Custom geometric designs</li>
                    <li>• Seamless texture integration</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-3">Surface Treatments</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Exposed aggregate finishes</li>
                    <li>• Acid staining and color washes</li>
                    <li>• Integral color systems</li>
                    <li>• Decorative sawcut patterns</li>
                    <li>• Polished concrete surfaces</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Patio Design & Construction</h3>
              <p>
                Concrete patios in the Bay Area serve as outdoor rooms for entertaining, dining, and relaxation. Our designs incorporate multiple functional zones, integrated landscaping connections, and architectural details that extend your home&apos;s living space into the outdoors.
              </p>
              <p>
                We coordinate with landscape architects, pool contractors, and outdoor kitchen designers to create cohesive outdoor environments. Our patio construction includes proper base preparation, reinforcement systems, and control joint placement that prevents cracking and settling over time.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Outdoor Kitchen Integration</h3>
              <p>
                Outdoor kitchens require specialized concrete work including heat-resistant countertops, equipment pads, and utility integration. We fabricate custom concrete counters with integrated sinks, decorative edges, and heat-resistant additives that withstand barbecue and cooking equipment.
              </p>
              <p>
                Our outdoor kitchen concrete work coordinates with gas, electrical, and plumbing contractors to ensure proper utility placement and code compliance. We create cooking areas that are both functional and aesthetically integrated with overall patio design.
              </p>

              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Bay Area Installation Process</h4>
                <ol className="list-decimal pl-6 space-y-2 text-sm">
                  <li>Site survey and design consultation with 3D visualization options</li>
                  <li>Permit acquisition and utility coordination with local jurisdictions</li>
                  <li>Precise excavation with laser-guided equipment for exact grades</li>
                  <li>Base preparation including aggregate installation and compaction</li>
                  <li>Reinforcement placement with welded wire mesh or rebar systems</li>
                  <li>Concrete placement using specialized mixes for decorative applications</li>
                  <li>Surface texturing, stamping, or finishing while concrete is workable</li>
                  <li>Curing process with climate-appropriate techniques and schedules</li>
                  <li>Sealer application and final inspection with maintenance instructions</li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Maintenance & Longevity</h3>
              <p>
                Properly constructed concrete pool decks and patios provide 20-30 years of service with minimal maintenance. We provide specific care instructions for Bay Area conditions including sealer reapplication schedules, cleaning procedures, and seasonal maintenance recommendations.
              </p>
              <p>
                Our maintenance program includes periodic inspections, joint sealing, and surface treatment recommendations. We offer refinishing services to update colors, textures, or repair minor surface wear, extending the life and appearance of your concrete surfaces.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Property Value Enhancement</h3>
              <p>
                Professional concrete pool decks and patios significantly increase Bay Area property values by extending usable living space and enhancing aesthetic appeal. Real estate professionals consistently report that quality outdoor concrete work provides excellent return on investment, especially in premium markets like Palo Alto, Los Altos, and Saratoga.
              </p>
              <p>
                Our designs complement architectural styles common in Bay Area neighborhoods, from mid-century modern homes in Eichler developments to contemporary custom homes in hillside locations. We provide documentation and warranties that transfer to new owners, adding value for future property sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Complete Your Outdoor Living Space</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Enhance your pool deck and patio with complementary concrete services for a cohesive outdoor environment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Concrete Driveways", 
                slug: "concrete-driveways", 
                description: "Match your outdoor space with a beautiful concrete driveway",
                popular: "Popular in Pleasanton & Dublin"
              },
              { 
                name: "Retaining Walls", 
                slug: "retaining-walls", 
                description: "Create levels and privacy for your patio area",
                popular: "Essential in Oakland Hills"
              },
              { 
                name: "Outdoor Kitchens", 
                slug: "outdoor-kitchens", 
                description: "Complete your entertainment area with concrete counters",
                popular: "Trending in San Jose"
              },
              { 
                name: "Stamped Concrete", 
                slug: "stamped-concrete", 
                description: "Add decorative patterns to complement your pool deck",
                popular: "Loved in Fremont & Livermore"
              }
            ].map((service, index) => (
              <Link key={index} href={`/services/${service.slug}`} className="group">
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group-hover:border-blue-200 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors mb-3">{service.name}</h3>
                    <p className="text-sm text-slate-600 mb-3">{service.description}</p>
                    <p className="text-xs text-blue-500 font-medium">{service.popular}</p>
                    <div className="mt-3 text-blue-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Create Your Dream Outdoor Space?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact Wade & Co. Construction for a comprehensive design consultation and detailed estimate for your pool deck or patio project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
            >
              <FileText className="w-5 h-5 mr-2" />
              Schedule Design Consultation
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