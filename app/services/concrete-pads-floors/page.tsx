"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  FileText, 
  CheckCircle, 
  ArrowLeft,
  Zap,
  Home,
  Car,
  Settings,
  Thermometer,
  Shield
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ConcretePadsFloorsPage() {
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
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Concrete Pads & Industrial Floors
                <span className="text-blue-600"> Professional Bay Area Installation</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Specialized concrete pads for equipment, HVAC units, generators, and storage buildings, plus durable garage and basement floors. Professional installation throughout Oakland, Berkeley, Fremont, Pleasanton, Dublin, Livermore, and San Jose with engineered solutions for industrial and residential applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
                >
                  <Settings className="w-5 h-5 mr-2" />
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
                alt="Professional concrete pads and floors by Wade & Co Construction in Bay Area"
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
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Complete Concrete Pad & Floor Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 text-slate-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Equipment Pads</h3>
                <p className="text-slate-600">Concrete pads for HVAC units, generators, pumps, and industrial equipment with proper leveling and drainage.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Car className="w-12 h-12 text-slate-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Garage Floors</h3>
                <p className="text-slate-600">Durable garage flooring with oil-resistant finishes and proper drainage for residential and commercial applications.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Home className="w-12 h-12 text-slate-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Basement Floors</h3>
                <p className="text-slate-600">Moisture-resistant basement flooring systems designed for Bay Area soil and groundwater conditions.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Settings className="w-12 h-12 text-slate-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Storage Building Pads</h3>
                <p className="text-slate-600">Engineered foundation pads for sheds, workshops, and accessory buildings with proper site preparation.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Thermometer className="w-12 h-12 text-slate-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">HVAC Equipment Pads</h3>
                <p className="text-slate-600">Vibration-dampening concrete pads for air conditioning units, heat pumps, and mechanical equipment.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-slate-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Industrial Flooring</h3>
                <p className="text-slate-600">Heavy-duty concrete floors for warehouses, manufacturing, and industrial facilities with specialized coatings.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Bay Area Concrete Pad & Floor Expertise</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                Concrete pads and floors serve critical functions in residential, commercial, and industrial applications throughout the Bay Area. Wade & Co. Construction brings specialized expertise in designing and installing concrete surfaces that provide stable, durable foundations for equipment, vehicles, and activities while addressing the unique challenges of Bay Area soil conditions, seismic requirements, and environmental factors.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Equipment Pad Engineering</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">HVAC & Mechanical Equipment</h4>
                  <p>
                    HVAC equipment pads require precise engineering to handle equipment loads, vibration dampening, and proper drainage. Our designs account for unit weights, refrigerant line connections, electrical conduit placement, and maintenance access requirements. We utilize specialized aggregate mixes and reinforcement systems that minimize vibration transmission to surrounding structures.
                  </p>
                  <p className="mt-4">
                    Bay Area installations must consider seismic anchoring requirements, with equipment pads designed to resist earthquake forces while maintaining level surfaces. We coordinate with HVAC contractors to ensure proper equipment mounting and utility connections that comply with mechanical and electrical codes.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Generator & Emergency Equipment</h4>
                  <p>
                    Standby generators require specialized concrete pads that accommodate fuel connections, exhaust systems, and transfer switch wiring. Our generator pads include integrated cable trenches, fuel line protection, and proper grounding systems that meet National Electrical Code (NEC) requirements and local fire department specifications.
                  </p>
                  <p className="mt-4">
                    Emergency equipment installations often require fast-track construction schedules and coordination with utility companies for service connections. We maintain emergency construction capabilities and can expedite generator pad installation for critical facilities including hospitals, data centers, and emergency services.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Garage Floor Systems</h3>
              <p>
                Garage floors endure heavy loads, chemical exposure, and temperature variations that require specialized concrete mixes and surface treatments. Our garage floor systems include proper slope for drainage, oil-resistant sealers, and reinforcement designed for vehicle loads and storage requirements.
              </p>
              <p>
                Bay Area garages often serve multiple functions including workshops, storage, and recreational activities. We design floors that accommodate various uses while providing easy maintenance and long-term durability. Optional features include integrated floor drains, utility trenches, and heated floor systems for comfort and functionality.
              </p>

              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Garage Floor Installation Process</h4>
                <ol className="list-decimal pl-6 space-y-2 text-sm">
                  <li>Site evaluation and existing floor removal if required for renovation projects</li>
                  <li>Excavation and base preparation with proper compaction and drainage systems</li>
                  <li>Vapor barrier installation to prevent moisture transmission from soil</li>
                  <li>Reinforcement placement including welded wire mesh or rebar systems</li>
                  <li>Concrete placement with specialized mixes for garage applications</li>
                  <li>Surface finishing with broom texture or smooth trowel finish as specified</li>
                  <li>Control joint cutting to prevent random cracking and ensure neat appearance</li>
                  <li>Curing process with appropriate techniques for garage environments</li>
                  <li>Sealer application with oil-resistant products for chemical protection</li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Basement Floor Solutions</h3>
              <p>
                Basement floors in Bay Area properties face unique challenges including groundwater pressure, soil moisture, and potential flooding during heavy rainfall periods. Our basement floor systems include comprehensive moisture control measures, proper drainage connections, and waterproof membranes that prevent water infiltration and humidity problems.
              </p>
              <p>
                We coordinate with waterproofing contractors and drainage specialists to create integrated systems that address both structural and moisture control requirements. Basement floors often require pumping systems, sump pit installation, and connection to existing drainage infrastructure that we integrate seamlessly into finished floor systems.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Storage Building & Shed Foundations</h3>
              <p>
                Storage buildings, workshops, and accessory structures require properly engineered foundation systems that provide level, stable surfaces while meeting local building code requirements. Our storage building pads include proper site preparation, frost protection where required, and anchor bolt installation for secure building attachment.
              </p>
              <p>
                Prefabricated storage buildings often have specific foundation requirements including dimensional accuracy, level tolerances, and anchor bolt placement. We work with building manufacturers to ensure foundation systems meet warranty requirements and provide optimal performance for the intended use.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Industrial & Commercial Flooring</h3>
              <p>
                Industrial concrete floors must withstand heavy equipment loads, chemical exposure, and intensive use while maintaining level surfaces and meeting safety requirements. Our industrial flooring utilizes high-strength concrete mixes, specialized reinforcement systems, and surface treatments designed for specific industrial applications.
              </p>
              <p>
                Commercial and industrial projects often require specialized finishes including epoxy coatings, urethane systems, and anti-static treatments. We coordinate with flooring contractors and facility engineers to provide base concrete systems that integrate properly with specified finish systems and performance requirements.
              </p>

              <div className="bg-slate-100 border-l-4 border-slate-500 p-6 mb-8">
                <h4 className="font-semibold text-slate-800 mb-3">Bay Area Specialization</h4>
                <ul className="text-slate-700 space-y-2 text-sm">
                  <li>• <strong>Seismic Considerations:</strong> Equipment anchoring and structural connections for earthquake resistance</li>
                  <li>• <strong>Soil Conditions:</strong> Foundation systems designed for expansive clay and variable soil conditions</li>
                  <li>• <strong>Drainage Integration:</strong> Coordination with Bay Area storm water management requirements</li>
                  <li>• <strong>Code Compliance:</strong> Local jurisdiction requirements for equipment installations and building permits</li>
                  <li>• <strong>Environmental Factors:</strong> Moisture control systems for coastal and inland climate variations</li>
                </ul>  
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Quality Control & Testing</h3>
              <p>
                Our quality control program for concrete pads and floors includes comprehensive testing of materials, placement procedures, and finished surfaces. We perform slump tests, air content measurements, and compression testing to ensure concrete meets specified performance requirements for each application.
              </p>
              <p>
                Floor flatness and levelness are critical for many applications, and we utilize laser leveling systems and precision surveying equipment to achieve specified tolerances. Final inspection includes load testing where required and documentation of completed work for warranty and maintenance purposes.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Maintenance & Longevity</h3>
              <p>
                Properly installed concrete pads and floors provide decades of service with minimal maintenance. We provide specific care instructions for each application including sealer reapplication schedules, crack monitoring procedures, and recommended cleaning methods that preserve surface integrity and appearance.
              </p>
              <p>
                Our maintenance services include periodic inspections, joint sealing, and surface treatment renewal. We offer repair and restoration services for damaged or worn surfaces, extending service life and maintaining functionality for critical applications.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Environmental Compliance</h3>
              <p>
                Concrete pad and floor installations must comply with environmental regulations including storm water management, soil protection, and waste disposal requirements. We implement appropriate environmental protection measures and coordinate with regulatory agencies where required for permitting and inspection compliance.
              </p>
              <p>
                Sustainable construction practices include recycled aggregate utilization, waste minimization, and energy-efficient construction methods that reduce environmental impact while maintaining performance standards. We provide documentation of environmental compliance measures for LEED certification and other green building programs where applicable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Professional Concrete Pads or Floors?</h2>
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            Contact Wade & Co. Construction for expert concrete pad and floor installation with engineered solutions for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-slate-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
            >
              <Settings className="w-5 h-5 mr-2" />
              Schedule Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-600">
              <Phone className="w-5 h-5 mr-2" />
              Call (925) 503-3200
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}