import Curso from "../cursos/Curso";

function Cuadricula(){
  return(
    <div className="cursos-container">
    <Curso 
    titulo = "Ruta: Lógica de programación" 
    subtitulo = "Si quieres dominar la lógica de programación y sus fundamentos, este es el camino ideal. Aprenderás"
    imagen="https://edteam-media.s3.amazonaws.com/specialities/medium/644bcc58-a8c5-40a8-abe1-2740cbf7e6b6.jpeg"
    />
 
 <Curso 
    titulo = "Ruta: Inglés para todos" 
    subtitulo = "Si quieres dominar la lógica de programación y sus fundamentos, este es el camino ideal. Aprenderás"
    imagen="https://edteam-media.s3.amazonaws.com/specialities/medium/af9011c9-1288-4580-a420-deac965eeae9.jpeg"
    />

  <Curso 
    titulo = "Ruta: React Native" 
    subtitulo = "Si quieres dominar la lógica de programación y sus fundamentos, este es el camino ideal. Aprenderás"
    imagen="https://edteam-media.s3.amazonaws.com/specialities/medium/8017ef53-b305-45e5-84c8-4641fcddad03.jpeg"
    />
  
  <Curso 
    titulo = "Ruta: HTML" 
    subtitulo = "Si quieres dominar la lógica de programación y sus fundamentos, este es el camino ideal. Aprenderás"
    imagen="https://edteam-media.s3.amazonaws.com/courses/medium/c32aad4d-6dd6-4ae5-aa86-8254069988df.png"
    />

    </div>

  )
}

   


export default Cuadricula;