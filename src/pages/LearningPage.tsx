"use client"

import type React from "react"
import { useParams, Link } from "react-router-dom"
import { subjects } from "../data/subjects"
import { ArrowLeft } from "lucide-react"

const LearningPage = () => {
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

  const content = getTopicContent(subject.id, topic)

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

        <h1 className="text-3xl font-bold text-gray-900 mb-6">{topic}</h1>

        <div className="prose prose-blue max-w-none">{content}</div>
      </div>
    </div>
  )
}

function getTopicContent(subjectId: string, topic: string) {
  const contentMap: { [key: string]: { [key: string]: React.ReactNode } } = {
    "computer-science": {
      "Object-Oriented Programming": (
        <>
          <h2>Object-Oriented Programming (OOP)</h2>
          <p>
            Object-Oriented Programming is a programming paradigm based on the concept of "objects", which can contain
            data and code. The data is in the form of fields (often known as attributes), and the code is in the form of
            procedures (often known as methods).
          </p>
          <h3>Key Concepts of OOP:</h3>
          <ul>
            <li>
              <strong>Encapsulation:</strong> Bundling of data with the methods that operate on that data.
            </li>
            <li>
              <strong>Inheritance:</strong> A way to form new classes using classes that have already been defined.
            </li>
            <li>
              <strong>Polymorphism:</strong> The provision of a single interface to entities of different types.
            </li>
            <li>
              <strong>Abstraction:</strong> The process of hiding the internal details and showing only the
              functionality.
            </li>
          </ul>
        </>
      ),
      "Clean Code": (
        <>
          <h2>Clean Code</h2>
          <p>
            Clean Code refers to code that is easy to understand, easy to modify, and easy to test. It's a coding style
            that focuses on readability and simplicity.
          </p>
          <h3>Principles of Clean Code:</h3>
          <ul>
            <li>
              <strong>Meaningful Names:</strong> Use clear and descriptive names for variables, functions, and classes.
            </li>
            <li>
              <strong>Small Functions:</strong> Keep functions short and focused on a single task.
            </li>
            <li>
              <strong>DRY (Don't Repeat Yourself):</strong> Avoid duplicating code by abstracting common functionality.
            </li>
            <li>
              <strong>Comments:</strong> Use comments sparingly and only when necessary to explain complex logic.
            </li>
            <li>
              <strong>Formatting:</strong> Maintain consistent formatting throughout your codebase.
            </li>
          </ul>
        </>
      ),
      "Data Structures": (
        <>
          <h2>Data Structures</h2>
          <p>
            Data structures are ways of organizing and storing data in a computer so that it can be accessed and
            modified efficiently. Different kinds of data structures are suited to different kinds of applications, and
            some are highly specialized to specific tasks.
          </p>
          <h3>Common Data Structures:</h3>
          <ul>
            <li>
              <strong>Arrays:</strong> A collection of elements identified by index or key.
            </li>
            <li>
              <strong>Linked Lists:</strong> A linear collection of data elements whose order is not given by their
              physical placement in memory.
            </li>
            <li>
              <strong>Stacks:</strong> A last in, first out (LIFO) data structure.
            </li>
            <li>
              <strong>Queues:</strong> A first in, first out (FIFO) data structure.
            </li>
            <li>
              <strong>Trees:</strong> A hierarchical structure with a root value and subtrees of children.
            </li>
            <li>
              <strong>Graphs:</strong> A non-linear data structure consisting of nodes and edges.
            </li>
          </ul>
        </>
      ),
    },
    math: {
      Algebra: (
        <>
          <h2>Algebra</h2>
          <p>
            Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols. It is
            a unifying thread of almost all of mathematics.
          </p>
          <h3>Key Concepts in Algebra:</h3>
          <ul>
            <li>
              <strong>Variables:</strong> Symbols used to represent unknown values.
            </li>
            <li>
              <strong>Equations:</strong> Statements that assert the equality of two expressions.
            </li>
            <li>
              <strong>Functions:</strong> Rules that assign each element of one set to a unique element of another set.
            </li>
            <li>
              <strong>Polynomials:</strong> Expressions consisting of variables and coefficients.
            </li>
          </ul>
        </>
      ),
      Calculus: (
        <>
          <h2>Calculus</h2>
          <p>
            Calculus is the mathematical study of continuous change. It has two major branches: differential calculus
            and integral calculus.
          </p>
          <h3>Main Concepts in Calculus:</h3>
          <ul>
            <li>
              <strong>Limits:</strong> The value that a function approaches as the input approaches some value.
            </li>
            <li>
              <strong>Derivatives:</strong> Measure of how a function changes as its input changes.
            </li>
            <li>
              <strong>Integrals:</strong> Used to calculate areas, volumes, and other quantities.
            </li>
            <li>
              <strong>Series:</strong> The sum of a sequence of terms.
            </li>
          </ul>
        </>
      ),
    },
    // Add more subjects and topics as needed
  }

  return contentMap[subjectId]?.[topic] || <p>Content for this topic is not available yet. Check back later!</p>
}

export default LearningPage

