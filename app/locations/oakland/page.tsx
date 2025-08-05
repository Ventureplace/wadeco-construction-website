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
  Calendar,
  Shield,
  Zap,
  Home
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OaklandConcretePage() {
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
                Get Oakland Quote
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
                <span className="text-blue-600 font-semibold text-lg">OAKLAND CONCRETE CONTRACTORS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Professional Concrete Contractors in Oakland, CA
                <span className="text-blue-600"> Licensed • Insured • Local Experts</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Premier concrete construction services throughout Oakland including Rockridge, Temescal, Grand Lake, Fruitvale, and East Oakland. Specialized in seismic retrofitting, stamped concrete driveways, foundation work, and hillside construction with 25+ years of Oakland area expertise and deep knowledge of local soil conditions, building codes, and Hayward Fault considerations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://calendly.com/wadeconcreteco/30min', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Free Oakland Estimate
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (925) 503-3200
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-600 mr-1" />
                  <span>Licensed CA Contractor</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span>500+ Oakland Projects</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hero-concrete.jpg"
                alt="Professional concrete contractors in Oakland CA - Wade & Co Construction"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Oakland Neighborhoods Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">Oakland Neighborhoods We Serve</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Wade & Co. Construction provides comprehensive concrete services throughout all Oakland neighborhoods with specialized expertise in hillside construction, seismic safety, and local soil conditions.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              "Rockridge", "Temescal", "Grand Lake", "Fruitvale",
              "Montclair", "Piedmont Avenue", "Jack London Square", "West Oakland",
              "East Oakland", "Oakland Hills", "Lake Merritt", "Downtown Oakland",
              "Chinatown", "Adams Point", "Dimond District", "Laurel"
            ].map((neighborhood, index) => (
              <div key={index} className="flex items-center space-x-2 bg-slate-50 p-3 rounded-lg">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700 font-medium">{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oakland-Specific Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Oakland Concrete Specialties</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Seismic Retrofitting</h3>
                <p className="text-slate-600">Critical earthquake safety upgrades for Oakland properties on the Hayward Fault with foundation anchoring and cripple wall bracing.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Home className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Hillside Construction</h3>
                <p className="text-slate-600">Specialized techniques for Oakland Hills steep slopes with retaining walls, drainage, and access solutions.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Building className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Historic Home Restoration</h3>
                <p className="text-slate-600">Concrete work for Oakland&apos;s Victorian and Craftsman homes with period-appropriate techniques and materials.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Oakland-Specific Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Oakland Concrete Contractors: Local Expertise Matters</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                Oakland&apos;s unique geological conditions, seismic risks, and diverse architectural heritage require specialized concrete construction expertise. Wade & Co. Construction brings over 25 years of Oakland-specific experience, with deep understanding of Hayward Fault proximity, expansive clay soils, hillside construction challenges, and the city&apos;s rich architectural history from Victorian homes to modern developments.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Oakland Geological Challenges</h3>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h4 className="font-semibold text-red-800 mb-3">⚠️ Hayward Fault Proximity</h4>
                <p className="text-red-700">
                  Oakland sits directly on the Hayward Fault, with a 33% probability of a major earthquake by 2032. All concrete construction must account for seismic forces, with mandatory soft story retrofitting programs and specialized foundation anchoring requirements that we implement in every project.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">East Bay Soil Conditions</h4>
                  <p>
                    Oakland&apos;s soil profile varies dramatically from bay mud and fill near the waterfront to hard clay and rock in the hills. Rockridge, Montclair, and Oakland Hills areas feature expansive clay soils that undergo significant volume changes with moisture variations, requiring specialized foundation design and drainage management.
                  </p>
                  <p className="mt-4">
                    We implement soil-specific concrete mix designs, reinforcement patterns, and moisture control systems that account for Oakland&apos;s diverse geological conditions. Our projects include comprehensive soil testing and site-specific engineering that ensures long-term performance.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Hillside Construction Expertise</h4>
                  <p>
                    Oakland Hills and Montclair neighborhoods present unique construction challenges with steep slopes, limited access, and complex drainage requirements. Our hillside concrete work includes specialized equipment, temporary shoring systems, and engineered solutions for challenging terrain.
                  </p>
                  <p className="mt-4">
                    We coordinate with geotechnical engineers and utilize advanced construction techniques including helicopter concrete placement, specialized forming systems, and integrated drainage solutions that protect both new construction and existing structures from erosion and settlement.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Oakland Building Code Compliance</h3>
              <p>
                Oakland&apos;s building codes incorporate California&apos;s most stringent seismic requirements plus city-specific amendments for historic preservation, environmental protection, and fire safety. Our concrete projects comply with Oakland Municipal Code Chapter 15.04 (Building Code) and Chapter 15.36 (Seismic Safety) requirements.
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Oakland Permit Process Expertise</h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Building Department Coordination:</strong> Direct relationships with Oakland Building Services Division</li>
                  <li>• <strong>Historic Preservation:</strong> Experience with Landmarks Preservation Advisory Board requirements</li>
                  <li>• <strong>Environmental Review:</strong> CEQA compliance for projects affecting sensitive areas</li>
                  <li>• <strong>Fire Department Coordination:</strong> Compliance with Oakland Fire Prevention Bureau standards</li>
                  <li>• <strong>Public Works Integration:</strong> Coordination with Oakland Department of Transportation</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Oakland Neighborhood Specializations</h3>
              
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏘️ Rockridge & Temescal</h4>
                  <p className="text-sm">
                    These established neighborhoods feature Craftsman and Tudor Revival homes requiring sensitive concrete work that preserves architectural integrity. Our projects include foundation repairs, driveway restorations, and seismic retrofitting that maintains historic character while ensuring modern safety standards.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏔️ Oakland Hills & Montclair</h4>
                  <p className="text-sm">
                    Premium hillside neighborhoods demanding exceptional quality and specialized construction techniques. Our work includes luxury driveways, retaining walls, pool decks, and foundation systems designed for steep slopes and expansive soils with comprehensive drainage and erosion control.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏢 Downtown & Jack London Square</h4>
                  <p className="text-sm">
                    Commercial and mixed-use developments requiring ADA compliance, high-traffic durability, and coordination with urban infrastructure. Our commercial concrete work includes sidewalks, plaza installations, and structural elements that integrate with Oakland&apos;s urban planning initiatives.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏡 East Oakland & Fruitvale</h4>
                  <p className="text-sm">
                    Diverse residential communities with focus on affordable, durable concrete solutions including driveway repairs, sidewalk improvements, and essential seismic safety upgrades. We work with community organizations and provide financing assistance for critical safety improvements.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Oakland Emergency Response</h3>
              <p>
                Oakland&apos;s earthquake risk requires comprehensive emergency response capabilities. We maintain 24/7 emergency services for post-earthquake damage assessment, emergency stabilization, and rapid repair of critical infrastructure. Our emergency response coordinates with Oakland Fire Department, Police, and Emergency Services.
              </p>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h4 className="font-semibold text-orange-800 mb-3">Oakland Emergency Services</h4>
                <ul className="text-orange-700 space-y-2 text-sm">
                  <li>• <strong>Post-Earthquake Assessment:</strong> Structural damage evaluation and safety recommendations</li>
                  <li>• <strong>Emergency Stabilization:</strong> Temporary shoring and safety measures for damaged structures</li>
                  <li>• <strong>Rapid Repair Services:</strong> Fast-track reconstruction for critical access and safety systems</li>
                  <li>• <strong>Insurance Coordination:</strong> Documentation and claims support for earthquake damage</li>
                  <li>• <strong>Municipal Coordination:</strong> Direct communication with Oakland emergency management</li>
                </ul>  
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Community Involvement & Local Partnerships</h3>
              <p>
                Wade & Co. Construction is actively involved in Oakland&apos;s construction community through partnerships with local suppliers, subcontractors, and community organizations. We source materials locally when possible, employ Oakland-area craftsmen, and support community development initiatives that strengthen neighborhood infrastructure.
              </p>
              <p>
                Our Oakland partnerships include relationships with local engineering firms, architectural practices specializing in Bay Area design, and environmental consultants familiar with Oakland&apos;s unique ecological and regulatory requirements. These partnerships ensure comprehensive project delivery that benefits the entire Oakland community.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Why Choose Local Oakland Contractors</h3>
              <p>
                Local expertise matters significantly in Oakland&apos;s complex construction environment. Our Oakland-based team understands neighborhood character, building department procedures, local soil conditions, and community expectations. We provide faster response times, better project coordination, and ongoing maintenance support that out-of-area contractors cannot match.
              </p>
              <p>
                Our 25+ years of Oakland experience includes relationships with local suppliers, expedited permitting knowledge, and understanding of seasonal construction patterns that optimize project scheduling and cost management. We provide comprehensive warranties backed by local presence and commitment to Oakland&apos;s construction community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Oakland Customer Reviews</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  &quot;Excellent seismic retrofitting work on our Rockridge Craftsman home. Wade &amp; Co. understood the historic character and Oakland building requirements perfectly. Professional crew, quality materials, completed on schedule.&quot;
                </p>
                <div>
                  <p className="font-semibold text-slate-800">Jennifer Martinez</p>
                  <p className="text-sm text-slate-500">Rockridge, Oakland</p>
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
                  &quot;Outstanding hillside driveway project in the Oakland Hills. They handled the challenging terrain and drainage issues perfectly. Local expertise made all the difference for our steep lot.&quot;
                </p>
                <div>
                  <p className="font-semibold text-slate-800">David Chen</p>
                  <p className="text-sm text-slate-500">Montclair, Oakland</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Oakland Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Concrete Services in Oakland</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Specialized concrete construction for Oakland&apos;s unique challenges including seismic safety, hillside construction, and historic preservation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Seismic Retrofitting", slug: "seismic-retrofitting", icon: "⚡", description: "Critical earthquake safety for Oakland properties" },
              { name: "Concrete Driveways", slug: "concrete-driveways", icon: "🚗", description: "Durable driveways for Oakland neighborhoods" },
              { name: "Retaining Walls", slug: "retaining-walls", icon: "🏔️", description: "Hillside solutions for Oakland Hills" },
              { name: "Pool Decks & Patios", slug: "pool-decks-patios", icon: "🏊", description: "Outdoor living spaces" },
              { name: "Emergency Repair", slug: "emergency-repair", icon: "🚨", description: "24/7 concrete emergency response" },
              { name: "Basement Floors", slug: "basement-floors", icon: "🏠", description: "Foundation and basement concrete" }
            ].map((service, index) => (
              <Link key={index} href={`/services/${service.slug}`} className="group">
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow group-hover:border-blue-200 h-full">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors mb-2">{service.name}</h3>
                    <p className="text-sm text-slate-600">{service.description}</p>
                    <div className="mt-3 text-blue-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for Your Oakland Concrete Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact Oakland&apos;s trusted concrete contractors for professional installation, seismic retrofitting, and emergency services throughout all Oakland neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendly.com/wadeconcreteco/30min', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Oakland Estimate
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Phone className="w-5 h-5 mr-2" />
              Call (925) 503-3200
            </Button>
          </div>
          <div className="mt-6">
            <p className="text-blue-100 text-sm">
              <MapPin className="w-4 h-4 inline mr-1" />
              Serving all Oakland neighborhoods • Licensed CA Contractor • 25+ Years Local Experience
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}