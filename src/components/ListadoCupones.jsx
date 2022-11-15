import React from 'react'
import useCupones from '../hooks/useCupones'
import {Row} from 'react-bootstrap'
import Cupon from './Cupon'


const ListadoCupones = () => {
const {cupones} = useCupones();

    console.log("CUPONES->>>>>>",cupones);
  return (
    <Row className='mt-5'>
        {cupones.map(cupon=>(
            <Cupon
                key={cupon.id}
                cupon={cupon}
            />
        ))}
    </Row>
  )
}

export default ListadoCupones