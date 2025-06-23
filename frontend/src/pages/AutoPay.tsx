
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Zap, Calendar, Settings } from "lucide-react";
import { useState } from "react";

const AutoPay = () => {
  const [autopaySettings, setAutopaySettings] = useState([
    {
      id: 1,
      name: "Electricity Bill",
      provider: "BESCOM",
      amount: 1200,
      frequency: "Monthly",
      nextDue: "2024-01-25",
      isActive: true,
      accountNumber: "****1234",
      category: "Utilities"
    },
    {
      id: 2,
      name: "Internet Bill",
      provider: "Airtel Fiber",
      amount: 999,
      frequency: "Monthly", 
      nextDue: "2024-01-20",
      isActive: true,
      accountNumber: "****1234",
      category: "Utilities"
    },
    {
      id: 3,
      name: "House Rent",
      provider: "Landlord",
      amount: 25000,
      frequency: "Monthly",
      nextDue: "2024-01-31",
      isActive: false,
      accountNumber: "****5678",
      category: "Housing"
    },
    {
      id: 4,
      name: "Life Insurance Premium",
      provider: "LIC",
      amount: 15000,
      frequency: "Quarterly",
      nextDue: "2024-03-01",
      isActive: true,
      accountNumber: "****1234",
      category: "Insurance"
    },
    {
      id: 5,
      name: "Mobile Bill",
      provider: "Jio",
      amount: 399,
      frequency: "Monthly",
      nextDue: "2024-01-18",
      isActive: true,
      accountNumber: "****1234",
      category: "Utilities"
    }
  ]);

  const toggleAutopay = (id: number) => {
    setAutopaySettings(prev => 
      prev.map(item => 
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Utilities: "bg-blue-100 text-blue-800",
      Housing: "bg-green-100 text-green-800",
      Insurance: "bg-purple-100 text-purple-800",
      Entertainment: "bg-orange-100 text-orange-800",
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const totalMonthlyAutopay = autopaySettings
    .filter(item => item.isActive && item.frequency === "Monthly")
    .reduce((sum, item) => sum + item.amount, 0);

  const activeAutopays = autopaySettings.filter(item => item.isActive).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Auto Pay</h1>
          <p className="text-gray-600">Automate your recurring payments</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Setup New Autopay
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Autopays</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{activeAutopays}</div>
            <p className="text-xs text-gray-500">bills on autopilot</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Autopay</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₹{totalMonthlyAutopay.toLocaleString()}</div>
            <p className="text-xs text-gray-500">automatically deducted</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">Jan 18</div>
            <p className="text-xs text-gray-500">Mobile Bill - ₹399</p>
          </CardContent>
        </Card>
      </div>

      {/* Autopay Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Autopay Settings</CardTitle>
          <CardDescription>Manage your automatic payment configurations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {autopaySettings.map((autopay) => (
              <div key={autopay.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{autopay.name}</h3>
                      <Badge className={getCategoryColor(autopay.category)}>{autopay.category}</Badge>
                    </div>
                    <p className="text-sm text-gray-500">{autopay.provider} • Account {autopay.accountNumber}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-gray-500">₹{autopay.amount.toLocaleString()}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{autopay.frequency}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">Next: {autopay.nextDue}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={autopay.isActive}
                      onCheckedChange={() => toggleAutopay(autopay.id)}
                    />
                    <span className="text-sm text-gray-500">
                      {autopay.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Salary-Based Autopay Setup */}
      <Card>
        <CardHeader>
          <CardTitle>Salary-Based Autopay Configuration</CardTitle>
          <CardDescription>Set up automatic payments when your salary is credited</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="salary-account">Primary Salary Account</Label>
                <Input id="salary-account" placeholder="Select bank account" value="HDFC Bank ****1234" readOnly />
              </div>
              <div>
                <Label htmlFor="salary-date">Expected Salary Date</Label>
                <Input id="salary-date" type="date" defaultValue="2024-01-31" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="autopay-delay">Autopay Delay (days after salary)</Label>
                <Input id="autopay-delay" type="number" defaultValue="2" />
              </div>
              <div>
                <Label htmlFor="minimum-balance">Minimum Balance to Maintain</Label>
                <Input id="minimum-balance" placeholder="₹10,000" />
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">Smart Autopay Logic</h4>
            <p className="text-sm text-blue-800 mb-3">
              When your salary is credited, the system will automatically:
            </p>
            <ul className="text-sm text-blue-800 space-y-1 ml-4">
              <li>• Wait 2 days for salary to clear</li>
              <li>• Check account balance and minimum balance requirement</li>
              <li>• Pay bills in order of priority (utilities first, then housing, insurance)</li>
              <li>• Send notifications for each successful payment</li>
              <li>• Alert if insufficient funds for any payment</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Payment Calendar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Upcoming Payments
          </CardTitle>
          <CardDescription>Your payment schedule for the next 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {autopaySettings
              .filter(item => item.isActive)
              .sort((a, b) => new Date(a.nextDue).getTime() - new Date(b.nextDue).getTime())
              .map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">{payment.name}</p>
                      <p className="text-sm text-gray-500">{payment.provider}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">₹{payment.amount.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">{payment.nextDue}</p>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AutoPay;