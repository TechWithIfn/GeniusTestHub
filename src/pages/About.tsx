import React from 'react';
import { BookOpen, Code, Brain, Puzzle as PuzzlePiece } from 'lucide-react';

const About = () => {
  const categories = [
    {
      icon: BookOpen,
      title: 'Aptitude',
      description: 'Comprehensive aptitude tests covering quantitative, verbal, and logical reasoning'
    },
    {
      icon: Code,
      title: 'DSA',
      description: 'Data Structures and Algorithms problems with detailed solutions and explanations'
    },
    {
      icon: Brain,
      title: 'Coding',
      description: 'Real-world coding challenges that test your problem-solving abilities'
    },
    {
      icon: PuzzlePiece,
      title: 'Logical Reasoning',
      description: 'Complex logical puzzles to enhance your analytical thinking skills'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Mission Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6 text-center">Our Mission</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            GeniusTestHub thrived with passion and committed to entirely reform the whole educational system by empowering the students and job seekers with all the tools and resources available at their disposal to help them excel in their respective technical interviews. Herein, the platform goes a step ahead to provide its users with almost exhaustive test preparation material in the line with industry standards and needs.
          </p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Test Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose GeniusTestHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Industry-Aligned Content</h3>
              <p className="text-gray-600">Our tests are designed to match the actual assessment patterns of top tech companies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Comprehensive Coverage</h3>
              <p className="text-gray-600">From basic concepts to advanced problems, we cover everything you need to succeed.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Regular Updates</h3>
              <p className="text-gray-600">Our content is regularly updated to reflect the latest industry trends and requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
