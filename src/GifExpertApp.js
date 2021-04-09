import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    // const categories = ['One','Two']
    const [categories, setCategories] = useState(['One','Two'])
    const handleAdd = () => {
        setCategories([...categories, 'Three'])
    }


    return (
        <div>
            <h2>Gif Expert App</h2>
            
            <AddCategory/>
            
            <hr/>

            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                {
                    categories.map( category => {
                        return <li key={category} > {category} </li>
                    })
                }
            </ol>


        </div>
    )
}
