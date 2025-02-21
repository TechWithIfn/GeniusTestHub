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
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master Your Technical Interview Journey
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Prepare for top tech companies with our comprehensive aptitude and DSA tests
            </p>
            <Link
              to="/subjects"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Start Your Test Now
            </Link>
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Top Companies Using Our Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => {
              const IconComponent = iconMap[company.logo as keyof typeof iconMap];
              return (
                <div key={company.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">{company.name}</h3>
                  </div>
                  <p className="text-gray-600">{company.description}</p>
                  <Link
                    to={`/tests/${company.name.toLowerCase()}`}
                    className="mt-4 inline-block text-blue-600 hover:text-blue-700"
                  >
                    View Tests →
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