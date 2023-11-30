// components/AddTransaction.tsx
import React, { useState } from 'react';

interface AddTransactionProps {
  onAddTransaction: (transaction: { text: string; amount: number }) => void;
}

const AddTransaction: React.FC<AddTransactionProps> = ({ onAddTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState<number | string>(0);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text || !amount) {
      return;
    }

    onAddTransaction({ text, amount: parseFloat(amount as string) });
    setText('');
    setAmount('');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Add New Transaction</h2>
      <form onSubmit={onSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="text" className="block text-gray-100">
            Text
          </label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 bg-gray-950/5 text-gray-100 outline-none border-gray-700 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-600"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-100">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 bg-gray-950/5 text-gray-100 outline-none border-gray-700 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-600"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-purple-500 text-white font-medium hover:bg-purple-600 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
