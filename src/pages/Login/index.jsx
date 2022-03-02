import Input from '../../components/Input'
import Button from '../../components/Button'
import api from '../../services/api'
import { grey1 } from '../../styles/global'
import { Container, Section, Form } from './styles'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Redirect, useHistory } from 'react-router'
import { FaEye } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useState } from 'react'

const Login = ({ auth, setAuth }) => {
  const [togglePassword, setTogglePassword] = useState(false)

  const history = useHistory()

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email obrigatório')
      .required('Campo obrigatório!'),
    password: yup.string().required('Campo obrigatório!'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data) => {
    api
      .post('/sessions', data)
      .then((res) => {
        toast.success('Login feito com sucesso')

        // jogar os dados do usuário no localstorage caso precise acessar esses dados
        const { token, user } = res.data

        localStorage.clear()
        localStorage.setItem('@hub:token', token) // localStorage.setItem('@hub:token', token)
        localStorage.setItem('@hub:user', JSON.stringify(user))

        setAuth(true)
        return history.push('/dashboard') //com ou sem return
      })
      .catch(() => {
        toast.error('Email ou senha inválidos')
      })
  }

  if (auth) {
    return <Redirect to='/dashboard' />
  }

  return (
    <Container>
      <Section>
        <header>
          <h1>tech.Hub</h1>
        </header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3>Login</h3>

          <Input
            register={register}
            placeholder='Digite aqui seu email'
            label='Email'
            name='email'
            type='email'
            error={errors.email?.message}
          />
          <Input
            register={register}
            placeholder='Digite aqui sua senha'
            label='Senha'
            name='password'
            error={errors.password?.message}
            icon={FaEye}
            type={togglePassword ? 'text' : 'password'}
            setTogglePassword={setTogglePassword}
            togglePassword={togglePassword}
          />
          <Button type='submit'>Entrar</Button>
          <p>Ainda não tem uma conta? </p>
          <Button bgColor={grey1} onClick={() => history.push('/cadastro')}>
            Cadastre-se
          </Button>
        </Form>
      </Section>
    </Container>
  )
}
export default Login
