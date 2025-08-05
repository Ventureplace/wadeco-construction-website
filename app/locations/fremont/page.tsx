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
  Factory
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FremontConcretePage() {
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
                Get Fremont Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-blue-600 mr-3" />
                <span className="text-blue-600 font-semibold text-lg">FREMONT CONCRETE CONTRACTORS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Professional Concrete Contractors in Fremont, CA
                <span className="text-blue-600"> Commercial & Residential Experts</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Comprehensive concrete construction services throughout Fremont including Ardenwood, Centerville, Niles, Warm Springs, and Mission San Jose. Specialized in commercial concrete, industrial facilities, residential construction, and seismic retrofitting with expertise in Fremont's diverse soil conditions, tech industry requirements, and family-focused community development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Free Fremont Estimate
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (925) 503-3200
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center">
                  <Factory className="w-4 h-4 text-blue-600 mr-1" />
                  <span>Commercial Specialists</span>
                </div>
                <div className="flex items-center">
                  <Home className="w-4 h-4 text-blue-600 mr-1" />
                  <span>Family Communities</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/construction-work.jpg"
                alt="Professional concrete contractors in Fremont CA - Wade & Co Construction"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fremont Neighborhoods Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">Fremont Areas We Serve</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Complete concrete services throughout Fremont's diverse communities with expertise in commercial, residential, and industrial construction.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              "Ardenwood", "Centerville", "Niles", "Warm Springs",
              "Mission San Jose", "Glenmoor", "Brookvale", "Thornton",
              "Cabrillo", "Forest Park", "Blacow", "Alvarado",
              "Fremont Hills", "Pacific Commons", "NewPark Mall Area", "Lake Elizabeth"
            ].map((neighborhood, index) => (
              <div key={index} className="flex items-center space-x-2 bg-blue-50 p-3 rounded-lg">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700 font-medium">{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fremont-Specific Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Fremont Concrete Specialties</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Factory className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Industrial Concrete</h3>
                <p className="text-slate-600">Heavy-duty concrete for Fremont's tech manufacturing, warehouses, and industrial facilities with specialized load requirements.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Building className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Commercial Development</h3>
                <p className="text-slate-600">Large-scale concrete work for Fremont's growing commercial districts and mixed-use developments.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Home className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Family-Focused Residential</h3>
                <p className="text-slate-600">Safe, durable concrete solutions for Fremont's family neighborhoods including driveways, patios, and play areas.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fremont-Specific Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Fremont Concrete Contractors: Innovation Meets Community</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                Fremont's unique position as a tech industry hub and family-oriented community creates diverse concrete construction requirements. Wade & Co. Construction serves Fremont's dual identity with expertise in high-tech industrial facilities, family-friendly residential projects, and commercial developments that support the city's continued growth as a major Bay Area employment center and desirable residential community.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Fremont Industrial Expertise</h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="font-semibold text-blue-800 mb-3">🏭 Tech Manufacturing Hub</h4>
                <p className="text-blue-700">
                  Fremont hosts major manufacturing facilities for Tesla, Lam Research, and numerous tech companies requiring specialized concrete installations. Our industrial concrete work includes cleanroom foundations, heavy equipment pads, and precision-leveled floors meeting strict manufacturing tolerances.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">High-Tech Facility Requirements</h4>
                  <p>
                    Fremont's manufacturing facilities require concrete installations with exceptional flatness, vibration control, and chemical resistance. Our industrial concrete work includes specialized aggregate systems, vapor barriers, and surface treatments that meet cleanroom standards and precision manufacturing requirements.
                  </p>
                  <p className="mt-4">
                    We coordinate with facility engineers, equipment manufacturers, and environmental consultants to ensure concrete installations support sophisticated manufacturing processes while meeting environmental and safety regulations specific to high-tech production facilities.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Warehouse & Distribution Centers</h4>
                  <p>
                    Fremont's strategic location drives demand for large-scale warehouse and distribution facilities requiring heavy-duty concrete floors, loading docks, and truck courts. Our commercial concrete work handles high traffic loads while providing long-term durability and minimal maintenance requirements.
                  </p>
                  <p className="mt-4">
                    We utilize advanced concrete mixes, joint systems, and surface treatments designed for forklift traffic, heavy storage loads, and 24/7 operations common in Fremont's logistics and distribution industry. All work meets current ACI standards for industrial concrete construction.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Family-Oriented Residential Services</h3>
              <p>
                Fremont's reputation as an excellent family community drives demand for safe, durable residential concrete installations. Our residential work emphasizes child safety, long-term durability, and aesthetic appeal that enhances property values in Fremont's competitive real estate market.
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Family-Safe Concrete Features</h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Slip-Resistant Surfaces:</strong> Safe textures for pool decks, patios, and walkways around family areas</li>
                  <li>• <strong>Rounded Edges:</strong> Child-safe edge details on steps, planters, and decorative elements</li>
                  <li>• <strong>Integrated Play Areas:</strong> Concrete installations that support playground equipment and recreational spaces</li>
                  <li>• <strong>Durable Driveways:</strong> Heavy-duty surfaces handling multiple vehicles and recreational equipment</li>
                  <li>• <strong>Maintenance-Free Solutions:</strong> Long-lasting installations requiring minimal upkeep for busy families</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Fremont Neighborhood Specializations</h3>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏡 Warm Springs</h4>
                  <p className="text-sm">
                    Newer development area with modern homes and BART accessibility. Our work includes contemporary concrete designs, integrated smart home features, and installations that complement modern architecture while providing long-term durability for growing families.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🌳 Ardenwood</h4>
                  <p className="text-sm">
                    Established family neighborhood near Ardenwood Regional Preserve. Our residential concrete work emphasizes environmental integration, natural aesthetics, and installations that support outdoor recreation and family activities while preserving the area's natural character.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏛️ Mission San Jose</h4>
                  <p className="text-sm">
                    Historic area with excellent schools and established homes. Our work includes foundation repairs, driveway upgrades, and seismic retrofitting that preserves neighborhood character while ensuring modern safety standards for valuable family properties.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏭 Pacific Commons</h4>
                  <p className="text-sm">
                    Major commercial and retail district requiring heavy-duty concrete for parking structures, retail spaces, and mixed-use developments. Our commercial work handles high traffic loads while providing attractive surfaces that support Fremont's economic development goals.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Fremont Soil Conditions & Construction Challenges</h3>
              <p>
                Fremont's location in the San Francisco Bay's alluvial plain creates diverse soil conditions from bay mud near the shoreline to stable soils in the foothills. Our concrete work addresses these varying conditions with site-specific foundation design and soil stabilization techniques.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h4 className="font-semibold text-yellow-800 mb-3">Fremont Soil Considerations</h4>
                <ul className="text-yellow-700 space-y-2 text-sm">
                  <li>• <strong>Expansive Clay Soils:</strong> Seasonal movement requiring flexible foundation systems and proper drainage</li>
                  <li>• <strong>Liquefaction Risk:</strong> Bay area soils requiring specialized foundation design for seismic events</li>
                  <li>• <strong>Industrial Contamination:</strong> Some areas requiring environmental assessment and specialized handling</li>
                  <li>• <strong>Groundwater Variations:</strong> Seasonal water table changes affecting foundation and basement construction</li>
                  <li>• <strong>Fill Soils:</strong> Historic bay fill areas requiring deep foundation systems and settlement monitoring</li>
                </ul>  
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Commercial Development Support</h3>
              <p>
                Fremont's economic growth drives continuous commercial development including retail centers, office buildings, and mixed-use projects. Our commercial concrete work supports the city's economic development goals while meeting strict performance requirements for durability and aesthetics.
              </p>
              <p>
                We coordinate with Fremont's Economic Development Department, planning staff, and community organizations to ensure commercial concrete projects enhance neighborhood character while supporting business development and job creation throughout the city.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Fremont Seismic Safety & Building Codes</h3>
              <p>
                Fremont's location near multiple fault systems requires comprehensive seismic design for all concrete construction. We implement current seismic design standards while coordinating with Fremont's Building Division for efficient permitting and inspection processes.
              </p>
              <p>
                Our seismic safety work includes foundation retrofitting for older buildings, new construction designed for earthquake resistance, and emergency response capabilities for post-earthquake damage assessment and repair throughout Fremont's residential and commercial districts.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Environmental Stewardship</h3>
              <p>
                Fremont's commitment to environmental sustainability influences all our concrete projects through sustainable material usage, construction waste reduction, and storm water management compliance. We implement green building practices that support Fremont's climate action goals.
              </p>
              <p>
                Our environmental practices include local material sourcing, recycled aggregate usage, and construction methods that minimize environmental impact while providing superior performance and durability for Fremont's diverse construction requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Fremont Customer Reviews</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "Excellent commercial concrete work for our Warm Springs facility. Wade & Co. understood our manufacturing requirements and delivered precision floors that meet our strict tolerances. Professional project management throughout."
                </p>
                <div>
                  <p className="font-semibold text-slate-800">James Park</p>
                  <p className="text-sm text-slate-500">Manufacturing Manager, Warm Springs</p>
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
                  "Outstanding family-friendly patio and driveway work in Ardenwood. They understood our needs with young children and created safe, beautiful surfaces that our whole family enjoys. Highly recommend!"
                </p>
                <div>
                  <p className="font-semibold text-slate-800">Maria Rodriguez</p>
                  <p className="text-sm text-slate-500">Ardenwood, Fremont</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for Your Fremont Concrete Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact Fremont's concrete specialists for commercial, industrial, and residential construction throughout all Fremont neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Fremont Estimate
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Phone className="w-5 h-5 mr-2" />
              Call (925) 503-3200
            </Button>
          </div>
          <div className="mt-6">
            <p className="text-blue-100 text-sm">
              <Factory className="w-4 h-4 inline mr-1" />
              Commercial • Industrial • Residential • 25+ Years Fremont Experience
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}