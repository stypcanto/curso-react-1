interface CursoProps {
    imagen: string;
    titulo: string;
    subtitulo: string;
  }


//CursoProps es una interfaz que define el tipo de las propiedades que Curso espera recibir.
//En este caso, Curso espera recibir tres propiedades: imagen, titulo y subtitulo, todas de tipo string.

function Curso(props: CursoProps){
    return(
        <>
         <div  className="tarjeta-curso">
          <img src={props.imagen} alt={props.imagen} className="tarjeta-curso-img" />
         <div className="contenido">
          <h2>{props.titulo}</h2>
          <p>{props.subtitulo}</p>
         </div>
         
        </div>  
        </>
    )
}

export default Curso;

//props es un objeto
