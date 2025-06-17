
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const questions = [
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["String", "Boolean", "Float", "Undefined"],
      correct: "Float"
    },
    {
      question: "What does 'DOM' stand for in web development?",
      options: ["Document Object Model", "Data Object Management", "Dynamic Object Method", "Digital Online Media"],
      correct: "Document Object Model"
    },
    {
      question: "Which Python keyword is used to create a function?",
      options: ["function", "def", "create", "func"],
      correct: "def"
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correct: "O(log n)"
    },
    {
      question: "In React, what is used to pass data from parent to child component?",
      options: ["state", "props", "context", "refs"],
      correct: "props"
    },
    {
      question: "Which CSS property is used to change the text color?",
      options: ["font-color", "text-color", "color", "foreground-color"],
      correct: "color"
    },
    {
      question: "What does 'API' stand for?",
      options: ["Application Programming Interface", "Automated Program Integration", "Advanced Protocol Implementation", "Application Process Interface"],
      correct: "Application Programming Interface"
    },
    {
      question: "Which data structure follows LIFO (Last In, First Out) principle?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      correct: "Stack"
    },
    {
      question: "In Git, which command is used to save changes to the local repository?",
      options: ["git save", "git commit", "git store", "git push"],
      correct: "git commit"
    },
    {
      question: "What is the correct way to declare a variable in JavaScript using ES6?",
      options: ["var myVar", "let myVar", "const myVar", "Both let and const"],
      correct: "Both let and const"
    }
  ];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correct;
    const newScore = isCorrect ? score + 10 : score - 5;
    setScore(newScore);

    const newAnsweredQuestion = {
      question: questions[currentQuestion].question,
      selectedAnswer,
      correctAnswer: questions[currentQuestion].correct,
      isCorrect
    };
    setAnsweredQuestions([...answeredQuestions, newAnsweredQuestion]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    }
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correct;
    const finalScore = isCorrect ? score + 10 : score - 5;
    
    const finalAnsweredQuestion = {
      question: questions[currentQuestion].question,
      selectedAnswer,
      correctAnswer: questions[currentQuestion].correct,
      isCorrect
    };
    
    const allAnswers = [...answeredQuestions, finalAnsweredQuestion];
    
    // Store results in localStorage to pass to results page
    localStorage.setItem('quizResults', JSON.stringify({
      score: finalScore,
      answers: allAnswers,
      totalQuestions: questions.length
    }));
    
    navigate('/results');
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 p-4">
      <div className="container mx-auto max-w-4xl py-8">
        <Card className="backdrop-blur-sm bg-white/95 shadow-2xl">
          <CardHeader className="pb-6">
            <div className="flex justify-between items-center mb-4">
              <Badge variant="outline" className="text-lg px-4 py-2">
                Question {currentQuestion + 1} of {questions.length}
              </Badge>
            </div>
            <Progress value={progress} className="h-3 mb-4" />
            <CardTitle className="text-2xl font-bold text-gray-800 leading-relaxed">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <div className="space-y-4 mb-8">
              {questions[currentQuestion].options.map((option, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedAnswer === option 
                      ? 'ring-2 ring-purple-500 bg-purple-50 border-purple-200' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleAnswerSelect(option)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer === option 
                          ? 'border-purple-500 bg-purple-500' 
                          : 'border-gray-300'
                      }`}>
                        {selectedAnswer === option && (
                          <div className="w-3 h-3 rounded-full bg-white"></div>
                        )}
                      </div>
                      <span className="text-lg font-medium text-gray-700">{option}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              {currentQuestion + 1 === questions.length ? (
                <Button 
                  onClick={handleSubmit}
                  disabled={!selectedAnswer}
                  className="px-12 py-4 text-xl font-semibold bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Quiz
                </Button>
              ) : (
                <Button 
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  className="px-12 py-4 text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Question →
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
