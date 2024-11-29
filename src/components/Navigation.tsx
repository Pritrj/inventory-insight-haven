import { Link, useLocation } from "react-router-dom";
import { BarChart3, Box, FileText, Home, Settings } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Box, label: "Products", path: "/products" },
    { icon: BarChart3, label: "Stock", path: "/stock" },
    { icon: FileText, label: "Reports", path: "/reports" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-4">
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary">Inventory Pro</h1>
        </div>
        
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;