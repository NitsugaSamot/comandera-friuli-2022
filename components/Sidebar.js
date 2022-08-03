import Image from "next/image"
import useComandera from "../hooks/useComandera"
import Categoria from "./Categoria"

const Sidebar = () => {

    const {categorias} = useComandera()

  return (
    <>
        <Image width={300} height={350} src="/assets/img/logo.jpeg" alt="imagen logo"/>


        <nav className="mt-10">
            {categorias.map(categoria => (
                <Categoria 
                    key={categoria.id}
                    categoria={categoria}            
                />
            ))}
        </nav>
        
    </>


  )
}

export default Sidebar