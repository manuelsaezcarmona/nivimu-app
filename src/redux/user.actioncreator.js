/* eslint-disable arrow-parens */
import { getUsers } from '../services/user.services';
import { actTypes } from './action-types';

export const getAllUsers = () => async dispatch => {
  const data = await getUsers();

  const users = data.map(user => ({
    key: user.id,
    fullname: user.name,
    email: user.email,
    city: user.address.city
  }));

  dispatch({
    type: actTypes.userGetUsers,
    payload: users
  });
};
