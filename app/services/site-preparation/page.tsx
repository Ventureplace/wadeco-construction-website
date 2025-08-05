"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  ArrowLeft,
  Truck,
  Mountain,
  Droplets,
  Settings,
  Map,
  Layers
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SitePreparationPage() {
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
                onClick={() => window.open('https://calendly.com/wadeconcreteco/30min', '_blank')}
              >
                Schedule Assessment
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Professional Site Preparation & Excavation
                <span className="text-blue-600"> Bay Area Foundation Experts</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Comprehensive site preparation services for concrete construction projects across the Bay Area. Expert excavation, grading, drainage solutions, and base preparation that ensures long-lasting concrete installations in Oakland, Berkeley, Fremont, Pleasanton, Dublin, Livermore, and San Jose.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://calendly.com/wadeconcreteco/30min', '_blank')}
                >
                  <Map className="w-5 h-5 mr-2" />
                  Schedule Site Assessment
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (925) 503-3200
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/construction-work.jpg"
                alt="Professional site preparation and excavation by Wade & Co Construction in Bay Area"
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
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Complete Site Preparation Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Truck className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Excavation & Grading</h3>
                <p className="text-slate-600">Precision excavation and grading for optimal concrete placement and drainage management.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Droplets className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Drainage Solutions</h3>
                <p className="text-slate-600">Comprehensive drainage systems designed for Bay Area rainfall and soil conditions.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Layers className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Base Preparation</h3>
                <p className="text-slate-600">Engineered aggregate base systems for maximum concrete performance and longevity.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Mountain className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Soil Stabilization</h3>
                <p className="text-slate-600">Specialized techniques for challenging Bay Area soil conditions and hillside locations.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Settings className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Utility Coordination</h3>
                <p className="text-slate-600">Safe excavation around existing utilities with proper marking and protection procedures.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Truck className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Demolition & Removal</h3>
                <p className="text-slate-600">Professional concrete demolition and debris removal with environmental compliance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Technical Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Bay Area Site Preparation Expertise</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                Successful concrete construction begins with proper site preparation, and Bay Area conditions present unique challenges that require specialized knowledge and equipment. Wade & Co. Construction brings 25+ years of experience in site preparation, excavation, and foundation work across diverse geological conditions from coastal areas to inland valleys.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Bay Area Geological Challenges</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">East Bay Soil Conditions</h4>
                  <p>
                    Oakland and Berkeley hillside locations feature complex soil profiles with varying clay content, rock outcroppings, and potential landslide zones. Our excavation techniques include careful slope stabilization, selective grading, and installation of temporary shoring systems where required for safety and structural integrity.
                  </p>
                  <p className="mt-4">
                    Fremont and Hayward areas are characterized by expansive clay soils that undergo significant volume changes with moisture variations. We implement specialized preparation techniques including over-excavation, soil replacement with engineered fill, and installation of moisture control systems to prevent future foundation movement.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Tri-Valley & Peninsula Conditions</h4>
                  <p>
                    Pleasanton, Dublin, and Livermore locations often feature natural slopes and seasonal drainage patterns that require careful integration with new construction. We design grading plans that work with existing topography while ensuring proper drainage and access for construction equipment.
                  </p>
                  <p className="mt-4">
                    San Jose and Peninsula areas with high water tables require specialized dewatering systems, waterproof barriers, and coordination with local flood control agencies. We implement comprehensive groundwater management strategies that protect both the construction process and adjacent properties.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Excavation & Grading Services</h3>
              <p>
                Precision excavation is critical for concrete project success, requiring accurate depth control, proper slope angles, and preservation of surrounding structures and utilities. Our excavation services utilize GPS-guided equipment for exact grade control and laser leveling systems for final preparation.
              </p>
              <p>
                We maintain a complete fleet of excavation equipment including compact excavators for residential access, large excavators for commercial projects, and specialized equipment for hillside and restricted access locations. All operators are certified and experienced in Bay Area construction conditions.
              </p>

              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Excavation Process & Safety</h4>
                <ol className="list-decimal pl-6 space-y-2 text-sm">
                  <li>Underground utility location and marking through 811 notification system</li>
                  <li>Site survey and existing condition documentation with photo records</li>
                  <li>Soil testing and analysis for bearing capacity and expansion characteristics</li>
                  <li>Excavation plan development with proper slope angles and shoring requirements</li>
                  <li>Precision excavation using GPS-guided equipment and manual trimming</li>
                  <li>Soil classification and disposal according to environmental regulations</li>
                  <li>Final grade verification with laser leveling and elevation certificates</li>
                  <li>Base preparation including aggregate placement and compaction testing</li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Drainage System Design</h3>
              <p>
                Effective drainage is essential for concrete longevity in Bay Area&apos;s variable rainfall patterns. We design and install comprehensive drainage systems including surface grading, subsurface drains, and storm water management features that handle both normal precipitation and extreme weather events.
              </p>
              <p>
                Our drainage solutions include French drain systems, area drains, and bioswale integration that comply with local storm water management requirements. We coordinate with municipal storm drain systems and environmental agencies for projects affecting natural drainage patterns.
              </p>

              <h3 className="text-2xl font-semibent text-slate-800 mb-6">Base Preparation & Compaction</h3>
              <p>
                Proper base preparation provides the foundation for long-lasting concrete installations. We utilize engineered aggregate base materials specifically selected for Bay Area soil conditions and concrete applications. Base thickness and composition are determined through geotechnical analysis and structural requirements.
              </p>
              <p>
                Compaction is achieved using vibratory plate compactors, pneumatic rollers, and proof-rolling procedures that ensure uniform density and bearing capacity. We perform nuclear density testing and other quality control measures to verify compaction standards are met throughout the base preparation process.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Utility Coordination & Protection</h3>
              <p>
                Bay Area construction sites often have complex utility networks including gas, electric, water, sewer, telecommunications, and cable services. We coordinate with all utility companies for accurate location marking and maintain safe excavation practices around existing infrastructure.
              </p>
              <p>
                Our utility protection procedures include hand digging verification, temporary support systems for exposed utilities, and coordination with utility companies for any required relocations or modifications. We maintain comprehensive insurance coverage and follow OSHA safety standards for excavation around utilities.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Environmental Compliance</h3>
              <p>
                Site preparation projects must comply with California environmental regulations including storm water pollution prevention, soil disposal requirements, and protection of sensitive areas. We obtain required permits and implement environmental protection measures throughout the construction process.
              </p>
              <p>
                Our environmental compliance includes erosion control installation, dust suppression measures, and proper handling of contaminated soils where encountered. We coordinate with environmental consultants and regulatory agencies to ensure full compliance with local, state, and federal requirements.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
                <h4 className="font-semibold text-amber-800 mb-3">Specialized Bay Area Services</h4>
                <ul className="text-amber-700 space-y-2 text-sm">
                  <li>• <strong>Hillside Stabilization:</strong> Temporary and permanent slope protection systems</li>
                  <li>• <strong>Seismic Considerations:</strong> Foundation preparation for earthquake resistance</li>
                  <li>• <strong>Access Solutions:</strong> Crane pads and equipment staging for difficult sites</li>
                  <li>• <strong>Neighbor Protection:</strong> Vibration monitoring and property protection measures</li>
                  <li>• <strong>Historic Preservation:</strong> Careful excavation around historic structures and landscapes</li>
                </ul>  
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Quality Control & Testing</h3>
              <p>
                Our quality control program includes comprehensive testing and documentation throughout the site preparation process. Soil testing, compaction verification, and grade certification ensure that prepared sites meet engineering specifications and provide optimal foundation conditions for concrete construction.
              </p>
              <p>
                We provide detailed documentation including as-built drawings, compaction test results, and photographic records of completed work. This documentation is valuable for future maintenance, modifications, and property records, and is often required by building departments and structural engineers.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Equipment & Technology</h3>
              <p>
                Wade & Co. Construction maintains state-of-the-art excavation and site preparation equipment including GPS-guided machines, laser leveling systems, and specialized compaction equipment. Our fleet is maintained to the highest standards and operated by certified professionals with extensive Bay Area experience.
              </p>
              <p>
                We utilize 3D modeling and design software to optimize excavation plans, minimize soil movement, and coordinate with architectural and engineering teams. This technology reduces project costs, improves accuracy, and minimizes environmental impact through efficient site utilization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project Right?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Contact Wade & Co. Construction for professional site preparation and excavation services that ensure your concrete project&apos;s long-term success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-amber-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendly.com/wadeconcreteco/30min', '_blank')}
            >
              <Map className="w-5 h-5 mr-2" />
              Schedule Site Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
              <Phone className="w-5 h-5 mr-2" />
              Call (925) 503-3200
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}