import { useContext } from 'react'
import ComanderaContext from '../context/ComanderaProvider'

const useComandera = () => {
    return useContext(ComanderaContext)
}

export default useComandera