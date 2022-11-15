import {Container} from 'react-bootstrap';
import Formulario from './components/Formulario'
import futuraTvLogo from './assets/futuratv.png'



function App() {

  return (
    <>
      <header className="py-5">
        <img src={futuraTvLogo} className="logo" alt="Vite logo" />
        <h1>CUPONERA FUTURA TV</h1>
      </header>
      <Container className='mt-5'>
        <Formulario />
      </Container>
    </>
  )
}

export default App
