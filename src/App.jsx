import {Container} from 'react-bootstrap';
import Formulario from './components/Formulario'
import futuraTvLogo from './assets/futuratv.png'
import {CategoriasProvider} from './contexts/CategoriasProvider'


function App() {

  return (
    <CategoriasProvider>
      <header className="py-5">
        <img src={futuraTvLogo} className="logo" alt="Vite logo" />
        <h1>CUPONERA FUTURA TV</h1>
      </header>
      <Container className='mt-5'>
        <Formulario />
      </Container>
    </CategoriasProvider>
  )
}

export default App
