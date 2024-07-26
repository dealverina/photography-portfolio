import { Route, Routes } from 'react-router-dom'
import { About, Contact, Home, Portfolio } from '../pages'

export const AnimRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/portfolio' element={<Portfolio />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  )
}
