"use client";

import { motion } from "framer-motion";
import { Upload, Eye, MessageSquare, TrendingUp, Home, Users, BarChart3, Camera, Video, CheckCircle, XCircle } from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState } from "react";

const roomData = [
  { id: 1, room: "A-101", type: "Single", status: "occupied", tenant: "John Doe", rate: 8000 },
  { id: 2, room: "A-102", type: "Single", status: "available", tenant: "-", rate: 8000 },
  { id: 3, room: "B-201", type: "Double", status: "occupied", tenant: "Jane Smith", rate: 14000 },
  { id: 4, room: "B-202", type: "Double", status: "occupied", tenant: "Mike Johnson", rate: 14000 },
];

const revenueData = [
  { month: 'Jan', revenue: 48000, bookings: 6 },
  { month: 'Feb', revenue: 52000, bookings: 7 },
  { month: 'Mar', revenue: 56000, bookings: 8 },
  { month: 'Apr', revenue: 58000, bookings: 9 },
];

const feedback = [
  { tenant: "John Doe", rating: 5, comment: "Great place to stay! Very clean and secure.", date: "2 days ago" },
  { tenant: "Jane Smith", rating: 4, comment: "Good facilities but could improve WiFi speed.", date: "5 days ago" },
  { tenant: "Mike Johnson", rating: 5, comment: "Excellent management and friendly staff.", date: "1 week ago" },
];

export default function OwnerDashboard() {
  const [selectedTab, setSelectedTab] = useState("rooms");
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Owner Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                  ON
                </div>
                <span className="font-medium">Hostel Owner</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Home className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Rooms</p>
                <h3 className="text-2xl font-bold text-gray-900">24</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600">18 occupied, 6 available</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-emerald-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Monthly Revenue</p>
                <h3 className="text-2xl font-bold text-gray-900">₹58,000</h3>
              </div>
            </div>
            <p className="text-sm text-green-600 flex items-center gap-1">
              <TrendingUp size={16} />
              +10% from last month
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Tenants</p>
                <h3 className="text-2xl font-bold text-gray-900">18</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600">75% occupancy rate</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-orange-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Rating</p>
                <h3 className="text-2xl font-bold text-gray-900">4.7/5</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600">Based on 45 reviews</p>
          </motion.div>
        </div>

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-sm mb-8"
        >
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Upload className="text-emerald-600" />
            360° Room Media Upload
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-600 transition cursor-pointer">
                <Camera className="mx-auto text-gray-400 mb-4" size={48} />
                <h3 className="font-semibold mb-2">Upload Photos</h3>
                <p className="text-sm text-gray-600 mb-4">Drag & drop or click to upload</p>
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition">
                  Select Photos
                </button>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-600 transition cursor-pointer">
                <Video className="mx-auto text-gray-400 mb-4" size={48} />
                <h3 className="font-semibold mb-2">Upload Videos</h3>
                <p className="text-sm text-gray-600 mb-4">Upload room tour videos</p>
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition">
                  Select Videos
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">360° Tour Guidelines</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <span>Upload high-resolution photos (min 2000x2000px)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <span>Include images from all angles of the room</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <span>Video duration: 30-60 seconds recommended</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <span>Show amenities, furniture, and room features clearly</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                <p className="text-sm font-semibold text-emerald-800 mb-2">AR Tour Feature</p>
                <p className="text-sm text-emerald-700">
                  After uploading, rooms will be compatible with our AR viewing feature, allowing tenants to virtually experience the space.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200 flex">
            <button
              onClick={() => setSelectedTab("rooms")}
              className={`flex-1 py-4 px-6 text-center font-semibold transition ${
                selectedTab === "rooms"
                  ? "border-b-2 border-emerald-600 text-emerald-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Room Management
            </button>
            <button
              onClick={() => setSelectedTab("analytics")}
              className={`flex-1 py-4 px-6 text-center font-semibold transition ${
                selectedTab === "analytics"
                  ? "border-b-2 border-emerald-600 text-emerald-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => setSelectedTab("feedback")}
              className={`flex-1 py-4 px-6 text-center font-semibold transition ${
                selectedTab === "feedback"
                  ? "border-b-2 border-emerald-600 text-emerald-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Tenant Feedback
            </button>
          </div>

          <div className="p-6">
            {selectedTab === "rooms" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Room Listings</h2>
                  <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition">
                    Add New Room
                  </button>
                </div>
                <div className="space-y-4">
                  {roomData.map((room) => (
                    <motion.div
                      key={room.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${
                          room.status === "occupied" ? "bg-green-600" : "bg-gray-400"
                        }`}></div>
                        <div>
                          <h3 className="font-semibold">{room.room} - {room.type}</h3>
                          <p className="text-sm text-gray-600">{room.tenant}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="font-semibold">₹{room.rate}/month</p>
                          <p className="text-xs text-gray-600 capitalize">{room.status}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-gray-200 rounded-lg transition">
                            <Eye size={20} />
                          </button>
                          <button className="p-2 hover:bg-gray-200 rounded-lg transition">
                            <Upload size={20} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === "analytics" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold mb-4">Revenue Trends</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="revenue" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Revenue (₹)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Occupancy & Bookings</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="bookings" stroke="#10b981" strokeWidth={2} name="Bookings" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {selectedTab === "feedback" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold mb-4">Recent Tenant Feedback</h2>
                {feedback.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{item.tenant}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < item.rating ? "text-yellow-500" : "text-gray-300"}>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <p className="text-gray-700">{item.comment}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

