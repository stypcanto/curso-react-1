//UseState nos permite usar el Estado de los componentes funcionales
//UserEffect nos permite manejar el ciclo de vida de los componentes
//useRef es para controlar el componente del DOM 

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

    // useEffect se ejecuta cuando el componente va a ser montado
    useEffect(() => {
        console.log(new Date().getTime()) // Para obtener la variable del tiempo
    }, [])

    // Función para actualizar numero1 al cambiar el primer input
    const setNumber1 = (e) => {
        setNumeros({
            ...numeros, // Mantiene el estado anterior
            numero1: e.target.value // Solo actualiza numero1
        });
    };

    return (
        <>

            <div className="flex justify-center items-center  bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-6 w-96 m-5">

                {/* Muestra el nombre recibido por props */}
                <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">{nombre}</h2>
                <form className="flex flex-col gap-4 bg-gray-100 p-5 rounded-lg shadow-md">
                    {/* Input para numero1 */}
                    <input
                        type="number"
                        value={numeros.numero1} // Conecta valor al estado
                        name="numero1"
                        onChange={setNumber1} // Llama a setNumber1 al cambiar
                        className="p-2 border rounded-lg"
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
                        className="p-2 border rounded-lg"
                    />
                </form>

                {/* Muestra la suma de numero1 y numero2 */}
                <span className="block text-lg font-semibold mt-4">Resultado: {Number(numeros.numero1) + Number(numeros.numero2)}</span>

                {/* Input para texto */}
                <input
                    type="text"
                    onChange={(e) => {
                        setTexto(e.target.value); // Actualiza el estado 'texto'
                    }}
                    className="mt-3 p-2 border rounded-lg w-full"
                />

                {/* Muestra el texto en tiempo real */}
                <span className="block mt-2 text-gray-700">{texto}</span>


            </div>
        </div>
        </>
    );
};

export default Calculadora;
