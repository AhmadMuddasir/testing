import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Movies from './components/Movies'
import WebSeries from './components/WebSeries'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Navbar></Navbar>
<Header></Header>
<Movies></Movies>
<WebSeries></WebSeries>
<Footer></Footer>
</>
  )
}

export default App
