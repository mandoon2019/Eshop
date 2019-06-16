import {connect} from 'react-redux'
import './style.css'
import {selectSize,addToCart} from '../../store/reducer.js'
import React, { Component } from 'react'

class SizeBox extends Component {
  
  render() {
    const { items, selected, selectSize, addToCart } = this.props
    return (
      <div className="SizeBox">
        <p>
          SIZE<span className="mark">*</span><span className="sizeName">{selected}</span>
        </p>
        <ul>
        {items.map((item,i)=>(
          <li key={i} 
          onClick={() => selectSize(i)}
          >{item.size}</li>
          ))}
        </ul>
        <button onClick={()=>addToCart()}>
          ADD TO CART
        </button>
      </div>
    )
  }
}

export default connect(
  state=>state,
{selectSize,addToCart}
)(SizeBox)
