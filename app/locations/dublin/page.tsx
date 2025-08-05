"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  FileText, 
  CheckCircle, 
  ArrowLeft,
  MapPin,
  Star,
  Home,
  Building,
  Shield,
  Zap,
  Users,
  Calendar,
  TrendingUp
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DublinConcretePage() {
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
                Get Dublin Quote
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
                <MapPin className="w-8 h-8 text-blue-600 mr-3" />
                <span className="text-blue-600 font-semibold text-lg">DUBLIN CONCRETE CONTRACTORS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Professional Concrete Contractors in Dublin, CA
                <span className="text-blue-600"> Growing Community Specialists</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Expert concrete construction services throughout Dublin including East Dublin, John Green Village, Emerald Glen, and Positano. Specialized in new construction, family-oriented residential projects, commercial development, and infrastructure supporting Dublin's rapid growth as a premier Tri-Valley community with excellent schools and family amenities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Free Dublin Estimate
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (925) 503-3200
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-blue-600 mr-1" />
                  <span>Growing Community</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-blue-600 mr-1" />
                  <span>Family Focused</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/construction-work.jpg"
                alt="Professional concrete contractors in Dublin CA - Wade & Co Construction"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dublin Neighborhoods Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">Dublin Communities We Serve</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Complete concrete services throughout Dublin's established and emerging neighborhoods with expertise in new construction and family-oriented development.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              "East Dublin", "John Green Village", "Emerald Glen", "Positano",
              "Schaefer Ranch", "Jordan Ranch", "Dublin Ranch", "Alamo Creek",
              "Hansen", "Kolb", "Fallon Village", "Downtown Dublin",
              "Dublin Station", "East Dublin BART", "Dougherty Hills", "Silvergate"
            ].map((neighborhood, index) => (
              <div key={index} className="flex items-center space-x-2 bg-blue-50 p-3 rounded-lg">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700 font-medium">{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dublin-Specific Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Dublin Concrete Specialties</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">New Construction</h3>
                <p className="text-slate-600">Complete concrete services for Dublin's rapidly expanding residential and commercial developments.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Family-Safe Design</h3>
                <p className="text-slate-600">Child-safe concrete installations with rounded edges, slip-resistant surfaces, and play-friendly features.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Building className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Transit-Oriented Development</h3>
                <p className="text-slate-600">Commercial concrete supporting Dublin's BART connectivity and mixed-use development initiatives.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dublin-Specific Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Dublin Concrete Contractors: Building Tomorrow's Community</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                Dublin represents the future of Bay Area living, combining excellent schools, family-oriented amenities, and strategic transportation connectivity. Wade & Co. Construction partners with Dublin's growth by providing concrete construction services that support new residential developments, commercial infrastructure, and community facilities that enhance quality of life for Dublin's diverse, family-focused population.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Supporting Dublin's Rapid Growth</h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="font-semibold text-blue-800 mb-3">🏗️ New Development Expertise</h4>
                <p className="text-blue-700">
                  Dublin's population has grown by over 60% since 2000, creating continuous demand for new residential and commercial construction. Our concrete services support this growth with efficient project delivery, quality installations, and coordination with Dublin's planning and development requirements.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Master-Planned Community Support</h4>
                  <p>
                    Dublin's master-planned communities like East Dublin and Schaefer Ranch require coordinated concrete installation that meets community design standards while supporting diverse housing types. Our work includes driveways, sidewalks, and community amenities that enhance neighborhood appeal and property values.
                  </p>
                  <p className="mt-4">
                    We coordinate with community developers, homeowner associations, and architectural review committees to ensure concrete installations complement community design themes while meeting long-term durability and maintenance requirements for growing neighborhoods.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Infrastructure Development</h4>
                  <p>
                    Dublin's growth requires extensive infrastructure including roads, sidewalks, parking facilities, and public amenities. Our municipal and commercial concrete work supports city development goals while meeting strict performance requirements for traffic loads and long-term service life.
                  </p>
                  <p className="mt-4">
                    We maintain relationships with Dublin's Public Works Department and coordinate with utility companies, traffic engineers, and environmental consultants to ensure infrastructure projects enhance community connectivity while minimizing construction disruption.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Family-Oriented Construction Approach</h3>
              <p>
                Dublin's reputation as an exceptional family community influences our concrete construction approach, emphasizing safety, durability, and functionality for households with children. Our residential work prioritizes child-safe design features and low-maintenance solutions for busy families.
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Family-Safe Concrete Features</h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Rounded Edge Details:</strong> Eliminates sharp corners on steps, planters, and decorative elements</li>
                  <li>• <strong>Slip-Resistant Surfaces:</strong> Safe textures for pool areas, patios, and walkways where children play</li>
                  <li>• <strong>Integrated Play Areas:</strong> Concrete installations that support swing sets, basketball hoops, and recreational equipment</li>
                  <li>• <strong>Stain-Resistant Finishes:</strong> Easy-clean surfaces that handle chalk, paint, and typical childhood activities</li>
                  <li>• <strong>Durable Construction:</strong> Heavy-duty installations handling bikes, skateboards, and active family use</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Dublin Neighborhood Specializations</h3>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏘️ East Dublin</h4>
                  <p className="text-sm">
                    Dublin's largest master-planned community featuring diverse housing types and excellent schools. Our residential work includes family driveways, backyard patios, and community amenities that support active family lifestyles while maintaining property values in this highly desirable area.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🌊 Emerald Glen & Positano</h4>
                  <p className="text-sm">
                    Premium neighborhoods with luxury homes and resort-style amenities. Our work includes high-end outdoor living spaces, decorative concrete installations, and custom features that complement upscale architecture while providing functionality for entertaining and family recreation.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🚇 Dublin Station Area</h4>
                  <p className="text-sm">
                    Transit-oriented development around East Dublin BART station with mixed-use projects and higher-density housing. Our commercial and residential concrete work supports sustainable development goals while providing durable infrastructure for increased foot traffic and transit connectivity.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏢 Commercial Districts</h4>
                  <p className="text-sm">
                    Growing retail and office developments serving Dublin's expanding population. Our commercial concrete includes parking lots, sidewalks, and building entries that handle high traffic while maintaining attractive appearances that support business success and community economic development.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">School District Excellence Support</h3>
              <p>
                Dublin's exceptional Dublin Unified School District attracts families from throughout the Bay Area, creating demand for residential concrete that supports family activities and enhances property values. Our work includes basketball court installations, patio expansions for entertaining, and driveway upgrades that accommodate multiple vehicles.
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="font-semibold text-green-800 mb-3">Educational Community Support</h4>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• <strong>Study Space Patios:</strong> Quiet outdoor areas suitable for homework and tutoring activities</li>
                  <li>• <strong>Sports Court Integration:</strong> Concrete foundations for basketball hoops, volleyball courts, and recreational activities</li>
                  <li>• <strong>Carpool-Friendly Driveways:</strong> Wide, durable surfaces accommodating multiple vehicles during school activities</li>
                  <li>• <strong>Safe Walkways:</strong> Well-lit, slip-resistant paths connecting home areas with proper visibility</li>
                  <li>• <strong>Gathering Spaces:</strong> Concrete installations supporting neighborhood social activities and community building</li>
                </ul>  
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Tri-Valley Climate Optimization</h3>
              <p>
                Dublin's inland Tri-Valley location experiences hot, dry summers and mild winters requiring concrete installations designed for temperature extremes and UV exposure. Our construction techniques account for thermal expansion, seasonal moisture changes, and long-term durability in challenging climate conditions.
              </p>
              <p>
                We utilize heat-resistant concrete mixes, UV-stable colorants, and specialized curing procedures that ensure optimal performance throughout Dublin's seasonal climate variations while maintaining appearance and structural integrity for decades of family use.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Transportation Connectivity Benefits</h3>
              <p>
                Dublin's BART connectivity and freeway access make it attractive to Bay Area commuters, increasing property values and development pressure. Our concrete work supports this connectivity with durable installations that handle increased vehicle traffic while maintaining neighborhood character.
              </p>
              <p>
                We coordinate with Dublin's transportation planning to ensure residential and commercial concrete projects support community connectivity goals while minimizing traffic impacts during construction and providing long-term durability for increased usage patterns.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Sustainable Development Integration</h3>
              <p>
                Dublin's commitment to sustainable growth influences concrete construction through green building requirements, storm water management, and energy efficiency standards. Our installations incorporate sustainable practices that support community environmental goals while providing superior performance.
              </p>
              <p>
                We utilize recycled aggregates, pervious concrete systems for storm water management, and construction techniques that minimize environmental impact while supporting Dublin's long-term sustainability and livability goals for current and future residents.
              </p>

              <h3 className="text-2xl font-semibent text-slate-800 mb-6">Community Partnership & Local Investment</h3>
              <p>
                Wade & Co. Construction supports Dublin's continued growth through active community involvement, local hiring, and partnerships with Dublin-area suppliers and subcontractors. Our investment in Dublin's success includes sponsoring community events and supporting local schools and recreational programs.
              </p>
              <p>
                Our Dublin partnerships include relationships with local real estate professionals, architects, landscape contractors, and community organizations that share our commitment to enhancing Dublin's reputation as an exceptional place to live, work, and raise families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Dublin Customer Reviews</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "Perfect family-friendly patio and driveway installation in East Dublin. Wade & Co. understood our needs with three young kids and created safe, durable surfaces that our whole neighborhood admires. Great work!"
                </p>
                <div>
                  <p className="font-semibold text-slate-800">Jennifer Kim</p>
                  <p className="text-sm text-slate-500">East Dublin, Dublin</p>
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
                  "Excellent commercial concrete work for our Positano retail center. They handled the project professionally with minimal disruption to surrounding businesses. Quality work that enhances our property's appeal."
                </p>
                <div>
                  <p className="font-semibold text-slate-800">Mike Anderson</p>
                  <p className="text-sm text-slate-500">Property Manager, Positano</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for Your Dublin Concrete Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact Dublin's family-focused concrete contractors for new construction, residential upgrades, and commercial development throughout the Tri-Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Dublin Estimate
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Phone className="w-5 h-5 mr-2" />
              Call (925) 503-3200
            </Button>
          </div>
          <div className="mt-6">
            <p className="text-blue-100 text-sm">
              <TrendingUp className="w-4 h-4 inline mr-1" />
              Growing Community • Family Focused • New Construction • 25+ Years Experience
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}