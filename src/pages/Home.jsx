import { useEffect, useState } from 'react';
import Header from '../componentes/Header';
import CardPizza from '../componentes/CardPizza';
import { pizzas } from '../data/pizzas';
import { useCart } from '../context/useCart';

const Home = () => {
  const { agregarAlCarrito } = useCart();
  const [listaPizzas, setListaPizzas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerPizzas = async () => {
      try {
        const respuesta = await fetch('http://localhost:5000/api/pizzas');

        if (!respuesta.ok) {
          throw new Error('No se pudo obtener la información de las pizzas.');
        }

        const datos = await respuesta.json();
        setListaPizzas(datos);
      } catch {
        setListaPizzas(pizzas);
      } finally {
        setCargando(false);
      }
    };

    obtenerPizzas();
  }, []);

  return (
    <main>
      <Header />

      <div className="container my-5">
        {cargando && <p className="text-center">Cargando pizzas...</p>}

        <div className="row justify-content-center g-4">
          {listaPizzas.map((pizza) => (
            <div className="col-auto" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                onAdd={() => agregarAlCarrito(pizza)}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
