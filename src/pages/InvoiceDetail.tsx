
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const InvoiceDetail = () => {
  // Sample invoice data based on the image
  const invoice = {
    id: 'INV-0758267/90',
    issueDate: '23 April 2024',
    dueDate: '26 April 2024',
    amount: '$737.00',
    status: 'Paid',
    
    company: {
      name: 'Larkon Admin.',
      address: '1729 Bangor St,',
      cityState: 'Houlton, ME, 04730, United States',
      phone: '+1(142)-532-9109'
    },
    
    issueFrom: {
      name: 'Larkon Admin.INC',
      address: '2437 Romano Street Cambridge, MA 02141',
      phone: '+1(31)781-417-2004',
      email: 'JulianeKuhn@jourrapide.com'
    },
    
    issueTo: {
      name: 'Gaston Lapierre',
      address: '1344 Hershell Hollow Road WA 98168, USA',
      phone: '+1(23) 732-760-5760',
      email: 'hello@dundermifflin.com'
    },
    
    items: [
      {
        id: 1,
        image: '/lovable-uploads/e4b7a065-d2d1-4485-887d-962ac2b93a05.png',
        name: 'Men Black Slim Fit T-shirt',
        size: 'M',
        quantity: 1,
        price: '$80.00',
        tax: '$3.00',
        total: '$83.00'
      },
      {
        id: 2,
        image: '/lovable-uploads/e4b7a065-d2d1-4485-887d-962ac2b93a05.png',
        name: 'Dark Green Cargo Pant',
        size: 'M',
        quantity: 3,
        price: '$110.00',
        tax: '$4.00',
        total: '$330.00'
      },
      {
        id: 3,
        image: '/lovable-uploads/e4b7a065-d2d1-4485-887d-962ac2b93a05.png',
        name: 'Men Dark Brown Wallet',
        size: 'S',
        quantity: 1,
        price: '$132.00',
        tax: '$5.00',
        total: '$137.00'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link 
            to="/invoices" 
            className="px-4 py-2 rounded-lg bg-white shadow-sm text-gray-700 flex items-center w-fit"
          >
            ← Back to Invoices
          </Link>
        </div>
        
        {/* Invoice Card */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-emerald-50 p-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-orange-400 rounded-md flex items-center justify-center text-white">
                    <span className="text-xl">🔒</span>
                  </div>
                  <h1 className="text-xl font-bold">Larkon</h1>
                </div>
                <h2 className="text-lg font-semibold mb-2">{invoice.company.name}</h2>
                <p className="text-gray-600">{invoice.company.address}</p>
                <p className="text-gray-600">{invoice.company.cityState}</p>
                <p className="text-gray-600">Phone: {invoice.company.phone}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 mr-4">Invoice :</span>
                  <span className="font-semibold">{invoice.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 mr-4">Issue Date:</span>
                  <span>{invoice.issueDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 mr-4">Due Date :</span>
                  <span>{invoice.dueDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 mr-4">Amount :</span>
                  <span className="font-semibold">{invoice.amount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 mr-4">Status :</span>
                  <span className="px-4 py-1 bg-green-500 text-white rounded-md text-sm font-medium">
                    {invoice.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Status Mark */}
          <div className="flex justify-center -mt-8 relative z-10">
            <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-white" />
            </div>
          </div>
          
          {/* Bill From and Bill To */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-gray-700 font-medium mb-3">Issue From :</h3>
              <h4 className="text-lg font-semibold mb-2">{invoice.issueFrom.name}</h4>
              <p className="text-gray-600 mb-1">{invoice.issueFrom.address}</p>
              <p className="text-gray-600 mb-1">
                <span className="text-gray-500">Phone :</span> {invoice.issueFrom.phone}
              </p>
              <p className="text-gray-600">
                <span className="text-gray-500">Email :</span> {invoice.issueFrom.email}
              </p>
            </div>
            
            <div>
              <h3 className="text-gray-700 font-medium mb-3">Issue For :</h3>
              <h4 className="text-lg font-semibold mb-2">{invoice.issueTo.name}</h4>
              <p className="text-gray-600 mb-1">{invoice.issueTo.address}</p>
              <p className="text-gray-600 mb-1">
                <span className="text-gray-500">Phone :</span> {invoice.issueTo.phone}
              </p>
              <p className="text-gray-600">
                <span className="text-gray-500">Email :</span> {invoice.issueTo.email}
              </p>
            </div>
          </div>
          
          {/* Line Items */}
          <div className="p-6">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="pb-3">Product Name</th>
                  <th className="pb-3 text-center">Quantity</th>
                  <th className="pb-3 text-center">Price</th>
                  <th className="pb-3 text-center">Tax</th>
                  <th className="pb-3 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 mr-4 bg-gray-100 rounded">
                          {item.id === 1 && <img src="/lovable-uploads/e4b7a065-d2d1-4485-887d-962ac2b93a05.png" className="w-12 h-12 object-cover" alt={item.name} />}
                          {item.id === 2 && (
                            <div className="w-12 h-12 flex items-center justify-center">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.77 16.75H4.24C4.24 16.75 3.25 16.75 3.25 15.76V12.24C3.25 12.24 3.25 11.25 4.24 11.25H19.77C19.77 11.25 20.76 11.25 20.76 12.24V15.76C20.75 15.76 20.75 16.75 19.77 16.75Z" fill="#406c49" />
                                <path d="M12 7V20" stroke="darkgreen" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 7V9" stroke="darkgreen" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 7V9" stroke="darkgreen" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 4H17L18.5 7H5.5L7 4Z" fill="#406c49" />
                              </svg>
                            </div>
                          )}
                          {item.id === 3 && (
                            <div className="w-12 h-12 flex items-center justify-center">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="6" width="20" height="12" rx="2" fill="#8B4513" />
                                <path d="M2 12H22" stroke="#6b3009" strokeWidth="1.5" />
                                <path d="M16 16H18" stroke="#6b3009" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-gray-500 text-sm">Size : {item.size}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-center">{item.quantity}</td>
                    <td className="py-4 text-center">{item.price}</td>
                    <td className="py-4 text-center">{item.tax}</td>
                    <td className="py-4 text-right font-medium">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Footer */}
          <div className="p-6 bg-gray-50">
            <div className="flex justify-end">
              <div className="w-64">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span>$550.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Tax:</span>
                  <span>$12.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Discount:</span>
                  <span>-$25.00</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Total:</span>
                  <span>$737.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetail;
