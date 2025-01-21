//UseState nos permite usar el Estado de los componentes funcionales
import {useState, useEffect} from 'react';

interface CalculadoraProps {
    nombre: string;
    
}

const Calculadora = ({nombre}: CalculadoraProps) => {
   //puedo personalizar los nombres del state pero manteniendo nomenclatua
    const [numeros, setNumeros] = useState({
        numero1: 0,
        numero2: 0
    })

  
    

    const setNumber1 = (e) => {
        setNumeros({
            ...numeros,
            numero1: parseInt(e.target.value)
        })
    }

    const [texto,setTexto] = useState("")

      // Simula el ciclo de vida del componente
    // Se ejecuta cuando el componente va a ser construido, pasa la primera vez
    // El segundo parámetro es un array opcional
    // el array será el listado de todos los estados que quiero controlar como
    //disparadores de la actualización del useEffect
    useEffect(() => {
        console.log(new Date ().getTime())
    }, [numeros])
 // si no le paso array como 2do parametro. El useeffect vuelve a correr siempre
 //que algún estadose actualice

    const setNumber2 = (e) =>{
        setNumeros({
            ...numeros,
            numero2: parseInt(e.target.value)
        })
    }
      
    return(
                <> 
                <h2>{nombre}</h2>
                <form action="">
                 <input 
                 type="number" 
                 value={numeros.numero1} 
                 name="numero1" 
                 onChange={setNumber1}
                 />
    
                  <input 
                 type="number" 
                 value={numeros.numero2} 
                 name="numero2" 
                 onChange={setNumber2}
                 />
    
                 <input type="submit" name="enviar" value="Sumar"/>
               </form>
               <span>Resultado: {numeros.numero1 + numeros.numero2}</span>
                <input type="text" onChange={(e) => {setTexto (e.target.value)}} />
                <span>{texto}</span>
                </>
              
            )
        
}


export default Calculadora;


//Componentes Stateful : componente con estado
//Componente Stateless : componente sin estado