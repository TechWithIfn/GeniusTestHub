"use client"
import { useParams, Link } from "react-router-dom"
import { subjects } from "../data/subjects"
import {
  Binary,
  Code,
  Calculator,
  Cpu,
  BookOpen,
  Terminal,
  ArrowLeft,
  BookCheck,
  Users,
  Target,
  Brain,
  Star,
  Clock,
  CheckCircle,
  BarChart,
} from "lucide-react"

const iconComponents = {
  Binary: Binary,
  Code: Code,
  Calculator: Calculator,
  Cpu: Cpu,
  BookOpen: BookOpen,
  Terminal: Terminal,
}

const SubjectDetails = () => {
  const { subjectId } = useParams()
  const subject = subjects.find((s) => s.id === subjectId)

  if (!subject) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Subject not found</h2>
          <Link to="/subjects" className="mt-4 text-blue-600 hover:text-blue-700">
            Back to Subjects
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = iconComponents[subject.icon as keyof typeof iconComponents]

  const learningPath = [
    {
      title: "Fundamentals",
      description: "Master the basic concepts and principles",
      icon: BookCheck,
      duration: "2-3 weeks",
      skills: ["Basic concepts", "Core principles", "Foundation knowledge"],
    },
    {
      title: "Practice",
      description: "Apply your knowledge through exercises",
      icon: Target,
      duration: "3-4 weeks",
      skills: ["Problem solving", "Practical application", "Skill building"],
    },
    {
      title: "Advanced Topics",
      description: "Dive deep into complex scenarios",
      icon: Brain,
      duration: "4-5 weeks",
      skills: ["Complex problems", "Advanced concepts", "Deep understanding"],
    },
    {
      title: "Real-world Applications",
      description: "Learn from industry examples",
      icon: Users,
      duration: "2-3 weeks",
      skills: ["Industry cases", "Real scenarios", "Practical implementation"],
    },
  ]

  const keyFeatures = [
    {
      icon: Star,
      title: "Quality Content",
      description: "Expertly curated materials and practice questions",
    },
    {
      icon: Clock,
      title: "Self-Paced",
      description: "Learn at your own speed with flexible scheduling",
    },
    {
      icon: CheckCircle,
      title: "Instant Feedback",
      description: "Get immediate results and detailed explanations",
    },
    {
      icon: BarChart,
      title: "Progress Tracking",
      description: "Monitor your improvement with detailed analytics",
    },
  ]

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/subjects" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group">
          <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Subjects
        </Link>

        {/* Subject Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mb-6">
            <div className="bg-blue-100 p-4 rounded-xl mb-4 md:mb-0">
              <IconComponent className="h-12 w-12 text-blue-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{subject.name}</h1>
              <p className="text-xl text-gray-600 mb-6">{subject.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={`/tests/subject/${subject.id}`}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors transform hover:scale-105"
                >
                  Start Practice Tests
                </Link>
                <Link
                  to={`/subjects/${subject.id}/syllabus`}
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Download Syllabus
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Topics Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Topics Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subject.topics.map((topic, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold mb-2">{topic}</h3>
                <p className="text-gray-600 mb-4">
                  Master essential concepts and practical applications in {topic.toLowerCase()}.
                </p>
                <Link
                  to={`/subjects/${subject.id}/topics/${index}/learn`}
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Start Learning
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8">Learning Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningPath.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center mb-8">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <p className="text-sm text-blue-600 font-medium">{step.duration}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Key Skills:</h4>
                  <ul className="space-y-1">
                    {step.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < learningPath.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-16 transform translate-x-1/2">
                    <ArrowLeft className="h-6 w-6 text-gray-400 rotate-180" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-blue-100 mb-6">Begin your journey in {subject.name} today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/tests/subject/${subject.id}`}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors transform hover:scale-105"
            >
              Start Your First Test
            </Link>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              View Study Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubjectDetails
