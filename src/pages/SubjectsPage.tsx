import React from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { Binary, Code, Calculator, Cpu, BookOpen, Terminal, Users, Clock, Award, Brain, ArrowRight } from 'lucide-react';

const iconComponents = {
  'Binary': Binary,
  'Code': Code,
  'Calculator': Calculator,
  'Cpu': Cpu,
  'BookOpen': BookOpen,
  'Terminal': Terminal
};

const features = [
  {
    icon: Brain,
    title: "Personalized Learning",
    description: "Adaptive tests that match your skill level"
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Practice with real interview time constraints"
  },
  {
    icon: Award,
    title: "Skill Assessment",
    description: "Detailed performance analytics and insights"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Access to comprehensive explanations"
  }
];

const SubjectsPage = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Subject
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Master your skills with our comprehensive test preparation platform
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {subjects.map((subject) => {
            const IconComponent = iconComponents[subject.icon as keyof typeof iconComponents];
            return (
              <div 
                key={subject.id} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{subject.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 flex-grow">
                    {subject.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      Key Topics:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {subject.topics.slice(0, 3).map((topic, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {topic.name}
                        </span>
                      ))}
                      {subject.topics.length > 3 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          +{subject.topics.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-3 mt-4">
                      <Link
                        to={`/tests/subject/${subject.id}`}
                        className="flex-1 text-center bg-blue-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        Start Practice
                      </Link>
                      <Link
                        to={`/subjects/${subject.id}`}
                        className="flex items-center justify-center px-4 py-2.5 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Practice Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">6</div>
              <div className="text-blue-100">Core Subjects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Student Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Learning Access</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectsPage;