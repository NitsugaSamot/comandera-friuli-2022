import Image from "next/image"
import useComandera from "../hooks/useComandera"
import axios from "axios"

const Categoria = ({categoria}) => {

    const {categoriaActual, handleClickCategoria} = useComandera()

    const {nombre, icono, id} = categoria
    return(
        <div className={`${categoriaActual?.id === id ? 'bg-amber-300' : ''} flex items-center gap-2 w-full border p-5 hover:bg-amber-500`}>
            <Image
                width={33}
                height={33}
                src={'/assets/img/icon.png'}
                alt="imagen icono"
            />
        
        <button type="button" className="text-2xl font-bold hover:cursor-pointer" onClick={() => handleClickCategoria(id)}>
            {nombre}
        </button>
        </div>      
    )

}

export default Categoria