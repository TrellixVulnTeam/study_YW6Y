import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import totalImg from '../../assets/Total.svg'

import { Container } from './styles'
export function Sumary() {
  return (
    <>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="" />
            <strong>R$1000,00</strong>
          </header>
        </div>
        <div>
          <header>
            <p>Saidas</p>
            <img src={outcomeImg} alt="" />
            <strong>R$-500,00</strong>
          </header>
        </div>
        <div>
          <header>
            <p>Total</p>
            <img src={totalImg} alt="" />
            <strong>R$500,00</strong>
          </header>
        </div>
      </Container>
    </>
  )
}
