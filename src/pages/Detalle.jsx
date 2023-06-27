import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzasContext } from '../contexto/PizzasContext';

const Detalle = () => {
  const { id } = useParams();
  const { pizzas, addToCart } = useContext(PizzasContext);

  const pizza = pizzas.find(pizza => pizza.id === id);

  return (
    <div className="container d-flex mt-3">
      
        {pizza && (
          <>
            <div className="gap-3 m-3" style={{ width: '50%' }}>
              <img src={pizza.img} alt="Pizza" className="img-fluid gap-3" style={{ Width: '80%', height: '100%' }} />
            </div>
            <div className="d-flex flex-column justify-content-between"style={{ width: '40%' }}>
              <div>
                <h4 className="fw-bold">{pizza.name}</h4>
                <hr />
                <p className="text-break">{pizza.desc}</p>
                <p className="fw-bold">Ingredientes:</p>
                <ul className="list-group">
                  {pizza.ingredients.map((ingredient, index) => (
                    <li className="list-group-item border-0 p-0" key={index}>
                      🍕 {ingredient}
                    </li>
                  ))}
                </ul>
                <hr />
                <p className="fw-bold fs-5 mt-3">Precio: ${pizza.price}</p>
              </div>
              <div className="align-self-end">
                <button className="btn btn-danger"onClick={() => addToCart(pizza)}>Añadir 🛒</button>
              </div>
            </div>
          </>
        )}
      </div>
    
  );
}

export default Detalle;