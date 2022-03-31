import { actTypes } from './action-types';

const initialState = {
  users: [
    {
      key: 1,
      fullname: 'Manuel Saez',
      email: 'manu@manu.com',
      city: 'Alcazar'
    },
    {
      key: 2,
      fullname: 'Pepe Saez',
      email: 'pepe@saez.com',
      city: 'Ciudad Real '
    }
  ]
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actTypes.userGetUsers:
      return {
        ...state,
        users: action.payload
      };

    default:
      return state;
  }
};
