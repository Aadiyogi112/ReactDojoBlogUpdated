import { REGISTER_USER } from "./registerActionTypes"
const initialState={
    registeredUser:[

        ]
    }
const registerReducer=(state=initialState,action)=>{
    switch(action.type){
        case REGISTER_USER:
            state.registeredUser.push(action.payload)    
        return {
            ...state
        }
        default:return state
    }
}
export default registerReducer;