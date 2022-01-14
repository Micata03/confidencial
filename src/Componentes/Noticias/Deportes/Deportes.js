import React from 'react'
import {noticiasSport} from '../../../data'

function Deportes() {
    return (
        <aside className='noticiasSport'>
        {noticiasSport.map((items)=>{
            const {id,  titulo, subtitulo, categoria} = items 
            return(
                 <div className={id} key={id}>
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

export default Deportes
