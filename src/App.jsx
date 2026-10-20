import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Home from './pages/Home';
import Registro from './pages/Registro';
import InicioSesion from './pages/InicioSesion';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Perfil from './pages/Perfil';
import NoEncontrado from './pages/NoEncontrado';
import { useUser } from './context/useUser';
import './App.css';

function App() {
  const { token } = useUser();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={token ? <Navigate to="/" replace /> : <Registro />} />
        <Route path="/login" element={token ? <Navigate to="/" replace /> : <InicioSesion />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={token ? <Perfil /> : <Navigate to="/login" replace />} />
        <Route path="/404" element={<NoEncontrado />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
