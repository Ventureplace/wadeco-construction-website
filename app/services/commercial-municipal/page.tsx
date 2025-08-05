"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  FileText, 
  CheckCircle, 
  ArrowLeft,
  Building2,
  MapPin,
  Car,
  Users,
  Shield,
  Calendar
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CommercialMunicipalPage() {
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
                Request Proposal
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="w-8 h-8 text-blue-600 mr-3" />
                <span className="text-blue-600 font-semibold text-lg">COMMERCIAL & MUNICIPAL CONTRACTOR</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Commercial & Municipal Concrete Services
                <span className="text-blue-600"> Bay Area Public Works</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Professional commercial and municipal concrete services including sidewalks, curbing, parking lots, and public infrastructure. Licensed contractor serving Oakland, Berkeley, Fremont, Pleasanton, Dublin, Livermore, San Jose, and Bay Area municipalities with comprehensive project management and regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Request Project Proposal
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
                alt="Commercial and municipal concrete services by Wade & Co Construction in Bay Area"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Complete Commercial & Municipal Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Public Sidewalks</h3>
                <p className="text-slate-600">ADA-compliant sidewalk construction and repair with proper drainage and accessibility features.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Curbs & Gutters</h3>
                <p className="text-slate-600">Precise curb and gutter installation for storm water management and traffic control.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Car className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Parking Lots</h3>
                <p className="text-slate-600">Commercial parking lot construction with proper grading, drainage, and striping coordination.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Commercial Buildings</h3>
                <p className="text-slate-600">Foundation systems, loading docks, and structural concrete for commercial construction projects.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Public Infrastructure</h3>
                <p className="text-slate-600">Municipal infrastructure including bus stops, public plazas, and government facility improvements.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Emergency Repairs</h3>
                <p className="text-slate-600">Rapid response emergency concrete repairs for public safety and infrastructure protection.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Bay Area Commercial & Municipal Expertise</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                Commercial and municipal concrete projects require specialized expertise in regulatory compliance, public safety standards, and large-scale construction management. Wade & Co. Construction brings decades of experience in Bay Area commercial and public works projects, with comprehensive capabilities spanning from small municipal repairs to major infrastructure developments across Oakland, Berkeley, Fremont, and throughout the region.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Public Sidewalk Systems</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">ADA Compliance & Accessibility</h4>
                  <p>
                    All public sidewalk construction must comply with Americans with Disabilities Act (ADA) requirements including proper cross-slopes, running slopes, and transition details. Our sidewalk installations meet federal accessibility guidelines and California Title 24 requirements, ensuring safe access for all community members including wheelchair users and individuals with mobility impairments.
                  </p>
                  <p className="mt-4">
                    We coordinate with certified accessibility specialists and municipal engineers to ensure compliance with both federal standards and local jurisdiction amendments. Bay Area cities often have specific requirements that exceed federal minimums, and we maintain current knowledge of all applicable codes and standards.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Durability & Maintenance</h4>
                  <p>
                    Public sidewalks endure heavy pedestrian traffic, weather exposure, and potential damage from tree roots and utility work. Our sidewalk construction utilizes high-durability concrete mixes, proper joint placement, and root barriers that extend service life while minimizing maintenance requirements for municipal budgets.
                  </p>
                  <p className="mt-4">
                    We design sidewalk systems with consideration for future utility work, tree growth, and accessibility upgrades. Our installations include removable sections for utility access and expansion details that accommodate landscape growth without compromising structural integrity.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Curb & Gutter Construction</h3>
              <p>
                Curbs and gutters form critical components of municipal storm water management systems while providing traffic control and defining public right-of-way boundaries. Our curb and gutter construction utilizes precision slip-form equipment and GPS guidance systems that ensure accurate alignment, proper grades, and consistent cross-sections that meet municipal engineering standards.
              </p>
              <p>
                Bay Area storm water management requires curb and gutter systems capable of handling intense winter rainfall while preventing flooding and erosion. We coordinate with civil engineers and storm water management districts to ensure proper integration with existing drainage infrastructure and compliance with regional water quality requirements.
              </p>

              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Municipal Project Process</h4>
                <ol className="list-decimal pl-6 space-y-2 text-sm">
                  <li>Project planning and coordination with municipal engineering departments</li>
                  <li>Permit acquisition and utility coordination through appropriate agencies</li>
                  <li>Traffic control planning and implementation for public safety during construction</li>
                  <li>Survey and layout with precise GPS control for alignment and grade accuracy</li>
                  <li>Site preparation including excavation, base preparation, and utility protection</li>
                  <li>Concrete placement using specialized equipment for consistent quality and efficiency</li>
                  <li>Surface finishing and texturing for appropriate slip resistance and appearance</li>
                  <li>Curing and protection procedures appropriate for public access areas</li>
                  <li>Final inspection and documentation with as-built drawings and warranties</li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Commercial Parking Lot Development</h3>
              <p>
                Commercial parking lots require comprehensive design and construction services including site preparation, storm water management, concrete placement, and coordination with paving contractors for asphalt surfaces. Our parking lot concrete work includes loading areas, pedestrian walkways, and accessibility features that comply with ADA requirements and local zoning codes.
              </p>
              <p>
                Bay Area commercial developments often have complex site constraints including slope challenges, underground utilities, and environmental protection requirements. We provide complete site development services including excavation, base preparation, concrete placement, and coordination with landscape architects and civil engineers for integrated project delivery.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Commercial Building Foundations</h3>
              <p>
                Commercial building foundations require engineering analysis, structural design coordination, and construction techniques that differ significantly from residential work. Our commercial foundation services include deep foundation systems, structural slabs, loading dock construction, and specialized foundations for industrial equipment and heavy loads.
              </p>
              <p>
                Seismic design requirements for commercial buildings are particularly stringent in the Bay Area, requiring detailed structural analysis and specialized construction techniques. We work with structural engineers and architects to implement foundation systems that meet current International Building Code (IBC) and California Building Code (CBC) requirements for seismic resistance and structural performance.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Municipal Infrastructure Projects</h3>
              <p>
                Municipal infrastructure projects encompass a wide range of concrete applications including public plazas, bus stops, park facilities, and government building improvements. These projects require coordination with multiple agencies, public involvement processes, and adherence to municipal design standards and specifications.
              </p>
              <p>
                We maintain prequalification with major Bay Area municipalities and transit agencies, enabling participation in public works bidding processes. Our municipal project experience includes prevailing wage compliance, certified payroll reporting, and coordination with union labor requirements where applicable.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="font-semibold text-blue-800 mb-3">Regulatory Compliance Expertise</h4>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• <strong>Prevailing Wage Compliance:</strong> Certified payroll and wage determination compliance for public works projects</li>
                  <li>• <strong>Environmental Regulations:</strong> Storm water pollution prevention and environmental protection measures</li>
                  <li>• <strong>Traffic Control:</strong> Work zone safety and traffic management plan implementation</li>
                  <li>• <strong>Public Safety:</strong> Pedestrian protection and construction site safety in high-traffic areas</li>
                  <li>• <strong>Quality Assurance:</strong> Materials testing and inspection coordination with municipal agencies</li>
                </ul>  
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Emergency Response Services</h3>
              <p>
                Municipal concrete emergencies require rapid response capabilities and coordination with emergency services, public works departments, and utility companies. Our emergency services include immediate site safety assessment, temporary repairs for public protection, and permanent reconstruction that restores full functionality and safety.
              </p>
              <p>
                Common municipal emergencies include earthquake damage, utility excavation damage, vehicle impacts, and weather-related deterioration. We maintain emergency response capabilities throughout the Bay Area with 24/7 availability for critical infrastructure protection and public safety restoration.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Project Management & Coordination</h3>
              <p>
                Commercial and municipal projects require comprehensive project management including scheduling coordination, subcontractor management, and communication with multiple stakeholders. Our project management services ensure on-time completion, budget compliance, and quality delivery while minimizing disruption to business operations and public activities.
              </p>
              <p>
                We utilize project management software and communication systems that provide real-time project updates to clients, engineers, and municipal agencies. Regular progress reports, photo documentation, and milestone tracking ensure all parties remain informed throughout project execution.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Quality Assurance & Testing</h3>
              <p>
                Commercial and municipal projects require comprehensive quality assurance programs including materials testing, construction inspection, and performance verification. We coordinate with independent testing laboratories and municipal inspectors to ensure all work meets specified requirements and industry standards.
              </p>
              <p>
                Our quality control procedures include pre-construction meetings, daily quality inspections, and comprehensive documentation of materials, procedures, and test results. We provide complete project documentation including as-built drawings, test reports, and warranty information for permanent project records.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Sustainable Construction Practices</h3>
              <p>
                Municipal and commercial projects increasingly require sustainable construction practices including recycled materials utilization, waste minimization, and energy-efficient construction methods. We implement green construction practices and can support LEED certification requirements for sustainable building projects.
              </p>
              <p>
                Our sustainable practices include local material sourcing, construction waste recycling, and energy-efficient equipment utilization that reduces environmental impact while maintaining cost-effectiveness. We provide documentation of sustainable practices for green building certification and environmental compliance reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for Your Commercial or Municipal Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact Wade & Co. Construction for comprehensive commercial and municipal concrete services with full regulatory compliance and project management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
            >
              <FileText className="w-5 h-5 mr-2" />
              Request Project Proposal
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