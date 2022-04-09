import ReactModal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { Container, RadioBox, TransactionTypeContainer } from './styles'
import inComeImg from '../../assets/entradas.svg'
import outComeImg from '../../assets/saidas.svg'
import { useState } from 'react'

interface NewTransactionModal {
  isNewTransactionModalOpen: boolean

  handleCloseNewTransactionModal: () => void
}

export function NewTransactionModal(props: NewTransactionModal) {
  const [type, setType] = useState('deposit')
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
      <Container>
        <h2>Cadastrar Transação</h2>
        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Preço" />
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
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  )
}
