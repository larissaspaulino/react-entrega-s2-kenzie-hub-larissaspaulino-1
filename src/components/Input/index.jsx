import { Container, InputContainer, Label, Error } from './styles'

// add o register

const Input = ({ register, icon: Icon, error = '', name, label, ...rest }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer isErrored={!!error}>
        {register ? (
          <input {...register(name)} {...rest}  />
        ) : (
          <input {...rest} />
        )}
        {Icon && <Icon size={20} />}
      </InputContainer>
      <Error>{!!error && <span>{error}</span>} </Error>
    </Container>
  )
}
export default Input
