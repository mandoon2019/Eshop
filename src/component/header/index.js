import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './style.css'

const Header=()=>{
  const dispatch = useDispatch()
  const { total, isClick } = useSelector(state => ({
    isClick:state.isClick,
    total:state.total
  }))
  const activeStyle = isClick ? 'active' : ''

  return(
    <header className="header">
      <div className="button-wrap">
        <button 
          className={activeStyle}
          onClick={() => dispatch({ type: 'CLICK_BUTTON' })}> 
          My Cart({total})
        </button>
      </div>
    </header>
  )
}

export default Header
