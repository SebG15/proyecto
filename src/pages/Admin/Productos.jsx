import { nanoid } from 'nanoid';
import React, {useEffect,useState,useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'Styles/EstilosDeTabla.css'

  


// back
const productosbackend=[
    {
    tipo:"Paz",
    tamaño:"Grande",
    aroma: "limon"
  },
  {
    tipo:"Armonia",
    tamaño:"Pequeño",
    aroma: "Vainilla"
  
  },
  ]



const Productos = () => {
    
    const [MostrarTabla,setMostrarTabla] = useState(true);
    const [Productos,setProductos] = useState([]);
    const [TextoBoton,setTextoBoton] = useState("Hacer pedido");

    useEffect(()=>{
//Obtener lista desde el front
setProductos(productosbackend);
    },[]
    )

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
           
           {MostrarTabla ? (          
           <TablaProductos listaproductos={Productos}/>
           ) : (
           <FormularioProducto 
           setMostrarTabla={setMostrarTabla} 
           setProductos={setProductos}
           listaproductos={Productos}
           />
        )}
        
        <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false} />
       </div>
    )
}
const TablaProductos =({listaproductos}) => {
    useEffect( ()=>{
        console.log('Listado del back', listaproductos);
    }

    )
    const submitEdit=(e)=>{
        e.preventDefault();
        console.log(e);
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold text-gray-900 ">PEDIDOS</h2>
            <form onSubmit={submitEdit} >
            <table className="tabla">
            <thead>
                <tr>
                    <th>Tipo de vela</th>
                    <th>Tamaño</th>
                    <th>Olor</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {listaproductos.map((Productos) => {
                    return (
                        <FilaProducto key={nanoid()} Productos={Productos}/>
                    ) ;
                })}

            </tbody>
        </table>

            </form>
          

        </div>
        
    )
};

const FilaProducto =({Productos})=>{
    const [Editar,setEditar]=useState(false)
    return(
        <tr >
            {Editar?(
                <>
                <td><input type="text" defaultValue={Productos.tipo} /></td>
                <td><input type="text" defaultValue={Productos.tamaño} /></td>
                <td><input type="text" defaultValue={Productos.aroma} /></td>
                </>
         
            ):(
            <>
                <td>{Productos.tipo}</td>
                <td>{Productos.tamaño}</td>
                <td>{Productos.aroma}</td>
            
            </>
            )}
            <td>
                <div className="flex w-full justify-around">
                    {Editar? (
                    <button type="submit">
                        <i onClick={()=>setEditar(!Editar)} class="fas fa-check-circle text-green-500 hover:text-green-800"></i>

                    </button>)
                    
                    :(
                    <i onClick={()=>setEditar(!Editar)} className="fas fa-edit text-green-500 hover:text-green-800 "></i>
                )}
                    <i className="fas fa-trash-alt text-red-400 hover:text-red-700"></i>
                </div>
            </td>
        </tr>

    )
}

const FormularioProducto =({setMostrarTabla,listaproductos, setProductos}) =>
 {
    const form = useRef(null);
    
    
   const submitForm = (e) =>{
       e.preventDefault();
       const fd = new FormData (form.current);

       const nuevoProducto ={};
       fd.forEach((value,key)=> {
        nuevoProducto[key]=value;

    });

    setMostrarTabla(true)
    toast.success('¡Pedido enviado!',{
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    
    
    setProductos([...listaproductos,nuevoProducto]);
   };

    return <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold text-gray-900 ">  CREAR PEDIDO</h3>
            <form ref={form} onSubmit={submitForm}  className="grid grid-cols-3">
            <label htmlFor="tipo">
                    Tipo de la vela
                    <select  
                    
                    className= "bg-gray-50 border border-blue-600 p-2 rounded-lg m-2 "
                     name="tipo" 
                     required
                     defaultValue={''}>                    
                        <option disabled value={''}>Seleccionar</option>
                        <option >Relajante</option>
                        <option >Anti-Estres</option>
                        <option >Tranquilidad</option>
                        
                    </select>
                    
                </label>
                <label htmlFor="tamaño">
                    Tamaño de la vela
                    <select  
                    
                    className= "bg-gray-50 border border-blue-600 p-2 rounded-lg m-2 "
                     name="tamaño"
                     required 
                     defaultValue={''}>                    
                        <option disabled value={''} >Seleccionar</option>
                        <option >Grande</option>
                        <option >Mediana</option>
                        <option >Pequeña</option>
                    </select>
                    
                </label>
                <label htmlFor="aroma">
                   Aroma de la vela
                    <select
                    
                    className= "bg-gray-50 border border-blue-600 p-2 rounded-lg m-2 " 
                    name="aroma" 
                    required
                    defaultValue={''}
                    >                    
                        <option disabled value={''} >Seleccionar</option>
                        <option >Vainilla</option>
                        <option >Manzana</option>
                        <option >Frutal</option>
                    </select>
                    
                </label>
               
                
                <button 
                type="submit"
                className=" justify-between col-span-4 bg-yellow-200 p-2 rounded-full hover:bg-yellow-300 text-white mt-11"
                
                >
                    
                     Enviar pedido</button>
            </form>
         </div>;
}
export default Productos
