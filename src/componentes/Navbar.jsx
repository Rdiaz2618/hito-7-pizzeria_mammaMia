import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';
import { formatPrice } from '../utils/formatPrice';

const Navbar = () => {
  const { total } = useCart();

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div className="d-flex w-100 justify-content-between align-items-center flex-wrap gap-2">
        <span className="navbar-brand mb-0">Pizzería Mamma Mia!</span>

        <div className="d-flex gap-2 flex-wrap">
          <Link className="btn btn-outline-light btn-sm" to="/">
            🍕 Inicio
          </Link>

          <Link className="btn btn-outline-light btn-sm" to="/login">
            🔐 Iniciar sesión
          </Link>
          <Link className="btn btn-outline-light btn-sm" to="/register">
            🔐 Registrarse
          </Link>
          <Link className="btn btn-outline-light btn-sm" to="/profile">
            🔓 Perfil
          </Link>
        </div>

        <Link className="btn btn-warning btn-sm" to="/cart">
          🛒 Total: {formatPrice(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
