import { nanoid } from 'nanoid';
import axios from "axios";
import React, {useEffect,useState,useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'Styles/EstilosDeTabla.css'



const Productos = () => {
    
    const [MostrarTabla,setMostrarTabla] = useState(true);
    const [Productos,setProductos] = useState([]);
    const [TextoBoton,setTextoBoton] = useState("Hacer pedido");

    useEffect(()=>{
//Obtener lista desde el front
const options = {method: 'GET', url: 'http://localhost:5000/productos'};

axios.request(options)
.then(function (response) {
  setProductos(response.data);

}).catch(function (error) {
  console.error(error);
});

    },[MostrarTabla]
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
    const form= useRef(null);
    useEffect( ()=>{
        console.log('Listado del back', [listaproductos]);
    },[listaproductos] ); 

    
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold text-gray-900 ">PEDIDOS</h2>
            
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

            
          

        </div>
        
    )
};

const FilaProducto =({Productos})=>{
    const [Editar,setEditar]=useState(false);
    const [infoNuevoProducto, setinfoNuevoProducto]= useState({
        tipo: Productos.tipo,
        tamanio: Productos.tamanio,
        aroma:Productos.aroma,
    })
    const actualizarProducto = async()=>{
        console.log();
        const options = {
            method: 'PATCH',
            url: 'http://localhost:5000/productos/editar',
            headers: {'Content-Type': 'application/json'},
            data: {...infoNuevoProducto, id:Productos._id},
          };
          
          await axios.request(options).then(function (response) {
            toast.success('¡Pedido actualizado! Actualiza la pagina');
            console.log(response.data);
            setEditar(false);
          }).catch(function (error) {
              toast.error('No se pudo actualizar producto');
            console.error(error);
          });
    }
    const setEliminarProducto =async()=>{
        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/productos/eliminar',
            headers: {'Content-Type': 'application/json'},
            data: {id:Productos._id},
          };
          
          await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('¡Pedido eliminado! Actualiza la pagina');
          }).catch(function (error) {
            toast.error('No se pudo eliminar producto');
            console.error(error);
          });
    }
    return(
        <tr >
            {Editar?(
                <>
                <td><input type="text" value={infoNuevoProducto.tipo} onChange={e=>setinfoNuevoProducto({...infoNuevoProducto,tipo:e.target.value})}/></td>
                <td><input type="text" value={infoNuevoProducto.tamanio} onChange={e=>setinfoNuevoProducto({...infoNuevoProducto,tamanio:e.target.value})}/></td>
                <td><input type="text" value={infoNuevoProducto.aroma} onChange={e=>setinfoNuevoProducto({...infoNuevoProducto,aroma:e.target.value})} /></td>
                </>
         
            ):(
            <>
                <td>{Productos.tipo}</td>
                <td>{Productos.tamanio}</td>
                <td>{Productos.aroma}</td>
            
            </>
            )}
            <td>
                <div className="flex w-full justify-around">
                    {Editar? (
                    
                    <i onClick={()=>actualizarProducto()} 
                    className="fas fa-check-circle text-green-500 hover:text-green-800"></i>

                    )
                    
                    :(
                    <i onClick={()=>setEditar(!Editar)} className="fas fa-edit text-green-500 hover:text-green-800 "></i>
                )}
                    <i onClick={()=>setEliminarProducto()} className="fas fa-trash-alt text-red-400 hover:text-red-700"></i>
                </div>
            </td>
        </tr>

    )
}

const FormularioProducto =({setMostrarTabla,listaproductos, setProductos}) =>
 {
    const form = useRef(null);
    
    
   const submitForm = async (e) =>{
       e.preventDefault();
       const fd = new FormData (form.current);

       const nuevoProducto ={};
       fd.forEach((value,key)=> {
        nuevoProducto[key]=value;

    });
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/productos/nuevo',
        headers: {'Content-Type': 'application/json'},
        data: {tipo: nuevoProducto.tipo  , tamanio: nuevoProducto.tamanio , aroma: nuevoProducto.aroma}
      };

    await axios.request(options).then(function (response) {
        toast.success('¡Pedido enviado!',{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
        console.log(response.data);
      }).catch(function (error) {
        toast.error('¡El pedido no fue enviado!')
        console.error(error);
      });

    setMostrarTabla(true)
    
    
    
    /////////////////////aquiiiiiiiiiiiii
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
                <label htmlFor="tamanio">
                    Tamaño de la vela
                    <select  
                    
                    className= "bg-gray-50 border border-blue-600 p-2 rounded-lg m-2 "
                     name="tamanio"
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
