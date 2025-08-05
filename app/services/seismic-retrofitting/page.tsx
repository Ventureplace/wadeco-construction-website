"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  FileText, 
  CheckCircle, 
  ArrowLeft,
  Shield,
  AlertTriangle,
  Home,
  Building,
  Wrench,
  Target
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SeismicRetrofittingPage() {
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
                Schedule Inspection
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                <span className="text-red-600 font-semibold text-lg">EARTHQUAKE SAFETY CRITICAL</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Professional Seismic Retrofitting
                <span className="text-blue-600"> Bay Area Earthquake Safety</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Protect your Bay Area property from earthquake damage with professional seismic retrofitting. We bring older foundations up to current California building codes with anchor bolts, shear walls, and cripple wall bracing. Critical safety upgrades for Oakland, Berkeley, Fremont, Pleasanton, Dublin, Livermore, and San Jose properties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Schedule Safety Inspection
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: (925) 503-3200
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/seismic-work.jpg"
                alt="Professional seismic retrofitting by Wade & Co Construction in Bay Area"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Critical Seismic Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">Essential Earthquake Safety Upgrades</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Bay Area homes built before 1980 often lack critical earthquake safety features. Our comprehensive seismic retrofitting brings your foundation up to current California building codes.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Foundation Anchor Bolts</h3>
                <p className="text-slate-600">Secure your home to its foundation with properly installed anchor bolts that prevent sliding during earthquakes.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Building className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Cripple Wall Bracing</h3>
                <p className="text-slate-600">Strengthen short walls between foundation and first floor to prevent collapse during seismic events.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Shear Wall Installation</h3>
                <p className="text-slate-600">Add structural shear walls to resist lateral forces and maintain building integrity during earthquakes.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Home className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Soft Story Retrofitting</h3>
                <p className="text-slate-600">Strengthen buildings with large openings like garages or commercial spaces on ground floor.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Wrench className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Foundation Repairs</h3>
                <p className="text-slate-600">Address existing foundation damage and strengthen weak areas before seismic upgrades.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Code Compliance</h3>
                <p className="text-slate-600">Ensure all work meets current California building codes and local jurisdiction requirements.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Technical Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Bay Area Seismic Retrofitting Expertise</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Why Seismic Retrofitting is Critical in the Bay Area</h3>
                <p className="text-red-700">
                  The San Francisco Bay Area sits on multiple active fault lines including the San Andreas, Hayward, and Calaveras faults. Homes built before 1980 often lack modern earthquake safety features, making them vulnerable to foundation failure, structural collapse, and sliding off foundations during seismic events. Professional seismic retrofitting is not just recommended—it's essential for life safety and property protection.
                </p>
              </div>

              <p className="text-xl leading-relaxed">
                Wade & Co. Construction specializes in comprehensive seismic retrofitting for Bay Area properties, bringing decades of experience in foundation engineering, structural reinforcement, and California building code compliance. Our retrofitting projects have protected thousands of Bay Area homes and businesses from earthquake damage while increasing property values and providing peace of mind for owners and occupants.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Bay Area Seismic Risk Assessment</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">High-Risk Areas & Fault Lines</h4>
                  <p>
                    Oakland and Berkeley properties face significant risk from the nearby Hayward Fault, which geologists predict has a high probability of major earthquake activity. Fremont and surrounding East Bay areas are affected by multiple fault systems including the Calaveras and San Andreas faults. Our retrofitting designs account for specific ground motion characteristics and soil amplification effects unique to each location.
                  </p>
                  <p className="mt-4">
                    Tri-Valley communities like Pleasanton, Dublin, and Livermore, while somewhat farther from major fault lines, still experience significant ground shaking and require comprehensive seismic upgrades. We analyze site-specific seismic hazard data from the United States Geological Survey (USGS) to design appropriate retrofitting solutions.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Building Vulnerability Assessment</h4>
                  <p>
                    Homes built before 1980 typically lack foundation anchor bolts, have unbraced cripple walls, and may have unreinforced masonry elements. Our comprehensive assessment includes foundation inspection, structural analysis, and identification of specific vulnerabilities based on construction era, building materials, and previous modifications.
                  </p>
                  <p className="mt-4">
                    We utilize advanced diagnostic tools including ground-penetrating radar, structural vibration analysis, and materials testing to develop precise retrofitting specifications. Each project receives a customized engineering solution based on the specific building characteristics and seismic risk factors.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Foundation Anchoring Systems</h3>
              <p>
                Foundation anchor bolts are the primary connection between your home and its foundation, preventing the structure from sliding during earthquake motion. Many older Bay Area homes lack adequate anchoring or have corroded anchor systems that provide insufficient resistance to seismic forces.
              </p>
              <p>
                Our anchor bolt installation process includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Precise Drilling:</strong> Diamond core drilling through existing foundation walls at engineered spacing intervals</li>
                <li><strong>High-Strength Bolts:</strong> Installation of galvanized or stainless steel anchor bolts meeting current seismic design standards</li>
                <li><strong>Plate Washers:</strong> Oversized bearing plates to distribute loads across foundation and framing members</li>
                <li><strong>Epoxy Anchoring:</strong> Structural epoxy systems for maximum pull-out resistance in concrete foundations</li>
                <li><strong>Corrosion Protection:</strong> Specialized coatings and galvanizing for long-term durability in Bay Area conditions</li>
              </ul>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Cripple Wall Bracing & Reinforcement</h3>
              <p>
                Cripple walls are short walls between the foundation and first floor that are particularly vulnerable to collapse during earthquakes. These walls often lack adequate bracing and can fail catastrophically, causing the entire structure to collapse or become uninhabitable.
              </p>
              <p>
                Our cripple wall bracing systems include engineered plywood sheathing, structural framing reinforcement, and specialized connections designed to resist both in-plane and out-of-plane seismic forces. We utilize advanced fastening systems including structural screws, hurricane clips, and engineered nails that provide superior holding power compared to traditional construction methods.
              </p>

              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Cripple Wall Retrofit Process</h4>
                <ol className="list-decimal pl-6 space-y-2 text-sm">
                  <li>Comprehensive inspection and measurement of existing cripple wall conditions</li>
                  <li>Structural analysis and engineering calculations for required bracing capacity</li>
                  <li>Removal of existing utilities and obstacles for access to wall framing</li>
                  <li>Installation of additional framing members where required for proper load paths</li>
                  <li>Application of structural grade plywood sheathing with engineered fastening patterns</li>
                  <li>Connection of new bracing to foundation anchor bolts and upper floor framing</li>
                  <li>Utility rerouting and restoration with proper clearances and protection</li>
                  <li>Final inspection and documentation of completed work for permitting compliance</li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibent text-slate-800 mb-6">Shear Wall Construction</h3>
              <p>
                Shear walls provide critical lateral force resistance during seismic events, transferring earthquake forces from the building's upper levels down to the foundation. Our shear wall designs utilize engineered lumber, structural steel connections, and advanced fastening systems to create integrated structural systems capable of withstanding major earthquakes.
              </p>
              <p>
                Construction includes precise layout and installation of structural framing, application of engineered sheathing materials, and creation of continuous load paths from roof to foundation. We coordinate with structural engineers to ensure compliance with current International Building Code (IBC) and California Building Code (CBC) requirements.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Soft Story Retrofitting</h3>
              <p>
                Soft story buildings have large openings like garages, commercial spaces, or large windows on the ground floor that create structural weaknesses during earthquakes. Bay Area jurisdictions including San Francisco, Oakland, and Berkeley have mandatory soft story retrofitting programs for certain building types.
              </p>
              <p>
                Our soft story solutions include installation of steel moment frames, reinforced concrete shear walls, or engineered wood systems that provide adequate lateral force resistance while maintaining functionality of ground floor spaces. We work closely with architects and structural engineers to develop solutions that meet both structural and aesthetic requirements.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Code Compliance & Permitting</h3>
              <p>
                All seismic retrofitting work must comply with current California building codes and local jurisdiction requirements. We maintain current knowledge of code changes, permitting procedures, and inspection requirements across all Bay Area jurisdictions. Our projects include complete engineering documentation, structural calculations, and as-built drawings for permanent building records.
              </p>
              <p>
                We coordinate with local building departments throughout the permit and inspection process, ensuring timely approvals and final certificates of occupancy. Many jurisdictions offer streamlined permitting processes for seismic retrofitting, and we help property owners take advantage of available incentives and expedited procedures.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Financial Incentives & Insurance Benefits</h3>
              <p>
                Bay Area property owners may qualify for various financial incentives for seismic retrofitting including local government rebate programs, earthquake insurance premium reductions, and financing assistance through programs like PACE (Property Assessed Clean Energy) financing. We provide information and assistance with application procedures for available programs.
              </p>
              <p>
                Many insurance companies offer premium reductions for homes with professional seismic retrofitting, and properly retrofitted homes often qualify for additional earthquake insurance coverage options. We provide documentation and certification required by insurance companies to verify completed retrofitting work.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Emergency Response & Repair Services</h3>
              <p>
                Wade & Co. Construction provides 24/7 emergency response services for earthquake damage assessment and urgent safety repairs. Our emergency teams can quickly evaluate structural damage, implement temporary stabilization measures, and develop permanent repair plans to restore building safety and functionality.
              </p>
              <p>
                We maintain stockpiles of emergency repair materials and have established relationships with structural engineers and emergency services to provide rapid response capability throughout the Bay Area. Our emergency services include building evacuation recommendations, temporary shoring installation, and coordination with insurance adjusters and emergency management agencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Don't Wait for the Next Earthquake</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Protect your family and property with professional seismic retrofitting. Contact Wade & Co. Construction for a comprehensive earthquake safety assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
            >
              <Shield className="w-5 h-5 mr-2" />
              Schedule Safety Inspection
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              <Phone className="w-5 h-5 mr-2" />
              Emergency: (925) 503-3200
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}