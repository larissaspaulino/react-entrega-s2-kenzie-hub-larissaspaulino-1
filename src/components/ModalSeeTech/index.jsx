import { StyledModal, Backdrop, styleBox } from './styles'
import { Box } from '@mui/system'
import { AiOutlineClose } from 'react-icons/ai'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Select from '../../components/Select'
import { grey1, primaryNegative } from '../../styles/global'
import api from '../../services/api'
import {toast} from 'react-toastify'
import { useState } from 'react'

const ModalSeeTech = ({user, setUser, handleClose, open, techClicked }) => {

  const [token] = useState(localStorage.getItem('@hub:token'))
  const [newStatus, setNewStatus] = useState("")

  const handleChange = () => {
    
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
      handleClose()
      toast.success('Tech alterada com sucesso')
    })
    .catch(() => toast.error('Não foi possível alterar a tech, tente novamente'))
  }

  const handleDelete = () => {
    api.delete(`/users/techs/${techClicked.id}`, {
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
      handleClose()
      toast.success('Tech excluída com sucesso')
    })
    .catch(() => toast.error('Não foi possível excluir a tech, tente novamente'))
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
          <div className='form'>
            <Input
              disabled
              value={techClicked.title}
              placeholder={techClicked}
              label='Nome do projeto'
              name='name'
              type='text'
            />
            <Select
              label='Selecionar módulo'
              name='status'
              onChange={(e) => setNewStatus({status: e.target.value})}
           >
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </Select>
            <div className='botoes'>
              <Button bgColor={primaryNegative} onClick={handleChange} >
                Salvar alterações
              </Button>
              <Button bgColor={grey1} onClick={handleDelete}>
                Excluir
              </Button>
            </div>
          </div>
        </Box>
      </StyledModal>
    </div>
  )
}

export default ModalSeeTech
