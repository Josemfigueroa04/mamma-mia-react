import { Link } from "react-router-dom";
import { useContext } from "react";
import { PizzasContext } from "../contexto/PizzasContext";

const Nav = () => {
    const {total} = useContext(PizzasContext);
    return(
        <nav class="navbar bg-primary" >
        <div class="container-fluid">
            <Link class="navbar-brand" to="/">🍕Pizzeria Mamma-Mia!</Link>
           
            
            <Link className="navbar-brand" to="/card">🛒${total}</Link>
            
        </div>
        </nav>
    );
}

export default Nav;
