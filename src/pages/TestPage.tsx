import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { generateQuestionsForSubject, generateQuestionsForCompany } from '../data/questions';
import type { TestQuestion, TestProgress } from '../types';
import { Trophy, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const TestPage = () => {
  const { company, subjectId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [progress, setProgress] = useState<TestProgress>({
    currentQuestion: 0,
    answers: [],
    score: 0,
    completed: false,
    startTime: Date.now(),
    timeSpent: 0
  });
  const [showExplanation, setShowExplanation] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      let loadedQuestions: TestQuestion[] = [];
      
      if (subjectId) {
        loadedQuestions = generateQuestionsForSubject(subjectId);
      } else if (company) {
        loadedQuestions = generateQuestionsForCompany(company);
      }

      setQuestions(loadedQuestions);
      setLoading(false);
    };

    loadQuestions();
  }, [subjectId, company]);

  useEffect(() => {
    if (!progress.completed && progress.startTime) {
      const timer = setInterval(() => {
        setProgress(prev => ({
          ...prev,
          timeSpent: Math.floor((Date.now() - prev.startTime!) / 1000)
        }));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [progress.completed, progress.startTime]);

  const handleAnswer = (answerIndex: number) => {
    const currentQuestion = questions[progress.currentQuestion];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    const newAnswers = [...progress.answers];
    newAnswers[progress.currentQuestion] = answerIndex;
    
    setProgress(prev => ({
      ...prev,
      answers: newAnswers,
      score: isCorrect ? prev.score + 1 : prev.score,
    }));
    
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (progress.currentQuestion < questions.length - 1) {
      setProgress(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
      setShowExplanation(false);
    } else {
      setProgress(prev => ({
        ...prev,
        completed: true
      }));
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-900">Loading test...</h2>
        </div>
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center px-4">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">No Questions Available</h2>
          <p className="text-gray-600 text-lg mb-8">Sorry, no questions are available for this test.</p>
          <button
            onClick={() => navigate('/subjects')}
            className="btn text-lg px-8 py-3"
          >
            Back to Subjects
          </button>
        </div>
      </div>
    );
  }

  if (progress.completed) {
    const finalScore = (progress.score / questions.length) * 100;
    const incorrectAnswers = questions.length - progress.score;
    
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <Trophy className="h-20 w-20 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Test Completed!</h2>
              <p className="text-xl text-gray-600">Great job on completing the test!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-50 p-8 rounded-xl text-center transform hover:scale-105 transition-transform">
                <p className="text-5xl font-bold text-blue-600 mb-3">{finalScore.toFixed(1)}%</p>
                <p className="text-lg text-gray-600">Final Score</p>
              </div>
              
              <div className="bg-green-50 p-8 rounded-xl text-center transform hover:scale-105 transition-transform">
                <p className="text-5xl font-bold text-green-600 mb-3">{progress.score}</p>
                <p className="text-lg text-gray-600">Correct Answers</p>
              </div>
              
              <div className="bg-red-50 p-8 rounded-xl text-center transform hover:scale-105 transition-transform">
                <p className="text-5xl font-bold text-red-600 mb-3">{incorrectAnswers}</p>
                <p className="text-lg text-gray-600">Incorrect Answers</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-semibold mb-6">Test Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center text-lg">
                  <Clock className="h-6 w-6 text-gray-500 mr-3" />
                  <span>Time Spent: {formatTime(progress.timeSpent || 0)}</span>
                </div>
                <div className="flex items-center text-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span>Accuracy: {((progress.score / questions.length) * 100).toFixed(1)}%</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
              <button
                onClick={() => navigate('/subjects')}
                className="btn-secondary text-lg px-8 py-3"
              >
                Back to Subjects
              </button>
              <button
                onClick={() => {
                  setProgress({
                    currentQuestion: 0,
                    answers: [],
                    score: 0,
                    completed: false,
                    startTime: Date.now(),
                    timeSpent: 0
                  });
                  setShowExplanation(false);
                }}
                className="btn text-lg px-8 py-3"
              >
                Retry Test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[progress.currentQuestion];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Progress Bar and Stats */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-center text-lg text-gray-600 mb-4">
              <span className="mb-2 md:mb-0">Question {progress.currentQuestion + 1} of {questions.length}</span>
              <div className="flex items-center mb-2 md:mb-0">
                <Clock className="h-5 w-5 mr-2" />
                <span>{formatTime(progress.timeSpent || 0)}</span>
              </div>
              <span>Score: {progress.score}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${((progress.currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {currentQuestion.question}
            </h3>
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showExplanation}
                  className={`w-full p-6 text-left rounded-xl border-2 transition-all text-lg ${
                    showExplanation
                      ? index === currentQuestion.correctAnswer
                        ? 'bg-green-50 border-green-500'
                        : progress.answers[progress.currentQuestion] === index
                        ? 'bg-red-50 border-red-500'
                        : 'border-gray-200'
                      : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showExplanation && (
                      <span>
                        {index === currentQuestion.correctAnswer && (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        )}
                        {index === progress.answers[progress.currentQuestion] && 
                         index !== currentQuestion.correctAnswer && (
                          <XCircle className="h-6 w-6 text-red-500" />
                        )}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="mb-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Explanation:</h4>
              <p className="text-gray-700 text-lg leading-relaxed">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Navigation */}
          {showExplanation && (
            <div className="flex justify-end">
              <button
                onClick={nextQuestion}
                className="btn text-lg px-8 py-3"
              >
                {progress.currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Test'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPage;