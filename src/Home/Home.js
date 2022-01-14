import React from 'react'
import Noticias from '../Componentes/Noticias/Noticias'
import Header from '../Componentes/Header/Header'
import NavBar from '../Componentes/NavBar/NavBar'

function Home() {
    return (
        <>
        <NavBar/>    
        <Header/>
        <Noticias/>
        </>
    )
}

export default Home
