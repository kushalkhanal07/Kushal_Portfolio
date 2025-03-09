import React, { useState } from 'react';
import { Search, Moon, Bell, Settings, Clock, Eye, Pencil, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for invoices
const invoicesData = [
  {
    id: 'INV2540',
    billingName: 'Michael A. Miner',
    orderDate: '07 Jan, 2023',
    total: '$452',
    paymentMethod: 'Mastercard',
    status: 'Completed',
    avatar: '/lovable-uploads/38cda50c-8627-41de-943e-6b757a817e3a.png'
  },
  {
    id: 'INV3924',
    billingName: 'Theresa T. Brose',
    orderDate: '03 Dec, 2023',
    total: '$783',
    paymentMethod: 'Visa',
    status: 'Cancel',
    avatar: '/lovable-uploads/38cda50c-8627-41de-943e-6b757a817e3a.png'
  },
  {
    id: 'INV5032',
    billingName: 'James L. Erickson',
    orderDate: '28 Sep, 2023',
    total: '$134',
    paymentMethod: 'Paypal',
    status: 'Completed',
    avatar: '/lovable-uploads/38cda50c-8627-41de-943e-6b757a817e3a.png'
  },
  {
    id: 'INV1695',
    billingName: 'Lily W. Wilson',
    orderDate: '10 Aug, 2023',
    total: '$945',
    paymentMethod: 'Mastercard',
    status: 'Pending',
    avatar: '/lovable-uploads/38cda50c-8627-41de-943e-6b757a817e3a.png'
  },
  {
    id: 'INV8473',
    billingName: 'Sarah M. Brooks',
    orderDate: '22 May, 2023',
    total: '$421',
    paymentMethod: 'Visa',
    status: 'Cancel',
    avatar: '/lovable-uploads/38cda50c-8627-41de-943e-6b757a817e3a.png'
  },
  {
    id: 'INV2150',
    billingName: 'Joe K. Hall',
    orderDate: '15 Mar, 2023',
    total: '$251',
    paymentMethod: 'Paypal',
    status: 'Completed',
    avatar: '/lovable-uploads/38cda50c-8627-41de-943e-6b757a817e3a.png'
  },
  {
    id: 'INV5636',
    billingName: 'Ralph Hueber',
    orderDate: '15 Mar, 2023',
    total: '$310',
    paymentMethod: 'Visa',
    status: 'Completed',
    avatar: '/lovable-uploads/38cda50c-8627-41de-943e-6b757a817e3a.png'
  },
  {
    id: 'INV2940',
    billingName: 'Sarah Drescher',
    orderDate: '15 Mar, 2023',
    total: '$241',
    paymentMethod: 'Mastercard',
    status: 'Completed',
    avatar: '/lovable-uploads/38cda50c-8627-41de-943e-6b757a817e3a.png'
  }
];

const Invoices = () => {
  const [selectedFilter, setSelectedFilter] = useState('This Month');
  
  // Summary cards data
  const summaryCards = [
    { title: 'Total Invoice', count: '2310', iconBg: 'bg-orange-100', icon: '📋' },
    { title: 'Pending Invoice', count: '1000', iconBg: 'bg-orange-100', icon: '⏱️' },
    { title: 'Paid Invoice', count: '1310', iconBg: 'bg-orange-100', icon: '✓' },
    { title: 'Inactive Invoice', count: '1243', iconBg: 'bg-orange-100', icon: '📌' }
  ];

  const getStatusClass = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-600';
      case 'Pending': return 'bg-orange-100 text-orange-600';
      case 'Cancel': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-medium text-gray-500">INVOICES LIST</h1>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-white shadow-sm">
              <Moon size={20} className="text-gray-500" />
            </button>
            <div className="relative">
              <Bell size={20} className="text-gray-500" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">2</span>
            </div>
            <button className="p-2 rounded-full bg-white shadow-sm">
              <Settings size={20} className="text-gray-500" />
            </button>
            <button className="p-2 rounded-full bg-white shadow-sm">
              <Clock size={20} className="text-gray-500" />
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/38cda50c-8627-41de-943e-6b757a817e3a.png" 
                alt="User" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none w-64"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {summaryCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 mb-2">{card.title}</p>
                  <h2 className="text-3xl font-medium text-gray-700">{card.count}</h2>
                </div>
                <div className={`${card.iconBg} w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}>
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Invoices Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-lg font-medium text-gray-700">All Invoices List</h2>
            <div className="relative">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-md px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-gray-500 text-sm"
              >
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invoice ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Billing Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Method
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {invoicesData.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500">
                      #{invoice.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                          <img 
                            src={invoice.avatar} 
                            alt={invoice.billingName} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{invoice.billingName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {invoice.orderDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      {invoice.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {invoice.paymentMethod}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(invoice.status)}`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <Link to="/invoice-detail" className="p-1 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
                          <Eye size={16} />
                        </Link>
                        <button className="p-1 rounded-full bg-gray-200 text-orange-500 hover:bg-gray-300">
                          <Pencil size={16} />
                        </button>
                        <button className="p-1 rounded-full bg-gray-200 text-red-500 hover:bg-gray-300">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
