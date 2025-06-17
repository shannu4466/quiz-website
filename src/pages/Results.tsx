
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Results = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState(null);

  useEffect(() => {
    const savedResults = localStorage.getItem('quizResults');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    } else {
      navigate('/');
    }
  }, [navigate]);

  if (!results) {
    return <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 flex items-center justify-center">
      <div className="text-white text-xl">Loading results...</div>
    </div>;
  }

  const { score, answers, totalQuestions } = results;
  const correctAnswers = answers.filter(answer => answer.isCorrect).length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  const getScoreColor = () => {
    if (percentage >= 80) return "from-green-500 to-emerald-500";
    if (percentage >= 60) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-pink-500";
  };

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Outstanding! 🏆";
    if (percentage >= 80) return "Excellent work! 🎉";
    if (percentage >= 70) return "Great job! 👏";
    if (percentage >= 60) return "Good effort! 👍";
    if (percentage >= 50) return "Not bad! Keep practicing! 💪";
    return "Keep learning and try again! 📚";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 p-4">
      <div className="container mx-auto max-w-4xl py-8">
        <Card className="backdrop-blur-sm bg-white/95 shadow-2xl mb-8">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Quiz Complete!
            </CardTitle>
            <p className="text-xl text-gray-600">{getPerformanceMessage()}</p>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <div className="text-center mb-8">
              <div className={`inline-block p-8 rounded-full bg-gradient-to-r ${getScoreColor()} shadow-2xl mb-6`}>
                <div className="text-6xl font-bold text-white">{score}</div>
                <div className="text-white text-lg font-medium">Points</div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{correctAnswers}</div>
                    <div className="text-blue-800 font-medium">Correct</div>
                  </CardContent>
                </Card>
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">{totalQuestions - correctAnswers}</div>
                    <div className="text-red-800 font-medium">Incorrect</div>
                  </CardContent>
                </Card>
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">{percentage}%</div>
                    <div className="text-purple-800 font-medium">Accuracy</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Review Your Answers</h3>
              {answers.map((answer, index) => (
                <Card key={index} className={`border-l-4 ${answer.isCorrect ? 'border-l-green-500 bg-green-50' : 'border-l-red-500 bg-red-50'}`}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-gray-700">Question {index + 1}</span>
                      <Badge className={answer.isCorrect ? 'bg-green-500' : 'bg-red-500'}>
                        {answer.isCorrect ? '+10' : '-5'}
                      </Badge>
                    </div>
                    <p className="text-gray-800 mb-3">{answer.question}</p>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">Your answer:</span> 
                        <span className={answer.isCorrect ? 'text-green-600' : 'text-red-600 line-through'}> {answer.selectedAnswer}</span>
                      </p>
                      {!answer.isCorrect && (
                        <p className="text-sm">
                          <span className="font-medium">Correct answer:</span> 
                          <span className="text-green-600"> {answer.correctAnswer}</span>
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center space-y-4">
              <Button 
                onClick={() => {
                  localStorage.removeItem('quizResults');
                  navigate('/quiz-details');
                }}
                className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 mr-4"
              >
                Take Quiz Again
              </Button>
              <Button 
                onClick={() => {
                  localStorage.removeItem('quizResults');
                  navigate('/');
                }}
                variant="outline"
                className="px-8 py-3 text-lg font-semibold border-2 hover:bg-gray-50"
              >
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;
