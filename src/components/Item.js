import { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleCartButton = () => {
    setIsInCart(currVal => !currVal)
  }

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? 'remove' : 'add'} onClick={handleCartButton} >{isInCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
