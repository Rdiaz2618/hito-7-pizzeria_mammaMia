import { formatPrice } from '../utils/formatPrice';
import { Link } from 'react-router-dom';

const CardPizza = ({ id, name, price, ingredients, img, onAdd }) => {
  return (
    <div className="card shadow-sm" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body text-center">
        <h5 className="card-title mb-2">Pizza {name}</h5>
        <p className="text-muted small mb-2">Ingredientes:</p>
        <ul className="ingredientes-lista">
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <p className="fw-bold">Precio: {formatPrice(price)}</p>
        <div className="d-flex justify-content-center gap-2">
          <Link className="btn btn-outline-secondary btn-sm" to={`/pizza/${id}`}>Ver más</Link>
          <button className="btn btn-dark btn-sm" onClick={onAdd}>Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
