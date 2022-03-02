import { StyledModal, Backdrop, styleBox } from './styles'
import { Box } from '@mui/system'
import { AiFillPushpin, AiOutlineClose } from 'react-icons/ai'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Select from '../../components/Select'
import { grey1, primary } from '../../styles/global'
import { useForm } from 'react-hook-form'
import api from '../../services/api'
import { toast } from 'react-toastify'
import { useState } from 'react'

const ModalAddTech = ({ user, setUser, handleClose, open }) => {
  const [token] = useState(localStorage.getItem('@hub:token'))
  const [newTech, setNewTech] = useState({})

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  const onSubmit = (data) => {
    // let tech = {status: data.course_module, title: data.title}
    setNewTech(data)
    console.log(newTech)
  }

  const handleChange = () => {
    api
      .post(`/users/techs`, newTech, {
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
        toast.success('Tech adicionada com sucesso')
      })
      .catch((err) => toast.error('Tech já cadastrada'))
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
              <Button type='submit' bgColor={primary} onClick={handleChange}>
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
