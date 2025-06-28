
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { Plus, Calendar } from "lucide-react";

const Budget = () => {
  const budgetData = [
    { category: "Food", budgeted: 15000, spent: 12500, remaining: 2500, color: "orange" },
    { category: "Transportation", budgeted: 8000, spent: 9200, remaining: -1200, color: "blue" },
    { category: "Utilities", budgeted: 5000, spent: 3800, remaining: 1200, color: "green" },
    { category: "Entertainment", budgeted: 3000, spent: 1950, remaining: 1050, color: "purple" },
    { category: "Healthcare", budgeted: 4000, spent: 2300, remaining: 1700, color: "red" },
    { category: "Shopping", budgeted: 10000, spent: 7800, remaining: 2200, color: "pink" },
  ];

  const totalBudgeted = budgetData.reduce((sum, item) => sum + item.budgeted, 0);
  const totalSpent = budgetData.reduce((sum, item) => sum + item.spent, 0);
  const totalRemaining = totalBudgeted - totalSpent;

  const getStatusColor = (remaining: number) => {
    if (remaining < 0) return "text-red-600";
    if (remaining < 1000) return "text-orange-600";
    return "text-green-600";
  };

  const getStatusBadge = (remaining: number) => {
    if (remaining < 0) return <Badge variant="destructive">Over Budget</Badge>;
    if (remaining < 1000) return <Badge className="bg-orange-100 text-orange-800">Close to Limit</Badge>;
    return <Badge className="bg-green-100 text-green-800">On Track</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Budget Planning</h1>
          <p className="text-gray-600">Manage your monthly spending limits</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            This Month
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Category
          </Button>
        </div>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Budgeted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">₹{totalBudgeted.toLocaleString()}</div>
            <p className="text-xs text-gray-500">for this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">₹{totalSpent.toLocaleString()}</div>
            <p className="text-xs text-gray-500">{Math.round((totalSpent / totalBudgeted) * 100)}% of budget</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Remaining</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${getStatusColor(totalRemaining)}`}>
              ₹{Math.abs(totalRemaining).toLocaleString()}
            </div>
            <p className="text-xs text-gray-500">
              {totalRemaining >= 0 ? "left to spend" : "over budget"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Budget Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Budget by Category</CardTitle>
          <CardDescription>Track your spending across different categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {budgetData.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-semibold text-gray-900">{item.category}</h3>
                    {getStatusBadge(item.remaining)}
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">₹{item.spent.toLocaleString()} / ₹{item.budgeted.toLocaleString()}</p>
                    <p className={`text-sm ${getStatusColor(item.remaining)}`}>
                      {item.remaining >= 0 ? `₹${item.remaining.toLocaleString()} remaining` : `₹${Math.abs(item.remaining).toLocaleString()} over`}
                    </p>
                  </div>
                </div>
                <Progress
                  value={Math.min((item.spent / item.budgeted) * 100, 100)}
                  className="h-3"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0%</span>
                  <span>{Math.round((item.spent / item.budgeted) * 100)}% spent</span>
                  <span>100%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Savings Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle>Smart Savings Suggestions</CardTitle>
          <CardDescription>AI-powered recommendations to optimize your budget</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Transportation Overspend Alert</h4>
              <p className="text-sm text-blue-800 mb-3">
                You've exceeded your transportation budget by ₹1,200. Consider using public transport or carpooling 2-3 times this week to get back on track.
              </p>
              <p className="text-xs text-blue-600">Potential monthly savings: ₹2,400</p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Food Budget Optimization</h4>
              <p className="text-sm text-green-800 mb-3">
                Great job staying under your food budget! You could allocate the extra ₹2,500 to your emergency fund or investment goals.
              </p>
              <p className="text-xs text-green-600">Available for reallocation: ₹2,500</p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Entertainment Budget Efficiency</h4>
              <p className="text-sm text-purple-800 mb-3">
                You've saved ₹1,050 on entertainment. Consider investing this in a SIP or adding it to your car fund goal.
              </p>
              <p className="text-xs text-purple-600">Recommended action: Transfer to goals</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Budget;
