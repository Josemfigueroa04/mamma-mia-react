import { useContext } from "react";
import { PizzasContext } from "../contexto/PizzasContext";
import { useNavigate } from "react-router-dom";

const PizzaCard = ({ pizza }) => {
    const navigate = useNavigate();

    const { addToCart } = useContext(PizzasContext);
    
    const handleNavigate = () => {
        navigate(`/pizza/${pizza.id}`);
    };
    
    return (
    
    <div className="card " >
        <img src={pizza.img} class="card-img-top " alt={pizza.name} />
            <div className="card-body">
                <h2 className="card-title text-uppercase text-decoration-underline text-center">{pizza.name}</h2>
                <hr />
                <h4>Ingredientes:</h4>
                <ul className="list-unstyled justifi">
                    {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>🍕 {ingredient}</li>
                    ))}
                </ul>
                <h4 className="card-text text-center">Precio: ${pizza.price}</h4>
                <div className="d-flex justify-content-end gap-2">
                    <button onClick={handleNavigate} className="btn btn-primary"> Ver Mas👀</button>
                    <button onClick={() => addToCart(pizza)} className="btn btn-danger">Agregar al Carrito🛒</button>
                    
                </div>
            </div>
    </div>
      
    );
};

export default PizzaCard;