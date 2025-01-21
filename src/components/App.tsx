

import Header from "./header/Header";
import './App.css'
import Cuadricula from "./cursos/Cuadricula";

//Creando un componnente
function App(){
  return (
    <> 
      <Header/>
      <main>
        <h1>Cursos de EDTeam</h1>
       <Cuadricula />

       </main>
    </>
  
  )
}

export default App;