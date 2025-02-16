import { useRef } from "react";
import "../cursos/Curso.css"

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

//useRef nos permite crear una referencia hacua un elemento del dom



const Curso = ({ titulo, subtitulo, imagen }: CursoProps) => {
    const miReferencia = useRef();
    const desactivarImagen = () => {
        miReferencia.current.classList.add("desactivada")
    }
   
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 transition-transform transform hover:scale-105 duration-300">
            {/* Imagen */}
            <img 
             ref={miReferencia}
             src={imagen} 
             alt={titulo} 
             className=" w-full h-48 object-cover rounded-base" 
             />

            {/* Contenido */}
            <div className="p-5">
                {/* Título */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{titulo}</h2>

                {/* Subtítulo */}
                <p className="text-gray-600 mb-4">{subtitulo}</p>

                {/* Botón */}
                <button onClick={desactivarImagen}  
                className="px-4 py-2 bg-blue-500 hover:bg-blue-900 text-white font-semibold rounded-lg transition-all duration-300">
                    Desactivar
                </button>
            </div>
        </div>
    );
}

// Exportamos el componente para que pueda ser utilizado en otros archivos.
export default Curso;

//props es un objeto
