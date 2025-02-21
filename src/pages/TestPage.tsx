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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-900">Loading test...</h2>
        </div>
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Questions Available</h2>
          <p className="text-gray-600 mb-4">Sorry, no questions are available for this test.</p>
          <button
            onClick={() => navigate('/subjects')}
            className="btn"
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
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Test Completed!</h2>
              <p className="text-gray-600">Great job on completing the test!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">{finalScore.toFixed(1)}%</p>
                <p className="text-gray-600">Final Score</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">{progress.score}</p>
                <p className="text-gray-600">Correct Answers</p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-red-600 mb-2">{incorrectAnswers}</p>
                <p className="text-gray-600">Incorrect Answers</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Test Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-2" />
                  <span>Time Spent: {formatTime(progress.timeSpent || 0)}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Accuracy: {((progress.score / questions.length) * 100).toFixed(1)}%</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={() => navigate('/subjects')}
                className="btn-secondary"
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
                className="btn"
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
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Progress Bar and Stats */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
              <span>Question {progress.currentQuestion + 1} of {questions.length}</span>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{formatTime(progress.timeSpent || 0)}</span>
              </div>
              <span>Score: {progress.score}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((progress.currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {currentQuestion.question}
            </h3>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showExplanation}
                  className={`w-full p-4 text-left rounded-lg border transition-colors ${
                    showExplanation
                      ? index === currentQuestion.correctAnswer
                        ? 'bg-green-100 border-green-500'
                        : progress.answers[progress.currentQuestion] === index
                        ? 'bg-red-100 border-red-500'
                        : 'border-gray-200'
                      : 'border-gray-200 hover:border-blue-500'
                  }`}
                >
                  {option}
                  {showExplanation && index === currentQuestion.correctAnswer && (
                    <CheckCircle className="h-5 w-5 text-green-500 inline ml-2" />
                  )}
                  {showExplanation && index === progress.answers[progress.currentQuestion] && 
                   index !== currentQuestion.correctAnswer && (
                    <XCircle className="h-5 w-5 text-red-500 inline ml-2" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Explanation:</h4>
              <p className="text-gray-700">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Navigation */}
          {showExplanation && (
            <div className="flex justify-end">
              <button
                onClick={nextQuestion}
                className="btn"
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