// components/TransactionList.tsx
import React from 'react';

interface Transaction {
  id: number;
  text: string;
  amount: number;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Transaction History</h2>
      <ul className="mt-4">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={`${
              transaction.amount < 0 ? 'text-red-500' : 'text-green-600'
            }`}
          >
            {transaction.text} ({transaction.amount.toFixed(2)})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
