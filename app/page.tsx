"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  FileText,
  Shield,
  CreditCard,
  Award,
  Home,
  Waves,
  Building,
  Hammer,
  Star,
  MapPin,
  Mail,
  Clock,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"

export default function ConcretePage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "Contractor", "LocalBusiness"],
    "name": "Wade & Co. Construction",
    "alternateName": "Wade Concrete Co",
    "description": "Professional concrete contractors serving Bay Area with stamped concrete, driveways, patios, pool decks, retaining walls, seismic retrofitting, RV pads, outdoor kitchens, basement floors, and foundation work.",
    "url": "https://wadecoconstruction.com",
    "telephone": "(925) 503-3200",
    "email": "wadeconcreteco@gmail.com",
    "foundingDate": "2008",
    "slogan": "Bay Area&apos;s Premier Concrete Specialists",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "CA",
      "addressCountry": "US",
      "addressLocality": "Bay Area"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.8044",
      "longitude": "-122.2711"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Oakland",
        "addressRegion": "CA",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "East Bay"
        }
      },
      {
        "@type": "City", 
        "name": "Berkeley",
        "addressRegion": "CA",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "East Bay"
        }
      },
      {
        "@type": "City",
        "name": "Fremont", 
        "addressRegion": "CA",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "East Bay"
        }
      },
      {
        "@type": "City",
        "name": "Pleasanton",
        "addressRegion": "CA",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Tri-Valley"
        }
      },
      {
        "@type": "City",
        "name": "Dublin",
        "addressRegion": "CA",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Tri-Valley"
        }
      },
      {
        "@type": "City",
        "name": "Livermore",
        "addressRegion": "CA",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Tri-Valley"
        }
      },
      {
        "@type": "City",
        "name": "San Jose",
        "addressRegion": "CA",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Peninsula"
        }
      },
      {
        "@type": "City",
        "name": "Hayward",
        "addressRegion": "CA",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "East Bay"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Complete Concrete Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stamped Concrete Installation",
            "description": "Professional decorative stamped concrete installation for driveways, patios, walkways, and pool decks. Patterns include slate, stone, brick, and custom designs with integral color and staining options.",
            "serviceType": "Decorative Concrete Construction",
            "category": "Residential Concrete Services",
            "areaServed": ["Oakland, CA", "Berkeley, CA", "Fremont, CA", "Pleasanton, CA", "Dublin, CA", "Livermore, CA", "San Jose, CA", "Hayward, CA"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://wadecoconstruction.com/services/stamped-concrete"
            },
            "provider": {
              "@type": "Organization",
              "name": "Wade & Co. Construction"
            }
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Concrete Driveway Installation",
            "description": "Complete concrete driveway installation including excavation, base preparation, forming, pouring, finishing, and sealing. Standard, decorative, and heavy-duty options for residential and commercial properties.",
            "serviceType": "Concrete Construction",
            "category": "Residential Concrete Services",
            "areaServed": ["Oakland, CA", "Berkeley, CA", "Fremont, CA", "Pleasanton, CA", "Dublin, CA", "Livermore, CA", "San Jose, CA", "Hayward, CA"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://wadecoconstruction.com/services/concrete-driveways"
            },
            "provider": {
              "@type": "Organization", 
              "name": "Wade & Co. Construction"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Retaining Wall Construction",
            "description": "Engineered concrete retaining walls for slope stabilization, landscape design, and property protection. Includes drainage systems, reinforcement, and decorative finishes.",
            "serviceType": "Structural Concrete Construction",
            "category": "Commercial Concrete Services",
            "areaServed": ["Oakland, CA", "Berkeley, CA", "Fremont, CA", "Pleasanton, CA", "Dublin, CA", "Livermore, CA", "San Jose, CA", "Hayward, CA"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://wadecoconstruction.com/services/retaining-walls"
            },
            "provider": {
              "@type": "Organization",
              "name": "Wade & Co. Construction"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Seismic Retrofitting",
            "description": "Foundation seismic retrofitting and earthquake safety upgrades including anchor bolts, shear walls, cripple wall bracing, and foundation repairs to meet current California building codes.",
            "serviceType": "Foundation Repair & Seismic Upgrades",
            "category": "Specialized Construction Services",
            "areaServed": ["Oakland, CA", "Berkeley, CA", "Fremont, CA", "Pleasanton, CA", "Dublin, CA", "Livermore, CA", "San Jose, CA", "Hayward, CA"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://wadecoconstruction.com/services/seismic-retrofitting"
            },
            "provider": {
              "@type": "Organization",
              "name": "Wade & Co. Construction"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pool Deck Installation", 
            "description": "Custom concrete pool deck installation with slip-resistant surfaces, decorative options, and proper drainage. Includes stamped patterns, exposed aggregate, and colored concrete finishes.",
            "serviceType": "Decorative Concrete Construction",
            "category": "Residential Concrete Services",
            "areaServed": ["Oakland, CA", "Berkeley, CA", "Fremont, CA", "Pleasanton, CA", "Dublin, CA", "Livermore, CA", "San Jose, CA", "Hayward, CA"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://wadecoconstruction.com/services/pool-decks"
            },
            "provider": {
              "@type": "Organization",
              "name": "Wade & Co. Construction"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Outdoor Kitchen Concrete Counters",
            "description": "Custom concrete countertops for outdoor kitchens and BBQ areas. Heat-resistant, weather-sealed finishes with integrated sinks, decorative edges, and custom colors.",
            "serviceType": "Custom Concrete Fabrication", 
            "category": "Residential Concrete Services",
            "areaServed": ["Oakland, CA", "Berkeley, CA", "Fremont, CA", "Pleasanton, CA", "Dublin, CA", "Livermore, CA", "San Jose, CA", "Hayward, CA"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://wadecoconstruction.com/services/outdoor-kitchens"
            },
            "provider": {
              "@type": "Organization",
              "name": "Wade & Co. Construction"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "RV Pads & Boat Ramps",
            "description": "Heavy-duty concrete RV pads and boat ramps designed for vehicle loading. Proper slope, drainage, and reinforcement for long-term durability.",
            "serviceType": "Heavy-Duty Concrete Construction",
            "category": "Residential Concrete Services", 
            "areaServed": ["Oakland, CA", "Berkeley, CA", "Fremont, CA", "Pleasanton, CA", "Dublin, CA", "Livermore, CA", "San Jose, CA", "Hayward, CA"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://wadecoconstruction.com/services/rv-pads"
            },
            "provider": {
              "@type": "Organization",
              "name": "Wade & Co. Construction"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Concrete Steps & Stairs",
            "description": "Custom concrete steps and staircases with railings, decorative finishes, and ADA-compliant designs. Interior and exterior applications.",
            "serviceType": "Structural Concrete Construction",
            "category": "Residential Concrete Services",
            "areaServed": ["Oakland, CA", "Berkeley, CA", "Fremont, CA", "Pleasanton, CA", "Dublin, CA", "Livermore, CA", "San Jose, CA", "Hayward, CA"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://wadecoconstruction.com/services/concrete-steps"
            },
            "provider": {
              "@type": "Organization",
              "name": "Wade & Co. Construction"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sidewalks & Curbing",
            "description": "Municipal and commercial sidewalk installation, curb and gutter construction, ADA-compliant accessibility features, and pedestrian pathway systems.",
            "serviceType": "Municipal Concrete Construction",
            "category": "Commercial Concrete Services",
            "areaServed": ["Oakland, CA", "Berkeley, CA", "Fremont, CA", "Pleasanton, CA", "Dublin, CA", "Livermore, CA", "San Jose, CA", "Hayward, CA"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://wadecoconstruction.com/services/sidewalks-curbing"
            },
            "provider": {
              "@type": "Organization",
              "name": "Wade & Co. Construction"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Concrete Pads & Floors",
            "description": "Specialized concrete pads for AC units, generators, sheds, and equipment. Garage floors, basement floors, and warehouse flooring with epoxy coatings available.",
            "serviceType": "Industrial Concrete Construction",
            "category": "Commercial Concrete Services",
            "areaServed": ["Oakland, CA", "Berkeley, CA", "Fremont, CA", "Pleasanton, CA", "Dublin, CA", "Livermore, CA", "San Jose, CA", "Hayward, CA"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://wadecoconstruction.com/services/concrete-pads"
            },
            "provider": {
              "@type": "Organization",
              "name": "Wade & Co. Construction"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Site Preparation & Excavation",
            "description": "Complete site preparation including excavation, grading, drainage solutions, soil compaction, and base preparation for concrete installations.",
            "serviceType": "Site Preparation Services",
            "category": "Construction Support Services",
            "areaServed": ["Oakland, CA", "Berkeley, CA", "Fremont, CA", "Pleasanton, CA", "Dublin, CA", "Livermore, CA", "San Jose, CA", "Hayward, CA"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://wadecoconstruction.com/services/site-preparation"
            },
            "provider": {
              "@type": "Organization",
              "name": "Wade & Co. Construction"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Concrete Repair",
            "description": "24/7 emergency concrete repair services for damaged driveways, sidewalks, foundations, and structural concrete. Rapid response for safety hazards.",
            "serviceType": "Emergency Construction Services",
            "category": "Specialized Construction Services",
            "areaServed": ["Oakland, CA", "Berkeley, CA", "Fremont, CA", "Pleasanton, CA", "Dublin, CA", "Livermore, CA", "San Jose, CA", "Hayward, CA"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://wadecoconstruction.com/services/emergency-repair"
            },
            "provider": {
              "@type": "Organization",
              "name": "Wade & Co. Construction"
            }
          }
        }
      ]
    },
    "knowsAbout": [
      "Concrete Construction",
      "Stamped Concrete Installation", 
      "Decorative Concrete Finishes",
      "Foundation Repair & Reinforcement",
      "Seismic Retrofitting & Earthquake Safety",
      "Retaining Wall Engineering",
      "ADA Compliance Construction",
      "Site Preparation & Excavation",
      "Concrete Cutting & Sawing",
      "Rebar Installation & Placement",
      "Form Setting & Removal",
      "Concrete Demolition & Removal",
      "Drainage Solutions & Waterproofing",
      "Fire-Resistant Concrete Applications",
      "Heavy-Duty Concrete for Commercial Use",
      "Residential Concrete Specialties",
      "Pool Deck Construction & Safety",
      "Outdoor Kitchen Design & Installation",
      "RV Pad & Boat Ramp Construction",
      "Garage Floor & Epoxy Coatings",
      "Basement Floor Installation",
      "Concrete Steps & Stair Construction",
      "Sidewalk & Curb Installation",
      "Municipal Concrete Projects",
      "Emergency Concrete Repair Services",
      "Bay Area Building Codes & Permits",
      "California Seismic Safety Requirements",
      "Soil Conditions & Bay Area Geology",
      "Weather Considerations for Concrete",
      "Concrete Mix Design & Materials",
      "Quality Control & Testing Procedures",
      "Project Management & Scheduling",
      "Customer Service & Communication",
      "Safety Protocols & OSHA Compliance"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Free Estimates & Consultations",
        "description": "Complimentary on-site project estimates, consultations, and detailed proposals with no obligation",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2008-01-01",
        "availableDeliveryMethod": "https://schema.org/OnSitePickup"
      },
      {
        "@type": "Offer",
        "name": "24/7 Emergency Services",
        "description": "Emergency concrete repair services available around the clock for urgent safety issues",
        "availability": "https://schema.org/InStock",
        "validFrom": "2008-01-01",
        "availableDeliveryMethod": "https://schema.org/OnSitePickup"
      },
      {
        "@type": "Offer", 
        "name": "Project Warranty",
        "description": "Comprehensive warranty on all concrete construction work with long-term customer support",
        "availability": "https://schema.org/InStock",
        "validFrom": "2008-01-01"
      },
      {
        "@type": "Offer",
        "name": "Flexible Payment Plans",
        "description": "Multiple payment options including progress payments and financing assistance",
        "availability": "https://schema.org/InStock",
        "validFrom": "2008-01-01"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHours": [
      "Mo 07:00-18:00",
      "Tu 07:00-18:00", 
      "We 07:00-18:00",
      "Th 07:00-18:00",
      "Fr 07:00-18:00",
      "Sa 07:00-18:00",
      "Su 07:00-18:00"
    ],
    "paymentAccepted": [
      "https://schema.org/Cash",
      "https://schema.org/Check", 
      "https://schema.org/CreditCard",
      "https://schema.org/PaymentCard"
    ],
    "currenciesAccepted": "USD",
    "priceRange": "$$",
    "isAccessibleForFree": false,
    "hasMap": "https://maps.google.com/?q=Bay+Area+CA",
    "logo": "https://wadecoconstruction.com/logo.png",
    "image": [
      "https://wadecoconstruction.com/hero-concrete.jpg",
      "https://wadecoconstruction.com/construction-work.jpg",
      "https://wadecoconstruction.com/concrete-worker.jpg"
    ],
    "sameAs": [
      "https://www.facebook.com/wadecoconstruction",
      "https://www.instagram.com/wadecoconstruction",
      "https://www.linkedin.com/company/wade-co-construction"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "(925) 503-3200",
        "contactType": "customer service",
        "areaServed": "CA",
        "availableLanguage": "English",
        "contactOption": "TollFree"
      },
      {
        "@type": "ContactPoint",
        "email": "wadeconcreteco@gmail.com",
        "contactType": "customer service",
        "areaServed": "CA",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "url": "https://calendar.app.google/dn6u2FrkXbnndxAT8",
        "contactType": "reservations",
        "areaServed": "CA",
        "availableLanguage": "English"
      }
    ],
    "award": [
      "500+ Satisfied Customers",
      "25+ Years Bay Area Experience",
      "Professional Concrete Specialists",
      "Emergency Service Provider"
    ],
    "employee": [
      {
        "@type": "Person",
        "jobTitle": "Concrete Specialist",
        "knowsAbout": ["Stamped Concrete", "Decorative Finishes", "Seismic Retrofitting"]
      },
      {
        "@type": "Person", 
        "jobTitle": "Site Preparation Specialist",
        "knowsAbout": ["Excavation", "Grading", "Drainage Solutions"]
      },
      {
        "@type": "Person",
        "jobTitle": "Project Manager",
        "knowsAbout": ["Project Coordination", "Customer Service", "Quality Control"]
      }
    ],
    "owns": [
      {
        "@type": "Product",
        "name": "Professional Concrete Equipment",
        "description": "Complete fleet of concrete construction equipment and tools"
      },
      {
        "@type": "Product",
        "name": "Specialized Forming Systems", 
        "description": "Advanced forming systems for complex concrete installations"
      }
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "California Contractors Association"
      },
      {
        "@type": "Organization",
        "name": "Better Business Bureau"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      {/* Floating Action Buttons */}
      <div className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-xs sm:text-sm"
          onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
        >
          <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
          <span className="hidden sm:inline">GET FREE QUOTE</span>
          <span className="sm:hidden">QUOTE</span>
        </Button>
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-3 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-xs sm:text-sm"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
          <span className="hidden sm:inline">CALL NOW</span>
          <span className="sm:hidden">CALL</span>
        </Button>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Hammer className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Wade & Co. Construction</h1>
                <p className="text-sm text-slate-600">Licensed • Insured • Bay Area</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center text-slate-700">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">(925) 503-3200</span>
              </div>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
              >
                Schedule Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Bay Area&apos;s Premier
                  <span className="text-blue-600"> Concrete Specialists</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  Professional concrete contractors serving Oakland, Berkeley, Fremont, Pleasanton, Dublin, Livermore, and San Jose. Specialized in stamped concrete driveways, decorative concrete patios, retaining walls, seismic retrofitting, RV pads, outdoor kitchen counters, and pool deck installations with 25+ years of Bay Area excellence.
                </p>
              </div>

              {/* Value Props */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-semibold text-slate-800">Licensed & Insured</p>
                    <p className="text-sm text-slate-600">Fully protected</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <CreditCard className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="font-semibold text-slate-800">Payment Plans</p>
                    <p className="text-sm text-slate-600">Flexible options</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <Award className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-semibold text-slate-800">25+ Years</p>
                    <p className="text-sm text-slate-600">Bay Area Experience</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-base sm:text-lg px-6 sm:px-8 py-4"
                  onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Schedule Free Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-300 text-base sm:text-lg px-6 sm:px-8 py-4 bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (925) 503-3200
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/hero-concrete.jpg"
                alt="Professional stamped concrete driveway installation by Wade & Co Construction in Bay Area"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">500+ Projects Completed</p>
                    <p className="text-sm text-slate-600">Bay Area & Central Valley</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Concrete Services</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              From stamped concrete driveways and retaining walls in Oakland to decorative concrete patios and outdoor kitchens in Pleasanton, from pool deck installations and RV pads in Fremont to seismic retrofitting and ADA compliance work in San Jose - we deliver comprehensive concrete solutions across the East Bay, Tri-Valley, and Peninsula.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Home, title: "Residential Driveways", desc: "Standard and decorative driveways, RV pads, and boat ramps", link: "/services/concrete-driveways" },
              { icon: Waves, title: "Patios & Pool Decks", desc: "Custom outdoor living spaces, pool decks, and outdoor kitchen counters", link: "/services/pool-decks-patios" },
              { icon: Star, title: "Stamped & Decorative Concrete", desc: "Exposed aggregate, stained concrete, planters, and custom features", link: "/services/stamped-concrete" },
              { icon: Building, title: "Steps & Retaining Walls", desc: "Concrete steps, stairs, and structural retaining walls", link: "/services/retaining-walls" },
              { icon: Building, title: "Foundation & Seismic Work", desc: "Structural foundations, basement floors, and seismic retrofitting", link: "/services/seismic-retrofitting" },
              { icon: CheckCircle, title: "Site Preparation", desc: "Excavation, grading, drainage solutions, and concrete demolition", link: "/services/site-preparation" },
              { icon: Shield, title: "Specialized Services", desc: "ADA compliance, fire-resistant concrete, emergency repair", link: "/services/specialized-services" },
              { icon: Home, title: "Concrete Pads & Floors", desc: "AC unit pads, generator pads, garage floors, shed foundations", link: "/services/concrete-pads-floors" },
              { icon: Star, title: "Commercial & Municipal", desc: "Sidewalks, curbing, parking lots, and municipal projects", link: "/services/commercial-municipal" },
            ].map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md cursor-pointer"
                onClick={() => window.location.href = service.link}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                  <p className="text-blue-600 text-sm mt-4 font-medium">Learn More →</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-lg font-semibold text-slate-700">4.9/5 from 500+ Bay Area customers</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "San Mateo, CA",
                text: "Wade & Co transformed our cracked driveway into a beautiful stamped concrete masterpiece. Professional crew, fair pricing, completed on schedule.",
                rating: 5,
              },
              {
                name: "Mike Rodriguez",
                location: "Dublin, CA",
                text: "Exceptional workmanship on our patio and walkway project. They understood local codes and delivered exactly what we envisioned. Highly recommend!",
                rating: 5,
              },
              {
                name: "Lisa Chen",
                location: "Pleasanton, CA",
                text: "Outstanding pool deck renovation with decorative concrete. Professional communication throughout, quality materials, and long-term warranty backing their work.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                  <div>
                    <p className="font-semibold text-slate-800">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Concrete Contractors Serving East Bay, Tri-Valley & Peninsula</h2>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                Licensed concrete contractors with focused coverage across Oakland, Berkeley, Hayward, Fremont in East Bay; Pleasanton, Dublin, Livermore in Tri-Valley; and San Jose, Palo Alto, Mountain View on the Peninsula. Strategic service areas ensure efficient project delivery and competitive concrete installation pricing.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Oakland", "Berkeley", "Fremont", "Pleasanton", "Dublin", "Livermore", "San Jose", "Hayward"].map(
                  (city, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-slate-700">{city}</span>
                    </div>
                  ),
                )}
              </div>

              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
              >
                <MapPin className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/construction-work.jpg"
                alt="Licensed concrete contractors from Wade & Co Construction working on decorative concrete patio in East Bay"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Schedule Your Free Consultation</h2>
              <p className="text-lg md:text-xl text-slate-600">
                Tell us about your project and schedule a consultation call with our Bay Area concrete specialists. We&apos;ll provide a detailed estimate and answer all your questions.
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                      <Input placeholder="Enter your full name" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                      <Input placeholder="(555) 123-4567" className="h-12" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                    <Input type="email" placeholder="your.email@example.com" className="h-12" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Project Type *</label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="driveway">Residential Driveway/RV Pad</SelectItem>
                        <SelectItem value="patio">Patio & Outdoor Kitchen</SelectItem>
                        <SelectItem value="pool-deck">Pool Deck</SelectItem>
                        <SelectItem value="stamped">Decorative/Stamped Concrete</SelectItem>
                        <SelectItem value="retaining">Retaining Wall/Steps</SelectItem>
                        <SelectItem value="foundation">Foundation/Seismic Work</SelectItem>
                        <SelectItem value="pads">Concrete Pads (AC/Generator)</SelectItem>
                        <SelectItem value="excavation">Site Preparation/Excavation</SelectItem>
                        <SelectItem value="commercial">Commercial/ADA Project</SelectItem>
                        <SelectItem value="repair">Emergency Repair</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Project Description</label>
                    <Textarea
                      placeholder="Please describe your project, including size, timeline, and any specific requirements..."
                      className="min-h-32"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Contact Method</label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="How would you like us to contact you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="text">Text Message</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <Button 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700 text-lg py-4 w-full"
                      onClick={() => window.open('https://calendar.app.google/dn6u2FrkXbnndxAT8', '_blank')}
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Schedule Free Quote Call
                    </Button>
                    <div className="text-center">
                      <p className="text-slate-500 text-sm">
                        Or call us directly at <a href="tel:925-503-3200" className="text-blue-600 font-semibold">(925) 503-3200</a>
                      </p>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              BBB A+ Rating
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Award className="w-4 h-4 mr-2" />
              Licensed Contractor
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              Fully Insured
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Star className="w-4 h-4 mr-2" />
              500+ 5-Star Reviews
            </Badge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Hammer className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Wade & Co. Construction</h3>
                  <p className="text-sm text-slate-400">Bay Area Concrete Specialists</p>
                </div>
              </div>
              <p className="text-slate-400">
                Licensed concrete specialists serving Bay Area homeowners and businesses with quality craftsmanship, modern project management, and responsive customer service since 2008.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>(925) 503-3200</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>wadeconcreteco@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Every day: 7AM-6PM</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Concrete Driveways & RV Pads</li>
                <li>Patios & Outdoor Kitchens</li>
                <li>Pool Decks & Boat Ramps</li>
                <li>Stamped & Decorative Concrete</li>
                <li>Retaining Walls & Steps</li>
                <li>Foundation & Seismic Retrofitting</li>
                <li>Basement Floors & Garage Floors</li>
                <li>Site Preparation & Excavation</li>
                <li>Concrete Pads (AC/Generator)</li>
                <li>Sidewalks & Curbing</li>
                <li>ADA Compliance Work</li>
                <li>Emergency Concrete Repair</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quality Assurance</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>Professional Workmanship</p>
                <p>Quality Materials</p>
                <p>Customer Satisfaction</p>
                <p>Free Estimates</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Wade & Co. Construction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
