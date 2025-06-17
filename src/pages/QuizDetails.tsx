
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const QuizDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 p-4">
      <div className="container mx-auto max-w-4xl py-8">
        <Card className="backdrop-blur-sm bg-white/95 shadow-2xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Programming Knowledge Quiz
            </CardTitle>
            <p className="text-xl text-gray-600">Test your coding skills with our comprehensive quiz</p>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quiz Overview</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-gray-700">Total Questions</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">10 Questions</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-700">Correct Answer</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">+10 Points</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="font-medium text-gray-700">Wrong Answer</span>
                    <Badge variant="secondary" className="bg-red-100 text-red-800">-5 Points</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium text-gray-700">Maximum Score</span>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">100 Points</Badge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Topics Covered</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Badge className="p-2 justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">JavaScript</Badge>
                  <Badge className="p-2 justify-center bg-gradient-to-r from-green-500 to-teal-500 text-white">React</Badge>
                  <Badge className="p-2 justify-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white">Python</Badge>
                  <Badge className="p-2 justify-center bg-gradient-to-r from-pink-500 to-red-500 text-white">Algorithms</Badge>
                  <Badge className="p-2 justify-center bg-gradient-to-r from-indigo-500 to-blue-500 text-white">Data Structures</Badge>
                  <Badge className="p-2 justify-center bg-gradient-to-r from-teal-500 to-cyan-500 text-white">General Programming</Badge>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Instructions</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Read each question carefully before selecting your answer
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  You cannot go back to previous questions once submitted
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Each correct answer adds 10 points to your score
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Each incorrect answer deducts 5 points from your score
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Your final score will be displayed at the end
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button 
                onClick={() => navigate('/quiz')}
                className="px-12 py-4 text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Start Quiz
              </Button>
              <p className="text-gray-500 mt-4">Good luck! 🚀</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizDetails;
