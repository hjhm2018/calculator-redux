const initState = {
    porosityList: [],
    bmiList: []
  };
  
  const Reducer = (state = initState, action) => {
    switch (action.type) {
      case "NEW_BMI":
        action.payload.id = Math.random();
        return {
          ...state,
          bmiList: [...state.bmiList, action.payload]
        };
      case "DELETE_BMI":
        const newBMIList = state.bmiList.filter(item => item.id !== action.payload);
        return {
          ...state,
          bmiList: newBMIList
        };
        case "NEW_POROSITY":
          action.payload.id = Math.random();
          return {
            ...state,
            porosityList: [...state.porosityList, action.payload]
          };
        case "DELETE_POROSITY":
          const newPorosityList = state.porosityList.filter(item => item.id !== action.payload);
          return {
            ...state,
            porosityList: newPorosityList
          };
      default:
        break;
    }
    return state;
  };
  
  export default Reducer;
  