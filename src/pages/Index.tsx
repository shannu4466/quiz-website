
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/03/45/88/07/360_F_345880772_zIT2mkdCzTthplO7xqaGGrMspN0jw0ll.jpg')" }}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-between items-center mt-[5%]">
            <div className="flex-1 flex justify-center">
              <h1 className="text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                CodeQuiz
              </h1>
            </div>
            <div>
              <button className="text-white mb-6 tracking-tight border rounded-lg p-2" onClick={() => navigate("/about-us")}>
                About Us
              </button>
            </div>
          </div>

          <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Test your programming knowledge with our interactive quiz platform.
            Challenge yourself with 10 carefully crafted questions and track your progress.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <div className="space-y-4">
                <Button
                  onClick={() => navigate('/signin')}
                  className="w-full h-12 bg-white/30 text-purple-600 bg-white hover:bg-white/10 hover:text-black font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => navigate('/signup')}
                  variant="outline"
                  className="w-full h-12 border-white/30 text-purple-600 hover:bg-white/10 font-semibold text-lg backdrop-blur-sm"
                >
                  Sign Up
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">10 Questions</h3>
              <p className="text-purple-100">Carefully selected programming questions to test your skills</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Scoring</h3>
              <p className="text-purple-100">+10 for correct answers, -5 for wrong ones</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Track Progress</h3>
              <p className="text-purple-100">See your final score and performance metrics</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
