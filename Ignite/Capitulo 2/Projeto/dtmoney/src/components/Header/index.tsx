import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface Headerprops {
  openModalFunction(): void
}

export function Header(props: Headerprops) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <button type="button" onClick={props.openModalFunction}>
          Button
        </button>
      </Content>
    </Container>
  )
}
