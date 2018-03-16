
export default reducer = (state = defaultState,action)=>{
    if (action.type==="setColorComC") {
      // var randomArray = [
      //     '#cc0000','#00cc00', '#0000cc'
      //  ];
      //  var item = randomArray[Math.floor(Math.random()*randomArray.length)];
      return {value:state.value+1}
    }
    return state;
  }