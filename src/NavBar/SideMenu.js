import React from 'react'
import {social} from '../data'
import {GoMail} from 'react-icons/go'

function SideMenu({closeMenu}) {

   
    return (
        <div className='sidemenu-overlay'>
            <div className='sidemenu'>
                <div className='sidemenu-close'>
                    <div className='sidemenu-svg' onClick={closeMenu}></div>
                    <div className='sidemenu-img'></div>
                </div>
                
                <div className='secciones'>
                    <div className='columna1'>
                        <ul className='ul-secciones'>
                            <li><a>Política</a></li>
                            <li><a>Opinión</a></li>
                            <li><a>PxMolina</a></li>
                            <li><a>Nación</a></li>
                            <li><a>Economía</a></li>
                            <li><a>Nicas Migrantes</a></li>
                            <li><a>Internacionales</a></li>
                            <li><a>Niú</a></li>
                            <li><a>Reporte Ciudadano</a></li>
                            <li><a>English</a></li>
                        </ul>
                    </div>
                    <div className='columna2'>
                        <ul className='ul-secciones'>
                        <li><a>TV</a></li>
                            <li><a>Radio</a></li>
                            <li><a>Especiales</a></li>
                            <li><a>Galería</a></li>
                            <li><a>Cultura</a></li>
                            <li><a>Empresas</a></li>
                            <li><a>Tecnología</a></li>
                            <li><a>Vida & Ocio</a></li>
                            <li><a>Deportes</a></li>
                            <li><a>Espectáculos</a></li>
                        </ul>
                    </div>
                </div>
                <span className='sidemenu-span1'></span>
                <div className='red-point'></div>
                <h3 className='sidemenu-subtitulo'>Lea el especial más reciente</h3>
                <p className='sidemenu-text'>Los rehenes electorales de Daniel Ortega y Rosario Murillo</p>
                <span className='sidemenu-span2'></span>
                
                    <ul className='links'>
                        {social.map((link)=>{
                            const {id, url, img} = link;
                            return(
                                <li key={id}>
                                    <a href={url}>{img}</a>
                                </li>
                            )
                        })}
                    </ul>
                <div className='sidemenu-grilla'>
                    <div className='grilla'>
                        <GoMail className='grilla-icon'/>
                        <p className='grilla-text'>Alertas</p>
                    </div>
                    <div className='grilla'>
                    <GoMail className='grilla-icon'/>
                        <p className='grilla-text'>Boletines</p>
                    </div>
                    <div className='grilla'>
                    <GoMail className='grilla-icon'/>
                        <p className='grilla-text'>Test Político</p>
                    </div>
                    <div className='grilla'>
                    <GoMail className='grilla-icon2'/>
                        <p className='grilla-text'>Membresía</p>
                    </div>
                    <div className='grilla'>
                    <GoMail className='grilla-icon2'/>
                        <p className='grilla-text'>Donaciones</p>
                    </div>
                    <div className='grilla'>
                    <GoMail className='grilla-icon2'/>
                        <p className='grilla-text'>Anuncios</p>
                    </div>
                    
                </div>   
                <div className='anuncio-div'></div> 
                <small className='anuncio'>ANUNCIO</small>

            </div>
            
        </div>
    )
}

export default SideMenu
