import React from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import type { Transaction } from '../types';

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日付</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">種類</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">カテゴリー</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">説明</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">金額</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {format(transaction.date, 'MM/dd', { locale: ja })}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.type === 'income' ? '収入' : '支出'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.category}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.description}</td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-right ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`}>
                ¥{transaction.amount.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}