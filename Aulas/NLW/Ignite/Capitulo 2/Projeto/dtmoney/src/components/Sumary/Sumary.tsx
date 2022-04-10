import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import totalImg from '../../assets/Total.svg'
import { useTransactions } from '../../hooks/useTransactions'

import { Container } from './styles'
export function Sumary() {
  const { transactions } = useTransactions()
  let income = 0
  let outcome = 0
  transactions.map(data => {
    if (data.type === 'deposit') {
      income += data.amount
    }
    if (data.type === 'withdraw') outcome -= data.amount
  })
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(income)}
          </strong>
        </header>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="" />
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(outcome)}
          </strong>
        </header>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(income + outcome)}
          </strong>
        </header>
      </div>
    </Container>
  )
}
