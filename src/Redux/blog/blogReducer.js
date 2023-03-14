import { ADD_BLOG,ADD_USER_BLOG,ADD_COMMENT,ADD_USER_COMMENT } from "./blogActionTypes"
const initialState={
    blog:[],
    comment:[],
    error:{}
    }
const blogReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_BLOG:
            const newState={...state}    
            newState.blog=action.payload  
            console.log('adding user data in reducer', newState)
        return {
            ...newState
        }
        case ADD_USER_BLOG:
            state.blog=[action.payload,...state.blog]    
        return {
            ...state
        }
        case ADD_COMMENT:
            state.comment=[...action.payload,...state.comment]    
        return {
            ...state
        }
        case ADD_USER_COMMENT:
            state.comment=[...state.comment,action.payload]    
        return {
            ...state
        }
        default:return state
    }
}
export default blogReducer;