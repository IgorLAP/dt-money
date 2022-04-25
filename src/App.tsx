import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './contexts/TransactionsContext';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  }

  const handleCloseTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header 
        onOpenNewTransactionModal={handleOpenTransactionModal} 
      />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequesClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  )
}