import React, { FormEvent, useState, useContext } from 'react';

import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button
          type="button"
          className="react-modal-close"
          onClick={onRequestClose}
        >
          <img src={closeImg} alt="" />
        </button>
        <h2>Cadastrar a transação</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Valor"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'deposit'}
            onClick={() => setType('deposit')}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entradas</span>
          </RadioBox>
          <RadioBox
            type="button"
            isActive={type === 'withdraw'}
            onClick={() => setType('withdraw')}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saídas" />
            <span>Saídas</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
