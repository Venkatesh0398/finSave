
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowUp, ArrowDown, Target, TrendingUp, Wallet, PiggyBank, Plus, Calendar } from "lucide-react";
import { Progress } from "../components/ui/progress";

const Dashboard = () => {
  const monthlyData = {
    income: 85000,
    expenses: 62000,
    savings: 23000,
    budget: 65000,
  };

  const recentTransactions = [
    { id: 1, name: "Grocery Shopping", amount: -2500, type: "UPI", date: "Today", category: "Food" },
    { id: 2, name: "Salary Credit", amount: 85000, type: "Bank", date: "Dec 1", category: "Income" },
    { id: 3, name: "Electricity Bill", amount: -1200, type: "Auto Pay", date: "Yesterday", category: "Utilities" },
    { id: 4, name: "Netflix Subscription", amount: -199, type: "UPI", date: "Dec 15", category: "Entertainment" },
  ];

  const goals = [
    { name: "Emergency Fund", current: 45000, target: 100000, timeline: "6 months" },
    { name: "New Car", current: 125000, target: 800000, timeline: "2 years" },
    { name: "House Down Payment", current: 350000, target: 2000000, timeline: "5 years" },
  ];

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
            <ArrowUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₹{monthlyData.income.toLocaleString()}</div>
            <p className="text-xs text-gray-500">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
            <ArrowDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">₹{monthlyData.expenses.toLocaleString()}</div>
            <p className="text-xs text-gray-500">-5% from last month</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
            <PiggyBank className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">₹{monthlyData.savings.toLocaleString()}</div>
            <p className="text-xs text-gray-500">+27% from last month</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Status</CardTitle>
            <Wallet className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {Math.round((monthlyData.expenses / monthlyData.budget) * 100)}%
            </div>
            <p className="text-xs text-gray-500">of monthly budget used</p>
            <Progress value={(monthlyData.expenses / monthlyData.budget) * 100} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Transactions
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Transaction
              </Button>
            </CardTitle>
            <CardDescription>Your latest financial activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${transaction.amount > 0 ? 'bg-green-500' : 'bg-red-500'}`} />
                    <div>
                      <p className="font-medium text-sm">{transaction.name}</p>
                      <p className="text-xs text-gray-500">{transaction.type} • {transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">{transaction.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Financial Goals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Financial Goals
              <Button variant="outline" size="sm">
                <Target className="w-4 h-4 mr-2" />
                New Goal
              </Button>
            </CardTitle>
            <CardDescription>Track your progress towards major purchases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {goals.map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm">{goal.name}</p>
                      <p className="text-xs text-gray-500">{goal.timeline}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-sm">₹{goal.current.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">of ₹{goal.target.toLocaleString()}</p>
                    </div>
                  </div>
                  <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                  <p className="text-xs text-gray-500">
                    {Math.round((goal.current / goal.target) * 100)}% complete
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Manage your finances efficiently</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 flex-col space-y-2" variant="outline">
              <Plus className="w-6 h-6" />
              <span>Add Expense</span>
            </Button>
            <Button className="h-20 flex-col space-y-2" variant="outline">
              <Calendar className="w-6 h-6" />
              <span>Set Budget</span>
            </Button>
            <Button className="h-20 flex-col space-y-2" variant="outline">
              <TrendingUp className="w-6 h-6" />
              <span>Invest</span>
            </Button>
            <Button className="h-20 flex-col space-y-2" variant="outline">
              <Target className="w-6 h-6" />
              <span>New Goal</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;