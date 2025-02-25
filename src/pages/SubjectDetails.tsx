import type React from "react"
import { useParams, Link } from "react-router-dom"
import { subjects } from "../data/subjects"
import { ArrowLeft } from "lucide-react"

const SubjectDetails: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>()
  const subject = subjects.find((s) => s.id === subjectId)

  if (!subject) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Subject not found</h2>
          <Link to="/" className="mt-4 text-blue-600 hover:text-blue-700">
            Back to Subjects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group">
          <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Subjects
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">{subject.name}</h1>
        <p className="text-xl text-gray-600 mb-8">{subject.description}</p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subject.topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold mb-2">{topic}</h3>
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
    </div>
  )
}

export default SubjectDetails

