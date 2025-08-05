"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  CheckCircle, 
  ArrowLeft,
  AlertTriangle,
  Shield,
  Home,
  Building,
  Target,
  Wrench,
  Info,
  Download
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SeismicSafetyGuidePage() {
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
                className="bg-red-600 hover:bg-red-700"
                onClick={() => window.open('https://calendly.com/wadeconcreteco/30min', '_blank')}
              >
                Schedule Assessment
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
                <span className="text-red-600 font-semibold text-lg">CRITICAL SAFETY INFORMATION</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Bay Area Seismic Safety Guide
                <span className="text-red-600"> Earthquake Preparedness for Property Owners</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Comprehensive earthquake safety guide for Bay Area property owners covering seismic risk assessment, building vulnerability, retrofitting requirements, and emergency preparedness. Essential information for Oakland, Berkeley, Fremont, Pleasanton, Dublin, Livermore, and San Jose properties with practical safety recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => window.open('https://calendly.com/wadeconcreteco/30min', '_blank')}
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Get Seismic Assessment
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300">
                  <Download className="w-5 h-5 mr-2" />
                  Download Safety Checklist
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/seismic-work.jpg"
                alt="Seismic safety and earthquake retrofitting guide by Wade & Co Construction"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Essential Earthquake Safety Topics</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Bay Area Fault Lines</h3>
                <p className="text-slate-600">Understanding local earthquake risks from San Andreas, Hayward, and Calaveras fault systems.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Home className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Building Vulnerability</h3>
                <p className="text-slate-600">Identifying structural weaknesses in pre-1980 construction and earthquake safety risks.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Retrofitting Solutions</h3>
                <p className="text-slate-600">Professional seismic upgrades including anchor bolts, shear walls, and cripple wall bracing.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Building className="w-12 h-12 text-orange-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Soft Story Buildings</h3>
                <p className="text-slate-600">Understanding mandatory retrofitting requirements for soft story structures in Bay Area cities.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Wrench className="w-12 h-12 text-orange-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Emergency Preparedness</h3>
                <p className="text-slate-600">Post-earthquake response, damage assessment, and emergency repair coordination.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Financial Resources</h3>
                <p className="text-slate-600">Grants, insurance benefits, and financing options for seismic retrofitting projects.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Guide Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Complete Bay Area Seismic Safety Guide</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-800 mb-3">⚠️ Critical Safety Alert</h3>
                <p className="text-red-700 font-medium">
                  The Bay Area has a 72% probability of experiencing a magnitude 6.7 or greater earthquake in the next 30 years. Properties built before 1980 face significant risk of structural damage or collapse during major earthquakes. Professional seismic assessment and retrofitting can save lives and prevent catastrophic property damage.
                </p>
              </div>

              <p className="text-xl leading-relaxed">
                The San Francisco Bay Area sits at the intersection of multiple active fault systems, making earthquake preparedness essential for all property owners. This comprehensive guide provides critical safety information, retrofitting requirements, and emergency preparedness strategies developed by seismic safety experts and earthquake engineering professionals.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Understanding Bay Area Earthquake Risk</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Major Fault Systems</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h5 className="font-semibold text-red-700 mb-2">San Andreas Fault</h5>
                      <p className="text-sm">Runs along the Peninsula; capable of magnitude 8.0+ earthquakes affecting entire Bay Area.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h5 className="font-semibold text-red-700 mb-2">Hayward Fault</h5>
                      <p className="text-sm">Runs through Oakland, Berkeley, Fremont; 33% probability of major earthquake by 2032.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h5 className="font-semibold text-red-700 mb-2">Calaveras Fault</h5>
                      <p className="text-sm">Affects East Bay and South Bay; interconnected with other regional fault systems.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Location-Specific Risks</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-1" />
                      <div>
                        <p className="font-semibold">Oakland & Berkeley:</p>
                        <p className="text-sm">Directly on Hayward Fault; highest immediate risk in Bay Area.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mt-1" />
                      <div>
                        <p className="font-semibold">Fremont & Hayward:</p>
                        <p className="text-sm">Multiple fault exposure; liquefaction risk in low-lying areas.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1" />
                      <div>
                        <p className="font-semibold">Tri-Valley (Pleasanton, Dublin, Livermore):</p>
                        <p className="text-sm">Moderate risk; ground shaking amplification in certain areas.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mt-1" />
                      <div>
                        <p className="font-semibold">San Jose & Peninsula:</p>
                        <p className="text-sm">San Andreas proximity; soft soil amplification effects.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Building Vulnerability Assessment</h3>
              
              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">High-Risk Building Characteristics</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-red-700 mb-3">🏠 Residential Buildings (Pre-1980)</h5>
                    <ul className="text-sm space-y-1 text-slate-600">
                      <li>• No foundation anchor bolts</li>
                      <li>• Unbraced cripple walls (short walls under house)</li>
                      <li>• Inadequate shear wall systems</li>
                      <li>• Unreinforced masonry foundations</li>
                      <li>• Large openings without structural support</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-700 mb-3">🏢 Commercial Buildings</h5>
                    <ul className="text-sm space-y-1 text-slate-600">
                      <li>• Soft story ground floors (parking, retail)</li>
                      <li>• Unreinforced masonry (URM) construction</li>
                      <li>• Tilt-up concrete with inadequate connections</li>
                      <li>• Pre-Northridge steel moment frames</li>
                      <li>• Non-ductile concrete frame construction</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Professional Seismic Retrofitting Solutions</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-4 flex items-center">
                    <Target className="w-5 h-5 text-blue-600 mr-2" />
                    Foundation Anchor Bolts
                  </h4>
                  <p className="mb-3">
                    Foundation anchor bolts connect your house to its foundation, preventing the structure from sliding off during earthquake motion. This is the most critical and cost-effective seismic upgrade.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-slate-700">Installation Process:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Core drilling through existing foundation</li>
                        <li>Installation of galvanized anchor bolts</li>
                        <li>Epoxy anchoring for maximum strength</li>
                        <li>Oversized washers for load distribution</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">Benefits:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Prevents house from sliding off foundation</li>
                        <li>Required by most retrofitting programs</li>
                        <li>Insurance premium reductions available</li>
                        <li>Typical cost: $3,000-$7,000</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-4 flex items-center">
                    <Building className="w-5 h-5 text-blue-600 mr-2" />
                    Cripple Wall Bracing
                  </h4>
                  <p className="mb-3">
                    Cripple walls are short walls between the foundation and first floor that often collapse during earthquakes. Bracing these walls with plywood sheathing and proper connections dramatically improves survival rates.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-slate-700">Bracing Components:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Structural grade plywood sheathing</li>
                        <li>Engineered fastening systems</li>
                        <li>Top and bottom plate connections</li>
                        <li>Blocking and framing reinforcement</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">Protection Provided:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Prevents cripple wall collapse</li>
                        <li>Maintains structural integrity</li>
                        <li>Protects utilities and access</li>
                        <li>Typical cost: $4,000-$10,000</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-4 flex items-center">
                    <Shield className="w-5 h-5 text-blue-600 mr-2" />
                    Soft Story Retrofitting
                  </h4>
                  <p className="mb-3">
                    Soft story buildings have large openings (garages, retail) on ground floors that create structural weaknesses. Many Bay Area cities mandate retrofitting for these high-risk buildings.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-slate-700">Retrofitting Methods:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Steel moment frame installation</li>
                        <li>Reinforced concrete shear walls</li>
                        <li>Steel braced frame systems</li>
                        <li>Foundation strengthening</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">Mandatory Programs:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>San Francisco: Compliance required</li>
                        <li>Oakland: Active enforcement program</li>
                        <li>Berkeley: Mandatory retrofitting</li>
                        <li>Typical cost: $75,000-$200,000+</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Municipal Retrofitting Programs</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-4">Available Incentives</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span><strong>FEMA Grants:</strong> Up to $5,000 for eligible retrofitting projects</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span><strong>Earthquake Safety Foundation:</strong> Low-interest loans available</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span><strong>Insurance Discounts:</strong> Premium reductions up to 25%</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span><strong>Property Tax Benefits:</strong> Some jurisdictions offer tax incentives</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span><strong>PACE Financing:</strong> Property-assessed financing options</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-4">Municipal Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <Info className="w-4 h-4 text-blue-500 mt-1" />
                      <span><strong>Oakland:</strong> Earthquake Safety Program with rebates</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Info className="w-4 h-4 text-blue-500 mt-1" />
                      <span><strong>Berkeley:</strong> Transfer tax funding for retrofits</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Info className="w-4 h-4 text-blue-500 mt-1" />
                      <span><strong>San Francisco:</strong> Mandatory soft story program</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Info className="w-4 h-4 text-blue-500 mt-1" />
                      <span><strong>Fremont:</strong> Expedited permitting for seismic upgrades</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Info className="w-4 h-4 text-blue-500 mt-1" />
                      <span><strong>Regional Programs:</strong> ABAG earthquake preparedness resources</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Emergency Preparedness & Response</h3>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h4 className="font-semibold text-orange-800 mb-4">Post-Earthquake Safety Checklist</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-orange-700 mb-2">Immediate Actions:</p>
                    <ul className="space-y-1">
                      <li>□ Check for injuries and render first aid</li>
                      <li>□ Turn off gas if you smell leaks</li>
                      <li>□ Check for electrical hazards</li>
                      <li>□ Inspect for structural damage</li>
                      <li>□ Stay out of damaged buildings</li>
                      <li>□ Be prepared for aftershocks</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-orange-700 mb-2">Damage Assessment:</p>
                    <ul className="space-y-1">
                      <li>□ Document damage with photos</li>
                      <li>□ Contact insurance company</li>
                      <li>□ Call professional structural inspector</li>
                      <li>□ Avoid entering unsafe structures</li>
                      <li>□ Contact emergency repair services</li>
                      <li>□ Coordinate with local authorities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Professional Assessment & Next Steps</h3>
              
              <p>
                Every Bay Area property should receive professional seismic assessment to identify specific vulnerabilities and appropriate retrofitting solutions. Wade & Co. Construction provides comprehensive seismic evaluations that include structural analysis, retrofitting recommendations, cost estimates, and coordination with available financial incentives.
              </p>
              
              <p>
                Our seismic assessment includes detailed inspection of foundation connections, cripple wall conditions, structural framing, and identification of soft story vulnerabilities. We provide written reports with prioritized recommendations and coordinate with structural engineers where required for complex analysis.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="font-semibold text-blue-800 mb-3">Why Choose Professional Retrofitting</h4>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• <strong>Life Safety:</strong> Professional retrofitting dramatically improves survival rates during major earthquakes</li>
                  <li>• <strong>Building Code Compliance:</strong> Ensures work meets current seismic design standards</li>
                  <li>• <strong>Insurance Benefits:</strong> Qualifying retrofits reduce earthquake insurance premiums</li>
                  <li>• <strong>Property Value:</strong> Seismic upgrades increase property values and marketability</li>
                  <li>• <strong>Peace of Mind:</strong> Professional certification provides confidence in earthquake safety</li>
                </ul>  
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Taking Action: Your Seismic Safety Plan</h3>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-slate-800 mb-4">Recommended Action Steps</h4>
                <ol className="list-decimal pl-6 space-y-3">
                  <li><strong>Schedule Professional Assessment:</strong> Contact qualified seismic retrofit contractor for comprehensive evaluation</li>
                  <li><strong>Prioritize Critical Upgrades:</strong> Focus on foundation anchoring and cripple wall bracing first</li>
                  <li><strong>Research Financial Incentives:</strong> Investigate grants, loans, and insurance discounts available in your area</li>
                  <li><strong>Obtain Multiple Quotes:</strong> Compare contractors specializing in seismic retrofitting</li>
                  <li><strong>Plan for Permits:</strong> Many retrofits require building permits and inspections</li>
                  <li><strong>Schedule Work Promptly:</strong> Don&apos;t delay - earthquakes don&apos;t wait for convenient timing</li>
                  <li><strong>Update Emergency Plans:</strong> Develop family emergency response and communication plans</li>
                  <li><strong>Review Insurance Coverage:</strong> Ensure adequate earthquake insurance coverage for your property</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Don&apos;t Wait for the Next Earthquake</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Protect your family and property with professional seismic assessment and retrofitting. Contact Wade & Co. Construction for comprehensive earthquake safety evaluation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendly.com/wadeconcreteco/30min', '_blank')}
            >
              <Shield className="w-5 h-5 mr-2" />
              Schedule Seismic Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              <Phone className="w-5 h-5 mr-2" />
              Emergency: (925) 503-3200
            </Button>
          </div>
          <div className="mt-6 p-4 bg-red-700 rounded-lg max-w-md mx-auto">
            <p className="text-red-100 text-sm">
              <AlertTriangle className="w-4 h-4 inline mr-2" />
              72% probability of major earthquake in next 30 years
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}