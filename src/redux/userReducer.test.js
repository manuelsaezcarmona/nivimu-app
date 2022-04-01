import { actTypes } from './action-types';
import { userReducer } from './userReducer';

describe('Given the userReducer', () => {
  const initialState = {
    users: []
  };
  test('Without Action return the default state', () => {
    const state = userReducer({ key: 0 }, {});
    expect(state).toEqual({ key: 0 });
  });
  test('Actiontype @user/getUsers return Array of users', () => {
    const action = {
      type: actTypes.userGetUsers,
      payload: [
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
    const state = (initialState, action);
    expect(state.payload.length).toBe(2);
  });
});
