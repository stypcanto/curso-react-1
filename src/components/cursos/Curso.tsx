// CursoProps es una interfaz que define el tipo de las propiedades que el componente Curso espera recibir.
// En este caso, Curso espera recibir tres propiedades: titulo, subtitulo e imagen, todas de tipo string.
interface CursoProps {
    titulo: string;      // Título del curso
    subtitulo: string;   // Descripción breve o subtítulo del curso
    imagen: string;      // URL de la imagen del curso
}

// Definimos el componente funcional Curso. 
// Usamos desestructuración para extraer titulo, subtitulo e imagen directamente de las props.
// La tipamos como CursoProps para asegurar que solo reciba las propiedades esperadas.
const Curso = ({ titulo, subtitulo, imagen }: CursoProps) => {

    // El componente retorna un fragmento JSX que representa la tarjeta de un curso.
    return (
        <>
            {/* Contenedor principal con clase "tarjeta-curso" */}
            <div className="tarjeta-curso">

                {/* Imagen del curso */}
                <img 
                    src={imagen}                // Muestra la URL de la imagen recibida por props
                    alt={imagen}                // Usa el valor de la imagen como texto alternativo
                    className="tarjeta-curso-img" // Aplica estilo mediante la clase CSS
                />

                {/* Contenedor del contenido textual */}
                <div className="contenido">
                    {/* Título del curso */}
                    <h2>{titulo}</h2>

                    {/* Subtítulo o descripción breve */}
                    <p>{subtitulo}</p>
                </div>

            </div>
        </>
    );
}

// Exportamos el componente para que pueda ser utilizado en otros archivos.
export default Curso;

//props es un objeto
