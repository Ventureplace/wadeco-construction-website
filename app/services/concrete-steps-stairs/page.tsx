"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  FileText, 
  CheckCircle, 
  ArrowLeft,
  Users,
  Shield,
  Ruler,
  Home,
  Building,
  Accessibility
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ConcreteStepsStairsPage() {
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
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <span className="text-blue-600 font-semibold text-lg">ADA COMPLIANT DESIGN</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Professional Concrete Steps & Stairs
                <span className="text-blue-600"> Bay Area Safety & Accessibility</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Custom concrete steps, stairs, and staircases with ADA-compliant designs, safety railings, and decorative finishes. Professional installation throughout Oakland, Berkeley, Fremont, Pleasanton, Dublin, Livermore, and San Jose with engineered solutions for residential, commercial, and municipal applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
                >
                  <Ruler className="w-5 h-5 mr-2" />
                  Schedule Design Consultation
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
                alt="Professional concrete steps and stairs by Wade & Co Construction in Bay Area"
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
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Complete Step & Stair Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Home className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Residential Entry Steps</h3>
                <p className="text-slate-600">Custom front entry steps with integrated railings, lighting, and decorative finishes.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Building className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Commercial Staircases</h3>
                <p className="text-slate-600">ADA-compliant commercial stairs with proper rise, run, and safety features for public access.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Accessibility className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">ADA Compliance Features</h3>
                <p className="text-slate-600">Accessible design with proper slopes, landings, and tactile warning surfaces for universal access.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Safety Railings</h3>
                <p className="text-slate-600">Integrated concrete and metal railing systems meeting building codes and safety standards.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Ruler className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Custom Design</h3>
                <p className="text-slate-600">Architectural integration with decorative patterns, colors, and custom geometric designs.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Code Compliance</h3>
                <p className="text-slate-600">Full compliance with California building codes and local municipality requirements.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Bay Area Concrete Steps & Stairs Expertise</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                Concrete steps and stairs in the Bay Area require specialized design and construction techniques that address seismic requirements, accessibility standards, and diverse architectural styles. Wade & Co. Construction combines engineering expertise with aesthetic design to create safe, durable, and visually appealing concrete stairways that enhance property value while meeting all safety and accessibility requirements.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Design & Engineering Considerations</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Building Code Compliance</h4>
                  <p>
                    California building codes specify precise requirements for step dimensions, railing heights, and safety features that vary between residential and commercial applications. Our step and stair designs meet or exceed International Building Code (IBC) and California Building Code (CBC) requirements while incorporating local municipality amendments and accessibility standards.
                  </p>
                  <p className="mt-4">
                    Bay Area jurisdictions including Oakland, Berkeley, and San Francisco have specific requirements for seismic design, accessibility, and public safety that affect step construction. We maintain current knowledge of local code variations and coordinate with building departments throughout the permit and inspection process.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Structural Engineering</h4>
                  <p>
                    Concrete steps require proper structural design to handle loads, resist seismic forces, and provide long-term durability. Our engineering approach includes foundation analysis, reinforcement design, and connection details that ensure structural integrity while accommodating building movement and settlement.
                  </p>
                  <p className="mt-4">
                    Seismic considerations are particularly important for Bay Area step construction, requiring flexible connections and reinforcement systems that prevent damage during earthquake events. We coordinate with structural engineers to ensure step systems contribute to overall building seismic performance rather than creating weak points.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">ADA Compliance & Accessibility</h3>
              <p>
                Americans with Disabilities Act (ADA) compliance is mandatory for commercial and public concrete steps, requiring specific dimensional requirements, surface textures, and safety features. Our ADA-compliant designs include proper rise and run ratios, landing dimensions, and tactile warning systems that ensure safe access for individuals with mobility impairments.
              </p>
              <p>
                Residential step projects increasingly incorporate accessibility features for aging-in-place modifications and universal design principles. We design steps that meet current accessibility standards while providing aesthetic appeal and integration with existing architecture and landscaping.
              </p>

              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Step Construction Process</h4>
                <ol className="list-decimal pl-6 space-y-2 text-sm">
                  <li>Site survey and dimensional analysis with architectural coordination</li>
                  <li>Engineering design and building code compliance verification</li>
                  <li>Permit acquisition and utility coordination with local jurisdictions</li>
                  <li>Excavation and foundation preparation with proper drainage integration</li>
                  <li>Forming system installation with precise dimensional control</li>
                  <li>Reinforcement placement including seismic connection details</li>
                  <li>Concrete placement using appropriate mixes for step applications</li>
                  <li>Surface finishing with slip-resistant textures and safety features</li>
                  <li>Railing installation and integration with concrete structure</li>
                  <li>Curing, sealing, and final inspection with warranty documentation</li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Residential Step Applications</h3>
              <p>
                Residential concrete steps serve as primary access points that significantly impact home aesthetics and functionality. Our residential step designs coordinate with architectural styles common in Bay Area neighborhoods, from Victorian homes in San Francisco to contemporary designs in Palo Alto and modern developments throughout the region.
              </p>
              <p>
                We integrate steps with existing landscaping, drainage systems, and home automation features including lighting, irrigation, and security systems. Residential steps often include decorative elements such as stamped patterns, integral colors, and architectural details that enhance curb appeal and property value.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Commercial & Municipal Applications</h3>
              <p>
                Commercial concrete steps require robust construction techniques and enhanced safety features to accommodate high traffic volumes and diverse user needs. Our commercial step construction includes slip-resistant surfaces, adequate drainage, and maintenance accessibility that ensures long-term performance in demanding environments.
              </p>
              <p>
                Municipal step projects often involve coordination with accessibility advocates, public works departments, and community stakeholders to ensure designs meet both functional requirements and community aesthetic standards. We provide public involvement support and design alternatives that address diverse community needs.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Safety Features & Railing Systems</h3>
              <p>
                Safety railings are required for steps exceeding specific heights and are recommended for all exterior steps to prevent falls and injuries. Our railing systems integrate structurally with concrete steps while providing code-compliant dimensions, grip surfaces, and durability for long-term safety performance.
              </p>
              <p>
                We coordinate with metal fabricators and architectural designers to create railing systems that complement step designs while meeting safety requirements. Options include integrated concrete railings, metal fabrications, and combination systems that optimize both safety and aesthetic appeal.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="font-semibold text-blue-800 mb-3">Bay Area Specialization</h4>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• <strong>Seismic Design:</strong> Earthquake-resistant construction techniques and flexible connections</li>
                  <li>• <strong>Hillside Construction:</strong> Specialized techniques for steep slope and challenging access conditions</li>
                  <li>• <strong>Soil Conditions:</strong> Foundation systems designed for expansive clays and variable soil conditions</li>
                  <li>• <strong>Climate Adaptation:</strong> Weather-resistant finishes and drainage for Bay Area rainfall patterns</li>
                  <li>• <strong>Architectural Integration:</strong> Designs compatible with diverse Bay Area architectural styles</li>
                </ul>  
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Decorative Options & Finishes</h3>
              <p>
                Concrete steps provide opportunities for decorative enhancement through surface textures, integral colors, stamped patterns, and architectural details. Our decorative options include exposed aggregate finishes, acid staining, decorative sawcuts, and custom formed details that create unique aesthetic appeal while maintaining functionality and safety.
              </p>
              <p>
                We coordinate with landscape architects and interior designers to ensure step finishes complement overall design themes and material palettes. Decorative concrete steps can simulate natural stone, brick, or tile appearances while providing the durability and cost-effectiveness of concrete construction.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Drainage & Weather Protection</h3>
              <p>
                Proper drainage is critical for concrete step longevity and safety, particularly in Bay Area locations with significant seasonal rainfall. Our step designs include integrated drainage features, proper slope angles, and surface treatments that prevent water accumulation and ice formation during cold weather periods.
              </p>
              <p>
                We coordinate with landscape contractors and irrigation specialists to ensure step drainage integrates effectively with site water management systems. This includes coordination with gutters, downspouts, and landscape drainage that prevents water damage to step structures and adjacent buildings.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Maintenance & Longevity</h3>
              <p>
                Properly constructed concrete steps provide decades of service with minimal maintenance when designed and built for Bay Area conditions. We provide maintenance recommendations including surface sealing schedules, drainage maintenance, and periodic inspection procedures that preserve both safety and appearance.
              </p>
              <p>
                Our maintenance services include step cleaning, sealer reapplication, minor repair services, and safety feature upgrades that maintain code compliance and optimal performance. We offer step modification services that adapt existing steps to changing accessibility requirements and building code updates.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Cost Factors & Budget Planning</h3>
              <p>
                Concrete step costs vary significantly based on design complexity, site access, safety requirements, and decorative features. We provide detailed cost estimates that include all construction phases, permit fees, and optional features, allowing property owners to make informed decisions about design alternatives and budget allocation.
              </p>
              <p>
                Our cost management approach includes value engineering opportunities, phasing options for complex projects, and coordination with other construction activities to optimize overall project costs. We provide financing information and payment plan options that make quality step construction accessible for diverse budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for Safe, Beautiful Concrete Steps?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact Wade & Co. Construction for professional concrete step and stair design with full code compliance and accessibility features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
            >
              <Ruler className="w-5 h-5 mr-2" />
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