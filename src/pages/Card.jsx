import { useContext } from "react";
import { PizzasContext } from "../contexto/PizzasContext";


const Card = () => {
    const {cart,increment,decrement,total} = useContext(PizzasContext);

    return(
        <div className="container mt-5">
            <h1 className="text-center">Detalle del Pedido</h1>
            {cart.map ((item,index)=>(
                <div key={index}>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={item.img} className="img-fluid rounded-start" alt={item.name} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-uppercase text-decoration-underline text-center">{item.name}</h5>
                                    <h6 className="card-text text-center">{item.desc}</h6>
                                    <h6 className="card-text text-center">Precio: ${item.price}</h6>
                                    <div className="d-flex justify-content-end gap-2">
                                        <span>${item.price*item.count}</span>
                                        <button onClick={() => decrement(index)} className="btn btn-primary">-</button>
                                        <span>{item.count}</span>
                                        <button onClick={() => increment(index)} className="btn btn-danger">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="d-flex justify-content-end gap-2">
                <h4>Total: ${total}</h4>
            </div>
        </div>


    )
}

export default Card;