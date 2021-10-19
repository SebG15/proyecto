import React, {useEffect,useState} from 'react'



const Productos = () => {
    const [MostrarTabla,setMostrarTabla] = useState(true)
    const [TextoBoton,setTextoBoton] = useState("Hacer pedido")

    useEffect(()=> {
        if (MostrarTabla){
            setTextoBoton("Hacer pedido")
        }
        else {
            setTextoBoton("Mostrar todos los pedidos")
        }
    },[MostrarTabla]) 

    
    return (
       <div className="flex h-full w-full flex-col items-center justify-star p-10">
           <div className=" flex flex-col">
           <h2 className="text-3xl  font-extrabold"> PAGINA ADMINISTRACION DE PEDIDOS</h2>
           <button
            onClick={()=>{
                setMostrarTabla(!MostrarTabla);
                }} 
                className="text-white bg-blue-700 p-4 rounded-full m-6 w-60">
               {TextoBoton}
           </button>
           </div>
           
           {MostrarTabla ?          
           <TablaProductos/>:
           <FormularioProducto/>
        }
       </div>
    )
}
const TablaProductos =() => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold text-gray-900 ">PEDIDOS</h2>
            <table>
            <thead>
                <tr>
                    <th>Tipo de vela</th>
                    <th>Tamaño</th>
                    <th>Olor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Paz</td>
                    <td>Grande</td>
                    <td>Florar</td>
                </tr>

            </tbody>
        </table>

        </div>
        
    )
}
const FormularioProducto =() => {
    return <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold text-gray-900 ">  CREAR PEDIDO</h3>
            <form className="grid grid-cols-3">
                <input className= "bg-gray-50 border border-blue-600 p-2 rounded-lg m-2 " type="text" />
                <input className= "bg-gray-50 border border-blue-600 p-2 rounded-lg m-2 " type="text" />
                <input className= "bg-gray-50 border border-blue-600 p-2 rounded-lg m-2 " type="text" />
                <button className=" justify-between col-span-4 bg-yellow-200 p-2 rounded-full hover:bg-yellow-300 text-white mt-11  ">
                     Enviar pedido</button>
            </form>
         </div>;
}
export default Productos
