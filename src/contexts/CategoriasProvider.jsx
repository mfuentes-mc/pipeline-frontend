import axios from "axios";
import { useState, useEffect, createContext,ReactNode } from "react";


const CategoriasContext = createContext({})

const CategoriasProvider = ({children})=>{

    const[categorias, setCategorias] = useState([])

    const obtenerCategorias = async()=>{
        try{
            const categoriasData=[{"categoria":"Salud","key":"C0-1"},{"categoria":"Comida","key":"C0-2"},{"categoria":"Entretenimiento","key":"C0-3"},{"categoria":"Educacion","key":"CD0-4"},{"categoria":"Estilo de Vida","key":"C0-5"},{"categoria":"Hogar","key":"C0-6"},{"categoria":"Gimnasio","key":"C0-7"},{"categoria":"Hoteles","key":"C0-8"}]
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const {data} = await axios(url)
            console.log(JSON.stringify(data.drinks));



            setCategorias(categoriasData);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        obtenerCategorias()
    },[])

    return (
        <CategoriasContext.Provider
            value={{categorias}}
        >
            {children}
        </CategoriasContext.Provider>
    )

}

export {
    CategoriasProvider
}

export default CategoriasContext