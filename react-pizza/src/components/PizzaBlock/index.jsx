import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function PizzaBlock({title, price, imageUrl, sizes, types}) {
    const [activeType, setActiveType] = React.useState(0)
    const [activeSize, setActiveSize] = React.useState(0)
    const typeNames = ['thin', 'classic']


    return (
  <div className="pizza-block">
    <h4 className="pizza-block__title">{title}</h4>
  <img
    className="pizza-block__image"
    src={imageUrl}
    alt="Pizza"
  />
 
  <div className="pizza-block__selector">
    <ul>
      {
        types.map((typeId) => (
         <li key={typeId}
         onClick={()=> setActiveType(typeId)}
         className={ activeType === typeId ? 'active' : ''}>{typeNames[typeId]}</li> 
        ))
      }
    </ul>
    <ul>
      {
        sizes.map((size, i) => (
        <li key={size}
        onClick={()=> setActiveSize(i)}
        className={ activeSize === i ? 'active' : ''}>{size} sm</li>
        ))
      }
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">{price} UAH</div>
    <button 
    
    className="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Add</span>
      <i>0</i>
    </button>
  </div>
</div>
    )
}



export default PizzaBlock