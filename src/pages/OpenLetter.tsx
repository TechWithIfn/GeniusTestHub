import React from 'react';
import { Star, Target, Trophy, Users } from 'lucide-react';

const OpenLetter = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-center mb-8">An Open Letter to Aspiring Developers</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Dear Future Tech Professional,
            </p>
            
            <p className="text-gray-700 mb-6">
              We understand the journey you're on. The path to becoming a successful developer is filled with challenges, 
              learning curves, and moments of doubt. But remember this: every expert was once a beginner, and every 
              successful developer started exactly where you are now.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg mb-2">Stay Focused</h3>
                  <p className="text-gray-600">
                    Set clear goals and work consistently towards them. Small steps lead to big achievements.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg mb-2">Learn from Others</h3>
                  <p className="text-gray-600">
                    Engage with the community, share knowledge, and don't be afraid to ask questions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg mb-2">Practice Excellence</h3>
                  <p className="text-gray-600">
                    Quality matters more than quantity. Focus on understanding concepts deeply.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Trophy className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg mb-2">Celebrate Progress</h3>
                  <p className="text-gray-600">
                    Acknowledge your achievements, no matter how small they might seem.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              At GeniusTestHub, we're committed to supporting your journey. Our platform is designed to help you build 
              the skills and confidence needed to excel in technical interviews and beyond. Remember that every practice 
              test, every solved problem, and every learning moment brings you closer to your goals.
            </p>

            <p className="text-gray-700 mb-6">
              The tech industry needs diverse perspectives, fresh ideas, and passionate individuals like you. Your unique 
              journey and dedication to learning make you valuable to any organization you'll join in the future.
            </p>

            <p className="text-gray-700 mb-6">
              Keep pushing forward, stay curious, and never stop learning. Your potential is limitless, and your future 
              in tech is bright.
            </p>

            <p className="text-gray-700 mb-8">
              Best regards,<br />
              The GeniusTestHub Team
            </p>

            <div className="text-center">
              <blockquote className="text-xl italic text-gray-600 border-l-4 border-blue-600 pl-4">
                "The only way to do great work is to love what you do." - Steve Jobs
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenLetter;