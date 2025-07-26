export interface Transaction {
  id: number;
  userId: number;
  description: string;
  transactionDate: string;
  amount: number;
  type: string;
  status: string;
  icon: string;
}

export interface TransactionsState {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
}
