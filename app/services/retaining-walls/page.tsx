"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  ArrowLeft,
  Shield,
  Mountain,
  Droplets,
  Building,
  FileText
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RetainingWallsPage() {
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
                Professional Concrete Retaining Walls
                <span className="text-blue-600"> Bay Area Engineering</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Engineered concrete retaining walls designed for Bay Area&apos;s unique geological challenges. From hillside stabilization in <Link href="/locations/oakland" className="text-blue-600 hover:text-blue-800 underline">Oakland</Link> and <Link href="/locations/berkeley" className="text-blue-600 hover:text-blue-800 underline">Berkeley</Link> to landscape walls in <Link href="/locations/pleasanton" className="text-blue-600 hover:text-blue-800 underline">Pleasanton</Link> and <Link href="/locations/dublin" className="text-blue-600 hover:text-blue-800 underline">Dublin</Link>, we provide structural solutions that combine safety, durability, and aesthetic appeal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Get Free Engineering Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (925) 503-3200
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/retaining-wall.jpg"
                alt="Professional concrete retaining wall construction by Wade & Co Construction in Bay Area"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Retaining Wall Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Comprehensive Retaining Wall Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Mountain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Hillside Stabilization</h3>
                <p className="text-sm text-slate-600">Engineered walls for slope stability on challenging Bay Area terrain.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Drainage Integration</h3>
                <p className="text-sm text-slate-600">Advanced drainage systems to prevent water damage and soil erosion.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Landscape Walls</h3>
                <p className="text-sm text-slate-600">Decorative retaining walls that enhance property aesthetics.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Seismic Design</h3>
                <p className="text-sm text-slate-600">Earthquake-resistant designs meeting California building codes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Technical Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Bay Area Retaining Wall Engineering Excellence</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                Retaining walls in the Bay Area require specialized engineering knowledge due to our region&apos;s unique combination of seismic activity, varied soil compositions, and challenging topography. Wade & Co. Construction brings 25+ years of experience designing and constructing concrete retaining walls that not only meet structural requirements but enhance property value and aesthetic appeal.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Geological Challenges & Solutions</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">East Bay Conditions</h4>
                  <p>
                    Oakland and Berkeley&apos;s hillside locations present unique challenges with steep slopes, expansive clay soils, and potential landslide zones. Our retaining walls in these areas incorporate deep foundations, extensive drainage systems, and seismic design features to address lateral earth pressures and dynamic loading conditions.
                  </p>
                  <p className="mt-4">
                    Fremont and Hayward&apos;s expansive clay soils require specialized foundation designs with deep caissons or piles extending below the active soil zone. We implement moisture control systems and flexible joint details to accommodate soil movement without compromising structural integrity.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Tri-Valley & Peninsula</h4>
                  <p>
                    Pleasanton, Dublin, and Livermore areas often feature natural slopes and existing landscape features that require careful integration with new retaining structures. Our designs preserve mature vegetation where possible and incorporate terraced systems that follow natural contours.
                  </p>
                  <p className="mt-4">
                    San Jose and Peninsula locations with high water tables require extensive waterproofing systems, French drains, and pump systems for below-grade walls. We coordinate with local flood control districts and environmental agencies for projects near waterways or wetlands.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Engineering & Design Process</h3>
              <p>
                Every retaining wall project begins with comprehensive geotechnical investigation including soil borings, laboratory testing, and slope stability analysis. We work with licensed geotechnical engineers and structural engineers to develop designs that meet California Building Code requirements and local jurisdiction standards.
              </p>
              <p>
                Our design process includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Site Survey & Topographic Mapping:</strong> Precise measurements of existing conditions and proposed grades</li>
                <li><strong>Soil Analysis:</strong> Comprehensive testing for bearing capacity, expansion potential, and drainage characteristics</li>
                <li><strong>Structural Calculations:</strong> Analysis of earth pressures, surcharge loads, and seismic forces</li>
                <li><strong>Drainage Design:</strong> Integrated systems for surface water management and soil moisture control</li>
                <li><strong>Aesthetic Integration:</strong> Architectural details that complement existing structures and landscape</li>
              </ul>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Construction Methodology</h3>
              <p>
                Retaining wall construction requires precision excavation, proper formwork systems, and specialized concrete placement techniques. Our crews are experienced in working on steep slopes and confined spaces while maintaining safety standards and minimizing disruption to surrounding areas.
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Construction Sequence</h4>
                <ol className="list-decimal pl-6 space-y-2 text-sm">
                  <li>Site preparation and safety measures including slope stabilization and access roads</li>
                  <li>Precise excavation with laser-guided equipment and manual trimming for exact dimensions</li>
                  <li>Foundation preparation including aggregate base, vapor barriers, and reinforcement placement</li>
                  <li>Drainage system installation with perforated pipes, filter fabric, and aggregate backfill</li>
                  <li>Formwork construction using heavy-duty systems designed for high concrete pressures</li>
                  <li>Concrete placement using pump trucks or conveyor systems for difficult access areas</li>
                  <li>Curing and protection with specialized compounds and covering systems</li>
                  <li>Backfill operations with engineered materials and proper compaction procedures</li>
                  <li>Final grading, waterproofing application, and landscape restoration</li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Materials & Specifications</h3>
              <p>
                We utilize high-strength concrete mixes (4000-5000 PSI) specifically designed for retaining wall applications. Materials include Type II Portland cement for sulfate resistance, properly graded aggregates, and specialized admixtures for workability and durability in Bay Area conditions.
              </p>
              <p>
                Reinforcement systems include epoxy-coated rebar, post-tensioning cables for tall walls, and fiber reinforcement for crack control. All materials meet or exceed California Department of Transportation (Caltrans) specifications and American Concrete Institute (ACI) standards.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Drainage & Waterproofing Systems</h3>
              <p>
                Proper drainage is critical for retaining wall longevity in Bay Area&apos;s variable rainfall patterns. Our drainage systems include perforated collection pipes, graded filter materials, and surface water management features designed to handle both normal drainage and extreme weather events.
              </p>
              <p>
                Waterproofing systems for below-grade walls include multiple layers of protection: crystalline admixtures in the concrete mix, applied membrane systems, and protective board installation. We coordinate with landscape designers to ensure surface drainage integrates seamlessly with overall site design.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Seismic Considerations</h3>
              <p>
                Bay Area retaining walls must be designed for seismic forces according to current California Building Code requirements. Our designs include base isolation systems, flexible joint details, and reinforcement patterns that allow controlled movement during seismic events without loss of structural integrity.
              </p>
              <p>
                We utilize dynamic analysis methods for critical walls and incorporate lessons learned from recent earthquake events. Our construction details include provisions for post-earthquake inspection and repair procedures to maintain long-term performance.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Maintenance & Warranty</h3>
              <p>
                Properly constructed retaining walls provide decades of service with minimal maintenance. We provide comprehensive care instructions including drainage system maintenance, joint sealing schedules, and seasonal inspection procedures specific to Bay Area conditions.
              </p>
              <p>
                Our warranty covers both materials and workmanship, with ongoing support for maintenance questions and structural monitoring. We maintain relationships with geotechnical consultants for long-term performance evaluation and can provide structural modifications as conditions change over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Professional Retaining Wall Solutions?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact Wade & Co. Construction for expert engineering consultation and comprehensive retaining wall services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
            >
              <FileText className="w-5 h-5 mr-2" />
              Schedule Engineering Consultation
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