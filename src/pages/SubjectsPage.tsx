import React from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { Binary, Code, Calculator, Cpu, BookOpen, Terminal } from 'lucide-react';

const iconComponents = {
  'Binary': Binary,
  'Code': Code,
  'Calculator': Calculator,
  'Cpu': Cpu,
  'BookOpen': BookOpen,
  'Terminal': Terminal
};

const SubjectsPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Subject</h1>
          <p className="text-xl text-gray-600">Select a subject to start practicing and test your knowledge</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject) => {
            const IconComponent = iconComponents[subject.icon as keyof typeof iconComponents];
            return (
              <div key={subject.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="ml-3 text-xl font-semibold text-gray-900">{subject.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{subject.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {subject.topics.slice(0, 3).map((topic, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {topic}
                        </span>
                      ))}
                      {subject.topics.length > 3 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          +{subject.topics.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <Link
                    to={`/tests/subject/${subject.id}`}
                    className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Start Practice
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubjectsPage;