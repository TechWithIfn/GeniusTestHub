"use client"
import { useParams, Link } from "react-router-dom"
import { subjects } from "../data/subjects"
import { ArrowLeft } from "lucide-react"

const ArticlesPage = () => {
  const { subjectId, topicIndex } = useParams()
  const subject = subjects.find((s) => s.id === subjectId)
  const topic = subject?.topics[Number(topicIndex)]

  if (!subject || !topic) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Topic not found</h2>
          <Link to="/subjects" className="mt-4 text-blue-600 hover:text-blue-700">
            Back to Subjects
          </Link>
        </div>
      </div>
    )
  }

  // This is a placeholder. In a real application, you would fetch articles from an API or database.
  const articles = [
    { id: 1, title: "Introduction to " + topic, readTime: "5 min read" },
    { id: 2, title: "Advanced Concepts in " + topic, readTime: "10 min read" },
    { id: 3, title: "Practical Applications of " + topic, readTime: "8 min read" },
    { id: 4, title: topic + " in the Real World", readTime: "12 min read" },
  ]

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to={`/subjects/${subjectId}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to {subject.name}
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">Articles on {topic}</h1>

        <div className="grid gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.readTime}</p>
              <Link
                to={`/subjects/${subjectId}/topics/${topicIndex}/articles/${article.id}`}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Read Article
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticlesPage

