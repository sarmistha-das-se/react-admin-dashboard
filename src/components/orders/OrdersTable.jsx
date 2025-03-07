import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash } from "lucide-react";

const ORDER_DATA = [
  {
    id: "ORD001",
    customer: "John Doe",
    total: 235.4,
    status: "Delivered",
    date: "2023-07-01",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    total: 412.0,
    status: "Processing",
    date: "2023-07-02",
  },
  {
    id: "ORD003",
    customer: "Bob Johnson",
    total: 162.5,
    status: "Shipped",
    date: "2023-07-03",
  },
  {
    id: "ORD004",
    customer: "Alice Brown",
    total: 750.2,
    status: "Pending",
    date: "2023-07-04",
  },
  {
    id: "ORD005",
    customer: "Charlie Wilson",
    total: 95.8,
    status: "Delivered",
    date: "2023-07-05",
  },
  {
    id: "ORD006",
    customer: "Eva Martinez",
    total: 310.75,
    status: "Processing",
    date: "2023-07-06",
  },
  {
    id: "ORD007",
    customer: "David Lee",
    total: 528.9,
    status: "Shipped",
    date: "2023-07-07",
  },
  {
    id: "ORD008",
    customer: "Grace Taylor",
    total: 189.6,
    status: "Delivered",
    date: "2023-07-08",
  },
];

const OrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(ORDER_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = ORDER_DATA.filter(
      (order) =>
        order.customer.toLowerCase().includes(term) ||
        order.id.toLowerCase().includes(term) ||
        order.status.toLowerCase().includes(term)
    );
    setFilteredOrders(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Order List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Orders.."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute top-3 left-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Order Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredOrders.map((order) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  <img
                    src="product.jpg"
                    alt="order img"
                    className="size-10 rounded-full"
                  />
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                  {order.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.total.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  {order.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  {order.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                  <button className="text-blue-500 hover:text-blue-400">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-500 hover:text-red-400 ml-2">
                    <Trash size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default OrdersTable;
