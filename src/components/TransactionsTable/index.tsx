import { useContext } from 'react';

import { TransactionsContext } from '../../contexts/TransactionsContext';
import { Container } from './styles';

export function TransactionsTable(){
    const {transactions} = useContext(TransactionsContext);
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions &&
                        transactions.map((item, index) => (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td 
                                    className={item.type}
                                >
                                    { 
                                        `${item.type == 'withdraw' ? '-' : ''} 
                                        ${new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(item.amount)}`
                                    }
                                </td>
                                <td>{item.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(item.createdAt))}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    );
}