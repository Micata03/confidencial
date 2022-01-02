import React, {useState} from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'



function NavBar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isSideMenuOpen, setSideMenuOpen] = useState(false)

    const openSearch = ()=>{
        setIsSearchOpen(true)

    }

    const openSideMenu = ()=>{
        setIsSearchOpen(false)
    }
    return (
        <nav>
            <div className='navBar'>
                {isSearchOpen ? 
                <>
                <div className='toggle' onClick={openSideMenu}></div>
                <input className='input-search'placeholder='   Buscar...' />
                <div className='input-svg'></div>
                
                
                
               
               
                </>
                : 
                <>
                <div className='toggle' onClick={openSideMenu}></div>
                <div className='search' onClick={openSearch}></div>
                <div className='weather-btn'></div>
                <p className='weather-temp'>26°c</p>
                <h6 className='weather-text'>Managua, 15 de junio, 2021</h6>
                <h6 className='membresia'>Unite a la Membresía</h6>
                <small>.</small>
                <h6 className='suscripcion'>Suscribite al boletín</h6>
            
                </>
                }
                
                </div>
                
                
        </nav>
    )
}

export default NavBar
