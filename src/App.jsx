import React from 'react'
import '../src/css/style.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
// import { BrowserRouter, Routes, Route} from 
import '../src/main.css'


const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
 