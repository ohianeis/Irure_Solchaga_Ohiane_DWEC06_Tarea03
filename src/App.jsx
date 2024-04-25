import React from 'react'
import Nav from './componentes/Nav'
import ContainerCocktel from './componentes/ContainerCocktel'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Contacto from './componentes/Contacto'
import CocktailDetalleContainer from './componentes/CocktailDetalleContainer'
import Error from './componentes/Error'

/*Definición páginas que tenemos con sus rutas */ 
const App = () => {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={ <ContainerCocktel />}/>
      <Route path='/about' element={ <Contacto />}/>
      <Route path='/item/:id' element={ <CocktailDetalleContainer />}/>
      <Route path='*' element={<Error/>} />

    </Routes>
  </BrowserRouter>
  )
}

export default App
