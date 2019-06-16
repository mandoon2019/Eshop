
const defaultState={
  items:[
    { name: 'Classic Tee', prize: 75, size: 'S' },
    { name: 'Classic Tee', prize: 75, size: 'M' },
    { name: 'Classic Tee', prize: 75, size: 'L' }
  ],
  cartItems: [],
  isClick:false,
  selected:'',
  total:0
}


export default (state= defaultState,action)=>{
  switch(action.type){
    case 'ADD_GOODS':
      const tempItem = state.items.find(item => item.size === state.selected)
      const existedItem = state.cartItems.find(item => item.size === state.selected) 
      const total = state.total + 1
      if (existedItem) {
        tempItem.number += 1
        return {
          ...state,
          total
        }
      }
      tempItem.number = 1
      return {
        ...state,
        cartItems: [...state.cartItems, tempItem],
        total
      }
    case 'CLICK_BUTTON':
    return {
      ...state,
      isClick: !state.isClick
    }
    case 'SELECT_SIZE':
    return{
      ...state,
      selected:state.items[action.id].size
    }
    default:
    return state
}
}


export const selectSize = id => ({ type:'SELECT_SIZE',id })
export const addToCart = () => ({ type: 'ADD_GOODS' })
