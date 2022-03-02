import { StyledModal, Backdrop, styleBox } from './styles'
import { Box } from '@mui/system'
import { AiOutlineClose } from 'react-icons/ai'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Select from '../../components/Select'
import { primary } from '../../styles/global'
import { useForm } from 'react-hook-form'
import api from '../../services/api'
import { toast } from 'react-toastify'
import { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const ModalAddTech = ({ user, setUser, handleClose, open }) => {
  const [token] = useState(localStorage.getItem('@hub:token'))

  const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório!'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data) => {
    // setNewTech(data) ----- teria que usar useEffect[newTech] para fazer o post, mas mais fácil fazer direto com o data do form =)
    api
      .post(`/users/techs`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        api
          .get(`/users/${user.id}`)
          .then((res) => {
            localStorage.setItem('@hub:user', JSON.stringify(res.data))
            setUser(res.data)
          })
          .catch((err) => console.log('get by id:', err))
        handleClose()
        toast.success('Tech adicionada com sucesso')
      })
      .catch((err) => toast.error('Ocorreu um erro, tente novamente'))
  }

  return (
    <div>
      <StyledModal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={styleBox}>
          <header>
            <h3>Cadastrar tecnologia</h3>
            <AiOutlineClose onClick={handleClose} />
          </header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register}
              placeholder='Nova tecnologia'
              label='Nome do projeto'
              name='title'
              type='text'
              error={errors.name?.message}
            />
            <Select
              label='Selecionar módulo'
              name='status'
              register={register}
              error={errors.module?.message}
            >
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </Select>
            <div className='botoes'>
              <Button type='submit' bgColor={primary}>
                Cadastrar Tecnologia
              </Button>
            </div>
          </form>
        </Box>
      </StyledModal>
    </div>
  )
}

export default ModalAddTech
