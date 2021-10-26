import { nanoid } from 'nanoid';
import React, {useEffect,useState,useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'Styles/EstilosDeTabla.css'

  


const usuariosbackend=[
    {
    Nombre:"Johan Sebastián Gutiérrez",
    Documento:"1003123456",
    Puesto: "Admin"
  },
  {
    Nombre:"Mariana Rojas Romero",
    Documento:"102013032017",
    Puesto: "Lider ventas"
  
  },
  ]
const Usuarios = () => {
    const [MostrarTabla,setMostrarTabla] = useState(true);
    const [Usuarios,setUsuarios] = useState([]);
    const [TextoBoton,setTextoBoton] = useState("Agregar Usuario");

    useEffect(()=>{
        //Obtener lista desde el front
        setUsuarios(usuariosbackend);
            },[]
            )
        
            useEffect(()=> {
                if (MostrarTabla){
                    setTextoBoton("Agregar Usuario")
                }
                else {
                    setTextoBoton("Lista de Usuarios")
                }
            },[MostrarTabla]) 
    return (
        <div className="flex h-full w-full flex-col items-center justify-star p-10">
        <div className=" flex flex-col">
        <h2 className="text-3xl  font-extrabold"> PAGINA DE USUARIOS</h2>
        <button
         onClick={()=>{
             setMostrarTabla(!MostrarTabla);
             }} 
             className="text-white bg-blue-700 p-4 rounded-full m-6 w-60">
            {TextoBoton}
        </button>
        </div>
        
        {MostrarTabla ? (          
        <TablaUsuarios listaUsuarios={Usuarios}/>
        ) : (
        <FormularioUsuarios
        setMostrarTabla={setMostrarTabla} 
        setUsuarios={setUsuarios}
        listaUsuarios={Usuarios}
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

const TablaUsuarios =({listaUsuarios}) => {
    useEffect( ()=>{
        console.log('Listado del back', listaUsuarios);
    }

    )
    const submitEdit=(e)=>{
        e.preventDefault();
        console.log(e);
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold text-gray-900 ">USUARIOS</h2>
            <form onSubmit={submitEdit} >
            <table className="tabla">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Documento</th>
                    <th>Puesto</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {listaUsuarios.map((Usuarios) => {
                    return (
                        <FilaUsuario key={nanoid()} Usuarios={Usuarios}/>
                    ) ;
                })}

            </tbody>
        </table>

            </form>
          

        </div>
        
    )
};

const FilaUsuario =({Usuarios})=>{
    const [Editar,setEditar]=useState(false)
    return(
        <tr >
            {Editar?(
                <>
                <td><input type="text" defaultValue={Usuarios.Nombre} /></td>
                <td><input type="text" defaultValue={Usuarios.Documento} /></td>
                <td><input type="text" defaultValue={Usuarios.Puesto} /></td>
                </>
         
            ):(
            <>
                <td>{Usuarios.Nombre}</td>
                <td>{Usuarios.Documento}</td>
                <td>{Usuarios.Puesto}</td>
            
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

const FormularioUsuarios =({setMostrarTabla,listaUsuarios, setUsuarios}) =>
 {
    const form = useRef(null);
    
    
   const submitForm = (e) =>{
       e.preventDefault();
       const fd = new FormData (form.current);

       const nuevoUsuario ={};
       fd.forEach((value,key)=> {
        nuevoUsuario[key]=value;

    });

    setMostrarTabla(true)
    toast.success('¡Cambio exitoso!',{
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    
    
    setUsuarios([...listaUsuarios,nuevoUsuario]);
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
export default Usuarios
