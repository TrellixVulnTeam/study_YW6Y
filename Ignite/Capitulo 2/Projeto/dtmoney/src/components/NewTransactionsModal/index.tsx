import ReactModal from 'react-modal'
import { FormEvent, useState } from 'react'

import closeImg from '../../assets/close.svg'
import inComeImg from '../../assets/entradas.svg'
import outComeImg from '../../assets/saidas.svg'

import { Container, RadioBox, TransactionTypeContainer } from './styles'
import { useTransactions } from '../../hooks/useTransactions'

interface NewTransactionModal {
  isNewTransactionModalOpen: boolean
  handleCloseNewTransactionModal: () => void
}

export function NewTransactionModal(props: NewTransactionModal) {
  const { createTransaction } = useTransactions()

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  async function createNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type
    })
    if (!setTitle || !setAmount || !setCategory) return
    setTitle('')
    setAmount(0)
    setCategory('')
    props.handleCloseNewTransactionModal()
  }

  return (
    <ReactModal
      isOpen={props.isNewTransactionModalOpen}
      onRequestClose={props.handleCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={props.handleCloseNewTransactionModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar" />
      </button>
      <Container onSubmit={createNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'deposit'}
            onClick={() => {
              setType('deposit')
            }}
          >
            <img src={inComeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            isActive={type === 'withdraw'}
            onClick={() => {
              setType('withdraw')
            }}
          >
            <img src={outComeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  )
}
