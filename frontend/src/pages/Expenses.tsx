
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { Plus, Search, Filter } from "lucide-react";
import { useState } from "react";

const Expenses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const expenses = [
    { id: 1, name: "Grocery Shopping", amount: 2500, category: "Food", paymentMethod: "UPI - PhonePe", date: "2024-01-15", description: "Weekly groceries from BigBasket" },
    { id: 2, name: "Fuel", amount: 3000, category: "Transportation", paymentMethod: "UPI - Paytm", date: "2024-01-14", description: "Petrol for car" },
    { id: 3, name: "Electricity Bill", amount: 1200, category: "Utilities", paymentMethod: "Auto Pay", date: "2024-01-13", description: "Monthly electricity bill" },
    { id: 4, name: "Netflix", amount: 199, category: "Entertainment", paymentMethod: "UPI - GPay", date: "2024-01-12", description: "Monthly subscription" },
    { id: 5, name: "Restaurant", amount: 850, category: "Food", paymentMethod: "UPI - PhonePe", date: "2024-01-11", description: "Dinner with friends" },
    { id: 6, name: "Medical", amount: 2300, category: "Healthcare", paymentMethod: "Bank Transfer", date: "2024-01-10", description: "Doctor consultation and medicines" },
  ];

  const categories = ["all", "Food", "Transportation", "Utilities", "Entertainment", "Healthcare", "Shopping"];

  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         expense.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || expense.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const totalExpenses = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  const getCategoryColor = (category: string) => {
    const colors = {
      Food: "bg-orange-100 text-orange-800",
      Transportation: "bg-blue-100 text-blue-800",
      Utilities: "bg-green-100 text-green-800",
      Entertainment: "bg-purple-100 text-purple-800",
      Healthcare: "bg-red-100 text-red-800",
      Shopping: "bg-pink-100 text-pink-800",
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Expenses</h1>
          <p className="text-gray-600">Track and manage your spending</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Expense
        </Button>
      </div>

      {/* Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle>Expense Summary</CardTitle>
          <CardDescription>Your spending overview for this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-500">Total Expenses</p>
              <p className="text-2xl font-bold text-red-600">₹{totalExpenses.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Number of Transactions</p>
              <p className="text-2xl font-bold text-blue-600">{filteredExpenses.length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Average per Transaction</p>
              <p className="text-2xl font-bold text-green-600">
                ₹{filteredExpenses.length > 0 ? Math.round(totalExpenses / filteredExpenses.length).toLocaleString() : 0}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search expenses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Expenses List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Expenses</CardTitle>
          <CardDescription>All your transactions in one place</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredExpenses.map((expense) => (
              <div key={expense.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">₹</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{expense.name}</h3>
                    <p className="text-sm text-gray-500">{expense.description}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge className={getCategoryColor(expense.category)}>{expense.category}</Badge>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{expense.paymentMethod}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-red-600">₹{expense.amount.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">{expense.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Expenses;
