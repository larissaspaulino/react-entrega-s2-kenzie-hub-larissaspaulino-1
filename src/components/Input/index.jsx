import { Container, InputContainer, Label, Error } from './styles'

// add o register

const Input = ({ register, icon: Icon, error = '', name, label, ...rest }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} autoComplete='off' />
        {Icon && <Icon size={20} />}
      </InputContainer>
      <Error>{!!error && <span>{error}</span>} </Error>
    </Container>
  )
}
export default Input
