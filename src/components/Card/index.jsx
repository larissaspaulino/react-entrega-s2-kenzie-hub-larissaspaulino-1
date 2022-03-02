import {Container} from './styles'

const Card = ({children, onClick}) => {
  return (
    <Container onClick={onClick}>{children}</Container>
  )
}


export default Card