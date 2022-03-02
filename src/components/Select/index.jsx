import { Container, SelectContainer, Error, Label } from './styles'


const Select = ({
  children,
  register,
  icon: Icon,
  error = '',
  name,
  label,
  ...rest
}) => {
  return (
     <Container>
      <Label>{label}</Label>
      <SelectContainer>
        <select {...register(name)} {...rest}>
          {children}
        </select>
        {Icon && <Icon size={20} />}
      </SelectContainer>
      <Error>{!!error && <span>{error}</span>} </Error>
    </Container>

  )
}
export default Select
