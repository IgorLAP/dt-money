import 'react-toastify/dist/ReactToastify.css';

import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import { toast, ToastContainer } from 'react-toastify';

import { TransactionsContext } from '../../contexts/TransactionsContext';
import closeImg from './../../assets/close.svg';
import incomeImg from './../../assets/income.svg';
import outcomeImg from './../../assets/outcome.svg';
import { Container, TransactionType, TypeButton } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequesClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequesClose }: NewTransactionModalProps){
    const { createTransaction } = useContext(TransactionsContext);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    const handleNewTransaction = async (e: FormEvent) => {
        e.preventDefault();
        
        if(title && amount != 0 && category){
            await createTransaction({ title, amount, category, type });
            setTitle('');
            setAmount(0);
            setCategory('');
            setType('deposit');
            onRequesClose();
        } else {
            toast.error('Preencha todos os campos', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                draggable: true,
                closeOnClick: true
            })
        }
    }

    return (
        <Modal 
          isOpen={isOpen}
          onRequestClose={onRequesClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
            <ToastContainer />
            <button 
                type="button"
                onClick={onRequesClose} 
                className="react-modal-close" 
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input 
                    type="text" 
                    placeholder="Título"
                    value={title}
                    onChange={e => setTitle(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="Valor"
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}  
                />

                <TransactionType>
                    <TypeButton 
                        isActive={type == 'deposit'}
                        activeColor="green"
                        onClick={() => { setType('deposit') }}    
                        type="button"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </TypeButton>
                    <TypeButton 
                        isActive={type == 'withdraw'}
                        activeColor="red" 
                        onClick={() => { setType('withdraw') }} 
                        type="button"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </TypeButton>
                </TransactionType>

                <input 
                    type="text" 
                    placeholder="Categoria" 
                    value={category}
                    onChange={e => setCategory(e.target.value)} 
                />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}