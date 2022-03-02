import { Container, SelectContainer, Label } from './styles'

const Select = ({
  children,
  register,
  icon: Icon,
  name,
  label,
  ...rest
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <SelectContainer>
        {register ? (
          <select {...register(name)} {...rest}>{children}</select>
        ) : (
          <select {...rest}>{children}</select>
        )}

        {Icon && <Icon size={20} />}
      </SelectContainer>
    </Container>
  )
}
export default Select
