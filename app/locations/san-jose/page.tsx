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
  Cpu
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SanJoseConcretePage() {
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
                className="bg-orange-600 hover:bg-orange-700"
                onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
              >
                Get San Jose Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-orange-600 mr-3" />
                <span className="text-orange-600 font-semibold text-lg">SAN JOSE CONCRETE CONTRACTORS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Professional Concrete Contractors in San Jose, CA
                <span className="text-orange-600"> Silicon Valley Tech Hub</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Comprehensive concrete construction services throughout San Jose including Downtown, Almaden Valley, Evergreen, Willow Glen, and North San Jose. Specialized in tech campus construction, high-density residential development, commercial concrete, and seismic retrofitting with expertise in San Jose's diverse neighborhoods, soil conditions, and Silicon Valley's rapid development demands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700"
                  onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Free San Jose Estimate
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (925) 503-3200
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center">
                  <Cpu className="w-4 h-4 text-orange-600 mr-1" />
                  <span>Tech Industry</span>
                </div>
                <div className="flex items-center">
                  <Building className="w-4 h-4 text-orange-600 mr-1" />
                  <span>Major Metro</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/construction-work.jpg"
                alt="Professional concrete contractors in San Jose CA - Wade & Co Construction"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* San Jose Areas Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">San Jose Areas We Serve</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Complete concrete services throughout San Jose's diverse districts with expertise in tech industry, residential, and major commercial construction.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              "Downtown San Jose", "North San Jose", "South San Jose", "East San Jose",
              "Almaden Valley", "Evergreen", "Willow Glen", "Rose Garden",
              "Japantown", "Cambrian", "Berryessa", "Alum Rock",
              "Santana Row", "The Alameda", "Winchester", "Blossom Valley",
              "Silver Creek", "Communications Hill", "Edenvale", "Coyote Valley"
            ].map((area, index) => (
              <div key={index} className="flex items-center space-x-2 bg-orange-50 p-3 rounded-lg">
                <CheckCircle className="w-4 h-4 text-orange-600" />
                <span className="text-slate-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* San Jose-Specific Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">San Jose Concrete Specialties</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Cpu className="w-12 h-12 text-orange-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Tech Campus Construction</h3>
                <p className="text-slate-600">Specialized concrete for Silicon Valley tech campuses including data centers, office complexes, and research facilities.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Building className="w-12 h-12 text-orange-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">High-Density Development</h3>
                <p className="text-slate-600">Large-scale concrete for San Jose's urban infill projects, mixed-use developments, and transit-oriented construction.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Seismic Safety Upgrades</h3>
                <p className="text-slate-600">Critical earthquake retrofitting for San Jose's vulnerable buildings near the San Andreas Fault system.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* San Jose-Specific Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">San Jose Concrete Contractors: Silicon Valley's Construction Partner</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                San Jose, the heart of Silicon Valley and California's third-largest city, presents unique concrete construction challenges and opportunities. Wade & Co. Construction serves this dynamic metropolis with expertise in tech industry construction, high-density urban development, diverse neighborhood requirements, and the seismic safety demands of a major metropolitan area located near multiple active fault systems.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Silicon Valley Tech Industry Expertise</h3>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h4 className="font-semibold text-orange-800 mb-3">🖥️ Technology Infrastructure</h4>
                <p className="text-orange-700">
                  San Jose hosts headquarters and major facilities for tech giants including Adobe, Cisco, eBay, and PayPal, requiring specialized concrete installations for data centers, clean rooms, server facilities, and high-tech manufacturing. Our tech industry experience includes precision floors, vibration-controlled foundations, and installations meeting strict technological requirements.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Data Center & Server Farm Construction</h4>
                  <p>
                    Silicon Valley's data center requirements demand concrete installations with exceptional flatness, vibration isolation, and integrated cooling systems. Our data center concrete work includes raised floor systems, precision-leveled slabs, and specialized foundations that support critical technology infrastructure.
                  </p>
                  <p className="mt-4">
                    We coordinate with technology consultants, mechanical engineers, and facility managers to ensure concrete installations support sophisticated cooling systems, power distribution, and equipment placement requirements essential for 24/7 data center operations.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Corporate Campus Development</h4>
                  <p>
                    Tech campus construction requires large-scale concrete installations including parking structures, plaza areas, outdoor gathering spaces, and recreational facilities that support Silicon Valley's unique work culture. Our campus work emphasizes durability, aesthetics, and functionality for high-traffic corporate environments.
                  </p>
                  <p className="mt-4">
                    We create concrete installations that support tech company culture including outdoor collaboration areas, fitness facilities, food service areas, and transportation infrastructure that accommodates shuttle systems and alternative transportation methods popular in Silicon Valley.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Urban Development & High-Density Construction</h3>
              <p>
                San Jose's urban growth strategy emphasizes high-density, transit-oriented development requiring complex concrete installations for mixed-use buildings, parking structures, and urban infrastructure. Our urban construction expertise includes coordinating with existing utilities, minimizing neighborhood disruption, and meeting strict city development standards.
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Urban Construction Challenges</h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Limited Site Access:</strong> Concrete delivery and installation in dense urban environments</li>
                  <li>• <strong>Utility Coordination:</strong> Complex underground infrastructure requiring careful excavation and protection</li>
                  <li>• <strong>Noise Management:</strong> Construction scheduling and methods minimizing impact on dense residential areas</li>
                  <li>• <strong>Traffic Control:</strong> Coordination with San Jose DOT for street closures and construction access</li>
                  <li>• <strong>Environmental Compliance:</strong> Storm water management and air quality protection in urban settings</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">San Jose Neighborhood Specializations</h3>
              
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏢 Downtown San Jose</h4>
                  <p className="text-sm">
                    Urban core with high-rise construction, transit infrastructure, and historic preservation requirements. Our downtown work includes commercial concrete, plaza installations, and infrastructure supporting San Jose's urban revitalization including BART extension and major development projects.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏡 Almaden Valley</h4>
                  <p className="text-sm">
                    Upscale residential area with luxury homes and challenging hillside terrain. Our work includes custom driveways, retaining walls, outdoor living spaces, and foundation work that addresses expansive soil conditions while maintaining high aesthetic standards for premium properties.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🌳 Willow Glen</h4>
                  <p className="text-sm">
                    Historic neighborhood with mature trees and established character requiring sensitive concrete work that preserves neighborhood charm. Projects include sidewalk restoration, driveway repairs, and foundation work that maintains historic integrity while ensuring modern safety standards.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏭 North San Jose Tech Corridor</h4>
                  <p className="text-sm">
                    Major employment center with tech campuses, research facilities, and supporting commercial development. Our commercial concrete work includes office buildings, research facilities, parking structures, and infrastructure supporting Silicon Valley's continued expansion and innovation.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Seismic Safety & Fault Proximity</h3>
              <p>
                San Jose's location near the San Andreas, Hayward, and Calaveras fault systems creates significant seismic risk requiring comprehensive earthquake safety measures for all concrete construction. Our seismic work includes foundation retrofitting, structural upgrades, and new construction designed for major earthquake events.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h4 className="font-semibold text-red-800 mb-3">San Jose Seismic Requirements</h4>
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>• <strong>Mandatory Retrofitting:</strong> Required seismic upgrades for vulnerable buildings constructed before current codes</li>
                  <li>• <strong>Soft Story Programs:</strong> City-mandated retrofitting for buildings with ground-floor commercial spaces</li>
                  <li>• <strong>High-Tech Facility Protection:</strong> Specialized seismic design for critical technology infrastructure</li>
                  <li>• <strong>Emergency Response Planning:</strong> Concrete installations designed to maintain functionality after major earthquakes</li>
                  <li>• <strong>Advanced Design Standards:</strong> Current California seismic codes plus local amendments for high-risk areas</li>
                </ul>  
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Diverse Community Needs</h3>
              <p>
                San Jose's cultural diversity creates varied concrete construction requirements reflecting different architectural traditions, family structures, and community needs. Our work respects cultural preferences while meeting uniform safety and performance standards throughout the city's diverse neighborhoods.
              </p>
              <p>
                We coordinate with community organizations, cultural centers, and neighborhood groups to ensure concrete projects enhance community character while supporting economic development and housing affordability goals essential for San Jose's continued success as a diverse, inclusive metropolitan area.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Environmental Leadership & Sustainability</h3>
              <p>
                San Jose's environmental leadership requires concrete construction that minimizes carbon footprint, supports water conservation, and contributes to the city's climate action goals. Our sustainable concrete practices include recycled materials, energy-efficient construction methods, and installations that support green building certification.
              </p>
              <p>
                We implement pervious concrete systems for storm water management, utilize fly ash and other supplementary materials that reduce cement content, and coordinate with San Jose's Environmental Services Department to ensure construction practices support the city's sustainability initiatives.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Transportation Infrastructure Support</h3>
              <p>
                San Jose's transportation infrastructure including VTA light rail, Caltrain, future BART service, and major freeway systems requires specialized concrete work for transit facilities, park-and-ride lots, and multimodal transportation hubs that support regional connectivity and reduce traffic congestion.
              </p>
              <p>
                Our transportation concrete work includes coordination with VTA, Caltrain, and regional transportation agencies to ensure installations support current operations while accommodating future expansion of public transit systems essential for Silicon Valley's continued economic growth.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Housing Affordability & Development</h3>
              <p>
                San Jose's housing affordability crisis requires efficient, cost-effective concrete construction that supports affordable housing development while maintaining quality and safety standards. Our work includes coordination with affordable housing developers, community land trusts, and nonprofit organizations.
              </p>
              <p>
                We provide value engineering services, efficient project delivery, and construction techniques that reduce costs while ensuring long-term durability and minimal maintenance requirements essential for affordable housing financial viability and resident satisfaction.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Innovation & Technology Integration</h3>
              <p>
                Silicon Valley's innovation culture influences concrete construction through adoption of new technologies, materials, and construction methods. We utilize Building Information Modeling (BIM), GPS-guided equipment, and advanced materials that improve quality while reducing construction time and environmental impact.
              </p>
              <p>
                Our technology integration includes coordination with smart building systems, sustainable energy infrastructure, and advanced monitoring systems that position San Jose construction projects at the forefront of building performance and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">San Jose Customer Reviews</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "Exceptional tech facility concrete work for our North San Jose data center. Wade & Co. delivered the precision floors and vibration control we needed for our server installations. Professional understanding of tech industry requirements."
                </p>
                <div>
                  <p className="font-semibold text-slate-800">David Liu</p>
                  <p className="text-sm text-slate-500">Facilities Manager, North San Jose</p>
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
                  "Outstanding residential concrete work in Almaden Valley. They handled our challenging hillside site professionally and created beautiful outdoor spaces that enhance our property value. Excellent craftsmanship and local expertise."
                </p>
                <div>
                  <p className="font-semibold text-slate-800">Patricia Martinez</p>
                  <p className="text-sm text-slate-500">Almaden Valley, San Jose</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for Your San Jose Concrete Project?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact San Jose's Silicon Valley concrete specialists for tech industry, residential, and commercial construction throughout the South Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free San Jose Estimate
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Call (925) 503-3200
            </Button>
          </div>
          <div className="mt-6">
            <p className="text-orange-100 text-sm">
              <Cpu className="w-4 h-4 inline mr-1" />
              Silicon Valley • Tech Industry • Urban Development • 25+ Years South Bay Experience
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}