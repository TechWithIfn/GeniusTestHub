import React from 'react';
import { Star, Target, Trophy, Users } from 'lucide-react';

const OpenLetter = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-center mb-8">An Open Letter to the Upcoming Developeers</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
           Dear Future Tech Prodigy,

            </p>
            
            <p className="text-gray-700 mb-6">
              The journey you're walking, we know. It is very challenging, with many hurdles, lot of things to learn, and self-doubt for every developer, from wannabe to successful. Remember this: every expert was once a beginner, and every successful developer started precisely from the same point you are in at this time.
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
               At GeniusTestHub, we give you our all to ensure that you are supported on this 
          journey. Our platform is an avenue for acquiring the skills and confidence to face technical interviews and beyond. Every practice test, every solved problem, and every learn moment brings you one step closer to your goal.
            </p>

            <p className="text-gray-700 mb-6">
                The tech industry needs people with different perspectives, new ideas, and passion-like you. Your individual and unique journey, together with the spirit of learning, gives you added value to whatever organization you may join in the future.
            </p>

            <p className="text-gray-700 mb-6">
             Keep pushing ahead, stay curious, and don't stop learning. Your potential is limitless, and you have a brighter future ahead in tech.
            </p>

            <p className="text-gray-700 mb-8">
              Best regards,<br />
              The GeniusTestHub Team ❤️
            </p>

            <div className="text-center">
              <blockquote className="text-xl italic text-gray-600 border-l-4 border-blue-600 pl-4">
                "Only those who love working, only these persons can do something worthwhile." - Steve Jobs
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenLetter;
