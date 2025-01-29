import React, { useState } from "react";
import {
  Download,
  CheckCircle,
  ArrowRight,
  Phone,
  Menu,
  X,
  Star,
  Users,
  Shield,
  Gift,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("blue");
  const [selectedFeature, setSelectedFeature] = useState(null);
  // Theme configurations
  const themes = {
    blue: {
      primary: "bg-blue-600 hover:bg-blue-700",
      secondary: "bg-blue-100",
      text: "text-blue-600",
      gradient: "from-blue-600 to-blue-800",
    },
    purple: {
      primary: "bg-purple-600 hover:bg-purple-700",
      secondary: "bg-purple-100",
      text: "text-purple-600",
      gradient: "from-purple-600 to-purple-800",
    },
    emerald: {
      primary: "bg-emerald-600 hover:bg-emerald-700",
      secondary: "bg-emerald-100",
      text: "text-emerald-600",
      gradient: "from-emerald-600 to-emerald-800",
    },
  };

  const theme = themes[currentTheme];

  const features = [
    {
      id: 1,
      title: "Secure Authentication",
      description:
        "Ensures only authorized users can access the app with strong authentication mechanisms to protect sensitive data.",
      image: "/api/placeholder/600/400",
    },
    {
      id: 2,
      title: "Dashboard Overview",
      description:
        "A comprehensive home screen displaying the shop owner's name, enterprise name, and photo. It also shows the total number of customers, frequent customers, and a notes section for important points.",
      image: "/api/placeholder/600/400",
    },
    {
      id: 3,
      title: "Customer Management",
      description:
        "View all customers in one place. Easily update, delete, or add new customer details. Click on a customer to access their individual katha records.",
      image: "/api/placeholder/600/400",
    },
    {
      id: 4,
      title: "Katha Tracking",
      description:
        "Maintain detailed records of each customer's katha. Add, update, or delete katha entries to keep track of daily transactions and interactions.",
      image: "/api/placeholder/600/400",
    },
    {
      id: 5,
      title: "Owner Profile Management",
      description:
        "Update shop owner details like name, enterprise name, and photo through a convenient modal. Also includes a logout option for secure session management.",
      image: "/api/placeholder/600/400",
    },
    {
      id: 6,
      title: "Frequent Customer Insights",
      description:
        "Identify and track frequent customers with a dedicated table on the dashboard, helping shop owners prioritize and manage relationships effectively.",
      image: "/api/placeholder/600/400",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Shop Owner",
      comment:
        "e-Katha Book has made managing my customers and their katha so much easier. It's a lifesaver for small business owners like me!",
    },
    {
      name: "Rajesh Patel",
      role: "Entrepreneur",
      comment:
        "This app is a game-changer for shopkeepers. It simplifies customer management and keeps everything organized. Highly recommended!",
    },
    {
      name: "Anjali Mehta",
      role: "Business Owner",
      comment:
        "The dashboard is so intuitive, and tracking customer katha has never been this effortless. Thank you, e-Katha Book!",
    },
    {
      name: "Vikram Singh",
      role: "Retailer",
      comment:
        "I love how easy it is to update customer details and maintain katha records. This app has saved me so much time and effort.",
    },
    {
      name: "Neha Gupta",
      role: "Shopkeeper",
      comment:
        "e-Katha Book is perfect for managing my daily shop operations. The frequent customer insights are especially helpful!",
    },
    {
      name: "Arun Kumar",
      role: "Small Business Owner",
      comment:
        "A must-have app for any shop owner. It’s simple, efficient, and does exactly what it promises. Great job!",
    },
  ];

  // Navigation links data
  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  // Footer links data
  const footerLinks = {
    product: ["Features", "Pricing", "Demo"],
    company: ["About", "Blog", "Careers"],
    resources: ["Documentation", "Help Center", "Contact"],
    legal: ["Privacy", "Terms", "Security"],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Theme Selector */}
      <div className="fixed top-24 right-4 z-50 bg-white p-2 rounded-full shadow-lg flex gap-2">
        {Object.keys(themes).map((themeName) => (
          <button
            key={themeName}
            onClick={() => setCurrentTheme(themeName)}
            className={`w-8 h-8 rounded-full ${
              themes[themeName].primary
            } border-2 
              ${
                currentTheme === themeName
                  ? "border-gray-900 scale-110"
                  : "border-white"
              }
              shadow-sm transition-all duration-200 hover:scale-110`}
            aria-label={`Switch to ${themeName} theme`}
          />
        ))}
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="/api/placeholder/48/48"
                alt="App Icon"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl shadow-lg"
              />
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                E-kathaBook
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={"#download"}
                className={`${theme.primary} text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors`}
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 py-2 hover:text-gray-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                className={`w-full ${theme.primary} text-white px-6 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors`}
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className={`bg-gradient-to-br ${theme.gradient} text-white py-20 lg:py-32`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Experience
              </h2>
              <p className="text-xl lg:text-2xl mb-8 text-gray-100">
                Simplify your shop management with e-Katha Book – the ultimate
                tool to track customers, maintain katha records, and streamline
                your daily operations effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={"#download"}
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center">
                  Watch Demo
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
            {/* <div className="lg:w-1/2 lg:pl-12">
              <img 
                src="/api/placeholder/600/400" 
                alt="App Preview" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to boost your productivity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group p-8 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`${theme.secondary} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6`}
                >
                  <Gift className={`w-6 h-6 ${theme.text}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <button
                  onClick={() => setSelectedFeature(feature)}
                  className={`${theme.text} flex items-center hover:underline`}
                >
                  See more
                  <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CustomModal
        isOpen={selectedFeature !== null}
        onClose={() => setSelectedFeature(null)}
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{selectedFeature?.title}</h2>
          <img
            src={selectedFeature?.image}
            alt={selectedFeature?.title}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-gray-600">{selectedFeature?.description}</p>
        </div>
      </CustomModal>
      {/* <Dialog open={selectedFeature !== null} onOpenChange={() => setSelectedFeature(null)}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedFeature?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img 
              src={selectedFeature?.image} 
              alt={selectedFeature?.title}
              className="w-full rounded-lg shadow-lg mb-4"
            />
            <p className="text-gray-600">{selectedFeature?.description}</p>
          </div>
        </DialogContent>
      </Dialog> */}

      {/* Demo Section */}
      <section id="demo" className={`py-20 ${theme.secondary}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600">
              Watch how our app can transform your workflow
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-center">
                <Phone className="w-16 h-16 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied users
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${theme.text} fill-current`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-20 bg-gradient-to-br ${theme.gradient} text-white`}
        id="download"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-12 text-gray-100">
            Download now and join millions of happy users
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
              Download for iOS
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
              Download for Android
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-1">
        {/* <div className="container mx-auto px-4"> */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-white font-semibold mb-4 capitalize">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img
              src="/api/placeholder/32/32"
              alt="App Icon"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-white font-semibold">Your App Name</span>
          </div>
          <p>
            © {new Date().getFullYear()} Your App Name. All rights reserved.
          </p>
        </div>
        {/* </div> */}
      </footer>
    </div>
  );
};

export default App;
