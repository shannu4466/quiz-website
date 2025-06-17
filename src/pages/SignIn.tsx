
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  // Dummy credentials
  const dummyCredentials = {
    email: "admin@123.com",
    password: "admin123"
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    
    if (email === dummyCredentials.email && password === dummyCredentials.password) {
      toast({
        title: "Welcome back!",
        description: "Successfully signed in to Quiz app",
      });
      navigate('/quiz-details');
    } else {
      toast({
        title: "Invalid credentials",
        description: "Please check your email and password",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md backdrop-blur-sm bg-white/95 shadow-2xl">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <p className="text-gray-600 mt-2">Sign in to start your coding quiz</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@123.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-gray-300 focus:border-purple-500"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="font-medium">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="admin123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 border-gray-300 focus:border-purple-500"
                required
              />
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800 font-medium mb-1">Demo Credentials:</p>
              <p className="text-xs text-blue-600">Email: admin@123.com</p>
              <p className="text-xs text-blue-600">Password: admin123</p>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Sign In
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Button 
                variant="link" 
                onClick={() => navigate('/signup')}
                className="p-0 text-purple-600 hover:text-purple-700 font-semibold"
              >
                Sign up here
              </Button>
            </p>
            <Button 
              variant="link" 
              onClick={() => navigate('/')}
              className="p-0 text-gray-500 hover:text-gray-700 mt-2"
            >
              ← Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
