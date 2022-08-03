import { formatearDinero } from '../helpers'
import useComandera from '../hooks/useComandera'

const ResumenProducto = ({producto}) => {

    const { handleEditarCantidades, handleEliminarProducto } = useComandera()

  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
        <div className="md:w-1/6">
            <p className="text-3xl font-bold">{producto.nombre}</p>
            <p className="text-xl font-bold mt-2">Cantidad: {producto.cantidad}</p>
            <p className="text-xl font-bold text-green-700 mt-2">Precio: {formatearDinero(producto.precio)}</p>
            
            <p className="text-sm font-bold text-gray-700 mt-2">Subtotal: {formatearDinero(producto.precio * producto.cantidad)}</p>
            
        </div>   

        <div>
            <button
                type='button'
                className='bg-green-900 flex gap-2 px-5 py-2 text-white rounded font bold uppercase shadow-md w-full'
                onClick={() => handleEditarCantidades(producto.id)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Editar
            </button>

            <button
                type='button'    
                className='bg-red-700 flex gap-2 px-5 py-2 text-white rounded font bold uppercase shadow-md w-full mt-5'
                onClick={() => handleEliminarProducto(producto.id)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Eliminar
            </button>
        </div> 
        
    </div>
  )
}

export default ResumenProducto