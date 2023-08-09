import {
  CREATE_USER_ADDRESS,
  DELETE_USER_ADDRESS,
  GET_ALL_USER_ADDRESS,
  GET_ONE_USER_ADDRESS,
  UPDATE_USER_ADDRESS,
} from '../type';

const inital = {
  addUserAddress: [],
  allAddressUser: [],
  oneAddressUser: [],
  deleteAddressUser: [],
  editAddressUser: [],
};

const userAddressReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_USER_ADDRESS:
      return {
        ...state,
        addUserAddress: action.payload,
      };

    case GET_ALL_USER_ADDRESS:
      return {
        allAddressUser: action.payload,
      };

    case GET_ONE_USER_ADDRESS:
      return {
        oneAddressUser: action.payload,
      };

    case DELETE_USER_ADDRESS:
      return {
        deleteAddressUser: action.payload,
      };

    case UPDATE_USER_ADDRESS:
      return {
        ...state,
        editAddressUser: action.payload,
      };

    default:
      return state;
  }
};

export default userAddressReducer;
