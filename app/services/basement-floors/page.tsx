"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  FileText, 
  CheckCircle, 
  ArrowLeft,
  Droplets,
  Home,
  Shield,
  Thermometer,
  Wrench,
  Zap
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BasementFloorsPage() {
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
      <section className="py-16 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Droplets className="w-8 h-8 text-blue-600 mr-3" />
                <span className="text-blue-600 font-semibold text-lg">MOISTURE-RESISTANT SOLUTIONS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Professional Basement Floor Installation
                <span className="text-blue-600"> Bay Area Moisture Control Experts</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Specialized basement concrete floors designed for Bay Area groundwater conditions. Professional moisture control, waterproof membrane installation, and vapor barrier systems serving Oakland, Berkeley, Fremont, Pleasanton, Dublin, Livermore, and San Jose with comprehensive basement finishing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
                >
                  <Droplets className="w-5 h-5 mr-2" />
                  Schedule Basement Assessment
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
                alt="Professional basement floor installation by Wade & Co Construction in Bay Area"
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
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Complete Basement Floor Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Moisture Control Systems</h3>
                <p className="text-slate-600">Comprehensive waterproofing with vapor barriers and drainage systems for Bay Area conditions.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Home className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Finished Basement Floors</h3>
                <p className="text-slate-600">Beautiful, livable basement spaces with proper insulation and climate control integration.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Foundation Repair</h3>
                <p className="text-slate-600">Structural basement floor repairs with crack sealing and reinforcement systems.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Thermometer className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Insulated Floor Systems</h3>
                <p className="text-slate-600">Energy-efficient basement floors with thermal breaks and radiant heating compatibility.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Wrench className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Utility Integration</h3>
                <p className="text-slate-600">Basement floors with integrated utilities, floor drains, and sump pump systems.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Emergency Restoration</h3>
                <p className="text-slate-600">Flood damage restoration and emergency basement floor repair services.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Bay Area Basement Floor Expertise</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                Basement floors in the Bay Area face unique challenges from seasonal groundwater fluctuations, expansive clay soils, and seismic activity. Wade & Co. Construction specializes in moisture-resistant basement floor systems that address these specific regional conditions while creating comfortable, functional living spaces that enhance property value and expand usable square footage.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Bay Area Basement Challenges</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Groundwater & Moisture Issues</h4>
                  <p>
                    Bay Area basements experience varying groundwater levels throughout the year, with winter rainfall and spring runoff creating significant moisture pressure. Oakland and Berkeley hillside locations often have complex drainage patterns, while Fremont and San Jose areas may have high water tables that require specialized waterproofing approaches.
                  </p>
                  <p className="mt-4">
                    Our moisture control systems include comprehensive waterproofing membranes, French drain integration, and vapor barrier installation that prevents both liquid water infiltration and water vapor transmission. We coordinate with drainage contractors to ensure complete basement moisture management.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Soil Conditions & Foundation Movement</h4>
                  <p>
                    Expansive clay soils common throughout the East Bay and Peninsula can cause significant foundation movement and basement floor cracking. Our basement floor systems include expansion joints, reinforcement systems, and flexible connections that accommodate soil movement without compromising structural integrity.
                  </p>
                  <p className="mt-4">
                    Tri-Valley locations like Pleasanton, Dublin, and Livermore often have mixed soil conditions requiring site-specific analysis and customized basement floor solutions. We perform soil testing and structural analysis to determine optimal installation methods for each location.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Moisture Control Systems</h3>
              <p>
                Effective basement moisture control requires integrated systems that address both external water intrusion and internal humidity control. Our basement floor installations include comprehensive waterproofing that extends from foundation walls to floor surfaces, creating complete moisture barriers that protect both structural elements and interior finishes.
              </p>
              <p>
                We utilize advanced waterproofing membranes, crystalline admixtures, and vapor barrier systems that exceed California building code requirements. Our moisture control systems coordinate with HVAC contractors to ensure proper ventilation and dehumidification for optimal indoor air quality.
              </p>

              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Basement Floor Installation Process</h4>
                <ol className="list-decimal pl-6 space-y-2 text-sm">
                  <li>Comprehensive site evaluation including soil testing and moisture assessment</li>
                  <li>Excavation and preparation with proper drainage and utility coordination</li>
                  <li>Waterproofing membrane installation with sealed joints and penetrations</li>
                  <li>Vapor barrier placement with proper overlap and sealing procedures</li>
                  <li>Insulation installation for thermal efficiency and comfort (where required)</li>
                  <li>Reinforcement placement including welded wire mesh or rebar systems</li>
                  <li>Concrete placement using low-permeability mixes with waterproofing additives</li>
                  <li>Surface finishing with appropriate textures for intended use</li>
                  <li>Control joint cutting and sealing to prevent random cracking</li>
                  <li>Curing and sealing with moisture-resistant protective coatings</li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Finished Basement Applications</h3>
              <p>
                Modern basement finishing requires concrete floors that serve as foundations for living spaces, home offices, recreational areas, and storage facilities. Our finished basement floors include proper moisture control, thermal insulation, and surface preparation for flooring materials including tile, carpet, hardwood, and luxury vinyl planks.
              </p>
              <p>
                We coordinate with interior designers and basement finishing contractors to ensure concrete floors meet the specific requirements of intended uses. This includes proper electrical conduit placement, floor drain installation, and surface treatments that optimize adhesion for finish flooring materials.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Utility Integration & Infrastructure</h3>
              <p>
                Basement floors often require integration with plumbing, electrical, and HVAC systems that serve both basement areas and upper floors. Our installations include proper coordination for utility placement, floor drain connections, and sump pump integration that maintains functionality while preserving moisture control integrity.
              </p>
              <p>
                We work with mechanical contractors to ensure proper placement of utilities within concrete floors while maintaining structural integrity and waterproofing performance. This includes coordination for radiant heating systems, electrical conduits, and plumbing rough-ins that serve finished basement spaces.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Structural Repairs & Reinforcement</h3>
              <p>
                Existing basement floors may require structural repairs due to settling, cracking, or water damage. Our repair services include crack injection, surface preparation, and reinforcement installation that restores structural integrity while addressing underlying moisture and drainage issues.
              </p>
              <p>
                Seismic retrofitting considerations are particularly important for Bay Area basement floors, requiring connections to foundation walls and upper floor framing that resist earthquake forces. We coordinate with structural engineers to ensure basement floor systems contribute to overall building seismic performance.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="font-semibold text-blue-800 mb-3">Bay Area Specialization</h4>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• <strong>Seasonal Moisture Management:</strong> Systems designed for Bay Area rainfall patterns and groundwater fluctuations</li>
                  <li>• <strong>Soil Condition Expertise:</strong> Solutions for expansive clays, bedrock, and mixed soil conditions</li>
                  <li>• <strong>Seismic Integration:</strong> Basement floors designed to work with seismic retrofitting systems</li>
                  <li>• <strong>Local Code Compliance:</strong> Knowledge of municipal requirements and permit procedures</li>
                  <li>• <strong>Climate Considerations:</strong> Thermal performance optimization for Bay Area temperature variations</li>
                </ul>  
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Energy Efficiency & Comfort</h3>
              <p>
                Modern basement floors contribute significantly to home energy efficiency through proper insulation, thermal bridges elimination, and integration with home heating and cooling systems. Our installations include options for radiant floor heating, thermal mass optimization, and moisture control that maintains indoor air quality.
              </p>
              <p>
                We utilize advanced insulation techniques including under-slab insulation, perimeter thermal breaks, and vapor-permeable systems that prevent moisture problems while maintaining energy efficiency. This is particularly important in Bay Area homes where basement spaces serve as primary living areas.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Emergency Services & Restoration</h3>
              <p>
                Basement flooding and water damage require immediate professional response to prevent structural damage and mold growth. Our emergency services include water extraction coordination, damage assessment, and rapid restoration planning that returns basement spaces to functional condition.
              </p>
              <p>
                We maintain emergency response capabilities throughout the Bay Area with rapid mobilization teams and specialized equipment for basement floor restoration. Our restoration services include moisture control system upgrades and preventive measures that reduce future flood risk.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Long-term Performance & Maintenance</h3>
              <p>
                Properly installed basement floors provide decades of service with minimal maintenance when designed and constructed for Bay Area conditions. We provide specific maintenance recommendations including moisture monitoring, drain maintenance, and surface care that preserves both structural integrity and aesthetic appearance.
              </p>
              <p>
                Our maintenance services include periodic inspections, waterproofing system evaluation, and preventive maintenance that extends basement floor service life. We offer refinishing and upgrade services that adapt basement spaces to changing family needs and building code requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for a Dry, Comfortable Basement?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact Wade & Co. Construction for professional basement floor installation with comprehensive moisture control systems designed for Bay Area conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
            >
              <Droplets className="w-5 h-5 mr-2" />
              Schedule Assessment
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