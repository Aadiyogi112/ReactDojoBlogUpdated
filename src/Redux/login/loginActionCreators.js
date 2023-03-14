import { LOGIN_USER } from "./loginActionTypes"

export const loginUser=(payload)=>{
    return {
        type:LOGIN_USER,
        payload
    }
}
