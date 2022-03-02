import {
  Container,
  Divider,
  Section,
  User,
  TitleTechs,
  NavBar,
} from './styles'
import Button from '../../components/Button'
import IconButton from '../../components/IconButton'
import ShowTechs from '../../components/ShowTechs'
import ModalAddTech from '../../components/ModalAddTech'
import { Redirect, useHistory } from 'react-router'
import { HiPlus } from 'react-icons/hi'
import { useEffect, useState } from 'react'
import api from '../../services/api'

const Dashboard = ({ auth, setAuth }) => {
  const history = useHistory()

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('@hub:user')))
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false) 
  
  const handleLogout = () => {
    history.push('/')
    localStorage.clear()
    setAuth(false)
  }
  
    // if (!auth) {
    //   console.log(auth)
    //   return <Redirect to='/'/>
    // } 



  return (
    <Container>
      <Section>
        <NavBar>
          <h1>tech.Hub</h1>
          <Button textButton onClick={handleLogout}>
            Sair
          </Button>
        </NavBar>
        <Divider />
        <User>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </User>
        <Divider />
        <TitleTechs>
          <h2>Tecnologias</h2>
          <IconButton icon={HiPlus} onClick={handleOpen}/>
        </TitleTechs>
       <ShowTechs setUser={setUser} user={user}/>
       <ModalAddTech handleClose={handleClose} open={open} user={user} setUser={setUser} />
      </Section>
    </Container>
  )
}
export default Dashboard
