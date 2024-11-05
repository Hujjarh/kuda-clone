import './index.css'
import Header from './static/Header'
import Personal from './pages/Personal'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Business from './pages/Business'
import Companies from './pages/Companies'
import Help from './pages/Help'

function App() {

  return (
    <>
    <div >
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Personal />}/>
          <Route path='/business' element={<Business />}/>
          <Route path='/companies' element={<Companies />}/>
          <Route path='/help' element={<Help />}/>
        </Routes>
    </BrowserRouter>
    </div>
   
    </>
  )
}

export default App
