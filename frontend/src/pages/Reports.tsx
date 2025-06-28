
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { FileText, Download, Calendar, TrendingUp, TrendingDown } from "lucide-react";

const Reports = () => {
  const monthlyReports = [
    {
      month: "December 2024",
      income: 85000,
      expenses: 62000,
      savings: 23000,
      savingsRate: 27.1,
      topExpenseCategory: "Food",
      topExpenseAmount: 15000,
      status: "good"
    },
    {
      month: "November 2024",
      income: 85000,
      expenses: 68000,
      savings: 17000,
      savingsRate: 20.0,
      topExpenseCategory: "Transportation",
      topExpenseAmount: 18000,
      status: "average"
    },
    {
      month: "October 2024",
      income: 82000,
      expenses: 71000,
      savings: 11000,
      savingsRate: 13.4,
      topExpenseCategory: "Entertainment",
      topExpenseAmount: 22000,
      status: "poor"
    }
  ];

  const categoryBreakdown = [
    { category: "Food", amount: 15000, percentage: 24.2, trend: "up" },
    { category: "Transportation", amount: 12000, percentage: 19.4, trend: "down" },
    { category: "Utilities", amount: 8000, percentage: 12.9, trend: "stable" },
    { category: "Entertainment", amount: 6000, percentage: 9.7, trend: "down" },
    { category: "Shopping", amount: 10000, percentage: 16.1, trend: "up" },
    { category: "Healthcare", amount: 5000, percentage: 8.1, trend: "stable" },
    { category: "Others", amount: 6000, percentage: 9.7, trend: "up" },
  ];

  const insights = [
    {
      type: "Positive",
      title: "Savings Rate Improvement",
      description: "Your savings rate increased by 7.1% compared to last month. Great job on expense control!",
      impact: "₹6,000 additional savings"
    },
    {
      type: "Alert",
      title: "Food Expenses Rising",
      description: "Food expenses increased by 25% this month. Consider meal planning to optimize costs.",
      impact: "Potential monthly savings: ₹3,000"
    },
    {
      type: "Opportunity",
      title: "Investment Opportunity",
      description: "Your emergency fund is complete. Consider investing additional savings in equity funds.",
      impact: "Potential annual returns: ₹15,000"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "bg-green-100 text-green-800";
      case "average": return "bg-yellow-100 text-yellow-800";
      case "poor": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="w-4 h-4 text-red-500" />;
      case "down": return <TrendingDown className="w-4 h-4 text-green-500" />;
      default: return <div className="w-4 h-4 bg-gray-400 rounded-full" />;
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case "Positive": return "bg-green-50 border-green-200 text-green-900";
      case "Alert": return "bg-red-50 border-red-200 text-red-900";
      case "Opportunity": return "bg-blue-50 border-blue-200 text-blue-900";
      default: return "bg-gray-50 border-gray-200 text-gray-900";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Financial Reports</h1>
          <p className="text-gray-600">Comprehensive analysis of your financial health</p>
        </div>
        <div className="flex space-x-2">
          <Select defaultValue="last-3-months">
            <SelectTrigger className="w-48">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="last-3-months">Last 3 Months</SelectItem>
              <SelectItem value="last-6-months">Last 6 Months</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Monthly Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Performance Summary</CardTitle>
          <CardDescription>Track your financial progress over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyReports.map((report, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-semibold text-lg">{report.month}</h3>
                    <Badge className={getStatusColor(report.status)}>
                      {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">Savings Rate: {report.savingsRate}%</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Income</p>
                    <p className="font-semibold text-green-600">₹{report.income.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Expenses</p>
                    <p className="font-semibold text-red-600">₹{report.expenses.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Savings</p>
                    <p className="font-semibold text-blue-600">₹{report.savings.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Top Expense</p>
                    <p className="font-semibold">{report.topExpenseCategory}</p>
                    <p className="text-xs text-gray-500">₹{report.topExpenseAmount.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Category Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Expense Category Breakdown</CardTitle>
          <CardDescription>Detailed analysis of spending patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categoryBreakdown.map((category, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="font-medium">{category.category}</span>
                  {getTrendIcon(category.trend)}
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <p className="font-semibold">₹{category.amount.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">{category.percentage}% of total</p>
                  </div>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Financial Insights */}
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Financial Insights</CardTitle>
          <CardDescription>Smart recommendations based on your spending patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className={`p-4 rounded-lg border ${getInsightColor(insight.type)}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{insight.type}</Badge>
                    <h4 className="font-semibold">{insight.title}</h4>
                  </div>
                </div>
                <p className="text-sm mb-2">{insight.description}</p>
                <p className="text-xs font-medium">{insight.impact}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* UPI Transaction Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>UPI Transaction Analysis</CardTitle>
          <CardDescription>Breakdown of your digital payment patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">GP</span>
              </div>
              <h3 className="font-semibold">Google Pay</h3>
              <p className="text-2xl font-bold text-blue-600">₹28,500</p>
              <p className="text-sm text-gray-500">45% of UPI transactions</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">PP</span>
              </div>
              <h3 className="font-semibold">PhonePe</h3>
              <p className="text-2xl font-bold text-purple-600">₹22,000</p>
              <p className="text-sm text-gray-500">35% of UPI transactions</p>
            </div>
            
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="w-12 h-12 bg-orange-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">PT</span>
              </div>
              <h3 className="font-semibold">Paytm</h3>
              <p className="text-2xl font-bold text-orange-600">₹12,500</p>
              <p className="text-sm text-gray-500">20% of UPI transactions</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Report Actions</CardTitle>
          <CardDescription>Generate detailed reports and analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <FileText className="w-6 h-6 mb-2" />
              Monthly Report
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <TrendingUp className="w-6 h-6 mb-2" />
              Trend Analysis
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Calendar className="w-6 h-6 mb-2" />
              Year-end Summary
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Download className="w-6 h-6 mb-2" />
              Tax Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
