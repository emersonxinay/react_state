import { Header, Footer, MyCard, Calculadora } from './components'
import imagen1 from './assets/1.png'
import "bootstrap/dist/css/bootstrap.min.css";
import AppCarro from './AppCarro';
import './App.css'

function App() {
  return (
    <>
      <Header></Header>
      <div className="cartas">
        <Calculadora></Calculadora>
        <Calculadora></Calculadora>
        <Calculadora></Calculadora>
        <AppCarro></AppCarro>

        <MyCard title="perro 1" imagen={imagen1} description="Buen perro" tag="ver mas" bg_tag="primary" ></MyCard>
        <MyCard title="perro 1" imagen={imagen1} description="Buen perro" tag="ver mas" bg_tag="primary" ></MyCard>

        <MyCard title="perro 1" imagen={imagen1} description="Buen perro" tag="ver mas" bg_tag="primary" ></MyCard>
        <MyCard title="perro 1" imagen={imagen1} description="Buen perro" tag="ver mas" bg_tag="primary" ></MyCard>

      </div>

      <Footer text="Todos los derechos reservados" ></Footer>
    </>
  )
}

export default App
