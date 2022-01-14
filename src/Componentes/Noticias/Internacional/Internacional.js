import React from 'react'
import {noticiasInter} from '../../../data'

function Internacional() {
    return (
        <aside className='noticiasInter'>
        {noticiasInter.map((items)=>{
            const {id, img, titulo, subtitulo, categoria} = items 
            return(
                 <div className={id} key={id}>
                
            <img  src={img} alt={titulo}/>
            <small>{categoria}</small>
            <h3 >{titulo}</h3>
            <p>{subtitulo}</p>
            <hr/>
            </div> 
            )
        })}


          

    </aside>
    )
}

export default Internacional
