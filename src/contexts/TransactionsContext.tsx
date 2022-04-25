import { createContext, useEffect, useState, ReactNode } from 'react';

import { api } from '../services/api';

interface Transaction {
    title: string;
    amount: number;
    category: string;
    type: string;
    createdAt: string;
}

type NewTransaction = Omit<Transaction, 'createdAt'>

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextProps {
    transactions: Transaction[];
    createTransaction: (transaction: NewTransaction) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextProps>({} as TransactionsContextProps);

export function TransactionsProvider({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions as Transaction[]))
    }, []);

    async function createTransaction(transactionInput: NewTransaction) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        });
        const { transaction } = response.data;
        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            { children }
        </TransactionsContext.Provider>
    );
}