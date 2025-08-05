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
  Zap,
  Calendar,
  Heart
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HaywardConcretePage() {
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
                Get Hayward Quote
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
                <MapPin className="w-8 h-8 text-red-600 mr-3" />
                <span className="text-red-600 font-semibold text-lg">HAYWARD CONCRETE CONTRACTORS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Professional Concrete Contractors in Hayward, CA
                <span className="text-red-600"> Heart of the East Bay</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Complete concrete construction services throughout Hayward including Downtown Hayward, Hayward Hills, Castro Valley border areas, and industrial districts. Specialized in diverse residential communities, commercial development, industrial facilities, and critical seismic retrofitting with expertise in Hayward&apos;s multicultural neighborhoods and challenging geological conditions near the Hayward Fault.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => window.open('https://calendly.com/wadeconcreteco/30min', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Free Hayward Estimate
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (925) 503-3200
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center">
                  <Heart className="w-4 h-4 text-red-600 mr-1" />
                  <span>Community Focused</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 text-red-600 mr-1" />
                  <span>Seismic Experts</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/seismic-work.jpg"
                alt="Professional concrete contractors in Hayward CA - Wade & Co Construction"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hayward Areas Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">Hayward Communities We Serve</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Complete concrete services throughout Hayward&apos;s diverse neighborhoods with expertise in multicultural communities, seismic safety, and varied architectural styles.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              "Downtown Hayward", "Hayward Hills", "Southland", "Mt. Eden",
              "Cherryland", "Ashland", "Lorenzo", "Fairview",
              "Industrial District", "Harder Area", "Tennyson", "Russell City",
              "Castro Valley Border", "San Lorenzo Border", "Jackson Triangle", "Cannery District"
            ].map((area, index) => (
              <div key={index} className="flex items-center space-x-2 bg-red-50 p-3 rounded-lg">
                <CheckCircle className="w-4 h-4 text-red-600" />
                <span className="text-slate-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hayward-Specific Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Hayward Concrete Specialties</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Critical Seismic Retrofitting</h3>
                <p className="text-slate-600">Essential earthquake safety upgrades for Hayward properties directly on the Hayward Fault with immediate seismic risk.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Multicultural Communities</h3>
                <p className="text-slate-600">Concrete services respecting diverse architectural traditions and cultural preferences throughout Hayward&apos;s neighborhoods.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Building className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Industrial & Commercial</h3>
                <p className="text-slate-600">Heavy-duty concrete for Hayward&apos;s industrial corridor and growing commercial development districts.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hayward-Specific Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Hayward Concrete Contractors: Community-Centered Construction</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                Hayward represents the heart of East Bay diversity, combining multicultural residential communities, growing commercial districts, and significant industrial facilities. Wade & Co. Construction serves this vibrant city with concrete construction services that respect cultural diversity, address critical seismic safety needs, and support community development that enhances quality of life for all Hayward residents.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-800 mb-3">⚠️ Critical Seismic Risk Zone</h3>
                <p className="text-red-700 font-medium">
                  Hayward sits directly on the Hayward Fault, creating the highest earthquake risk in the Bay Area. The fault runs directly through the city, making seismic retrofitting not just recommended but essential for life safety. Properties built before 1980 face extreme vulnerability during major earthquakes, requiring immediate professional assessment and retrofitting.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Hayward Fault Proximity & Seismic Safety</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Immediate Earthquake Hazard</h4>
                  <p>
                    The Hayward Fault runs directly through Hayward, creating surface rupture zones where the fault breaks the ground surface during earthquakes. Properties within these zones face catastrophic damage risk, requiring specialized foundation design and structural reinforcement that goes beyond standard seismic requirements.
                  </p>
                  <p className="mt-4">
                    Our seismic retrofitting addresses Hayward&apos;s unique risks including surface rupture potential, amplified ground shaking, and liquefaction hazards in bay-adjacent areas. We coordinate with seismic engineers and utilize advanced retrofitting techniques specifically designed for fault-proximal locations.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Emergency Response Preparation</h4>
                  <p>
                    Hayward&apos;s earthquake risk requires comprehensive emergency response planning including immediate post-earthquake assessment capabilities, emergency stabilization procedures, and rapid repair mobilization. We maintain emergency response teams specifically trained for major earthquake damage scenarios.
                  </p>
                  <p className="mt-4">
                    Our emergency preparedness includes stockpiled materials, specialized equipment, and coordination protocols with Hayward Fire Department, emergency services, and regional disaster response agencies. We provide 24/7 emergency response for critical safety situations throughout Hayward.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Multicultural Community Service</h3>
              <p>
                Hayward&apos;s exceptional cultural diversity includes significant Latino, Asian, African American, and Pacific Islander communities, each with unique architectural preferences and construction requirements. Our concrete services respect cultural traditions while ensuring uniform safety and performance standards.
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Cultural Sensitivity & Communication</h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Multilingual Communication:</strong> Staff and contractors who speak Spanish, Tagalog, and other community languages</li>
                  <li>• <strong>Cultural Architecture:</strong> Concrete designs that complement diverse architectural traditions and family patterns</li>
                  <li>• <strong>Community Partnerships:</strong> Relationships with cultural organizations and community leaders</li>
                  <li>• <strong>Flexible Scheduling:</strong> Project timing that respects religious observances and cultural celebrations</li>
                  <li>• <strong>Affordable Solutions:</strong> Value engineering and financing options supporting diverse economic situations</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Hayward Neighborhood Specializations</h3>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏢 Downtown Hayward</h4>
                  <p className="text-sm">
                    Historic downtown core with BART connectivity and mixed-use redevelopment. Our urban concrete work includes commercial installations, transit-oriented development, and historic preservation projects that support downtown revitalization while maintaining community character and accessibility.
                  </p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏔️ Hayward Hills</h4>
                  <p className="text-sm">
                    Hillside residential areas with challenging terrain and premium properties. Our hillside work includes retaining walls, specialized foundations, and access solutions for steep slopes while addressing both seismic requirements and aesthetic expectations for valued residential properties.
                  </p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏭 Industrial District</h4>
                  <p className="text-sm">
                    Major manufacturing and logistics corridor with heavy-duty concrete requirements. Our industrial work includes warehouse floors, loading docks, truck courts, and manufacturing facility concrete designed for heavy equipment loads and 24/7 operations supporting regional commerce.
                  </p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏘️ Southland & Mt. Eden</h4>
                  <p className="text-sm">
                    Established residential neighborhoods with diverse housing types and family-oriented communities. Our residential work includes driveway upgrades, patio installations, foundation repairs, and seismic retrofitting that preserves neighborhood character while ensuring family safety.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Industrial Corridor Expertise</h3>
              <p>
                Hayward&apos;s industrial corridor along Highway 880 hosts major manufacturing, logistics, and distribution facilities requiring heavy-duty concrete installations. Our industrial concrete work includes precision floors, equipment foundations, and loading facilities designed for continuous heavy use.
              </p>
              
              <div className="bg-gray-50 border-l-4 border-gray-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Industrial Concrete Capabilities</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Heavy-Duty Floors:</strong> Reinforced concrete systems for forklift traffic and heavy storage loads</li>
                  <li>• <strong>Equipment Foundations:</strong> Vibration-isolated bases for manufacturing and processing equipment</li>
                  <li>• <strong>Loading Dock Systems:</strong> Durable concrete for truck loading and logistics operations</li>
                  <li>• <strong>Chemical-Resistant Surfaces:</strong> Specialized concrete and coatings for industrial processing</li>
                  <li>• <strong>Large-Scale Installation:</strong> Efficient concrete placement for major industrial projects</li>
                </ul>  
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Affordable Housing & Community Development</h3>
              <p>
                Hayward&apos;s commitment to affordable housing creates opportunities for concrete construction that supports diverse economic levels while maintaining quality and safety standards. We work with affordable housing developers, community land trusts, and nonprofit organizations to provide cost-effective construction solutions.
              </p>
              <p>
                Our affordable housing work includes value engineering, efficient construction methods, and durable installations that minimize long-term maintenance costs while providing safe, attractive living environments for working families and seniors throughout Hayward&apos;s diverse communities.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Public Safety & Community Infrastructure</h3>
              <p>
                Hayward&apos;s commitment to public safety requires concrete installations that support police, fire, and emergency services while enhancing community connectivity and quality of life. Our municipal work includes sidewalks, public facilities, and infrastructure that serves all community members.
              </p>
              <p>
                We coordinate with Hayward Police Department, Fire Department, and Public Works to ensure concrete projects enhance public safety while providing accessibility and community benefits that strengthen neighborhood connections and civic engagement.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Environmental Justice & Health</h3>
              <p>
                Hayward&apos;s environmental justice initiatives require construction practices that minimize environmental impact and support community health goals. Our concrete installations incorporate sustainable materials and techniques that reduce air pollution and environmental burdens on vulnerable communities.
              </p>
              <p>
                We implement dust control measures, utilize low-emission equipment, and coordinate with environmental health organizations to ensure construction practices support Hayward&apos;s environmental justice goals and protect community health, particularly in areas with cumulative environmental impacts.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Economic Development Support</h3>
              <p>
                Hayward&apos;s economic development strategy emphasizes job creation, small business support, and industrial retention requiring concrete construction that supports diverse economic activities. Our commercial work helps local businesses succeed while contributing to community economic vitality.
              </p>
              <p>
                We partner with Hayward&apos;s Economic Development Department, Chamber of Commerce, and business organizations to provide concrete construction services that support entrepreneurship, job creation, and economic opportunities for Hayward residents throughout the city&apos;s diverse business districts.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Climate Resilience & Adaptation</h3>
              <p>
                Hayward&apos;s climate action plan requires concrete construction that supports climate resilience including heat island reduction, storm water management, and energy efficiency. Our installations contribute to community climate adaptation while providing superior performance and durability.
              </p>
              <p>
                We utilize light-colored concrete surfaces that reduce heat absorption, pervious concrete systems for storm water management, and construction techniques that support renewable energy installation and building energy efficiency throughout Hayward&apos;s residential and commercial districts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Hayward Customer Reviews</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  &quot;Critical seismic retrofitting work for our family home near the Hayward Fault. Wade &amp; Co. understood the urgent safety needs and delivered professional foundation anchoring and cripple wall bracing. Peace of mind for our family&apos;s safety.&quot;
                </p>
                <div>
                  <p className="font-semibold text-slate-800">Carlos Hernandez</p>
                  <p className="text-sm text-slate-500">Southland, Hayward</p>
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
                  &quot;Excellent industrial concrete work for our manufacturing facility. They handled our heavy-duty floor requirements professionally and delivered on schedule. Strong understanding of industrial needs and quality workmanship.&quot;
                </p>
                <div>
                  <p className="font-semibold text-slate-800">Jennifer Wong</p>
                  <p className="text-sm text-slate-500">Facility Manager, Industrial District</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for Your Hayward Concrete Project?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact Hayward&apos;s community-focused concrete contractors for seismic safety, residential, and commercial construction throughout the East Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendly.com/wadeconcreteco/30min', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Hayward Estimate
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              <Phone className="w-5 h-5 mr-2" />
              Emergency: (925) 503-3200
            </Button>
          </div>
          <div className="mt-6">
            <p className="text-red-100 text-sm">
              <Heart className="w-4 h-4 inline mr-1" />
              Community Focused • Seismic Safety • Multicultural • 25+ Years East Bay Experience
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}