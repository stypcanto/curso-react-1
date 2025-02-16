
import Header from "./header/Header";
import './App.css'
import Calculadora from "./calculadora";
import Cuadricula from "./cursos/Cuadricula.js";


//Creando un componnente
function App(){
  return (
    <> 
      <Header/>
      <main>
        
        <Calculadora nombre="Formulario de suma" />
         <Cuadricula />

       </main>
    </>
  
  )
}

export default App;