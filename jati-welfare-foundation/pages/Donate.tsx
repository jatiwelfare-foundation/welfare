import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { CreditCard, CheckCircle } from 'lucide-react';

export const Donate: React.FC = () => {
  const [amount, setAmount] = useState<string>('50');
  const [customAmount, setCustomAmount] = useState('');

  const handleAmountClick = (val: string) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount('');
  };

  return (
    <div>
      <div className="bg-blue-600 py-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Make a Donation</h1>
        <p className="text-blue-100 text-lg">Your support changes lives.</p>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Donation Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Select Donation Amount</h3>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {['10', '25', '50', '100', '250', '500'].map((val) => (
                  <button
                    key={val}
                    onClick={() => handleAmountClick(val)}
                    className={`py-3 rounded-lg font-medium border-2 transition-all ${
                      amount === val 
                        ? 'border-blue-600 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 text-gray-600 hover:border-blue-300'
                    }`}
                  >
                    ${val}
                  </button>
                ))}
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">Or enter custom amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Other Amount"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input type="text" placeholder="First Name" className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none" />
                <input type="text" placeholder="Last Name" className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <input type="email" placeholder="Email Address" className="p-3 border border-gray-300 rounded-lg w-full mb-6 focus:ring-2 focus:ring-blue-500 outline-none" />

              <Button size="lg" className="w-full gap-2">
                <CreditCard className="w-5 h-5" />
                Donate {customAmount ? `$${customAmount}` : `$${amount}`}
              </Button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Secure payment processing. All donations are tax-deductible.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Why Donate?</h3>
              <ul className="space-y-4">
                {[
                  '100% of your donation goes to the cause.',
                  'Fully transparent financial reports.',
                  'Helping over 50,000 people annually.',
                  'Tax benefits for all donors.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Bank Transfer</h3>
              <p className="text-sm text-blue-800 mb-4">You can also transfer directly to our bank account.</p>
              <div className="text-sm text-blue-900 space-y-1 font-mono bg-white p-3 rounded border border-blue-200">
                <p>Bank: National Welfare Bank</p>
                <p>Acct: 1234-5678-9012</p>
                <p>Swift: JATIUS33</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};