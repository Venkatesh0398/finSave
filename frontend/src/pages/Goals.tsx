
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Plus, Target, Calendar } from "lucide-react";

const Goals = () => {
  const goals = [
    {
      id: 1,
      name: "Emergency Fund",
      target: 500000,
      current: 145000,
      timeline: "12 months",
      monthlyRequired: 29583,
      category: "Security",
      priority: "High",
      description: "6 months of expenses for financial security",
    },
    {
      id: 2,
      name: "New Car",
      target: 800000,
      current: 125000,
      timeline: "24 months",
      monthlyRequired: 28125,
      category: "Purchase",
      priority: "Medium",
      description: "Honda City or similar sedan",
    },
    {
      id: 3,
      name: "House Down Payment",
      target: 2000000,
      current: 350000,
      timeline: "60 months",
      monthlyRequired: 27500,
      category: "Property",
      priority: "High",
      description: "20% down payment for dream home",
    },
    {
      id: 4,
      name: "Vacation to Europe",
      target: 300000,
      current: 45000,
      timeline: "18 months",
      monthlyRequired: 14167,
      category: "Travel",
      priority: "Low",
      description: "2-week European tour for family",
    },
    {
      id: 5,
      name: "Gold Investment",
      target: 200000,
      current: 75000,
      timeline: "15 months",
      monthlyRequired: 8333,
      category: "Investment",
      priority: "Medium",
      description: "Physical gold as hedge against inflation",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    // You can add different icons based on category
    return "🎯";
  };

  const totalTargets = goals.reduce((sum, goal) => sum + goal.target, 0);
  const totalCurrent = goals.reduce((sum, goal) => sum + goal.current, 0);
  const totalMonthlyRequired = goals.reduce((sum, goal) => sum + goal.monthlyRequired, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Financial Goals</h1>
          <p className="text-gray-600">Plan and track your long-term financial objectives</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create New Goal
        </Button>
      </div>

      {/* Goals Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Goal Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">₹{totalTargets.toLocaleString()}</div>
            <p className="text-xs text-gray-500">across all goals</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Amount Saved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₹{totalCurrent.toLocaleString()}</div>
            <p className="text-xs text-gray-500">{Math.round((totalCurrent / totalTargets) * 100)}% of total goals</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Required</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">₹{totalMonthlyRequired.toLocaleString()}</div>
            <p className="text-xs text-gray-500">to meet all timelines</p>
          </CardContent>
        </Card>
      </div>

      {/* Goals List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {goals.map((goal) => (
          <Card key={goal.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-xl">{getCategoryIcon(goal.category)}</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">{goal.name}</CardTitle>
                    <CardDescription className="text-sm">{goal.description}</CardDescription>
                  </div>
                </div>
                <Badge className={getPriorityColor(goal.priority)}>{goal.priority}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Progress</span>
                <span className="font-semibold">
                  ₹{goal.current.toLocaleString()} / ₹{goal.target.toLocaleString()}
                </span>
              </div>
              
              <Progress value={(goal.current / goal.target) * 100} className="h-3" />
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{Math.round((goal.current / goal.target) * 100)}% complete</span>
                <span className="text-gray-500">₹{(goal.target - goal.current).toLocaleString()} remaining</span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                <div>
                  <p className="text-xs text-gray-500">Timeline</p>
                  <p className="font-semibold flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {goal.timeline}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Monthly Required</p>
                  <p className="font-semibold text-blue-600">₹{goal.monthlyRequired.toLocaleString()}</p>
                </div>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Add Money
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Edit Goal
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Goal Planning Assistant */}
      <Card>
        <CardHeader>
          <CardTitle>Smart Goal Planning</CardTitle>
          <CardDescription>AI-powered suggestions to optimize your savings strategy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Priority Optimization</h4>
              <p className="text-sm text-blue-800 mb-3">
                Focus on your Emergency Fund first. Increasing monthly allocation by ₹5,000 will help you complete it 3 months earlier, providing financial security before pursuing other goals.
              </p>
              <Button variant="outline" size="sm" className="text-blue-700 border-blue-300">
                Adjust Allocation
              </Button>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Timeline Efficiency</h4>
              <p className="text-sm text-green-800 mb-3">
                Your house down payment goal can be achieved 8 months earlier by investing in equity mutual funds (expected 12% returns) instead of fixed deposits.
              </p>
              <Button variant="outline" size="sm" className="text-green-700 border-green-300">
                View Investment Options
              </Button>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Goal Synergy</h4>
              <p className="text-sm text-purple-800 mb-3">
                Consider combining your gold investment with systematic gold accumulation plans that offer better liquidity and lower making charges.
              </p>
              <Button variant="outline" size="sm" className="text-purple-700 border-purple-300">
                Explore Options
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Goals;
