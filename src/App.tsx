import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import NotFound from './pages/NotFound'
import Container from './components/Container'
import Home from './pages/home/Home'
import Footer from './pages/Footer'
import Signin from './pages/auth/Signin'
import useGlobalStore from './state/GlobalState'
import UserHome from './pages/user/UserHome'
import { Toaster } from 'react-hot-toast'
import Logout from './pages/auth/Logout'
import Signup from './pages/auth/Signup'

export default function App() {
  const loginModal = useGlobalStore((state) => state.loginModalOpen)
  const signupModal = useGlobalStore((state) => state.signupModalOpen)
  return (
    <BrowserRouter>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<Container />}>
          <Route index element={<Home />} />
          <Route path='user' element={<UserHome />} />
          <Route path='logout' element={<Logout />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
      {loginModal && <Signin />}
      {signupModal && <Signup />}
    </BrowserRouter>
  )
}
