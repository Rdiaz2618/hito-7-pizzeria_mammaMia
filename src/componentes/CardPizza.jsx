import { formatPrice } from '../utils/formatPrice';

const CardPizza = ({ name, price, ingredients, img, onAdd }) => {
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
          <button className="btn btn-outline-secondary btn-sm">Ver Más</button>
          <button className="btn btn-dark btn-sm" onClick={onAdd}>Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
