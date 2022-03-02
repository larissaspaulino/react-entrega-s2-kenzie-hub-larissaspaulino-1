import { Container, InputContainer, Label, Error } from './styles'



const Input = ({ register, icon: Icon, error = '', name, label, togglePassword ,setTogglePassword, ...rest }) => {


  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer isErrored={!!error}>
        {register ? (
          <input {...register(name)} {...rest}  />
        ) : (
          <input {...rest} />
        )}
        {Icon && <Icon size={20} onClick={() => setTogglePassword(!togglePassword)} />}
      </InputContainer>
      <Error>{!!error && <span>{error}</span>} </Error>
    </Container>
  )
}
export default Input
