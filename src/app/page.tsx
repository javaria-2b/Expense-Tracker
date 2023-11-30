"use client"

import AddTransaction from '@/components/AddTransaction';
import Balance from '@/components/Balance';
import TransactionList from '@/components/TransactionList';
import React, { useState } from 'react';

interface Transaction {
  id: number;
  text: string;
  amount: number;
}

const Home: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const balance = transactions.reduce((total, transaction) => total + transaction.amount, 0);

  const addTransaction = (newTransaction: { text: string; amount: number }) => {
    setTransactions([...transactions, { id: Date.now(), ...newTransaction }]);
  };

  return (
    <div className="container mx-auto p-4 max-w-screen-sm">
      <div className='border-b h-12 mb-5'>

      <h1 className="text-4xl font-black font-serif mb-4 text-center text-white">Expense Tracker</h1>
      </div>
      <div className="bg-white/10 p-4 text-white rounded-2xl shadow-md mb-4">
        <Balance balance={balance} />
      </div>
      <div className="bg-white/10 p-4 text-white rounded-2xl shadow-md mb-4">
        <AddTransaction onAddTransaction={addTransaction} />
      </div>
      <div className="bg-white/10 p-4 text-white rounded-2xl shadow-md">
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default Home;
