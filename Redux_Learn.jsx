import { createStore } from 'redux'

// const incrementCount = () =>{
//    return{
//     type:'INCREMENT'
//    }
// }

// const incrementCount = (payload = {}) =>({
//   type:'INCREMENT',
//   incementBy : typeof payload.incementBy === 'number' ? payload.incementBy : 1
// })

const incrementCount = ({incementBy} = {}) =>({
  type:'INCREMENT',
  incementBy : typeof incementBy === 'number' ? incementBy : 1
})

const decrementCount = ({decrementBy, adddthismore} = {})=>({
  type : 'DEC',
  decrementBy : typeof decrementBy === 'number' ? decrementBy : 1,
  adddthismore : typeof adddthismore === 'number' ? adddthismore : 0,
})

const store = createStore((state={count:0}, action)=>{
  if(action.type==='INCREMENT'){
        return{
          count : state.count + action.incementBy
        }
  }else if(action.type==='DEC'){
    return{
      count : state.count - action.decrementBy + action.adddthismore
    }
  }
  else{
  return state
  }
})

const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
})

// store.dispatch({
//   type:'INCREMENT',
//   incementBy : 100
// })

store.dispatch(incrementCount({incementBy : 100}))
store.dispatch(incrementCount())

store.dispatch(decrementCount({decrementBy : 2, adddthismore : 50}))

unsubscribe();

store.dispatch(incrementCount())

store.dispatch(decrementCount())
