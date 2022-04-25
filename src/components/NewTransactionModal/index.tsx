import Modal from 'react-modal';

import closeImg from './../../assets/close.svg';
import incomeImg from './../../assets/income.svg';
import outcomeImg from './../../assets/outcome.svg';
import { Container, TransactionType } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequesClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequesClose }: NewTransactionModalProps){
    return (
        <Modal 
          isOpen={isOpen}
          onRequestClose={onRequesClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
            <button 
                type="button"
                onClick={onRequesClose} 
                className="react-modal-close" 
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>
                <input 
                    type="text" 
                    placeholder="Título" 
                />
                <input 
                    type="number" 
                    placeholder="Valor" 
                />

                <TransactionType>
                    <button type="button">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    <button type="button">
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </TransactionType>

                <input 
                    type="text" 
                    placeholder="Categoria" 
                />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}