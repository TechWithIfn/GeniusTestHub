import React from 'react';
import { Link } from 'react-router-dom';
import { companies } from '../data/companies';
import { Building, Building2, ShoppingBag, Search, Server, Cpu, Database } from 'lucide-react';

const iconMap = {
  'building': Building,
  'building-2': Building2,
  'shopping-bag': ShoppingBag,
  'search': Search,
  'server': Server,
  'cpu': Cpu,
  'database': Database
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-24 md:py-36 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
          Master Your Technical Interview Journey
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-blue-200 max-w-2xl">
          Be fully prepared to seize opportunities at top tech companies with our comprehensive aptitude and DSA tests.
        </p>
        <Link
          to="/subjects"
          className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-200 transition-all transform hover:scale-105 duration-300 shadow-xl"
        >
          Start Your Test Now
        </Link>
      </div>

      {/* Companies Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
            Practice Aptitude Questions from Top Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {companies.map((company) => {
              const IconComponent = iconMap[company.logo as keyof typeof iconMap];
              return (
                <div key={company.name} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-4 rounded-xl">
                      <IconComponent className="h-12 w-12 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold ml-4 text-gray-900">{company.name}</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {company.description}
                  </p>
                  <Link
                    to={`/tests/${company.name.toLowerCase()}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-lg font-medium transition-colors duration-200"
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
