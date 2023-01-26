import { OutputAction, OutputState } from "../interfaces/reducer";

const reducer = (state: OutputState, action: OutputAction) => {
    switch(action.type){
      case "ADD_ACTION":
        return{
          ...state,
          actions: [...state.actions, {
            date: new Date(), output: action.payload, ms: `[${(Math.random() * 200).toFixed()}ms]`
          }]
        }
      default:
        return { ...state };
    }
  }

  export default reducer;
