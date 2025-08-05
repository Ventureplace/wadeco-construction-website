"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  CheckCircle, 
  ArrowLeft,
  MapPin,
  Star,
  Building,
  Shield,
  Zap,
  Calendar,
  TreePine
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BerkeleyConcretePage() {
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
                Get Berkeley Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-green-600 mr-3" />
                <span className="text-green-600 font-semibold text-lg">BERKELEY CONCRETE CONTRACTORS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Professional Concrete Contractors in Berkeley, CA
                <span className="text-green-600"> Historic Preservation Specialists</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Expert concrete construction services throughout Berkeley including North Berkeley, South Berkeley, West Berkeley, Berkeley Hills, and UC Campus area. Specialized in historic home preservation, seismic retrofitting, sustainable construction, and hillside projects with deep understanding of Berkeley&apos;s environmental regulations, architectural heritage, and progressive building standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => window.open('https://calendly.com/wadeconcreteco/30min', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Free Berkeley Estimate
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (925) 503-3200
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-600 mr-1" />
                  <span>Berkeley Licensed</span>
                </div>
                <div className="flex items-center">
                  <TreePine className="w-4 h-4 text-green-600 mr-1" />
                  <span>Sustainable Practices</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hero-concrete.jpg"
                alt="Professional concrete contractors in Berkeley CA - Wade & Co Construction"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Berkeley Neighborhoods Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">Berkeley Areas We Serve</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Complete concrete services throughout Berkeley with expertise in historic preservation, environmental compliance, and sustainable construction practices.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              "North Berkeley", "South Berkeley", "West Berkeley", "Berkeley Hills",
              "UC Campus Area", "Downtown Berkeley", "Thousand Oaks", "Elmwood",
              "Claremont", "Northbrae", "Westbrae", "Panoramic Hill",
              "Berkeley Marina", "Fourth Street", "Telegraph Avenue", "Ashby"
            ].map((neighborhood, index) => (
              <div key={index} className="flex items-center space-x-2 bg-green-50 p-3 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-slate-700 font-medium">{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Berkeley-Specific Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Berkeley Concrete Specialties</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Building className="w-12 h-12 text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Historic Preservation</h3>
                <p className="text-slate-600">Sensitive concrete work for Berkeley&apos;s Craftsman, Tudor, and Colonial Revival homes with landmark preservation compliance.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <TreePine className="w-12 h-12 text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Sustainable Construction</h3>
                <p className="text-slate-600">Eco-friendly concrete solutions with recycled materials, pervious concrete, and Berkeley&apos;s environmental compliance.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Seismic Retrofitting</h3>
                <p className="text-slate-600">Mandatory soft story retrofitting and foundation upgrades meeting Berkeley&apos;s earthquake safety ordinances.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Berkeley-Specific Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Berkeley Concrete Experts: Progressive Building Solutions</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                Berkeley&apos;s progressive environmental policies, strict historic preservation requirements, and commitment to sustainability demand specialized concrete construction expertise. Wade & Co. Construction combines traditional craftsmanship with innovative green building practices, ensuring all projects meet Berkeley&apos;s rigorous environmental standards while preserving the city&apos;s architectural heritage and addressing seismic safety requirements.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Berkeley Environmental Compliance</h3>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="font-semibold text-green-800 mb-3">🌱 Berkeley&apos;s Green Building Requirements</h4>
                <p className="text-green-700">
                  Berkeley Municipal Code requires comprehensive environmental compliance including storm water management, construction waste diversion, and sustainable material usage. All our concrete projects incorporate recycled content, minimize environmental impact, and support Berkeley&apos;s climate action goals.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Historic District Requirements</h4>
                  <p>
                    Berkeley&apos;s numerous historic districts including Northbrae, Thousand Oaks, and Berkeley Hills require specialized knowledge of preservation standards and design review processes. Our concrete work respects historic architecture while incorporating modern safety and performance requirements.
                  </p>
                  <p className="mt-4">
                    We work closely with Berkeley&apos;s Landmarks Preservation Commission and Zoning Adjustments Board to ensure all concrete installations complement historic architecture and meet preservation guidelines. Our projects maintain property values while enhancing safety and functionality.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Berkeley Hills Expertise</h4>
                  <p>
                    Berkeley Hills&apos; steep terrain, fire safety requirements, and expansive clay soils present unique construction challenges. Our hillside concrete work includes specialized access solutions, comprehensive drainage systems, and fire-resistant materials meeting Berkeley Fire Department standards.
                  </p>
                  <p className="mt-4">
                    We coordinate with UC Berkeley seismologists and local geotechnical engineers to ensure hillside projects account for slope stability, earthquake forces, and long-term settlement patterns specific to Berkeley&apos;s geology and microclimate conditions.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Sustainable Concrete Practices</h3>
              <p>
                Berkeley&apos;s environmental leadership requires concrete construction that minimizes carbon footprint while maximizing durability and performance. We utilize fly ash, slag cement, and recycled aggregates that reduce environmental impact while meeting Berkeley&apos;s stringent performance standards for climate resilience.
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Berkeley Green Building Integration</h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Pervious Concrete Systems:</strong> Storm water management compliance with Berkeley&apos;s watershed protection</li>
                  <li>• <strong>Recycled Content:</strong> Minimum 30% recycled materials in all concrete mixes</li>
                  <li>• <strong>Local Material Sourcing:</strong> Reduced transportation emissions through Bay Area suppliers</li>
                  <li>• <strong>Construction Waste Diversion:</strong> 90%+ waste diversion meeting Berkeley requirements</li>
                  <li>• <strong>Energy Efficiency:</strong> Thermal mass optimization for passive solar design integration</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Berkeley Neighborhood Specializations</h3>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏛️ UC Campus Area</h4>
                  <p className="text-sm">
                    High-density student housing and commercial developments requiring durable, low-maintenance concrete solutions. Our UC area work includes ADA-compliant sidewalks, bike-friendly surfaces, and installations designed for heavy pedestrian traffic and minimal maintenance requirements.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏡 North Berkeley & Thousand Oaks</h4>
                  <p className="text-sm">
                    Prestigious neighborhoods with strict historic preservation requirements and high-end architectural standards. Our work includes period-appropriate concrete installations, luxury driveways, and foundation work that respects Craftsman and Tudor Revival architecture while ensuring modern performance.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏭 West Berkeley</h4>
                  <p className="text-sm">
                    Mixed-use industrial and residential area with focus on sustainable development and adaptive reuse. Our commercial concrete work supports Berkeley&apos;s innovation economy with flexible, durable installations for tech companies, maker spaces, and sustainable manufacturing facilities.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🌊 Berkeley Marina & Waterfront</h4>
                  <p className="text-sm">
                    Marine environment requiring specialized concrete mixes and corrosion protection systems. Our waterfront work includes salt-resistant installations, tidal zone construction, and coordination with Bay Area water quality protection agencies for environmentally sensitive projects.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Berkeley Seismic Safety Compliance</h3>
              <p>
                Berkeley&apos;s mandatory seismic safety programs require comprehensive retrofitting for vulnerable buildings, with particular focus on soft story structures and unreinforced masonry. Our seismic work coordinates with Berkeley&apos;s Building Safety Division and includes foundation anchoring, cripple wall bracing, and soft story reinforcement.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h4 className="font-semibold text-red-800 mb-3">Berkeley Seismic Ordinances</h4>
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>• <strong>Mandatory Retrofit Program:</strong> Required seismic upgrades for buildings constructed before 1980</li>
                  <li>• <strong>Soft Story Ordinance:</strong> Mandatory retrofitting for buildings with ground-floor commercial spaces</li>
                  <li>• <strong>Transfer Tax Funding:</strong> Berkeley provides financial assistance for qualifying seismic upgrades</li>
                  <li>• <strong>Expedited Permitting:</strong> Fast-track approval process for essential safety improvements</li>
                  <li>• <strong>Professional Certification:</strong> Required engineering review and contractor certification</li>
                </ul>  
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">University Partnerships & Research Integration</h3>
              <p>
                Wade & Co. Construction maintains relationships with UC Berkeley&apos;s Department of Civil and Environmental Engineering, incorporating latest research in sustainable concrete technology, earthquake engineering, and climate-resilient construction practices into our Berkeley projects.
              </p>
              <p>
                Our collaboration with UC Berkeley researchers ensures access to cutting-edge concrete technologies, materials testing capabilities, and innovative construction techniques that position Berkeley projects at the forefront of sustainable construction practices and seismic safety innovation.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Berkeley Permit Process Navigation</h3>
              <p>
                Berkeley&apos;s comprehensive permitting process requires expertise in environmental review, historic preservation evaluation, and community engagement procedures. We provide complete permit coordination including CEQA compliance, design review board presentations, and neighbor notification processes.
              </p>
              <p>
                Our Berkeley permit experience includes relationships with city staff, familiarity with review timelines, and understanding of community concerns that ensure smooth project approval and implementation. We handle all regulatory coordination while keeping projects on schedule and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Berkeley Customer Reviews</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  &quot;Outstanding historic preservation work on our 1908 Craftsman home in North Berkeley. Wade & Co. understood both the landmark requirements and Berkeley&apos;s environmental standards. Professional throughout the entire process.&quot;
                </p>
                <div>
                  <p className="font-semibold text-slate-800">Sarah Wilson</p>
                  <p className="text-sm text-slate-500">North Berkeley, Berkeley</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  &quot;Excellent sustainable concrete work for our Berkeley Hills home. They used recycled materials and handled all the environmental compliance perfectly. Great local knowledge and eco-friendly practices.&quot;
                </p>
                <div>
                  <p className="font-semibold text-slate-800">Dr. Michael Green</p>
                  <p className="text-sm text-slate-500">Berkeley Hills, Berkeley</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Berkeley Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Most Requested Services in Berkeley</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Berkeley&apos;s unique requirements for sustainable construction, historic preservation, and environmental compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Historic Preservation Concrete", 
                slug: "stamped-concrete", 
                icon: "🏗️", 
                description: "Craftsman & Tudor Revival compatible installations",
                demand: "High demand in North Berkeley"
              },
              { 
                name: "Sustainable Concrete Solutions", 
                slug: "concrete-driveways", 
                icon: "🌱", 
                description: "Recycled materials & pervious concrete systems",
                demand: "Required by Berkeley Green Building"
              },
              { 
                name: "Seismic Safety Upgrades", 
                slug: "seismic-retrofitting", 
                icon: "⚡", 
                description: "Mandatory retrofitting for Berkeley properties",
                demand: "Critical for Berkeley Hills"
              },
              { 
                name: "Hillside Retaining Walls", 
                slug: "retaining-walls", 
                icon: "🏔️", 
                description: "Engineered solutions for steep Berkeley terrain",
                demand: "Essential in Panoramic Hill"
              },
              { 
                name: "UC Campus Area Concrete", 
                slug: "pool-decks-patios", 
                icon: "🏫", 
                description: "High-traffic, low-maintenance installations",
                demand: "Popular near Telegraph Ave"
              },
              { 
                name: "Berkeley Marina Projects", 
                slug: "specialized-services", 
                icon: "⚓", 
                description: "Salt-resistant concrete for waterfront properties",
                demand: "Specialized marine applications"
              }
            ].map((service, index) => (
              <Link key={index} href={`/services/${service.slug}`} className="group">
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group-hover:border-green-500 h-full">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-slate-800 group-hover:text-green-600 transition-colors mb-2">{service.name}</h3>
                    <p className="text-sm text-slate-600 mb-2">{service.description}</p>
                    <p className="text-xs text-green-600 font-medium mb-3">{service.demand}</p>
                    <div className="text-green-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      View Service Details →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for Your Berkeley Concrete Project?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact Berkeley&apos;s sustainable concrete specialists for environmentally compliant construction, historic preservation, and seismic safety solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendly.com/wadeconcreteco/30min', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Berkeley Estimate
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Phone className="w-5 h-5 mr-2" />
              Call (925) 503-3200
            </Button>
          </div>
          <div className="mt-6">
            <p className="text-green-100 text-sm">
              <TreePine className="w-4 h-4 inline mr-1" />
              Sustainable Practices • Historic Preservation • Berkeley Licensed • 25+ Years Experience
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}