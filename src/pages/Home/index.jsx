import {Container, Button} from './styles'
// import Button from '../../components/Button'
import {Link, useHistory} from 'react-router-dom'
import Dev from '../../assets/software-engineer.svg'

const Home = ({auth}) => {

  const history = useHistory()
  
  return (
    <Container>
      <img src={Dev}/>
      <div>
        <h1>tech.Hub</h1>
        <Button onClick={() => history.push("/cadastro")}>Cadastre-se</Button>
        <p>Já possui uma conta? Faça o <span><Link to='/login'>login</Link></span>.</p>
      </div>
      
    </Container>
  )
}
export default Home