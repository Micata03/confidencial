import React, {useState} from 'react'
import {InputGroup, FormControl, Container} from 'react-bootstrap'
import FormularioModal from './FormularioModal'
import SideMenu from './SideMenu'



function NavBar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isSideMenuOpen, setSideMenuOpen] = useState(false)
    const [isWeatherModalOpen, setWeatherModalOpen] = useState(false)
    const [isFormModalOpen, setFormModalOpen] = useState(false)

    const openSearch = ()=>{
        setIsSearchOpen(true)

    }
    const closeSearch = ()=>{
        setIsSearchOpen(false)
    }

    const openSideMenu = ()=>{
        setSideMenuOpen(true)
        
    }
    const closeSideMenu = ()=>{
        setSideMenuOpen(false)
    }
    const openModalWeather = ()=>{
        setWeatherModalOpen(true)
    }
    const closeModalWeather = ()=>{
        setWeatherModalOpen(false)
    }
    const openFormModal = () => {
        setFormModalOpen(true)
    }
    const closeFormModal = ()=>{
        setFormModalOpen(false)
    }
    const handleSubmenu =(e)=>{
        if(!e.target.classList.contains('input-search')){
          closeSearch()
        }
      }
    return (
        <nav>
            <div className='navBar' onMouseOver={handleSubmenu}>
                {isSearchOpen ? 
                <>
                <div className='toggle' onClick={openSideMenu}></div>
                {isSideMenuOpen ? 
                    <SideMenu closeMenu={closeSideMenu}/> : console.log('object')
                }
                <input className='input-search'placeholder='   Buscar...' />
                <div className='input-svg'></div>
                
                
                
               
               
                </>
                : 
                <>
                <div className='toggle' onClick={openSideMenu}></div>
                {isSideMenuOpen ? 
                    <SideMenu closeMenu={closeSideMenu}/> : console.log('object')
                }
                <div className='search' onClick={openSearch} ></div>
                <div className='weather-btn' onClick={openModalWeather}></div>
                {isWeatherModalOpen ? 
                    <div className='modal-overlay'>
                        <div className='weather-modal'></div>                          
                        
                        <div className='weather-modal-close' onClick={closeModalWeather}></div> 
                    </div>
                    :
                    console.log('object')
                }
                <p className='weather-temp'>26°c</p>
                <h6 className='weather-text'>Managua, 15 de junio, 2021</h6>
                <h6 className='membresia'>Unite a la Membresía</h6>
                <small>.</small>
                <h6 className='suscripcion' onClick={openFormModal}>Suscribite al boletín</h6>
                {isFormModalOpen ? 
                   <FormularioModal close={closeFormModal}/>
                    :
                    console.log('object')
                }
            
                </>
                }
                
                </div>
                
                
        </nav>
    )
}

export default NavBar
