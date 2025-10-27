"use client";

import { motion } from "framer-motion";
import { Shield, AlertCircle, MessageSquare, Settings, TrendingUp, Calendar, Bell } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useState } from "react";

const monthlyExpenses = [
  { month: 'Jan', food: 3000, rent: 8000, utilities: 1500 },
  { month: 'Feb', food: 3200, rent: 8000, utilities: 1800 },
  { month: 'Mar', food: 2800, rent: 8000, utilities: 1600 },
  { month: 'Apr', food: 3500, rent: 8000, utilities: 1700 },
];

const foodPreferences = [
  { name: 'Vegetarian', value: 65, color: '#10b981' },
  { name: 'Non-Vegetarian', value: 25, color: '#059669' },
  { name: 'Vegan', value: 10, color: '#047857' },
];

export default function TenantDashboard() {
  const [sosActive, setSosActive] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Tenant Dashboard</h1>
            <div className="flex items-center gap-4">
              <Bell className="text-gray-600" size={24} />
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <span className="font-medium">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Hostel Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Shield className="text-emerald-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Current Hostel</p>
                <h3 className="font-semibold text-gray-900">Green Valley Hostel</h3>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Room: B-204</p>
              <p className="text-sm text-gray-600">Floor: 2nd Floor</p>
              <p className="text-sm text-gray-600">Contact: +91 98765 43210</p>
            </div>
          </motion.div>

          {/* Safety Score Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Safety Score</p>
                <h3 className="text-3xl font-bold text-green-600">9.2/10</h3>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>CCTV Coverage</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Security Staff</span>
                <span>24/7</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </motion.div>

          {/* SOS Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="text-red-600" size={32} />
              </div>
              <button
                onClick={() => setSosActive(!sosActive)}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  sosActive 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {sosActive ? 'Cancel SOS' : 'Activate SOS'}
              </button>
              {sosActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-sm text-red-600 font-medium"
                >
                  Emergency response activated
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Expenses Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="text-emerald-600" />
              Monthly Expenses
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyExpenses}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="food" fill="#10b981" name="Food" />
                <Bar dataKey="rent" fill="#059669" name="Rent" />
                <Bar dataKey="utilities" fill="#6ee7b7" name="Utilities" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Food Preferences */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-6">Food Preferences</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={foodPreferences}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {foodPreferences.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              <button className="w-full py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition">
                Update Preferences
              </button>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare className="text-emerald-600" />
              Recent Feedback
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">Cleanliness</h4>
                  <span className="text-green-600 font-semibold">Excellent</span>
                </div>
                <p className="text-sm text-gray-600">
                  The hostel maintains excellent cleanliness standards. The common areas are always well-maintained.
                </p>
                <span className="text-xs text-gray-400">2 days ago</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">Security</h4>
                  <span className="text-green-600 font-semibold">Good</span>
                </div>
                <p className="text-sm text-gray-600">
                  Security staff is always present and responsive. Good CCTV coverage throughout the building.
                </p>
                <span className="text-xs text-gray-400">5 days ago</span>
              </div>
            </div>
            <button className="w-full mt-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
              Submit New Feedback
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="text-emerald-600" />
              Upcoming Events
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <h4 className="font-semibold">Monthly Meeting</h4>
                </div>
                <p className="text-sm text-gray-600">March 15, 2024 at 6:00 PM</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <h4 className="font-semibold">Food Festival</h4>
                </div>
                <p className="text-sm text-gray-600">March 20, 2024 at 2:00 PM</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <h4 className="font-semibold">Cleaning Drive</h4>
                </div>
                <p className="text-sm text-gray-600">March 25, 2024 at 10:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

