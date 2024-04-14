import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import NotFound from './pages/NotFound'
import Container from './components/Container'
import Home from './pages/home/Home'
import Footer from './pages/Footer'
import Signin from './pages/auth/Signin'
import useGlobalStore from './state/GlobalState'

export default function App() {
  const loginModal = useGlobalStore((state) => state.loginModalOpen)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Container />}>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      {loginModal && <Signin />}
      <Footer />
    </BrowserRouter>
  )
}
