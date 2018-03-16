import {createStore} from 'redux'
const defaultState={
    value:0
}
const reducer = (state = defaultState,action)=>{
    if (action.type==="") {
    //   // var randomArray = [
    //   //     '#cc0000','#00cc00', '#0000cc'
    //   //  ];
    //   //  var item = randomArray[Math.floor(Math.random()*randomArray.length)];
    //   return {value:state.value+1}
    }
    return state;
  }
export default store=createStore(reducer)