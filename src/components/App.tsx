
import Header from "./header/Header";
import './App.css'
import Calculadora from "./calculadora";


//Creando un componnente
function App(){
  return (
    <> 
      <Header/>
      <main>
        <h1>Simple Calculadora</h1>
        <Calculadora nombre="Formulario de suma" />


       </main>
    </>
  
  )
}

export default App;