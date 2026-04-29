/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Home, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  Search, 
  ArrowRight, 
  Menu, 
  X,
  CheckCircle2,
  TrendingUp,
  Key,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COMPANY_DETAILS = {
  name: "Sunrise Real Estate",
  address: "Metro Pillar No, 1-1-213, Chikkadpalli Rd, near Chandana Brothers, Vivek nagar, Chikkadpally, New Nallakunta, Hyderabad, Telangana 500020",
  phone: "097004 14919",
  email: "info@sunriserealestate.in",
  googleRating: 4.2
};

const SERVICES = [
  {
    id: 'buy',
    title: 'Buying Properties',
    description: 'Find your dream home or the perfect commercial space in Hyderabad with our curated listings.',
    icon: Home
  },
  {
    id: 'sell',
    title: 'Selling Properties',
    description: 'Get the best market value for your property with our expert valuation and marketing strategies.',
    icon: TrendingUp
  },
  {
    id: 'rent',
    title: 'Renting',
    description: 'Wide range of residential and commercial rental options catering to every budget and need.',
    icon: Key
  },
  {
    id: 'invest',
    title: 'Investment Advisory',
    description: 'Expert guidance on real estate investments in Hyderabad to maximize your long-term returns.',
    icon: Building2
  }
];

const PROPERTIES = [
  {
    id: 1,
    title: "Luxury Sky Villa",
    location: "Gachibowli, Hyderabad",
    price: "Call for Price",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    beds: 4,
    baths: 4,
    type: "Residential"
  },
  {
    id: 2,
    title: "Premium Office Space",
    location: "HITEC City, Hyderabad",
    price: "Contact for Price",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    sqft: "12,000 sqft",
    type: "Commercial"
  },
  {
    id: 3,
    title: "Modern Boutique Apartment",
    location: "Jubilee Hills, Hyderabad",
    price: "Call for Price",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    beds: 3,
    baths: 3,
    type: "Residential"
  },
  {
    id: 4,
    title: "Elegant Garden Estate",
    location: "Banjara Hills, Hyderabad",
    price: "Request Quote",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    beds: 5,
    baths: 6,
    type: "Residential"
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Arjun Reddy",
    role: "Property Buyer",
    content: "The team at Sunrise Real Estate helped me find the perfect villa in Gachibowli. Their knowledge of the local market is unparalleled.",
    rating: 4
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Commercial Tenant",
    content: "Professional and transparent. They made our office relocation smooth and hassle-free in HITEC City.",
    rating: 5
  },
  {
    id: 3,
    name: "Sanjay Kumar",
    role: "Investor",
    content: "A reliable partner for real estate investments. Their advisory team provided great insights into upcoming development zones.",
    rating: 4
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-gold-600 p-1.5 rounded-lg">
              <Building2 className="text-white w-6 h-6" />
            </div>
            <span className={`text-xl font-display font-bold tracking-tight ${isScrolled ? 'text-navy' : 'text-white'}`}>
              SUNRISE <span className="text-gold-500">REAL ESTATE</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center space-x-8 font-medium ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
            <a href="#about" className="hover:text-gold-500 transition-colors">About Us</a>
            <a href="#services" className="hover:text-gold-500 transition-colors">Services</a>
            <a href="#properties" className="hover:text-gold-500 transition-colors">Properties</a>
            <a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a>
            <button className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-2 rounded-full transition-transform hover:scale-105">
              Call Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-navy' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-navy' : 'text-white'} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 text-xl">
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#properties" onClick={() => setIsMobileMenuOpen(false)}>Properties</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              <a 
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="bg-gold-600 text-center text-white py-3 rounded-xl"
              >
                Call: {COMPANY_DETAILS.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&q=80&w=2000" 
            alt="Hyderabad Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-gold-600/20 border border-gold-500/30 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Expert Real Estate Agency in Hyderabad
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Your Trusted Partner for <br />
              <span className="text-gold-500">Property in Hyderabad</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              From premium villas to modern office spaces, we provide end-to-end real estate solutions tailored to your lifestyle and business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-1">
                <Search className="w-5 h-5" />
                <span>Browse Properties</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-10 py-4 rounded-full font-bold flex items-center justify-center space-x-2 transition-all">
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gold-500 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Building Interior"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 bg-navy p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gold-500/20 p-2 rounded-lg">
                    <Users className="text-gold-500 w-6 h-6" />
                  </div>
                  <span className="text-white font-bold text-2xl">1000+</span>
                </div>
                <p className="text-white/60 text-sm">Happy clients served across Hyderabad and neighboring regions.</p>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold-500/10 rounded-full -z-10 blur-2xl"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h2 className="text-4xl font-display font-bold text-navy mb-6">Redefining Real Estate <br />Excellence Since 2012</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Sunrise Real Estate is a leading consultancy firm based in Chikkadpally, Hyderabad. We specialize in providing comprehensive solutions for individuals and businesses looking to navigate the dynamic Telangana property market.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="text-gold-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">Transparency First</h4>
                    <p className="text-slate-500 text-sm">Honest dealings with no hidden costs or legal complications.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="text-gold-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">Local Expertise</h4>
                    <p className="text-slate-500 text-sm">Deep knowledge of Hyderabad's evolving neighborhoods.</p>
                  </div>
                </div>
              </div>
              <a href="#contact" className="inline-block border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-8 py-3 rounded-full font-bold transition-all">
                Learn More About Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4 block">What We Do</span>
            <h2 className="text-4xl font-display font-bold text-navy mb-4">Comprehensive Real Estate Services</h2>
            <p className="text-slate-500">From finding the perfect home to managing complex commercial deals, we provide personalized support at every step.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group"
              >
                <div className="bg-slate-50 group-hover:bg-gold-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <service.icon className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
            <div>
              <span className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4 block">Exclusive Listings</span>
              <h2 className="text-4xl font-display font-bold text-navy">Featured Properties</h2>
            </div>
            <button className="hidden md:flex items-center space-x-2 text-gold-700 font-bold hover:text-gold-900 transition-colors">
              <span>View All Listings</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROPERTIES.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-navy uppercase">
                    {property.type}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-navy/90 backdrop-blur-md px-4 py-2 rounded-xl text-gold-400 font-bold">
                    {property.price}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-slate-400 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{property.location}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-navy mb-6 group-hover:text-gold-600 transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center justify-between py-4 border-t border-slate-100">
                    {property.beds && (
                      <div className="flex items-center space-x-2 text-slate-500">
                        <Home className="w-4 h-4" />
                        <span className="text-sm">{property.beds} BHK</span>
                      </div>
                    )}
                    {property.sqft && (
                      <div className="flex items-center space-x-2 text-slate-500">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm">{property.sqft}</span>
                      </div>
                    )}
                    <button className="text-navy font-bold text-sm underline decoration-gold-500 decoration-2 underline-offset-4">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <button className="bg-gold-600 text-white px-8 py-3 rounded-full font-bold">
              View All Listings
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4 block">Client Feedback</span>
            <h2 className="text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
              >
                <div className="flex space-x-1 mb-6 text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-5 h-5 fill-current ${i >= t.rating ? 'opacity-30' : ''}`} />
                  ))}
                </div>
                <p className="text-lg text-white/80 italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center font-bold text-navy">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h5 className="font-bold">{t.name}</h5>
                    <span className="text-white/50 text-sm">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google Reviews Widget Mock */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 max-w-xl mx-auto bg-white rounded-2xl p-8 text-center shadow-2xl"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-display font-bold text-navy mb-2">{COMPANY_DETAILS.googleRating}</span>
              <div className="flex text-gold-500 space-x-1 mb-2">
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6" />
              </div>
              <p className="text-slate-500 text-sm font-medium">Based on local reviews on Google Maps</p>
              <div className="mt-6 w-full h-px bg-slate-100"></div>
              <a 
                href="#"
                className="mt-6 text-navy font-bold hover:text-gold-600 transition-colors flex items-center space-x-2"
              >
                <span>Write a Review</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
              <h2 className="text-4xl font-display font-bold text-navy mb-6">Let's Find Your Dream <br />Property Together</h2>
              <p className="text-slate-500 mb-10 leading-relaxed text-lg">
                Have questions about a listing or interested in our services? Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-gold-500/10 p-4 rounded-xl">
                    <MapPin className="text-gold-600 w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-navy mb-1">Our Office Address</h5>
                    <p className="text-slate-500 text-sm max-w-sm">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-gold-500/10 p-4 rounded-xl">
                    <Phone className="text-gold-600 w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-navy mb-1">Call Us Directly</h5>
                    <p className="text-slate-500 text-sm">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-gold-500/10 p-4 rounded-xl">
                    <Mail className="text-gold-600 w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-navy mb-1">Email For Support</h5>
                    <p className="text-slate-500 text-sm">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm relative">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. John Doe"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy uppercase tracking-wider">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-wider">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      placeholder="e.g. john@example.com"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-wider">Property Type of Interest</label>
                    <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer">
                      <option>Residential Apartment</option>
                      <option>Independent Villa</option>
                      <option>Commercial Office</option>
                      <option>Open Land / Plots</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-wider">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full bg-gold-600 hover:bg-gold-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-gold-600/20 active:scale-[0.98]">
                    Send Inquiry Now
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 h-[450px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1328475225093!2d78.4877717757917!3d17.40536100227181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e7428801d5%3A0xe54e3a4794215fb3!2sSunrise%20Real%20Estate!5e0!3m2!1sen!2sin!4v1714393000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy pt-20 pb-10 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-gold-600 p-1.5 rounded-lg">
                  <Building2 className="text-white w-6 h-6" />
                </div>
                <span className="text-xl font-display font-bold tracking-tight">
                  SUNRISE <span className="text-gold-500">REAL ESTATE</span>
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Hyderabad's premier real estate consultancy. We provide high-end solutions for residential and commercial property needs since 2012.
              </p>
              <div className="flex space-x-4">
                {/* Social icons placeholders */}
                {['FB', 'IG', 'LI', 'YT'].map(social => (
                  <div key={social} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold hover:bg-gold-600 transition-colors cursor-pointer">
                    {social}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li><a href="#about" className="hover:text-gold-500 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-gold-500 transition-colors">Our Services</a></li>
                <li><a href="#properties" className="hover:text-gold-500 transition-colors">Property Listings</a></li>
                <li><a href="#contact" className="hover:text-gold-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Our Services</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li><a href="#" className="hover:text-gold-500 transition-colors">Residential Sales</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">Commercial Leasing</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">Real Estate Investment</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">Plot Sales</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span>{COMPANY_DETAILS.address}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold-500" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold-500" />
                  <span>{COMPANY_DETAILS.email}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-white/30 text-xs">
            <p>© {new Date().getFullYear()} Sunrise Real Estate. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
