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
  Palmtree
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PleasantonConcretePage() {
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
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.open('https://calendly.com/wadeconcreteco/30min', '_blank')}
              >
                Get Pleasanton Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-green-600 mr-3" />
                <span className="text-green-600 font-semibold text-lg">PLEASANTON CONCRETE CONTRACTORS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Professional Concrete Contractors in Pleasanton, CA
                <span className="text-green-600"> Luxury Home Specialists</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Premium concrete construction services throughout Pleasanton including Ruby Hill, Birdland, Vintage Hills, and downtown Pleasanton. Specialized in luxury residential construction, decorative concrete, outdoor living spaces, and high-end commercial projects with expertise in Pleasanton&apos;s upscale community standards and Mediterranean-inspired architecture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => window.open('https://calendly.com/wadeconcreteco/30min', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Free Pleasanton Estimate
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (925) 503-3200
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center">
                  <Palmtree className="w-4 h-4 text-green-600 mr-1" />
                  <span>Luxury Specialists</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span>Premium Quality</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hero-concrete.jpg"
                alt="Professional concrete contractors in Pleasanton CA - Wade & Co Construction"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pleasanton Neighborhoods Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">Pleasanton Communities We Serve</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Premium concrete services throughout Pleasanton&apos;s prestigious neighborhoods with expertise in luxury residential and high-end commercial construction.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              "Ruby Hill", "Birdland", "Vintage Hills", "Castlewood",
              "Downtown Pleasanton", "Kottinger Ranch", "Pleasanton Meadows", "Del Prado",
              "Mohr Village", "Foothill Knolls", "Highland Oaks", "Ironwood",
              "Stoneridge", "Happy Valley", "Hacienda Business Park", "East Pleasanton"
            ].map((neighborhood, index) => (
              <div key={index} className="flex items-center space-x-2 bg-green-50 p-3 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-slate-700 font-medium">{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pleasanton-Specific Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Pleasanton Concrete Specialties</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Palmtree className="w-12 h-12 text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Luxury Outdoor Living</h3>
                <p className="text-slate-600">Premium pool decks, outdoor kitchens, and entertainment areas designed for Pleasanton&apos;s year-round outdoor lifestyle.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Star className="w-12 h-12 text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Decorative Concrete</h3>
                <p className="text-slate-600">Stamped concrete, stained finishes, and custom designs that complement Pleasanton&apos;s Mediterranean architecture.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Building className="w-12 h-12 text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">High-End Commercial</h3>
                <p className="text-slate-600">Premium commercial concrete for Pleasanton&apos;s upscale retail, office, and hospitality developments.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pleasanton-Specific Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Pleasanton Concrete Contractors: Luxury & Quality Excellence</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl leading-relaxed">
                Pleasanton&apos;s reputation as one of California&apos;s most desirable communities demands concrete construction that meets the highest standards of quality, aesthetics, and durability. Wade & Co. Construction specializes in luxury residential projects, upscale commercial developments, and premium outdoor living spaces that enhance property values and complement Pleasanton&apos;s Mediterranean-inspired architecture and sophisticated community character.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Luxury Residential Excellence</h3>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="font-semibold text-green-800 mb-3">🏡 Premium Home Standards</h4>
                <p className="text-green-700">
                  Pleasanton&apos;s luxury home market requires concrete installations that match sophisticated architectural standards and high property values. Our residential work emphasizes craftsmanship, attention to detail, and materials selection that enhance long-term value and aesthetic appeal for discerning homeowners.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Outdoor Living Specialists</h4>
                  <p>
                    Pleasanton&apos;s Mediterranean climate and luxury home market create demand for exceptional outdoor living spaces. Our specialty includes custom pool decks, outdoor kitchens, entertainment areas, and decorative concrete installations that create resort-quality outdoor environments for year-round enjoyment.
                  </p>
                  <p className="mt-4">
                    We coordinate with landscape architects, pool contractors, and outdoor kitchen designers to create integrated outdoor environments that maximize property values while providing exceptional functionality and aesthetic appeal. All installations emphasize quality materials and craftsmanship that meets Pleasanton homeowners&apos; expectations.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Mediterranean Architecture Integration</h4>
                  <p>
                    Pleasanton&apos;s Mediterranean and Spanish Colonial Revival architecture requires concrete work that complements established design themes. Our decorative concrete options include earth-tone integral colors, natural stone textures, and custom stamped patterns that enhance architectural authenticity.
                  </p>
                  <p className="mt-4">
                    We utilize specialized techniques including acid staining, exposed aggregate finishes, and hand-carved details that create authentic Mediterranean aesthetics while providing modern performance and durability suitable for Pleasanton&apos;s premium property market.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Tri-Valley Climate Considerations</h3>
              <p>
                Pleasanton&apos;s inland climate with hot, dry summers and mild winters requires concrete installations designed for temperature extremes and seasonal variations. Our concrete mixes and installation techniques account for thermal expansion, UV exposure, and occasional temperature fluctuations.
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Climate-Adapted Construction</h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Heat-Resistant Mixes:</strong> Specialized concrete formulations for hot Tri-Valley summers</li>
                  <li>• <strong>UV-Stable Colors:</strong> Fade-resistant pigments and sealers for long-term color retention</li>
                  <li>• <strong>Thermal Joint Systems:</strong> Expansion joints designed for temperature cycling</li>
                  <li>• <strong>Cool Surface Treatments:</strong> Light-colored finishes that reduce heat absorption</li>
                  <li>• <strong>Drought-Tolerant Integration:</strong> Concrete designs that complement water-efficient landscaping</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Pleasanton Neighborhood Specializations</h3>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">💎 Ruby Hill</h4>
                  <p className="text-sm">
                    Pleasanton&apos;s most prestigious neighborhood featuring luxury homes with golf course views. Our work includes high-end driveways, custom outdoor entertainment areas, and premium pool deck installations that complement the area&apos;s exclusive character and property values exceeding $2 million.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏘️ Vintage Hills & Castlewood</h4>
                  <p className="text-sm">
                    Established luxury neighborhoods with mature landscaping and custom homes. Our residential concrete work emphasizes integration with existing landscapes, foundation repairs that preserve property values, and outdoor living spaces that enhance entertaining capabilities.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🛍️ Downtown Pleasanton</h4>
                  <p className="text-sm">
                    Historic downtown district with upscale retail, dining, and mixed-use developments. Our commercial work includes decorative sidewalks, plaza installations, and retail concrete that supports Pleasanton&apos;s economic vitality while maintaining historic character and pedestrian-friendly environments.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">🏢 Hacienda Business Park</h4>
                  <p className="text-sm">
                    Major employment center and corporate campus requiring high-quality commercial concrete. Our work includes corporate plazas, parking structures, and office building entries that reflect Pleasanton&apos;s professional business environment and support the area&apos;s economic development goals.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Premium Materials & Craftsmanship</h3>
              <p>
                Pleasanton&apos;s luxury market demands superior materials and exceptional craftsmanship in all concrete installations. We source premium aggregates, utilize high-performance concrete mixes, and employ advanced finishing techniques that ensure long-term durability and aesthetic excellence.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h4 className="font-semibold text-yellow-800 mb-3">Luxury Concrete Features</h4>
                <ul className="text-yellow-700 space-y-2 text-sm">
                  <li>• <strong>Premium Aggregates:</strong> Imported stone and specialty materials for unique aesthetic appeal</li>
                  <li>• <strong>Custom Color Matching:</strong> Precise color formulation to complement architectural elements</li>
                  <li>• <strong>Hand-Finished Details:</strong> Artisan craftsmanship for custom decorative elements</li>
                  <li>• <strong>Advanced Sealers:</strong> High-performance protective systems for long-term beauty</li>
                  <li>• <strong>Precision Installation:</strong> Laser-guided forming and finishing for flawless results</li>
                </ul>  
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Commercial Excellence Standards</h3>
              <p>
                Pleasanton&apos;s upscale commercial developments require concrete installations that reflect the community&apos;s high standards and support business success. Our commercial work includes retail centers, office complexes, and hospitality projects that enhance Pleasanton&apos;s economic vitality.
              </p>
              <p>
                We coordinate with Pleasanton&apos;s Economic Development Department, architectural firms, and property developers to ensure commercial concrete projects contribute to community goals while meeting strict performance requirements for durability, safety, and aesthetic appeal.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Property Value Enhancement</h3>
              <p>
                Professional concrete installation significantly impacts property values in Pleasanton&apos;s competitive real estate market. Our work emphasizes quality, durability, and aesthetic appeal that enhance marketability and provide strong return on investment for both residential and commercial properties.
              </p>
              <p>
                Real estate professionals consistently report that quality concrete work increases property appeal and sale prices in Pleasanton&apos;s luxury market. We provide documentation, warranties, and maintenance programs that transfer value to new owners and support long-term property appreciation.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Community Involvement & Local Partnerships</h3>
              <p>
                Wade & Co. Construction actively supports Pleasanton&apos;s community through local partnerships, charitable involvement, and participation in community development initiatives. We source materials locally when possible and employ local craftsmen who understand Pleasanton&apos;s quality expectations.
              </p>
              <p>
                Our local partnerships include relationships with Pleasanton&apos;s leading architects, landscape architects, and specialty contractors who share our commitment to quality and customer satisfaction. These collaborative relationships ensure comprehensive project delivery that exceeds client expectations.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Maintenance & Long-Term Service</h3>
              <p>
                Luxury concrete installations require ongoing maintenance to preserve appearance and performance. We provide comprehensive maintenance programs including periodic cleaning, sealer reapplication, and minor repairs that preserve investment value and extend service life.
              </p>
              <p>
                Our maintenance services are specifically designed for Pleasanton&apos;s climate and usage patterns, with scheduling and procedures that minimize disruption to busy family schedules while ensuring optimal concrete performance and appearance throughout changing seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Pleasanton Customer Reviews</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  &quot;Exceptional luxury pool deck and outdoor kitchen installation in Ruby Hill. Wade &amp; Co. delivered exactly the resort-quality outdoor space we envisioned. Attention to detail and craftsmanship exceeded our high expectations.&quot;
                </p>
                <div>
                  <p className="font-semibold text-slate-800">Robert Thompson</p>
                  <p className="text-sm text-slate-500">Ruby Hill, Pleasanton</p>
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
                  &quot;Beautiful decorative concrete driveway and front entry work in Vintage Hills. They perfectly matched our home&apos;s Mediterranean style and the quality is outstanding. Professional service from start to finish.&quot;
                </p>
                <div>
                  <p className="font-semibold text-slate-800">Linda Chen</p>
                  <p className="text-sm text-slate-500">Vintage Hills, Pleasanton</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for Your Pleasanton Luxury Project?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact Pleasanton&apos;s premier concrete contractors for luxury residential and high-end commercial construction throughout the Tri-Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-slate-100"
              onClick={() => window.open('https://calendly.com/wadeconcreteco/30min', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Pleasanton Estimate
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Phone className="w-5 h-5 mr-2" />
              Call (925) 503-3200
            </Button>
          </div>
          <div className="mt-6">
            <p className="text-green-100 text-sm">
              <Palmtree className="w-4 h-4 inline mr-1" />
              Luxury Specialists • Premium Quality • 25+ Years Tri-Valley Experience
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}