"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ArrowRight, MessageCircle, X, Send } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("organizations")
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState("")
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", message: "Hey 👋 How do you want to get started with Intervue?" },
  ])

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatMessages([...chatMessages, { type: "user", message: chatMessage }])
      setChatMessage("")
      // Simulate bot response
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            type: "bot",
            message: "Thanks for your message! Our team will get back to you soon. Would you like to schedule a demo?",
          },
        ])
      }, 1000)
    }
  }

  const tabContent = {
    organizations: {
      title: "Save your Engineering Bandwidth",
      subtitle: "We handle the Interviews so your tech teams can focus on building Innovation",
      highlight: "Engineering",
    },
    candidates: {
      title: "Ace your Technical Interviews",
      subtitle: "Practice with real interviewers and get hired at top companies",
      highlight: "Technical",
    },
    interviewer: {
      title: "Monetize your Expertise",
      subtitle: "Join our network of expert interviewers and earn while helping others",
      highlight: "Expertise",
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-[#1e3a8a] text-white text-center py-2 text-sm">
        <Badge variant="secondary" className="bg-blue-500 text-white">
          FEATURED ON SHARK TANK INDIA
        </Badge>
      </div>

      {/* Navigation */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Intervue
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {/* Why Intervue Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("why-intervue")}
                  className="text-gray-600 hover:text-gray-900 flex items-center"
                >
                  Why Intervue? <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {openDropdown === "why-intervue" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg py-2 z-50">
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Our Story
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      How it Works
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Success Stories
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      ROI Calculator
                    </Link>
                  </div>
                )}
              </div>

              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("products")}
                  className="text-gray-600 hover:text-gray-900 flex items-center"
                >
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {openDropdown === "products" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg py-2 z-50">
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Technical Interviews
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Coding Assessments
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      System Design
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      AI Proctoring
                    </Link>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("solutions")}
                  className="text-gray-600 hover:text-gray-900 flex items-center"
                >
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {openDropdown === "solutions" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg py-2 z-50">
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      For Startups
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      For Enterprises
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      For Agencies
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Custom Solutions
                    </Link>
                  </div>
                )}
              </div>

              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Link>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("resources")}
                  className="text-gray-600 hover:text-gray-900 flex items-center"
                >
                  Resources <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {openDropdown === "resources" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg py-2 z-50">
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Blog
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Case Studies
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Documentation
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Help Center
                    </Link>
                  </div>
                )}
              </div>

              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Contact us
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-black text-white hover:bg-gray-800">Request demo</Button>
            <Button variant="outline">Login</Button>
          </div>
        </div>
      </header>

      {/* Click outside to close dropdowns */}
      {openDropdown && <div className="fixed inset-0 z-40" onClick={() => setOpenDropdown(null)} />}

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="flex space-x-8 border-b">
              <button
                onClick={() => setActiveTab("organizations")}
                className={`pb-4 border-b-2 font-medium transition-colors ${
                  activeTab === "organizations"
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                ORGANIZATIONS
              </button>
              <button
                onClick={() => setActiveTab("candidates")}
                className={`pb-4 border-b-2 font-medium flex items-center transition-colors ${
                  activeTab === "candidates"
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                CANDIDATES <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button
                onClick={() => setActiveTab("interviewer")}
                className={`pb-4 border-b-2 font-medium flex items-center transition-colors ${
                  activeTab === "interviewer"
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                JOIN AS INTERVIEWER <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Dynamic Content Based on Active Tab */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Save your{" "}
                <span className="text-blue-500">{tabContent[activeTab as keyof typeof tabContent].highlight}</span>
                {activeTab === "organizations" ? " Bandwidth" : activeTab === "candidates" ? " Interviews" : ""}
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                {tabContent[activeTab as keyof typeof tabContent].subtitle}
              </p>
            </div>

            {/* CTA Button */}
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg flex items-center">
              {activeTab === "organizations"
                ? "Request demo"
                : activeTab === "candidates"
                  ? "Start practicing"
                  : "Join network"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Hero Image/Video Call Interface */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative dots */}
              <div className="absolute top-8 right-8 grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-blue-300 rounded-full" />
                ))}
              </div>

              {/* Video call mockup */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-2xl">👩</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-lg">
                  <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-2xl">👨</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-12">Visionaries Grow with Intervue</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
            <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold">M2P</div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full" />
              <span className="font-bold text-gray-700">NSE</span>
            </div>
            <div className="font-bold text-gray-700">barclays</div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded" />
              <span className="font-bold text-gray-700">KreditBee</span>
            </div>
            <div className="font-bold text-pink-500 italic">Nykaa</div>
            <div className="bg-black text-white px-3 py-1 text-sm">STRENGTHENED BY INNOVATION</div>
            <div className="font-bold text-pink-400">RECRO</div>
          </div>
        </div>
      </main>

      {/* Interactive Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!chatOpen && (
          <div className="space-y-4">
            <div className="bg-white rounded-full p-3 shadow-lg border">
              <div className="bg-gray-100 rounded-full p-2">
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-sm">👤</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-lg max-w-xs">
              <p className="text-sm text-gray-700">Hey 👋 How do you want to get started with Intervue?</p>
            </div>
            <Button
              onClick={() => setChatOpen(true)}
              className="bg-black text-white rounded-full p-3 hover:bg-gray-800"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </div>
        )}

        {chatOpen && (
          <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">I</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Intervue Support</h3>
                  <p className="text-xs text-green-500">● Online</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setChatOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs p-3 rounded-2xl ${
                      msg.type === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
