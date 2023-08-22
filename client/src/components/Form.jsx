import * as React from 'react';

export default function Form() {
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>¡Bienvenid@ de vuelta!</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Por favor ingrese sus datos.</p>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Ingrese su email'
                    />
                </div>
                <div>
                    <label className='text-lg font-medium'>Contraseña</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Ingrese su contraseña'
                        type="password"
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input
                            type="checkbox"
                            id='remember'
                        />
                        <label className='ml-2 font-medium text-base'>Recordar por 30 días</label>
                    </div>
                    <button className='font-medium text-base text-violet-500'>Contraseña olvidada</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Iniciar Sesión</button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>¿No estas registrado?</p>
                    <button className='font-medium text-base text-violet-500 ml-2'>Regístrarse</button>
                </div>
            </div>
        </div>
    )
}