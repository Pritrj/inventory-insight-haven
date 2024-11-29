import { useState } from "react";
import { BarChart3, ArrowUp, ArrowDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data
const stockMovements = [
  {
    id: 1,
    date: "2024-02-20",
    product: "Office Chair",
    type: "IN",
    quantity: 10,
    reference: "PO-001",
  },
  {
    id: 2,
    date: "2024-02-19",
    product: "Desk Lamp",
    type: "OUT",
    quantity: 5,
    reference: "SO-001",
  },
  {
    id: 3,
    date: "2024-02-18",
    product: "Wireless Mouse",
    type: "IN",
    quantity: 20,
    reference: "PO-002",
  },
];

const Stock = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovements = stockMovements.filter((movement) =>
    movement.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Stock Management</h1>
        <div className="space-x-4">
          <Button variant="outline" className="bg-green-50 text-green-600">
            <ArrowDown className="mr-2 h-4 w-4" /> Stock In
          </Button>
          <Button variant="outline" className="bg-red-50 text-red-600">
            <ArrowUp className="mr-2 h-4 w-4" /> Stock Out
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search stock movements..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Reference</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMovements.map((movement) => (
              <TableRow key={movement.id}>
                <TableCell>{movement.date}</TableCell>
                <TableCell className="font-medium">{movement.product}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      movement.type === "IN"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {movement.type}
                  </span>
                </TableCell>
                <TableCell>{movement.quantity}</TableCell>
                <TableCell>{movement.reference}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Stock;