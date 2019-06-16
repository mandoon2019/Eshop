import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'

import Header from './component/header'
import Description from './component/description'
import SizeBox from './component/sizebox'
import ImageBox from './component/imagebox'
import CartToast from './component/carttoast'


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <CartToast />
        <div className="sectionWrap">
          <ImageBox />
          <div className="rightSide">
            <Description />
            <SizeBox />
          </div>
        </div>
      </div>
    </Provider>
  )
}
export default App