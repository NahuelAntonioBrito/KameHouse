import { CartContext } from "../../context/CartContext";
import { useContext } from "react"
import './CartItem.css';
import trash from '../img/trash.png';

const CartItem = ({ id, nombre, img, quantity, precio}) => {
    const { removeItem } = useContext(CartContext)
    return (
        <div className="CartItem">
            <img src={img} alt={nombre} className="CartImg"/>
            <h4 className="CartNombre">{nombre}</h4>
            <p className="CartQuantity">Cantidad: {quantity}</p>
            <p className="CartPrecio">Precio: ${precio}</p>
            <button onClick={() => removeItem(id)} className="Button"><img className="botonTrash" src = {trash} alt = "boton eliminar item"/></button>
        </div>
    );
};

export default CartItem;