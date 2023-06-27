import {useContext} from 'react';
import {PizzasContext} from '../contexto/PizzasContext';
import PizzaCard from '../componentes/PizzaCard';

const Home = () => {
    const {pizzas} = useContext(PizzasContext);

    return(
    <div className="container mt-5">
        <h1 className="text-center">¡Pizzería Mamma Mia!</h1>
        <h2 className="text-center">¡Las mejores pizzas de la ciudad!</h2>
        
        
        <div className="mt-6">
            {pizzas && (
            <div className="row gy-3 ">
                {pizzas.map((pizza) => (
                    <div className="col-md-4" key={pizza.id}>
                        <PizzaCard pizza={pizza} />  
                    </div>
                ))}
            </div>
            )}       
        </div> 
    </div>
    )
}

export default Home;