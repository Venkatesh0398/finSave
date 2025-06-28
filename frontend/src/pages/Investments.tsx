
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { Plus, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";

const Investments = () => {
  const portfolio = [
    {
      type: "Mutual Funds",
      invested: 125000,
      current: 142000,
      returns: 17000,
      returnPercent: 13.6,
      funds: [
        { name: "HDFC Top 100 Fund", amount: 45000, returns: 8.2 },
        { name: "SBI Bluechip Fund", amount: 35000, returns: 12.5 },
        { name: "Axis Midcap Fund", amount: 45000, returns: 18.7 },
      ]
    },
    {
      type: "Fixed Deposits",
      invested: 200000,
      current: 212000,
      returns: 12000,
      returnPercent: 6.0,
      funds: [
        { name: "SBI FD (5 years)", amount: 100000, returns: 6.5 },
        { name: "HDFC FD (3 years)", amount: 100000, returns: 5.5 },
      ]
    },
    {
      type: "Stocks",
      invested: 75000,
      current: 89000,
      returns: 14000,
      returnPercent: 18.7,
      funds: [
        { name: "Reliance Industries", amount: 25000, returns: 15.2 },
        { name: "TCS", amount: 25000, returns: 22.8 },
        { name: "HDFC Bank", amount: 25000, returns: 18.1 },
      ]
    },
    {
      type: "Gold",
      invested: 50000,
      current: 55000,
      returns: 5000,
      returnPercent: 10.0,
      funds: [
        { name: "Physical Gold", amount: 30000, returns: 8.5 },
        { name: "Gold ETF", amount: 20000, returns: 12.2 },
      ]
    }
  ];

  const recommendations = [
    {
      type: "SIP Recommendation",
      title: "Increase Equity Allocation",
      description: "Based on your age and risk profile, consider increasing SIP in equity funds by ₹5,000/month",
      expectedReturn: "12-15% annually",
      riskLevel: "Medium",
      action: "Start SIP"
    },
    {
      type: "Tax Saving",
      title: "ELSS Mutual Funds",
      description: "Invest ₹1.5L in ELSS funds to save up to ₹46,800 in taxes under Section 80C",
      expectedReturn: "10-12% annually",
      riskLevel: "Medium",
      action: "Invest Now"
    },
    {
      type: "Emergency Fund",
      title: "Liquid Fund Investment",
      description: "Move emergency fund to liquid mutual funds for better returns than savings account",
      expectedReturn: "4-6% annually",
      riskLevel: "Low",
      action: "Switch Now"
    }
  ];

  const totalInvested = portfolio.reduce((sum, item) => sum + item.invested, 0);
  const totalCurrent = portfolio.reduce((sum, item) => sum + item.current, 0);
  const totalReturns = totalCurrent - totalInvested;
  const overallReturnPercent = (totalReturns / totalInvested) * 100;

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case "Low": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "High": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Investments</h1>
          <p className="text-gray-600">Grow your wealth through smart investments</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Investment
        </Button>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">₹{totalInvested.toLocaleString()}</div>
            <p className="text-xs text-gray-500">principal amount</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Current Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₹{totalCurrent.toLocaleString()}</div>
            <p className="text-xs text-gray-500">market value</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Returns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600 flex items-center">
              <ArrowUp className="w-5 h-5 mr-1" />
              ₹{totalReturns.toLocaleString()}
            </div>
            <p className="text-xs text-gray-500">absolute gains</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Overall Returns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{overallReturnPercent.toFixed(1)}%</div>
            <p className="text-xs text-gray-500">annualized returns</p>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {portfolio.map((investment, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{investment.type}</CardTitle>
                <div className="flex items-center space-x-2">
                  {investment.returnPercent > 0 ? (
                    <ArrowUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-600" />
                  )}
                  <span className={`font-semibold ${investment.returnPercent > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {investment.returnPercent.toFixed(1)}%
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Invested</p>
                  <p className="font-semibold">₹{investment.invested.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Current Value</p>
                  <p className="font-semibold">₹{investment.current.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Returns</p>
                  <p className="font-semibold text-green-600">+₹{investment.returns.toLocaleString()}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">Holdings:</h4>
                {investment.funds.map((fund, fundIndex) => (
                  <div key={fundIndex} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm">{fund.name}</span>
                    <div className="text-right">
                      <p className="text-sm font-medium">₹{fund.amount.toLocaleString()}</p>
                      <p className="text-xs text-green-600">+{fund.returns}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Investment Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Smart Investment Recommendations</CardTitle>
          <CardDescription>Personalized suggestions based on your profile and goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="outline">{rec.type}</Badge>
                  <Badge className={getRiskColor(rec.riskLevel)}>{rec.riskLevel} Risk</Badge>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-2">{rec.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Expected Return:</span>
                    <span className="font-medium text-green-600">{rec.expectedReturn}</span>
                  </div>
                </div>
                
                <Button className="w-full" size="sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {rec.action}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Asset Allocation */}
      <Card>
        <CardHeader>
          <CardTitle>Asset Allocation</CardTitle>
          <CardDescription>Your investment distribution across different asset classes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {portfolio.map((investment, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{investment.type}</span>
                  <span className="text-sm text-gray-500">
                    {((investment.invested / totalInvested) * 100).toFixed(1)}%
                  </span>
                </div>
                <Progress value={(investment.invested / totalInvested) * 100} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Investments;
