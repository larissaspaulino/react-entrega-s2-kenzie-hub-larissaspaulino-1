import { StyledModal, Backdrop, styleBox } from './styles'
import { Box } from '@mui/system'
import { AiFillPushpin, AiOutlineClose } from 'react-icons/ai'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Select from '../../components/Select'
import { grey1, primaryNegative } from '../../styles/global'
import { useForm } from 'react-hook-form'
import api from '../../services/api'
import {toast} from 'react-toastify'
import { useState } from 'react'

const ModalSeeTech = ({user, setUser, handleClose, open, techClicked }) => {

  const [token] = useState(localStorage.getItem('@hub:token'))
  const [newStatus, setNewStatus] = useState("")
  
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  const onSubmit = (data) => {
    console.log(data)

    // let status = {status: data.course_module}
    setNewStatus(data)
  }

  const handleDelete = () => {
    api.delete(`/users/techs/${techClicked.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }}
    ).then((res) => {
      handleClose()
      toast.success('Tech excluída com sucesso')
    })
    .catch((err) => console.log(err))
  }

  const handleChange = (e) => {
    api.put(`/users/techs/${techClicked.id}`, newStatus, {
      headers: {
        Authorization: `Bearer ${token}`,
      }}
    ).then(() => {
      api.get(`/users/${user.id}`)
      .then(res => {
        localStorage.setItem('@hub:user', JSON.stringify(res.data))
        setUser(res.data)
      })
      .catch(err => console.log('get by id:', err))
      toast.success('Tech alterada com sucesso')
    })
    .catch((err) => console.log( "put",err))
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
            <h3>Detalhes da tecnologia</h3>
            <AiOutlineClose onClick={handleClose} />
          </header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register}
              disabled
              value={techClicked.title}
              placeholder={!!techClicked ? techClicked.title : 'oi'}
              label='Nome do projeto'
              name='name'
              type='text'
              error={errors.name?.message}
            />
            <Select
              label='Selecionar módulo'
              name='status'
              register={register}
              error={errors.module?.message}
/*               onChange={(e) => setNewStatus(e.target.value)}
 */            >
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </Select>
            <div className='botoes'>
              <Button type='submit' bgColor={primaryNegative} onClick={handleChange}>
                Salvar alterações
              </Button>
              <Button bgColor={grey1} onClick={handleDelete}>
                Excluir
              </Button>
            </div>
          </form>
        </Box>
      </StyledModal>
    </div>
  )
}

export default ModalSeeTech
