import { useContext } from "react";

import CuponesContext from '../contexts/CuponesProvider'


const useCupones = ()=>{
    return useContext(CuponesContext)
}

export default useCupones