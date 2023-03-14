import { LOGIN_USER } from "./loginActionTypes";

const initialState = {
  userName: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      const stateCopy = { ...initialState };
      stateCopy.userName = action.payload;
      return {
        ...stateCopy,
      };
    default:
      return state;
  }
};
export default loginReducer;
