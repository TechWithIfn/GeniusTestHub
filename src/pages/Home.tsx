import React from 'react';
import { Link } from 'react-router-dom';
import { companies } from '../data/companies';
import {
  Building, Building2, Building as Building3, Building as Building4,
  ShoppingBag, Search, Building as Window, Server, Cpu, Database,
  Trophy, Users, BookOpen, Brain
} from 'lucide-react';

const iconMap = {
  'building': Building,
  'building-2': Building2,
  'building-3': Building3,
  'building-4': Building4,
  'shopping-bag': ShoppingBag,
  'search': Search,
  'window': Window,
  'server': Server,
  'cpu': Cpu,
  'database': Database
};

const features = [
  {
    icon: Trophy,
    title: "Industry Standard Tests",
    description: "Practice with real interview questions from top tech companies"
  },
  {
    icon: Users,
    title: "Expert Community",
    description: "Learn from peers and industry professionals in our community"
  },
  {
    icon: BookOpen,
    title: "Comprehensive Learning",
    description: "Access detailed explanations and solutions for every problem"
  },
  {
    icon: Brain,
    title: "Adaptive Learning",
    description: "Personalized practice paths based on your performance"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Master Your Technical Interview Journey
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Prepare for success with our comprehensive suite of aptitude and DSA tests designed for top tech companies.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/subjects"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 duration-200 shadow-lg"
              >
                Start Your Test Now
              </Link>
              <Link
                to="/learn"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Platform?</h2>
            <p className="mt-4 text-xl text-gray-600">Everything you need to ace your technical interviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Practice with Top Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prepare yourself with company-specific aptitude questions and assessments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => {
              const IconComponent = iconMap[company.logo as keyof typeof iconMap];
              return (
                <div key={company.name} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-200">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <IconComponent className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold ml-4">{company.name}</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">{company.description}</p>
                  <Link
                    to={`/tests/${company.name.toLowerCase()}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-lg font-medium group"
                  >
                    View Tests
                    <svg 
                      className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful candidates who have mastered their technical interviews with our platform.
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 duration-200 shadow-lg"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
