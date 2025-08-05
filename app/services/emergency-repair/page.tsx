"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  ArrowLeft,
  AlertTriangle,
  Clock,
  Shield,
  Wrench,
  Zap,
  Car
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EmergencyRepairPage() {
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
                onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
              >
                Emergency Service
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
                <span className="text-red-600 font-semibold text-lg">24/7 EMERGENCY RESPONSE</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Emergency Concrete Repair Services
                <span className="text-red-600"> Bay Area Rapid Response</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                24/7 emergency concrete repair services for urgent safety hazards and structural damage. Immediate response for damaged driveways, sidewalks, foundations, and structural concrete throughout Oakland, Berkeley, Fremont, Pleasanton, Dublin, Livermore, and San Jose with rapid mobilization and temporary safety measures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
                >
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Emergency Service Now
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-red-300 text-red-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (925) 503-3200
                </Button>
              </div>
              <div className="mt-6 p-4 bg-red-100 border-l-4 border-red-500 rounded">
                <p className="text-red-800 font-semibold">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Average Response Time: 2-4 hours throughout Bay Area
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/concrete-worker.jpg"
                alt="Emergency concrete repair services by Wade & Co Construction in Bay Area"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">24/7 Emergency Response Services</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            When concrete emergencies threaten safety or property, Wade & Co. Construction provides immediate professional response with rapid assessment, temporary stabilization, and permanent repair solutions.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg border-l-4 border-red-500">
              <CardContent className="p-8 text-center">
                <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Structural Damage</h3>
                <p className="text-slate-600">Foundation cracks, settlement damage, and structural concrete failures requiring immediate stabilization.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg border-l-4 border-red-500">
              <CardContent className="p-8 text-center">
                <Car className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Vehicle Impact Damage</h3>
                <p className="text-slate-600">Collision damage to driveways, retaining walls, and concrete structures creating safety hazards.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg border-l-4 border-red-500">
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Earthquake Damage</h3>
                <p className="text-slate-600">Seismic damage assessment and emergency repairs to foundations and structural elements.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg border-l-4 border-orange-500">
              <CardContent className="p-8 text-center">
                <Wrench className="w-12 h-12 text-orange-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Utility Excavation Damage</h3>
                <p className="text-slate-600">Emergency repairs for concrete damaged during utility work or excavation activities.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg border-l-4 border-orange-500">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-orange-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Safety Hazard Mitigation</h3>
                <p className="text-slate-600">Immediate hazard elimination with barriers, temporary repairs, and public safety measures.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg border-l-4 border-orange-500">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-orange-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Weather-Related Damage</h3>
                <p className="text-slate-600">Storm damage, flooding effects, and weather-related concrete deterioration repairs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Bay Area Emergency Concrete Expertise</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                Concrete emergencies in the Bay Area require immediate professional response due to seismic activity, unstable soil conditions, and high-traffic urban environments. Wade & Co. Construction maintains 24/7 emergency response capabilities with rapid mobilization teams, specialized equipment, and comprehensive emergency procedures that prioritize public safety while developing effective permanent repair strategies.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-800 mb-3">When to Call Emergency Concrete Services</h3>
                <ul className="text-red-700 space-y-2">
                  <li>• <strong>Immediate Safety Hazards:</strong> Unstable concrete threatening people or property</li>
                  <li>• <strong>Structural Damage:</strong> Foundation cracks, settlement, or structural failure</li>
                  <li>• <strong>Public Access Issues:</strong> Damaged sidewalks, driveways, or access routes</li>
                  <li>• <strong>Utility Exposure:</strong> Damaged concrete exposing gas, water, or electrical lines</li>
                  <li>• <strong>Vehicle Accessibility:</strong> Driveway or parking damage preventing vehicle access</li>
                  <li>• <strong>Weather Damage:</strong> Storm or flood damage requiring immediate stabilization</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Emergency Response Process</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Immediate Response (0-2 Hours)</h4>
                  <p>
                    Upon receiving emergency calls, our dispatch system immediately mobilizes the nearest response team with appropriate equipment and materials. Initial response includes site safety assessment, hazard identification, and implementation of immediate protective measures including barriers, warning signs, and temporary stabilization.
                  </p>
                  <p className="mt-4">
                    We coordinate with emergency services, utility companies, and local authorities as required for public safety protection. Initial damage assessment includes photographic documentation, structural evaluation, and development of temporary stabilization plans that address immediate safety concerns.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Assessment & Planning (2-4 Hours)</h4>
                  <p>
                    Comprehensive damage assessment includes structural analysis, underlying cause identification, and development of both temporary and permanent repair strategies. We coordinate with structural engineers, insurance adjusters, and property owners to develop comprehensive repair plans that address both immediate safety and long-term functionality.
                  </p>
                  <p className="mt-4">
                    Emergency planning includes material procurement, permit coordination where required, and scheduling of permanent repairs that minimize disruption while ensuring complete restoration of structural integrity and functionality.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Bay Area Emergency Scenarios</h3>
              <p>
                Bay Area concrete emergencies often result from the region&apos;s unique geological and environmental conditions. Earthquake damage is a primary concern, with concrete structures experiencing cracking, settlement, and structural displacement during seismic events. Our emergency teams are trained in seismic damage assessment and specialized earthquake repair techniques.
              </p>
              <p>
                Expansive clay soils common throughout Oakland, Berkeley, and East Bay locations can cause sudden concrete failure during seasonal moisture changes. Winter rainfall can trigger rapid soil expansion, causing concrete driveways, sidewalks, and foundations to crack or heave unexpectedly, creating immediate safety hazards.
              </p>

              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Emergency Response Capabilities</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-slate-700 mb-2">Equipment & Materials</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Mobile concrete mixing and pumping equipment</li>
                      <li>• Emergency shoring and stabilization materials</li>
                      <li>• Rapid-set concrete and repair compounds</li>
                      <li>• Safety barriers and traffic control equipment</li>
                      <li>• Structural analysis and measurement tools</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-700 mb-2">Coordination Services</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Emergency services and first responder coordination</li>
                      <li>• Utility company notification and coordination</li>
                      <li>• Insurance company communication and documentation</li>
                      <li>• Municipal permit and inspection coordination</li>
                      <li>• Engineering consultation and structural analysis</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Temporary Stabilization Techniques</h3>
              <p>
                Emergency concrete repairs often require temporary stabilization measures that provide immediate safety while allowing time for comprehensive permanent repairs. Our temporary stabilization techniques include structural shoring, crack injection, and surface stabilization that prevents further deterioration while maintaining functionality.
              </p>
              <p>
                We utilize rapid-setting materials and emergency repair compounds that provide immediate strength and durability while weather-resistant barriers protect repair areas during permanent restoration. Temporary measures are designed to integrate seamlessly with permanent repairs, minimizing overall project costs and disruption.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Permanent Repair Solutions</h3>
              <p>
                Following emergency stabilization, permanent repairs address underlying causes while restoring full structural integrity and functionality. Our permanent repair solutions include comprehensive damage removal, reinforcement installation, and reconstruction using materials and techniques that exceed original performance specifications.
              </p>
              <p>
                Permanent repairs incorporate lessons learned from damage assessment, including drainage improvements, reinforcement upgrades, and design modifications that reduce future emergency risk. We provide comprehensive warranties on permanent repairs and ongoing maintenance recommendations that extend service life.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Insurance & Documentation</h3>
              <p>
                Emergency concrete repairs require comprehensive documentation for insurance claims, regulatory compliance, and permanent record keeping. Our documentation includes detailed damage assessment reports, photographic evidence, repair procedures, and materials specifications that support insurance claims and warranty coverage.
              </p>
              <p>
                We work directly with insurance adjusters, providing technical expertise and detailed cost estimates that ensure appropriate coverage for both emergency stabilization and permanent repairs. Our documentation meets industry standards and regulatory requirements for insurance claim processing.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h4 className="font-semibold text-orange-800 mb-3">Prevention & Risk Reduction</h4>
                <ul className="text-orange-700 space-y-2 text-sm">
                  <li>• <strong>Regular Inspections:</strong> Scheduled concrete assessment and maintenance programs</li>
                  <li>• <strong>Seismic Upgrades:</strong> Proactive retrofitting to reduce earthquake damage risk</li>
                  <li>• <strong>Drainage Improvements:</strong> Site modifications to prevent water-related damage</li>
                  <li>• <strong>Reinforcement Upgrades:</strong> Structural improvements that exceed minimum requirements</li>
                  <li>• <strong>Monitoring Systems:</strong> Early warning systems for settlement and structural movement</li>
                </ul>  
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Bay Area Municipal Coordination</h3>
              <p>
                Emergency concrete repairs in Bay Area municipalities require coordination with local building departments, public works agencies, and emergency management offices. We maintain current knowledge of municipal emergency procedures and can expedite permit processing for urgent safety repairs.
              </p>
              <p>
                Our emergency response includes coordination with traffic control authorities for street closures, utility companies for infrastructure protection, and environmental agencies where emergency repairs affect storm water or environmental protection systems. We ensure all emergency work complies with local regulations and safety requirements.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Cost Management & Budget Planning</h3>
              <p>
                Emergency concrete repairs require rapid decision-making while managing costs effectively. We provide immediate cost estimates for both temporary stabilization and permanent repairs, allowing property owners to make informed decisions about repair strategies and insurance coverage options.
              </p>
              <p>
                Our cost management includes identification of cost-effective repair alternatives, value engineering opportunities, and coordination with insurance coverage to optimize financial outcomes. We provide detailed cost breakdowns and budget planning assistance for complex emergency repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Don&apos;t Wait - Get Emergency Help Now</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            When concrete emergencies threaten safety or property, Wade & Co. Construction provides immediate professional response throughout the Bay Area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
            >
              <AlertTriangle className="w-5 h-5 mr-2" />
              Emergency Service Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              <Phone className="w-5 h-5 mr-2" />
              Call (925) 503-3200
            </Button>
          </div>
          <div className="mt-6 p-4 bg-red-700 rounded-lg">
            <p className="text-red-100 font-semibold">
              <Clock className="w-4 h-4 inline mr-2" />
              24/7 Emergency Response - Average Response Time: 2-4 Hours
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}