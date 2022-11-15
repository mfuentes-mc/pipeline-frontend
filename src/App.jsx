import {Container} from 'react-bootstrap';
import Formulario from './components/Formulario'
import ListadoCupones from './components/ListadoCupones'
import futuraTvLogo from './assets/futuratv.png'
import {CategoriasProvider} from './contexts/CategoriasProvider'
import {CuponesProvider} from './contexts/CuponesProvider'


function App() {

  return (
    <CategoriasProvider>
      <CuponesProvider>
        <header className="py-5">
          <img src={futuraTvLogo} className="logo" alt="Vite logo" />
          <h1>CUPONERA FUTURA TV</h1>
        </header>
        <Container className='mt-5'>
          <Formulario />
          <ListadoCupones/>
        </Container>
      </CuponesProvider>
    </CategoriasProvider>
  )
}

export default App
