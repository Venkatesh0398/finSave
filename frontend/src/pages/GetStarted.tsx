
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const GetStarted = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({
    monthlyIncome: "",
    occupation: "",
    expenseCategories: [] as string[],
    financialGoals: [] as string[],
    riskTolerance: "",
    bankAccount: ""
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const expenseOptions = [
    "Food & Dining", "Transportation", "Shopping", "Entertainment", 
    "Bills & Utilities", "Healthcare", "Education", "Travel"
  ];

  const goalOptions = [
    "Emergency Fund", "Buy a House", "Buy a Car", "Retirement Planning", 
    "Education Fund", "Investment Portfolio", "Debt Payoff", "Vacation Fund"
  ];

  const handleExpenseCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setUserData(prev => ({
        ...prev,
        expenseCategories: [...prev.expenseCategories, category]
      }));
    } else {
      setUserData(prev => ({
        ...prev,
        expenseCategories: prev.expenseCategories.filter(cat => cat !== category)
      }));
    }
  };

  const handleGoalChange = (goal: string, checked: boolean) => {
    if (checked) {
      setUserData(prev => ({
        ...prev,
        financialGoals: [...prev.financialGoals, goal]
      }));
    } else {
      setUserData(prev => ({
        ...prev,
        financialGoals: prev.financialGoals.filter(g => g !== goal)
      }));
    }
  };

  const handleComplete = () => {
    // TODO: Save user preferences to database
    console.log("User setup complete:", userData);
    navigate("/");
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Let's start with the basics</h2>
              <p className="text-gray-600">Tell us about your income and occupation</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="income">Monthly Income (₹)</Label>
                <Input
                  id="income"
                  type="number"
                  placeholder="Enter your monthly income"
                  value={userData.monthlyIncome}
                  onChange={(e) => setUserData(prev => ({ ...prev, monthlyIncome: e.target.value }))}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Occupation</Label>
                <Select onValueChange={(value) => setUserData(prev => ({ ...prev, occupation: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your occupation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software-engineer">Software Engineer</SelectItem>
                    <SelectItem value="business-owner">Business Owner</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="freelancer">Freelancer</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">What do you spend on?</h2>
              <p className="text-gray-600">Select your main expense categories</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {expenseOptions.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={userData.expenseCategories.includes(category)}
                    onCheckedChange={(checked) => handleExpenseCategoryChange(category, checked as boolean)}
                  />
                  <Label htmlFor={category} className="text-sm">{category}</Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">What are your financial goals?</h2>
              <p className="text-gray-600">Select what you're saving for</p>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {goalOptions.map((goal) => (
                <div key={goal} className="flex items-center space-x-2">
                  <Checkbox
                    id={goal}
                    checked={userData.financialGoals.includes(goal)}
                    onCheckedChange={(checked) => handleGoalChange(goal, checked as boolean)}
                  />
                  <Label htmlFor={goal} className="text-sm">{goal}</Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Investment preferences</h2>
              <p className="text-gray-600">Help us understand your risk tolerance</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-3">
                <Label>Risk Tolerance</Label>
                <RadioGroup
                  value={userData.riskTolerance}
                  onValueChange={(value) => setUserData(prev => ({ ...prev, riskTolerance: value }))}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="conservative" id="conservative" />
                    <Label htmlFor="conservative">Conservative - I prefer safe investments</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="moderate" id="moderate" />
                    <Label htmlFor="moderate">Moderate - I'm okay with some risk</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="aggressive" id="aggressive" />
                    <Label htmlFor="aggressive">Aggressive - I'm comfortable with high risk</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label>Primary Bank</Label>
                <Select onValueChange={(value) => setUserData(prev => ({ ...prev, bankAccount: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sbi">State Bank of India</SelectItem>
                    <SelectItem value="hdfc">HDFC Bank</SelectItem>
                    <SelectItem value="icici">ICICI Bank</SelectItem>
                    <SelectItem value="axis">Axis Bank</SelectItem>
                    <SelectItem value="kotak">Kotak Mahindra Bank</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to FinanceFlow!</h1>
          <p className="text-gray-600">Let's set up your personalized financial dashboard</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-600">{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardContent className="p-8">
            {renderStep()}
            
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              <Button onClick={nextStep}>
                {currentStep === totalSteps ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Complete Setup
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
