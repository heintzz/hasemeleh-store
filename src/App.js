import { Navigate, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import About from './components/About'
import Container from './components/Container'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import AppContext from './context/AppContext'
import NotFound from './components/NotFound'
import './App.css'

export default function App() {
    const {isLogin} = useContext(AppContext)

    return (
        <Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/:itemId" element={<About />} />
                <Route path="/login" element={isLogin ? <Navigate to='/' /> : <Login />} />
                <Route path="/signup" element={isLogin ? <Navigate to='/' /> : <Signup />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Container>
    )
}
