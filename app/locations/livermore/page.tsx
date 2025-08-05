"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  CheckCircle, 
  ArrowLeft,
  MapPin,
  Star,
  Home,
  Building,
  Calendar,
  Wine
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LivermoreConcretePage() {
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
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
              >
                Get Livermore Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-purple-600 mr-3" />
                <span className="text-purple-600 font-semibold text-lg">LIVERMORE CONCRETE CONTRACTORS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Professional Concrete Contractors in Livermore, CA
                <span className="text-purple-600"> Wine Country & Rural Specialists</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Expert concrete construction services throughout Livermore including downtown Livermore, South Livermore, North Livermore, and rural wine country properties. Specialized in agricultural concrete, wine industry facilities, equestrian properties, and rural residential construction with expertise in Livermore&apos;s unique blend of agricultural heritage and modern suburban development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Free Livermore Estimate
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (925) 503-3200
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center">
                  <Wine className="w-4 h-4 text-purple-600 mr-1" />
                  <span>Wine Country</span>
                </div>
                <div className="flex items-center">
                  <Home className="w-4 h-4 text-purple-600 mr-1" />
                  <span>Rural Specialists</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hero-concrete.jpg"
                alt="Professional concrete contractors in Livermore CA - Wade & Co Construction"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Livermore Areas Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">Livermore Areas We Serve</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Complete concrete services throughout Livermore&apos;s diverse areas from downtown to rural wine country with expertise in agricultural, residential, and commercial construction.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              "Downtown Livermore", "South Livermore", "North Livermore", "East Livermore",
              "Wine Country", "Rural Properties", "Springtown", "Altamont",
              "Cayetano Creek", "Alamo Creek", "Arroyo Las Positas", "Junction Avenue",
              "Portola Avenue", "Tesla Road", "Manning Road", "Vasco Road"
            ].map((area, index) => (
              <div key={index} className="flex items-center space-x-2 bg-purple-50 p-3 rounded-lg">
                <CheckCircle className="w-4 h-4 text-purple-600" />
                <span className="text-slate-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Livermore-Specific Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Livermore Concrete Specialties</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Wine className="w-12 h-12 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Wine Industry Concrete</h3>
                <p className="text-slate-600">Specialized concrete for wineries, tasting rooms, and agricultural facilities including crush pads and equipment foundations.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Home className="w-12 h-12 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Rural Properties</h3>
                <p className="text-slate-600">Large-scale concrete for equestrian facilities, agricultural buildings, and rural residential properties with acreage.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Building className="w-12 h-12 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Historic Downtown</h3>
                <p className="text-slate-600">Preservation-sensitive concrete work for Livermore&apos;s historic downtown district and cultural facilities.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Livermore-Specific Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Livermore Concrete Contractors: Agricultural Heritage Meets Modern Living</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                Livermore uniquely combines world-renowned wine country with suburban residential development, creating diverse concrete construction requirements. Wade &amp; Co. Construction serves this distinctive community with expertise in agricultural concrete, wine industry facilities, rural residential projects, and urban development that respects Livermore&apos;s agricultural heritage while supporting modern growth and economic development.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Wine Industry Expertise</h3>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
                <h4 className="font-semibold text-purple-800 mb-3">🍷 Livermore Valley Wine Region</h4>
                <p className="text-purple-700">
                  Livermore Valley&apos;s 50+ wineries require specialized concrete installations including crush pads, fermentation facilities, barrel storage areas, and tasting room construction. Our wine industry experience includes food-grade concrete, proper drainage systems, and installations that meet California Department of Food and Agriculture requirements.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Winery Infrastructure</h4>
                  <p>
                    Wine production requires precise concrete installations including crush pads with proper slopes for drainage, fermentation tank foundations, and barrel storage areas with climate control considerations. Our winery concrete work meets sanitary requirements while providing long-term durability for heavy equipment and operational demands.
                  </p>
                  <p className="mt-4">
                    We coordinate with winery architects, equipment suppliers, and regulatory agencies to ensure concrete installations support wine production goals while meeting health department requirements and providing flexible layouts for evolving production needs.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Tasting Room & Hospitality</h4>
                  <p>
                    Livermore&apos;s wine tourism requires attractive, durable concrete installations for tasting rooms, event spaces, and outdoor entertainment areas. Our hospitality concrete work emphasizes aesthetic appeal, safety for visitors, and low maintenance requirements for busy winery operations.
                  </p>
                  <p className="mt-4">
                    We create decorative concrete installations that complement wine country aesthetics while providing practical functionality for weddings, corporate events, and daily tasting room operations that drive Livermore&apos;s wine tourism economy.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Rural & Agricultural Construction</h3>
              <p>
                Livermore&apos;s rural areas require concrete installations for equestrian facilities, agricultural buildings, and large residential properties with acreage. Our rural construction expertise includes specialized access solutions, large-scale installations, and integration with agricultural operations and natural landscapes.
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Rural Concrete Applications</h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Equestrian Facilities:</strong> Stable floors, wash racks, arena footings, and feed storage areas</li>
                  <li>• <strong>Agricultural Buildings:</strong> Barn foundations, equipment storage, and feed handling facilities</li>
                  <li>• <strong>Large Property Access:</strong> Extended driveways, vehicle turnarounds, and service roads</li>
                  <li>• <strong>Water Management:</strong> Irrigation channels, retention basins, and drainage structures</li>
                  <li>• <strong>Equipment Pads:</strong> Foundations for generators, pumps, and agricultural machinery</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Livermore Area Specializations</h3>
              
              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🍇 Wine Country Properties</h4>
                  <p className="text-sm">
                    Premium residential properties within wine country requiring sophisticated concrete installations that complement vineyard settings. Our work includes luxury driveways, outdoor entertainment areas, and architectural concrete that enhances property values while respecting agricultural landscapes.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏛️ Historic Downtown Livermore</h4>
                  <p className="text-sm">
                    Preservation-sensitive concrete work for downtown&apos;s historic district including sidewalk restoration, plaza installations, and building improvements that maintain historic character while meeting modern accessibility and safety requirements. Coordination with Livermore Heritage Guild and city preservation requirements.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏡 South Livermore Residential</h4>
                  <p className="text-sm">
                    Established neighborhoods with mature trees and varied architecture requiring careful concrete work that preserves landscape features and complements diverse architectural styles. Projects include driveway replacements, foundation repairs, and outdoor living space additions.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🔬 Lawrence Livermore National Laboratory Area</h4>
                  <p className="text-sm">
                    High-security and technical facility requirements including specialized concrete for research facilities, security installations, and infrastructure supporting one of the nation&apos;s premier research institutions. Coordination with federal security and technical requirements.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Climate & Environmental Considerations</h3>
              <p>
                Livermore&apos;s inland valley climate features hot, dry summers with temperatures often exceeding 100°F and mild winters, requiring concrete installations designed for extreme temperature variations and UV exposure. Our construction techniques account for thermal expansion and long-term durability in challenging conditions.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h4 className="font-semibold text-yellow-800 mb-3">Livermore Climate Adaptations</h4>
                <ul className="text-yellow-700 space-y-2 text-sm">
                  <li>• <strong>Heat-Resistant Concrete:</strong> Specialized mixes and aggregates for extreme summer temperatures</li>
                  <li>• <strong>UV-Stable Finishes:</strong> Long-lasting colors and sealers resistant to intense sunlight</li>
                  <li>• <strong>Thermal Joint Design:</strong> Expansion systems accommodating significant temperature swings</li>
                  <li>• <strong>Water Conservation:</strong> Efficient curing methods and drought-tolerant installation practices</li>
                  <li>• <strong>Wind Resistance:</strong> Structures designed for seasonal wind patterns and dust storms</li>
                </ul>  
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Economic Development Support</h3>
              <p>
                Livermore&apos;s economic development balances wine tourism, research institutions, and residential growth, creating diverse concrete construction opportunities. Our commercial work supports this economic diversity while maintaining community character and agricultural heritage.
              </p>
              <p>
                We coordinate with Livermore&apos;s Economic Development Department, tourism organizations, and agricultural groups to ensure concrete projects enhance economic vitality while preserving the unique character that makes Livermore attractive to residents, businesses, and visitors.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Environmental Stewardship</h3>
              <p>
                Livermore&apos;s agricultural heritage and environmental consciousness require construction practices that minimize environmental impact while supporting sustainable development. Our concrete installations incorporate sustainable materials and techniques that protect natural resources and agricultural viability.
              </p>
              <p>
                We implement dust control measures during construction, utilize local materials when possible, and design installations that support water conservation and natural drainage patterns essential for continued agricultural and residential use of Livermore&apos;s unique landscape.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Transportation & Access Solutions</h3>
              <p>
                Livermore&apos;s rural areas and vineyard properties often require specialized access solutions for concrete installation including helicopter placement, portable mixing equipment, and coordination with agricultural operations to minimize disruption during harvest and other critical periods.
              </p>
              <p>
                Our equipment fleet includes specialized machinery for rural access, and we maintain relationships with helicopter concrete placement services for projects requiring minimal ground disturbance or access through sensitive vineyard areas.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Community Heritage Preservation</h3>
              <p>
                Wade &amp; Co. Construction respects Livermore&apos;s rich agricultural and cultural heritage through construction practices that preserve historic elements, support local businesses, and maintain the rural character that defines Livermore&apos;s unique identity within the rapidly developing Tri-Valley region.
              </p>
              <p>
                Our community involvement includes supporting wine country events, partnering with local agricultural suppliers, and employing construction techniques that respect the working landscape that continues to define Livermore&apos;s character and economic foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Livermore Customer Reviews</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  &quot;Outstanding winery concrete work for our new tasting room and crush pad. Wade &amp; Co. understood our food-grade requirements and delivered quality installations that handle our harvest operations perfectly. Professional wine industry expertise.&quot;
                </p>
                <div>
                  <p className="font-semibold text-slate-800">Tom Rodriguez</p>
                  <p className="text-sm text-slate-500">Winery Owner, Livermore Valley</p>
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
                  &quot;Excellent equestrian facility concrete work on our rural property. They handled the large-scale project professionally and created durable surfaces for our horse operations. Great rural property expertise and attention to detail.&quot;
                </p>
                <div>
                  <p className="font-semibold text-slate-800">Susan Williams</p>
                  <p className="text-sm text-slate-500">Rural Property Owner, South Livermore</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for Your Livermore Concrete Project?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Contact Livermore&apos;s wine country and rural concrete specialists for agricultural, residential, and commercial construction throughout the Tri-Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Livermore Estimate
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Phone className="w-5 h-5 mr-2" />
              Call (925) 503-3200
            </Button>
          </div>
          <div className="mt-6">
            <p className="text-purple-100 text-sm">
              <Wine className="w-4 h-4 inline mr-1" />
              Wine Country • Agricultural • Rural Properties • 25+ Years Tri-Valley Experience
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}