import ReactModal from 'react-modal'

interface NewTransactionModal {
  isNewTransactionModalOpen: boolean
  handleCloseNewTransactionModal: () => void
}

export function NewTransactionModal(props: NewTransactionModal) {
  return (
    <>
      <ReactModal
        isOpen={props.isNewTransactionModalOpen}
        onRequestClose={props.handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </ReactModal>
    </>
  )
}
