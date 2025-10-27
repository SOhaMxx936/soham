"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Shield, MapPin, Star, ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-emerald-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-emerald-600">SafeStay Hub</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
            <Link href="/tenant" className="hover:text-emerald-600 transition">Dashboard</Link>
            <Link href="/owner" className="hover:text-emerald-600 transition">For Owners</Link>
            <Link href="/canteen" className="hover:text-emerald-600 transition">Canteen</Link>
            <Link href="/admin" className="hover:text-emerald-600 transition">Admin</Link>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-4">
            <Link href="/" className="block hover:text-emerald-600 transition">Home</Link>
            <Link href="/tenant" className="block hover:text-emerald-600 transition">Dashboard</Link>
            <Link href="/owner" className="block hover:text-emerald-600 transition">For Owners</Link>
            <Link href="/canteen" className="block hover:text-emerald-600 transition">Canteen</Link>
            <Link href="/admin" className="block hover:text-emerald-600 transition">Admin</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Your Safe Stay Starts
              <span className="text-emerald-600 block">Here</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Modern hostel accommodation with real-time safety scores, SOS features, and seamless management
            </p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-4 md:p-6 max-w-3xl mx-auto mb-8"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by location..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Hostel name..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition flex items-center justify-center gap-2">
                  <Search size={20} />
                  Search
                </button>
              </div>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Shield size={18} className="text-emerald-600" />
                50+ Verified Hostels
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={18} className="text-emerald-600" />
                Multiple Cities
              </span>
              <span className="flex items-center gap-2">
                <Star size={18} className="text-emerald-600" />
                4.8/5 Rating
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for a Safe Stay
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive features designed for tenants, owners, and administrators
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={<Shield className="h-12 w-12" />}
              title="Real-Time Safety Score"
              description="Track safety metrics in real-time with our comprehensive scoring system"
              delay={0.1}
            />
            <FeatureCard
              icon="🚨"
              title="SOS Emergency"
              description="Instant emergency alerts with one-tap access for critical situations"
              delay={0.2}
            />
            <FeatureCard
              icon={<Star className="h-12 w-12" />}
              title="Detailed Feedback"
              description="Comprehensive feedback system for improved hostel management"
              delay={0.3}
            />
            <FeatureCard
              icon="🍽️"
              title="Canteen Integration"
              description="Order meals directly from your hostel canteen with live tracking"
              delay={0.4}
            />
            <FeatureCard
              icon="📊"
              title="Expense Tracking"
              description="Monitor your spending with detailed analytics and insights"
              delay={0.5}
            />
            <FeatureCard
              icon="🏠"
              title="360° Room Tours"
              description="Virtual tours of rooms before booking with AR integration"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* AR Tours Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Experience Rooms in 360°
                </h2>
                <p className="text-gray-600 mb-8">
                  Take virtual tours of hostel rooms with our AR-powered interface. Get a complete view of your future accommodation before you book.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Interactive 360° room views",
                    "High-resolution photo galleries",
                    "Video tours of common areas",
                    "AR room measurements",
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="h-6 w-6 bg-emerald-600 rounded-full flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition flex items-center gap-2">
                  Explore Now
                  <ArrowRight size={20} />
                </button>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏠</div>
                    <p className="text-gray-600">AR Room Preview</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-emerald-600">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Find Your Perfect Stay?
            </h2>
            <p className="text-emerald-50 text-xl mb-8">
              Join thousands of students enjoying safe and secure accommodation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/tenant"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition flex items-center gap-2 font-semibold"
              >
                I&apos;m a Tenant
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/owner"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition flex items-center gap-2 font-semibold"
              >
                I&apos;m an Owner
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-emerald-500" />
                <span className="text-xl font-bold">SafeStay Hub</span>
              </div>
              <p className="text-gray-400">
                Your trusted platform for safe hostel accommodation
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Tenants</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/tenant" className="hover:text-white">Dashboard</Link></li>
                <li><Link href="/tenant/rooms" className="hover:text-white">Browse Rooms</Link></li>
                <li><Link href="/tenant/orders" className="hover:text-white">My Orders</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Owners</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/owner" className="hover:text-white">Dashboard</Link></li>
                <li><Link href="/owner/listings" className="hover:text-white">Manage Listings</Link></li>
                <li><Link href="/owner/analytics" className="hover:text-white">Analytics</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SafeStay Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: any; title: string; description: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
    >
      <div className="text-emerald-600 mb-4">{typeof icon === 'string' ? <span className="text-5xl">{icon}</span> : icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

