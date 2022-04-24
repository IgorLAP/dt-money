import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
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
    <>
      <Header 
        onOpenNewTransactionModal={handleOpenTransactionModal} 
      />
      <Dashboard />
      <Modal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseTransactionModal}
      >
        <h2>Nova transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  )
}