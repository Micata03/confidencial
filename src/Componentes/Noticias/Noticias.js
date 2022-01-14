import React from 'react'
import Deportes from './Deportes/Deportes'
import Nacional from './Nacional/Nacional'
import Internacional from './Internacional/Internacional'
function Noticias() {
    return (
        <div>
            
           <article className='destacados'>
               <small></small>
               <h6>destacados:</h6>
               <ul className='destacados-links'>
                   <li>OEA</li>
                   <li>Boleto estudiantil</li>
                   <li>Abierto de Francia</li>
               </ul>
           </article>
            <Nacional/>
            <Internacional/>
            <Deportes/>
        </div>
    )
}

export default Noticias
