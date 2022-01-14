import React, {useState, useEffect} from 'react'
import {BsFillSunFill, BsFillSunriseFill,BsFillSunsetFill } from 'react-icons/bs'
import FormularioModal from './FormularioModal'
import SideMenu from './SideMenu'




function NavBar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isSideMenuOpen, setSideMenuOpen] = useState(false)
    const [isWeatherModalOpen, setWeatherModalOpen] = useState(false)
    const [isFormModalOpen, setFormModalOpen] = useState(false)
    const APP_ID = '4d319fb4'
    const APP_KEY = '40f57b35001e906078b22c5dc18de5e6'
    const url = `http://api.weatherunlocked.com/api/forecast/it.45100?app_id=${APP_ID}&app_key=${APP_KEY}`

    const [clima, setClima] = useState(null)

    useEffect(() => {

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setClima(data)
            })
    },[])
     
    console.log(clima)


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
                    <SideMenu closeMenu={closeSideMenu}/> : console.log('.')
                }
                <input className='input-search'placeholder='   Buscar...' />
                <div className='input-svg'></div>
                
                
                
               
               
                </>
                : 
                <>
                <div className='toggle' onClick={openSideMenu}></div>
                {isSideMenuOpen ? 
                    <SideMenu closeMenu={closeSideMenu}/> : console.log('.')
                }
                <div className='search' onClick={openSearch} ></div>
                <div className='weather-btn' onClick={openModalWeather}></div>
                {isWeatherModalOpen ? 
                    <div className='modal-overlay'>
                        <div className='weather-modal'>
                                <BsFillSunFill className='temperatura'/>
                                <h4 className='modal_temp_actual'>{clima.Days[0].Timeframes[4].temp_c}°c</h4>
                                <h5 className='modal_temp_min'>T.Min: {clima.Days[0].temp_min_c}°c</h5>
                                <h5 className='modal_temp_max'>T.Max: {clima.Days[0].temp_max_c}°c</h5>
                                <BsFillSunriseFill className='sunrise'></BsFillSunriseFill>
                                <h6 className='modal_temp_luz'>Amanece: {clima.Days[0].sunrise_time} Hs</h6>
                                <BsFillSunsetFill className='sunset'/>
                                <h6 className='modal_temp_noche'> Anochece: {clima.Days[0].sunset_time} Hs</h6>
                                
                            
                            
                        </div>                          
                        
                        <div className='weather-modal-close' onClick={closeModalWeather}></div> 
                    </div>
                    :
                    console.log('.')
                }

                <p className='weather-temp'>{clima.Days[0].Timeframes[4].temp_c}°c</p>
                <h6 className='weather-text'>{clima.Days[0].date}</h6>
                <h6 className='membresia'>Unite a la Membresía</h6>
                <small>.</small>
                <h6 className='suscripcion' onClick={openFormModal}>Suscribite al boletín</h6>
                {isFormModalOpen ? 
                   <FormularioModal close={closeFormModal}/>
                    :
                    console.log('.')
                }
            
                </>
                }
                
                </div>
                
                
        </nav>
    )
}

export default NavBar
