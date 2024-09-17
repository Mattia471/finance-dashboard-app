export type Transaction = {
    uid?: string;
    category?: string;
    amount?: number;
    date?: string;
    description?: string;
    transactionType?: 'income' | 'expense';
};