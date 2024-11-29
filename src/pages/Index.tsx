import { Card } from "@/components/ui/card";
import { BarChart3, Package, AlertTriangle, TrendingUp } from "lucide-react";

const Index = () => {
  const stats = [
    {
      title: "Total Products",
      value: "1,234",
      icon: Package,
      trend: "+12%",
      trendUp: true,
    },
    {
      title: "Low Stock Items",
      value: "23",
      icon: AlertTriangle,
      trend: "+5",
      trendUp: false,
    },
    {
      title: "Monthly Revenue",
      value: "$45,678",
      icon: TrendingUp,
      trend: "+8%",
      trendUp: true,
    },
    {
      title: "Stock Value",
      value: "$123,456",
      icon: BarChart3,
      trend: "+15%",
      trendUp: true,
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your inventory management system</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <span
                  className={`text-sm font-medium ${
                    stat.trendUp ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.trend}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 text-sm mt-1">{stat.title}</p>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">Stock Update</p>
                  <p className="text-sm text-gray-600">Product XYZ quantity updated</p>
                </div>
                <span className="text-sm text-gray-500">2h ago</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Low Stock Alerts</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">Product ABC</p>
                  <p className="text-sm text-red-600">Only 5 units remaining</p>
                </div>
                <button className="text-primary hover:underline text-sm">
                  Restock
                </button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;