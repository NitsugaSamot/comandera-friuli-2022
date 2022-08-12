import Image from "next/image"
import { formatearDinero } from "../helpers"
import useComandera from "../hooks/useComandera"

const Producto = ({producto}) => {

  const {handleSetProducto, handleChangeModal} = useComandera()

    const {nombre, imagen, precio} = producto

  return (
    <div className='border p-3'>
        <Image 
            src={`/assets/img/${imagen}.jpg`} 
            alt={`Imagen Platillo ${nombre}`}
            width={200}
            height={200}    
        />
        <div className="p-5">
            <h3 className="text-2xl font-bold text-amber-700">{nombre} </h3>
        <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>
        
        <button
          type="button"
          className="bg-red-600 hover:bg-green-800 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={()=>{
            handleChangeModal()
            handleSetProducto(producto)
          }}
          >
            Agregar
        </button>

        </div>
    </div>
  )
}

export default Producto