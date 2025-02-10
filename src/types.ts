export interface Transaction {
  id: string;
  date: Date;
  amount: number;
  category: string;
  description: string;
  type: 'income' | 'expense';
}

export interface CategoryTotal {
  category: string;
  amount: number;
}