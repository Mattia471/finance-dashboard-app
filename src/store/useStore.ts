import create from 'zustand';

type Store = {
    transactions: any[];
    addTransaction: (transaction: any) => void;
};

export const useStore = create<Store>((set) => ({
    transactions: [],
    addTransaction: (transaction) =>
        set((state) => ({ transactions: [...state.transactions, transaction] })),
}));
