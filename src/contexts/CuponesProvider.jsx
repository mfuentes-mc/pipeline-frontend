import axios from "axios";
import { useState, useEffect, createContext,ReactNode } from "react";


const CuponesContext = createContext({})

const CuponesProvider = ({children})=>{

    const [cupones, setCupones] = useState([]);

    const consultarCupones = async datos=>{
        try{
            const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka`
            const {data} = await axios(url);
            const cuponesData=[{"titulo":"155 Belmont","logo":"https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg","descripcion":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","id":"15346"},{"titulo":"White Russian","logo":"https://www.thecocktaildb.com/images/media/drink/vsrupw1472405732.jpg","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","id":"12528"}]
            console.log('BUSQUEDA:',data);
            console.log(JSON.stringify(data));
            setCupones(cuponesData);
        }catch(error){
            console.log(error);
        }
    }

    return (
        <CuponesContext.Provider
            value={{
                consultarCupones,
                cupones
            }}
        >
            {children}
        </CuponesContext.Provider>
    )

}

export {
    CuponesProvider
}

export default CuponesContext