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
  Accessibility,
  Clock,
  Flame,
  Wrench
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SpecializedServicesPage() {
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
                <span className="text-red-600 font-semibold text-lg">24/7 EMERGENCY AVAILABLE</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Specialized Concrete Services
                <span className="text-blue-600"> Expert Solutions Bay Area</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Professional specialized concrete services including ADA compliance work, fire-resistant applications, emergency repairs, and cutting-edge concrete solutions. Serving Oakland, Berkeley, Fremont, Pleasanton, Dublin, Livermore, and San Jose with expert technical knowledge and rapid response capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
                >
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Emergency Service
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (925) 503-3200
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/concrete-worker.jpg"
                alt="Specialized concrete services by Wade & Co Construction in Bay Area"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Expert Specialized Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Accessibility className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">ADA Compliance Work</h3>
                <p className="text-slate-600">Professional ADA-compliant concrete installations meeting federal accessibility standards.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Emergency Concrete Repair</h3>
                <p className="text-slate-600">24/7 emergency response for urgent concrete safety issues and structural problems.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Flame className="w-12 h-12 text-orange-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Fire-Resistant Concrete</h3>
                <p className="text-slate-600">Specialized fire-resistant concrete applications for industrial and safety-critical installations.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Wrench className="w-12 h-12 text-slate-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Concrete Cutting & Sawing</h3>
                <p className="text-slate-600">Precision concrete cutting and sawing services for modifications and repairs.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Rapid Response Services</h3>
                <p className="text-slate-600">Fast-track concrete solutions for time-critical projects and emergency situations.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Code Compliance Expertise</h3>
                <p className="text-slate-600">Expert knowledge of Bay Area building codes and permit requirements.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Bay Area Specialized Concrete Expertise</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                Specialized concrete applications require advanced technical knowledge, specialized materials, and expert installation techniques. Wade & Co. Construction provides comprehensive specialized services that address unique requirements for accessibility, safety, emergency situations, and cutting-edge concrete technologies throughout the Bay Area.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">ADA Compliance Concrete Work</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Federal ADA Requirements</h4>
                  <p>
                    The Americans with Disabilities Act (ADA) mandates specific requirements for public and commercial concrete installations. Our ADA compliance expertise includes proper slope calculations, surface textures, transition details, and dimensional requirements that ensure full accessibility compliance.
                  </p>
                  <p className="mt-4">
                    We stay current with ADA guidelines and local accessibility codes that vary across Bay Area jurisdictions. Oakland, Berkeley, San Francisco, and San Jose each have specific requirements that supplement federal standards, and we ensure compliance with the most restrictive applicable codes.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Specialized ADA Applications</h4>
                  <p>
                    ADA-compliant concrete work includes accessible parking spaces, curb ramps, sidewalk transitions, building entrances, and recreational facilities. Each application requires specific slope tolerances, surface finishes, and dimensional accuracy that we achieve through precision construction techniques.
                  </p>
                  <p className="mt-4">
                    Our ADA installations include tactile warning surfaces, proper drainage that doesn't impede accessibility, and durable finishes that maintain slip resistance over time. We coordinate with architects and disability consultants to ensure comprehensive accessibility compliance.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Emergency Concrete Repair Services</h3>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h4 className="font-semibold text-red-800 mb-3">24/7 Emergency Response</h4>
                <p className="text-red-700">
                  Concrete emergencies can pose immediate safety hazards requiring rapid professional response. Our emergency services include structural damage assessment, temporary stabilization, and permanent repairs that restore safety and functionality. We maintain emergency response capabilities throughout the Bay Area with rapid mobilization teams and emergency materials inventory.
                </p>
              </div>
              
              <p>
                Common concrete emergencies include earthquake damage, vehicle impacts, foundation settling, water damage, and structural failures. Our emergency response includes immediate site safety assessment, temporary protective measures, and development of permanent repair strategies that address underlying causes.
              </p>
              <p>
                We coordinate with structural engineers, insurance adjusters, and emergency services to provide comprehensive emergency response. Our emergency repairs meet or exceed original structural requirements and include documentation required for insurance claims and regulatory compliance.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Fire-Resistant Concrete Applications</h3>
              <p>
                Fire-resistant concrete utilizes specialized aggregates, admixtures, and reinforcement systems designed to maintain structural integrity under extreme heat conditions. Bay Area applications include industrial facilities, parking structures, tunnels, and buildings requiring enhanced fire protection.
              </p>
              <p>
                Our fire-resistant concrete installations meet California fire codes and ASTM standards for fire resistance ratings. We utilize lightweight aggregates, fiber reinforcement, and specialized curing procedures that optimize fire resistance while maintaining structural performance requirements.
              </p>

              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Specialized Materials & Techniques</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Lightweight Aggregates:</strong> Expanded shale and vermiculite for improved fire resistance</li>
                  <li><strong>Fiber Reinforcement:</strong> Steel and synthetic fibers that prevent explosive spalling</li>
                  <li><strong>Specialty Admixtures:</strong> Chemical additives that enhance high-temperature performance</li>
                  <li><strong>Protective Coatings:</strong> Applied fire-resistant treatments for additional protection</li>
                  <li><strong>Testing & Certification:</strong> Laboratory testing and certification for fire resistance ratings</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Concrete Cutting & Sawing Services</h3>
              <p>
                Precision concrete cutting and sawing services support renovation projects, utility installations, and structural modifications. Our cutting services utilize diamond blade technology, wire sawing systems, and specialized equipment for clean, accurate cuts without damaging surrounding concrete.
              </p>
              <p>
                Applications include door and window openings, utility trenches, expansion joint installation, surface preparation for overlays, and demolition work requiring precision cuts. We provide dust control systems and noise management for occupied buildings and sensitive environments.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Advanced Concrete Technologies</h3>
              <p>
                Wade & Co. Construction stays at the forefront of concrete technology including self-consolidating concrete, ultra-high performance concrete, pervious concrete systems, and smart concrete with embedded sensors. These advanced systems provide enhanced performance for specialized applications.
              </p>
              <p>
                We evaluate emerging technologies for applicability to Bay Area conditions and regulatory requirements. Our technical expertise includes material testing, performance validation, and long-term monitoring of advanced concrete installations.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Bay Area Code Compliance</h3>
              <p>
                Bay Area jurisdictions have varying building codes, permit requirements, and inspection procedures that affect specialized concrete work. We maintain current knowledge of local requirements and coordinate with building departments throughout the permitting and inspection process.
              </p>
              <p>
                Our code compliance expertise includes California Building Code interpretations, local amendments, and specialized requirements for seismic design, accessibility, fire safety, and environmental protection. We provide complete documentation and certification required for project approval and occupancy.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-3">Emergency Response Capabilities</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 24/7 response team availability</li>
                    <li>• Rapid site assessment and stabilization</li>
                    <li>• Emergency materials and equipment inventory</li>
                    <li>• Coordination with emergency services</li>
                    <li>• Insurance documentation support</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-slate-800 mb-3">Quality Assurance Program</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Materials testing and certification</li>
                    <li>• Installation quality control procedures</li>
                    <li>• Performance monitoring and verification</li>
                    <li>• Comprehensive documentation and warranties</li>
                    <li>• Ongoing technical support and maintenance</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Professional Certifications & Training</h3>
              <p>
                Our specialized services team maintains current certifications from the American Concrete Institute (ACI), International Concrete Repair Institute (ICRI), and other professional organizations. We invest in ongoing training to stay current with emerging technologies, code changes, and best practices.
              </p>
              <p>
                Specialized concrete work requires continuous professional development, and we participate in industry conferences, technical seminars, and manufacturer training programs. This commitment to professional excellence ensures our clients receive the most current and effective specialized concrete solutions available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Specialized Concrete Expertise?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact Wade & Co. Construction for professional specialized concrete services and emergency response throughout the Bay Area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
            >
              <Shield className="w-5 h-5 mr-2" />
              Schedule Consultation
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