import React from 'react';
import { Link } from 'react-router-dom';
import { companies } from '../data/companies';
import { Building, Building2, Building as Building3, Building as Building4, ShoppingBag, Search, Building as Window, Server, Cpu, Database } from 'lucide-react';

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

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Master Your Technical Interview Journey
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Prepare for top tech companies with our comprehensive aptitude and DSA tests
            </p>
            <Link
              to="/subjects"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors transform hover:scale-105 duration-200 shadow-lg"
            >
              Start Your Test Now
            </Link>
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Aptitude questions can be practised from the top companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => {
              const IconComponent = iconMap[company.logo as keyof typeof iconMap];
              return (
                <div key={company.name} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-200">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <IconComponent className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold ml-4">{company.name}</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">{company.description}</p>
                  <Link
                    to={`/tests/${company.name.toLowerCase()}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-lg font-medium"
                  >
                    View Tests
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
