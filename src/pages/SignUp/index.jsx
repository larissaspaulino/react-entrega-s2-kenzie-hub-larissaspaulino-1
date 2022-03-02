import Input from '../../components/Input'
import Button from '../../components/Button'
import Select from '../../components/Select'
import api from '../../services/api'
import { primary, primaryNegative } from '../../styles/global'
import { Container, Section, Form } from './styles'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Redirect, useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const SignUp = ({ auth }) => {
  const history = useHistory()

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Campo obrigatório!')
      .matches(/^[A-Za-z\s]+$/, 'O nome não pode conter números'),
    email: yup
      .string()
      .email('Email obrigatório')
      .required('Campo obrigatório!'),
    password: yup
      .string()
      .min(8, 'Mínimo de 8 dígitos')
      .required('Campo obrigatório!')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'A senha deve conter um caractere especial (!@%&), um número, uma letra minúscula e uma maiuscúla'
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref('password')], 'Senhas diferentes')
      .required('Campo obrigatório!'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = ({ name, email, password, course_module }) => {
    // delete data.confirm_password

    const user = {
      name,
      email,
      password,
      course_module,
      bio: 'null',
      contact: 'null',
    }
    // user.bio ="oi"
    // user.contact="oi"
    // console.log(user)

    api
      .post('/users', user)
      .then(() => {
        toast.success('Cadastro feito com sucesso')
        history.push('/login')
      })
      .catch(() => {
        toast.error('Erro ao criar a conta, tente outro email')
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
          <Button textButton onClick={() => history.push('/')}>
            Voltar
          </Button>
        </header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3>Crie sua conta</h3>
          <Input
            register={register}
            placeholder='Digite aqui seu nome'
            label='Nome'
            name='name'
            type='text'
            error={errors.name?.message}
          />
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
            type='password'
            error={errors.password?.message}
          />
          <Input
            register={register}
            placeholder='Digite novamente sua senha'
            label='Confirmar senha'
            name='confirm_password'
            type='password'
            error={errors.confirm_password?.message}
          />
          {/* <Input
            register={register}
            placeholder='Primeiro módulo'
            label='Selecionar módulo'
            name='module'

          /> */}
          <Select
            label='Selecionar módulo'
            name='course_module'
            register={register}
/*             error={errors.course_module?.message}
 */          >
            <option>Primeiro módulo</option>
            <option>Segundo módulo </option>
            <option>Terceiro módulo</option>
            <option>Quarto módulo </option>
          </Select>
          <Button type='submit' bgColor={primaryNegative}>
            Cadastrar
          </Button>
          <p>
            Já tem uma conta? Faça seu <Link to='/login' style={{color: primary}}>login</Link>
          </p>
        </Form>
      </Section>
    </Container>
  )
}

export default SignUp
