import { LOGIN_USER } from "./loginActionTypes"
const initialState={
    LoggedinUser:
        {}
    }
const loginReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN_USER:
            state.LoggedinUser=action.payload    
        return {
            ...state
        }
        default:return state
    }
}
export default loginReducer;