import { Container } from "./styles"
import { primary } from "../../styles/global"

const Button = ({children, bgColor = primary, ...rest}) => {
  return (
    <Container bgColor={bgColor} {...rest}>{children}</Container>
  )
}
export default Button