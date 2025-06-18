import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Aboutus = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500">
            <div className="container mx-auto px-4 py-16">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-5xl font-bold text-white tracking-tight">About Us</h1>
                    <Button
                        onClick={() => navigate("/")}
                        className="bg-white/30 text-purple-700 hover:bg-white/10 hover:text-black transition-all duration-300"
                    >
                        ⬅ Back
                    </Button>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-2xl">
                        <CardContent className="p-8 text-purple-100 text-lg space-y-4">
                            <p>
                                Welcome to <strong className="text-white">CodeQuiz</strong> – a simple and interactive quiz platform designed to test and enhance your programming knowledge.
                                Our mission is to offer a lightweight and engaging environment for self-assessment and learning.
                            </p>
                            <p>
                                CodeQuiz features a secure sign-in system, followed by access to a 10-question quiz covering essential programming concepts.
                                Each question is carefully selected to challenge your understanding and help you grow.
                            </p>
                            <p>
                                After completing the quiz, users receive a detailed result page that not only shows the score but also breaks down each question, highlighting correct answers and indicating mistakes for better clarity.
                            </p>
                            <p>
                                This project is ideal for beginners and enthusiasts looking to quickly test their skills without any distractions or complex setups.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
