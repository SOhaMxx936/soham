"use client";

import { motion } from "framer-motion";
import { Utensils, Package, TrendingUp, Users, Clock, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState } from "react";

const orderData = [
  { id: 1, customer: "John Doe", item: "Biryani", status: "pending", time: "10 min ago", amount: 150 },
  { id: 2, customer: "Jane Smith", item: "Pasta", status: "preparing", time: "5 min ago", amount: 120 },
  { id: 3, customer: "Mike Johnson", item: "Pizza", status: "ready", time: "Just now", amount: 200 },
  { id: 4, customer: "Sarah Williams", item: "Dosa", status: "delivered", time: "15 min ago", amount: 80 },
];

const salesData = [
  { day: 'Mon', sales: 4500, orders: 32 },
  { day: 'Tue', sales: 5200, orders: 38 },
  { day: 'Wed', sales: 4800, orders: 35 },
  { day: 'Thu', sales: 6100, orders: 44 },
  { day: 'Fri', sales: 5700, orders: 41 },
  { day: 'Sat', sales: 6800, orders: 49 },
  { day: 'Sun', sales: 7200, orders: 52 },
];

const feedbackData = [
  { rating: 5, count: 120 },
  { rating: 4, count: 85 },
  { rating: 3, count: 35 },
  { rating: 2, count: 12 },
  { rating: 1, count: 8 },
];

export default function CanteenDashboard() {
  const [selectedTab, setSelectedTab] = useState("orders");

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="text-yellow-500" size={20} />;
      case "preparing":
        return <Loader2 className="text-blue-500 animate-spin" size={20} />;
      case "ready":
        return <CheckCircle className="text-green-500" size={20} />;
      case "delivered":
        return <CheckCircle className="text-gray-500" size={20} />;
      default:
        return <XCircle className="text-red-500" size={20} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Canteen Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                  CN
                </div>
                <span className="font-medium">Canteen Provider</span>
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
                <Package className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Orders</p>
                <h3 className="text-2xl font-bold text-gray-900">248</h3>
              </div>
            </div>
            <p className="text-sm text-green-600 flex items-center gap-1">
              <TrendingUp size={16} />
              +12% from last week
            </p>
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
                <p className="text-sm text-gray-600">Revenue</p>
                <h3 className="text-2xl font-bold text-gray-900">₹45,600</h3>
              </div>
            </div>
            <p className="text-sm text-green-600 flex items-center gap-1">
              <TrendingUp size={16} />
              +8% from last week
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
                <p className="text-sm text-gray-600">Avg Rating</p>
                <h3 className="text-2xl font-bold text-gray-900">4.6/5</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600">Based on 260 reviews</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock className="text-orange-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Orders</p>
                <h3 className="text-2xl font-bold text-gray-900">8</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600">2 preparing, 6 ready</p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200 flex">
            <button
              onClick={() => setSelectedTab("orders")}
              className={`flex-1 py-4 px-6 text-center font-semibold transition ${
                selectedTab === "orders"
                  ? "border-b-2 border-emerald-600 text-emerald-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Orders
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
              onClick={() => setSelectedTab("menu")}
              className={`flex-1 py-4 px-6 text-center font-semibold transition ${
                selectedTab === "menu"
                  ? "border-b-2 border-emerald-600 text-emerald-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Menu Management
            </button>
          </div>

          <div className="p-6">
            {selectedTab === "orders" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold mb-6">Recent Orders</h2>
                {orderData.map((order) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="flex items-center gap-4">
                      {getStatusIcon(order.status)}
                      <div>
                        <h3 className="font-semibold">{order.item}</h3>
                        <p className="text-sm text-gray-600">{order.customer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="font-semibold">₹{order.amount}</p>
                        <p className="text-xs text-gray-500">{order.time}</p>
                      </div>
                      <span className={`capitalize px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === "delivered" ? "bg-green-100 text-green-700" :
                        order.status === "ready" ? "bg-blue-100 text-blue-700" :
                        order.status === "preparing" ? "bg-yellow-100 text-yellow-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {selectedTab === "analytics" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={2} name="Sales (₹)" />
                      <Line type="monotone" dataKey="orders" stroke="#059669" strokeWidth={2} name="Orders" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-xl font-bold mb-4">Weekly Revenue</h2>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sales" fill="#10b981" name="Revenue" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4">Customer Ratings</h2>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={feedbackData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="rating" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#10b981" name="Count" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "menu" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Menu Items</h2>
                  <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition">
                    Add New Item
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Biryani', 'Pasta', 'Pizza', 'Dosa', 'Burger', 'Salad'].map((item, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{item}</h3>
                        <p className="text-sm text-gray-600">₹{80 + i * 20}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-emerald-600 hover:text-emerald-700">Edit</button>
                        <button className="text-red-600 hover:text-red-700">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

