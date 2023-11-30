// components/Balance.tsx
import React from 'react';

interface BalanceProps {
  balance: number;
}

const Balance: React.FC<BalanceProps> = ({ balance }) => {
  // Define a CSS class based on the balance value
  const balanceTextColorClass = balance >= 0 ? 'text-green-400' : 'text-red-500';

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold">Balance</h2>
      <p className={`text-3xl font-bold ${balanceTextColorClass}`}>
        {balance.toFixed(2)}
      </p>
    </div>
  );
};

export default Balance;
