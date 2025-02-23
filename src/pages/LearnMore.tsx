import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Code,
  Target,
  Users,
  CheckCircle,
  Calendar,
  Clock,
  Brain,
  Award,
  Layers
} from 'lucide-react';

const LearnMore = () => {
  const learningPaths = [
    {
      title: "Data Structures & Algorithms",
      icon: Code,
      topics: ["Arrays & Strings", "Trees & Graphs", "Dynamic Programming", "System Design"],
      color: "blue"
    },
    {
      title: "Aptitude Training",
      icon: Brain,
      topics: ["Quantitative Analysis", "Logical Reasoning", "Verbal Ability", "Data Interpretation"],
      color: "green"
    },
    {
      title: "Company Specific Prep",
      icon: Target,
      topics: ["Company Culture", "Interview Process", "Past Questions", "Success Stories"],
      color: "purple"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Learn at Your Own Pace",
      description: "Flexible learning schedule with 24/7 access to all resources"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with peers and mentors for guidance and motivation"
    },
    {
      icon: Calendar,
      title: "Structured Learning Path",
      description: "Carefully designed curriculum to ensure steady progress"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Get certified and showcase your preparation journey"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Path to Interview Success
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover how our comprehensive platform can help you prepare for technical interviews at top companies
            </p>
          </div>
        </div>
      </div>

      {/* Learning Paths Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Learning Paths</h2>
            <p className="text-xl text-gray-600">Choose your specialized training path</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-block p-4 rounded-lg bg-${path.color}-100 mb-6`}>
                  <path.icon className={`h-8 w-8 text-${path.color}-600`} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{path.title}</h3>
                <ul className="space-y-3">
                  {path.topics.map((topic, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/path/${path.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`mt-6 inline-block px-6 py-3 rounded-lg bg-${path.color}-600 text-white font-semibold hover:bg-${path.color}-700 transition-colors duration-200`}
                >
                  Start Learning
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform Benefits</h2>
            <p className="text-xl text-gray-600">What makes our platform unique</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                <benefit.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-xl text-gray-600">Success Rate</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <p className="text-xl text-gray-600">Students Trained</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <p className="text-xl text-gray-600">Practice Tests</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">How long does it take to complete a course?</h3>
              <p className="text-gray-600">Most students complete their preparation within 8-12 weeks, depending on their starting level and dedication.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Are the practice tests updated regularly?</h3>
              <p className="text-gray-600">Yes, our content team updates the question bank weekly based on the latest interview patterns.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Can I get personal mentorship?</h3>
              <p className="text-gray-600">Yes, we offer one-on-one mentorship sessions with industry experts for premium members.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Is there a mobile app available?</h3>
              <p className="text-gray-600">Yes, our platform is accessible through web and mobile apps for both iOS and Android devices.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Success Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful candidates who have achieved their dream jobs through our platform.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/register"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-200"
            >
              Sign Up Now
            </Link>
            <Link
              to="/pricing"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
