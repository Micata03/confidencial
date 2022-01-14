import React from 'react'
import {noticiasNac} from '../../../data'

function Nacional() {

    
    return (
        <aside className='noticiasNac'>
            {noticiasNac.map((items)=>{
                const {id, img, titulo, subtitulo} = items 
                return(
                     <div className={id} key={id}>
                <h3 >{titulo}</h3>    
                <img  src={img} alt={titulo}/>
                
                <p>{subtitulo}</p>
                <hr/>
                </div> 
                )
            })}


              

        </aside>
    )
}

export default Nacional
