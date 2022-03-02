import { Form } from './styles'
import Card from '../Card'
import { useState } from 'react'
import ModalSeeTech from '../ModalSeeTech'

const ShowTechs = ({ user, setUser }) => {
  const [open, setOpen] = useState(false)
  const [techClicked, setTechClicked] = useState("")

  const handleOpen = (tec) => {
    setOpen(true)

    setTechClicked(tec)
  }
  const handleClose = () => setOpen(false)
  
  
  return (
    <Form>
      {user.techs.map((tech) => (
        <Card
          key={tech.id}
          onClick={() => {
            handleOpen(tech)
          }}
        >
          <h3>{tech.title}</h3>
          <p>{tech.status}</p>
        </Card>
      ))}
      <ModalSeeTech
        techClicked={techClicked}
        handleClose={handleClose}
        open={open}
        setUser={setUser}
        user={user}
      />
    </Form>
  )
}
export default ShowTechs
