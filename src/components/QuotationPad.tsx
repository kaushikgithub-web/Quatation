import React from 'react';
import { Printer } from 'lucide-react';
import { format } from 'date-fns';
import { Quotation } from '../types/quotation';

interface Props {
  quotation: Quotation;
}

export function QuotationPad({ quotation }: Props) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print Controls - Hidden when printing */}
      <div className="print:hidden mb-4 flex justify-end space-x-4">
        <button
          onClick={handlePrint}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Printer className="w-4 h-4 mr-2" /> Print Quotation
        </button>
      </div>

      {/* Quotation Letter - Optimized for printing */}
      <div className="bg-white p-8 rounded-lg shadow-md print:shadow-none print:p-4 max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-b-2 border-gray-200 pb-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">QUOTATION</h1>
              <p className="text-gray-600 mt-1">Reference: {quotation.referenceNumber}</p>
              <p className="text-gray-600">Date: {format(new Date(quotation.date), 'MMMM d, yyyy')}</p>
            </div>
            <div className="text-right">
              <h2 className="text-xl font-semibold text-blue-600">OLUMPUS GLASSES LTD</h2>
              <p className="text-gray-600">9/41 Suryodaya Colony, 9 Rana Pratap Marg,</p>
              <p className="text-gray-600">Lucknow-226001</p>
              <p className="text-gray-600">Phone: +91 8933933333</p>
              <p className="text-gray-600">Email: olumpusglasses@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="flex justify-center items-center mb-8">
          <img 
            src="https://raw.githubusercontent.com/stackblitz/stackblitz-cg-logo/main/cg-logo.png" 
            alt="Company Logos"
            className="h-16 object-contain print:h-16"
          />
        </div>

        {/* Client Information */}
        <div className="mb-8">
          <h3 className="font-semibold text-gray-800 mb-2">To:</h3>
          <p className="text-gray-800 font-medium">{quotation.customerName}</p>
          <p className="text-gray-600">{quotation.email}</p>
          <p className="text-gray-600">GSTN: {quotation.gstn}</p>
          <p className="text-gray-600 whitespace-pre-line">{quotation.address}</p>
        </div>

        {/* Items Table */}
        <div className="mb-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Quantity</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Unit Price</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {quotation.items.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 text-gray-800">{item.description}</td>
                  <td className="px-4 py-3 text-right text-gray-800">{item.quantity}</td>
                  <td className="px-4 py-3 text-right text-gray-800">${item.unitPrice.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right text-gray-800">${item.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-gray-300">
                <td colSpan={3} className="px-4 py-3 text-right font-semibold">Total Amount:</td>
                <td className="px-4 py-3 text-right font-semibold">${quotation.total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Notes */}
        {quotation.notes && (
          <div className="mb-8">
            <h3 className="font-semibold text-gray-800 mb-2">Notes:</h3>
            <p className="text-gray-600 whitespace-pre-line">{quotation.notes}</p>
          </div>
        )}

        {/* Terms and Conditions */}
        <div className="mb-8 text-sm text-gray-600">
          <h3 className="font-semibold text-gray-800 mb-2">Terms and Conditions:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>The price includes basic rate of glass only.</li>
            <li>Taxes @ 18% Inclusive</li>
            <li>Freight: Extra at actual.</li>
            <li>Transit Insurance: 2% Extra & it covers transit breakage till it reaches the first delivery point.</li>
            <li>Unloading charges to be arranged and borne by the client / Fabricator.</li>
            <li>Odd and complex size / Template based size charges inclusive @ 10 % of basic price. Any typical drawing or template will be charged extra.</li>
            <li>Hole Charges Extra- 4mm to 6mm will be Rs 15/Hole, 8mm to 12 mm will be Rs 30 /Hole, 15 mm to 19 mm will be Rs 60/Hole – Taxes extra</li>
            <li>Counter sunk Hole up to 12 mm will be Rs 100 +Tax and 15 mm to 19 mm will be charged at 200/hole +tax</li>
            <li>Cutout charges will be extra</li>
            <li>Packing charges for Outstation area: Extra.</li>
            <li>Payment Terms: 100% advance along with Purchase order.</li>
            <li>Validity of the offer: 30 days from the date of the offer</li>
            <li>Validity of prices for supplies: 60 days from the date of first supply.</li>
          </ul>
        </div>

        {/* Signature */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between">
            <div>
              <div className="w-64 border-b border-gray-400 mb-2"></div>
              <p className="text-gray-600">Customer Signature</p>
            </div>
            <div className="text-right">
              <div className="w-64 border-b border-gray-400 mb-2"></div>
              <p className="text-gray-600">Authorized Signature</p>
              <p className="text-sm text-gray-600 mt-2">GM (Sales & Mkt) [ +91 800 99 4 34 34 ]</p>
              <p className="text-sm text-gray-600">e-mail: vkdixit.olumpus@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            margin: 1cm;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </>
  );
}