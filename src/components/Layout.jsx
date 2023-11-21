import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card'

const Layout = () => {
    const {data} = useContext(AppContext)
  return (
    <div className='ContainerCard'>
        {
            data.map(item => (//a cada uno de los datos que me trae data que es el get hacerle una card 
                <Card id={item.id} name={item.name} gender={item.gender} image={item.image} status={item.status} />
            ))
        }
    </div>
  )
}

export default Layout