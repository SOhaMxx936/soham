"use client";

import { motion } from "framer-motion";
import { Shield, Users, Building, CheckCircle, XCircle, Clock, TrendingUp, AlertTriangle } from "lucide-react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState } from "react";

const pendingApprovals = [
  { id: 1, type: "Owner", name: "John Property Manager", hostel: "Green Valley Hostel", submitted: "2 days ago" },
  { id: 2, type: "Canteen", name: "Sara's Kitchen", location: "Main Campus", submitted: "3 days ago" },
  { id: 3, type: "Owner", name: "Mike Housing Services", hostel: "Sunset Hostel", submitted: "1 day ago" },
];

const verificationQueue = [
  { id: 1, entity: "Hostel Listing", name: "Green Valley Hostel", owner: "John Property Manager", status: "pending", documents: 5 },
  { id: 2, entity: "Canteen", name: "Sara's Kitchen", owner: "Sara Johnson", status: "pending", documents: 3 },
  { id: 3, entity: "Hostel Listing", name: "Sunset Hostel", owner: "Mike Housing Services", status: "pending", documents: 7 },
];

const analyticsData = [
  { category: "Hostels", active: 45, pending: 8, total: 53 },
  { category: "Canteens", active: 32, pending: 5, total: 37 },
  { category: "Owners", active: 38, pending: 12, total: 50 },
  { category: "Tenants", active: 520, pending: 15, total: 535 },
];

const pieData = [
  { name: "Active Listings", value: 65, color: "#10b981" },
  { name: "Pending Review", value: 18, color: "#f59e0b" },
  { name: "On Hold", value: 12, color: "#ef4444" },
  { name: "Draft", value: 5, color: "#6b7280" },
];

export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState("approvals");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Master Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold">
                  AD
                </div>
                <span className="font-medium">Administrator</span>
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
            className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Approvals</p>
                <h3 className="text-2xl font-bold text-gray-900">23</h3>
              </div>
            </div>
            <p className="text-sm text-blue-600 flex items-center gap-1">
              <AlertTriangle size={16} />
              Requires attention
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-600"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Verified Entities</p>
                <h3 className="text-2xl font-bold text-gray-900">156</h3>
              </div>
            </div>
            <p className="text-sm text-green-600 flex items-center gap-1">
              <TrendingUp size={16} />
              +12 this week
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-600"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Building className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Listings</p>
                <h3 className="text-2xl font-bold text-gray-900">89</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600">45 hostels, 44 canteens</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-600"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="text-orange-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Users</p>
                <h3 className="text-2xl font-bold text-gray-900">1,245</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600">520 tenants, 725 guests</p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200 flex overflow-x-auto">
            <button
              onClick={() => setSelectedTab("approvals")}
              className={`px-6 py-4 font-semibold transition whitespace-nowrap ${
                selectedTab === "approvals"
                  ? "border-b-2 border-emerald-600 text-emerald-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Pending Approvals
            </button>
            <button
              onClick={() => setSelectedTab("verification")}
              className={`px-6 py-4 font-semibold transition whitespace-nowrap ${
                selectedTab === "verification"
                  ? "border-b-2 border-emerald-600 text-emerald-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Verification Queue
            </button>
            <button
              onClick={() => setSelectedTab("analytics")}
              className={`px-6 py-4 font-semibold transition whitespace-nowrap ${
                selectedTab === "analytics"
                  ? "border-b-2 border-emerald-600 text-emerald-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Analytics & Reports
            </button>
          </div>

          <div className="p-6">
            {selectedTab === "approvals" && (
              <div>
                <h2 className="text-xl font-bold mb-6">Approval Requests</h2>
                <div className="space-y-4">
                  {pendingApprovals.map((approval) => (
                    <motion.div
                      key={approval.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          approval.type === "Owner" ? "bg-blue-100 text-blue-600" : "bg-orange-100 text-orange-600"
                        }`}>
                          {approval.type === "Owner" ? <Building size={24} /> : <Shield size={24} />}
                        </div>
                        <div>
                          <h3 className="font-semibold">{approval.name}</h3>
                          <p className="text-sm text-gray-600">{approval.type} • Submitted {approval.submitted}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2">
                          <CheckCircle size={18} />
                          Approve
                        </button>
                        <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2">
                          <XCircle size={18} />
                          Reject
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                          View Details
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === "verification" && (
              <div>
                <h2 className="text-xl font-bold mb-6">Verification Queue</h2>
                <div className="space-y-4">
                  {verificationQueue.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                          <Shield size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.entity} • {item.owner}</p>
                          <p className="text-xs text-gray-500 mt-1">{item.documents} documents provided</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium capitalize">
                          {item.status}
                        </span>
                        <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition flex items-center gap-2">
                          <CheckCircle size={18} />
                          Verify
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                          Review
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === "analytics" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-bold mb-4">Entity Status Overview</h2>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={analyticsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="active" fill="#10b981" name="Active" />
                        <Bar dataKey="pending" fill="#f59e0b" name="Pending" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4">Listing Distribution</h2>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Quick Reports</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-6 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 transition text-left">
                      <h3 className="font-semibold text-blue-900 mb-2">User Activity Report</h3>
                      <p className="text-sm text-blue-700">View detailed user engagement metrics</p>
                    </button>
                    <button className="p-6 bg-green-50 rounded-lg border border-green-100 hover:border-green-300 transition text-left">
                      <h3 className="font-semibold text-green-900 mb-2">Revenue Report</h3>
                      <p className="text-sm text-green-700">Track platform revenue and transactions</p>
                    </button>
                    <button className="p-6 bg-purple-50 rounded-lg border border-purple-100 hover:border-purple-300 transition text-left">
                      <h3 className="font-semibold text-purple-900 mb-2">Safety Score Report</h3>
                      <p className="text-sm text-purple-700">Monitor safety ratings across listings</p>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

