import './index.css'
import Header from './static/Header'
import Personal from './pages/Personal'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './static/Footer'
import Business from './pages/Business'
import Companies from './pages/Companies'

function App() {

  return (
    <>
    <div >
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Personal />}/>
          <Route path='/business' element={<Business />}/>
        </Routes>
        {/* <Route path='/companies' element={<Companies />}/> */}
        <Footer />
    </BrowserRouter>
    </div>
   
    </>
  )
}

export default App
