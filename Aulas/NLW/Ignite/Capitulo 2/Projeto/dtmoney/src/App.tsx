import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionsModal'
import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setisNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setisNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header openModalFunction={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal
        handleCloseNewTransactionModal={handleCloseNewTransactionModal}
        isNewTransactionModalOpen={isNewTransactionModalOpen}
      />
    </>
  )
}
