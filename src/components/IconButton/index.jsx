import { Container } from "./styles"

const IconButton = ({icon: Icon, ...rest}) => {
  return (
    <Container {...rest}>
      <Icon size={18}/>
    </Container>
  )
}
export default IconButton