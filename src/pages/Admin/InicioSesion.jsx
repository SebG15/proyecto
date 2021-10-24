import React from 'react'
import { Link } from 'react-router-dom'
//import Google from 'Media/google_logo.png';
import { GoogleLogin } from 'react-google-login';
import Logo from 'Media/logo.png'
const InicioSesion = () => {
  const responseGoogle = (response) => {
    console.log(response);
  }

    return (
        <div className= 'flex w-full flex-col items-center  py-4'>
            <header>
                <div className='max-w-md w-full'>
                <img className='mx-auto h-40 w-auto' src={Logo} alt='Logo' />
      </div>
            </header>
            <h2 className='m3 text-center text-3xl font-extrabold text-gray-900'>
                Inicia Sesión</h2>
            <form className='mt-8 max-md'>
                <div>
                    <input 
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm'
                     type="email" placeholder="Correo Electronico" required/>
                    <input  
                    type="password"
                    name="password"
                    autoComplete="currunt-password"
                    placeholder='Contraseña'
                    className='mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm' 
                      required/>
                </div>
                <div className='mt-3 flex justify-between'>
                    <div className='flex items-center'>
                       
                        <input
                            id='remember-me'
                            name='remember-me'
                            type='checkbox'
                            className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                        />
                         <label htmlFor='remember-me' className='ml-1 block text-sm text-gray-900'>
                            Recordarme
                        </label>
                                    
                    </div>
                    <div className='text-sm'>
              <a href='/' className='font-medium text-blue-700 hover:text-blue-400'>
                ¿Olvidaste tu contraseña?
              </a>
            </div>
                </div>
                
                <div>
                <button
              type='submit'
              className='mt-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'></span>

              <Link to='/admin'>Iniciar sesión</Link>
            </button>
                </div>
                <div>
                    -------------------- ó -------------------
                </div>               

            </form>
            <div className='max-w-md w-full'>
        <div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4'>
            <div className='flex items-center justify-start'>
            <GoogleLogin
            clientId="290127191261-hvj1g6sh2r98utuium56d35lhv02rsjc.apps.googleusercontent.com"
            buttonText="Continua con Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
             
            </div>
          </button>
        </div>
      </div>
        </div>
    )
}

export default InicioSesion
