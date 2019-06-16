import React from 'react'
import { useSelector } from 'react-redux';
import './style.css';


const CartToast = () => {
  const { isClick,cartItems} = useSelector(state => state);
  let styleName = isClick ? '' : 'toastActive';
  return (
    <div className={`toastWrap ${styleName}`}>
     <ul>{
        cartItems.map((item,i)=>
          (
            <li key={i}>
              <img src={require('../../asset/classic-tee.jpg')} alt='Cloth' />
                <div>
                  <p>Classic Tee</p>
                  <p>{item.number} x <span>$75.00</span></p>
                  <p>Size: {item.size}</p>
                </div>
            </li>
          )
        )
      }
    </ul> 
    </div>
  )
}
export default CartToast