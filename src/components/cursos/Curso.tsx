
//CursoProps es una interfaz que define el tipo de las propiedades que Curso espera recibir.
//En este caso, Curso espera recibir tres propiedades: imagen, titulo y subtitulo, todas de tipo string.


interface CursoProps {
    titulo: string;
    subtitulo: string;
    imagen: string;
}

const Curso = ({titulo, subtitulo, imagen}: CursoProps) =>{
    return(
        <>
         <div  className="tarjeta-curso">
          <img src={imagen} alt={imagen} className="tarjeta-curso-img" />
         <div className="contenido">
          <h2>{titulo}</h2>
          <p>{subtitulo}</p>
         </div>
         
        </div>  
        </>
    )
}

export default Curso;

//props es un objeto
