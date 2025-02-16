//UseState nos permite usar el Estado de los componentes funcionales
//UserEffect nos permite manejar el ciclo de vida de los componentes
// El Useeffect no se construye, se ejecuta directo

import { useState, useEffect } from 'react'; // Importa useState para gestionar estados

// Definición del componente Calculadora
const Calculadora = ({ nombre }) => {

    // Estado para manejar los números
    const [numeros, setNumeros] = useState({
        numero1: 0, // Valor inicial de numero1
        numero2: 0  // Valor inicial de numero2
    });

    // Estado para manejar el texto
    const [texto, setTexto] = useState(""); // Texto inicia vacío

   // useEffect(() => {}) este es una plantilla que usa un solo parametro
    // useEffect(() => {},[]) este es una plantilla que dos parametros
   //useEffect se ejecuta cuando el componente va a ser montado
   // El segundo parámetro es un array opcional
   // El array será el listado de todos los estados que quiero controlar como
   // disparadores de la función que escribí en el useEffect
   useEffect(()=>{
       console.log(new Date().getTime()) // Para obtener la varia deltiempo
   }, [texto] ) // Elarray se actualiza solo si texto se actualiza
   //Si no le paso array como segundo parametro , el useeffect vuelve a correr siempre
   //que algun estado se actualice


    // Función para actualizar numero1 al cambiar el primer input
    const setNumber1 = (e) => {
        setNumeros({
            ...numeros, // Mantiene el estado anterior
            numero1: e.target.value // Solo actualiza numero1
        });
    };

    return (
        <>
            {/* Muestra el nombre recibido por props */}
            <h2>{nombre}</h2>
            <form action="">
                {/* Input para numero1 */}
                <input
                    type="number"
                    value={numeros.numero1} // Conecta valor al estado
                    name="numero1"
                    onChange={setNumber1} // Llama a setNumber1 al cambiar
                />

                {/* Input para numero2 */}
                <input
                    type="number"
                    value={numeros.numero2} // Conecta valor al estado
                    name="numero2"
                    onChange={e => {
                        setNumeros({
                            ...numeros, // Mantiene el estado actual
                            numero2: e.target.value // Actualiza numero2
                        });
                    }}
                />
            </form>

            {/* Muestra la suma de numero1 y numero2 */}
            <span>Resultado: {Number(numeros.numero1) + Number(numeros.numero2)}</span>

            {/* Input para texto */}
            <input
                type="text"
                onChange={(e) => {
                    setTexto(e.target.value); // Actualiza el estado 'texto'
                }}
            />

            {/* Muestra el texto en tiempo real */}
            <span>{texto}</span>
        </>
    );
};

export default Calculadora;
