import React from 'react'
import Logo from 'Media/logo.png'
import 'Styles/StylesTailw.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <nav className="w-72 border border-blue-500 h-full flex flex-col bg-blue-50 p-4">
            <Link to="/admin">
            <div className='max-w-md w-full'>
                <img className='mx-auto h-40 w-auto' src={Logo} alt='Logo' />
            </div>
            </Link>
            <div className="my-4">
            <Ruta ruta ="/admin/perfil" nombre='Perfil' icono="fas fa-user"/>
            <Ruta ruta='/admin/productos' nombre='Pedidos' icono="fas fa-cart-plus"/> 
            <Ruta ruta ="/admin/usuarios"nombre='Usuarios'  icono="fas fa-users"/>

            </div>
            
            
            
            
            
            <button className="flex items-start"> Cerrar Sesion </button>
         </nav>
    )
}
const Ruta =({ruta,nombre,icono})=>{
    return(
    <Link to={ruta}>
            <button className="my-1 flex items-start p-1 bg-blue-400 hover:bg-blue-700 w-full text-white rounded-md"> 
            <i class={`${icono} w-10`}/>
            {nombre} </button>
            </Link>)
}

export default Sidebar
