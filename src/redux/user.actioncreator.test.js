import { getAllUsers } from './user.actioncreator';
import { actTypes } from './action-types';
import { getUsers } from '../services/user.services';

jest.mock('../services/user.services');

describe('Given the action creators', () => {
  const dispatch = jest.fn();

  const response = [
    {
      id: 1,
      name: 'Manuel Saez',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618'
        }
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains'
      }
    }
  ];

  const users = [
    {
      city: 'Gwenborough',
      email: 'Sincere@april.biz',
      fullname: 'Manuel Saez',
      key: 1
    },
    {
      city: 'Wisokyburgh',
      email: 'Shanna@melissa.tv',
      fullname: 'Ervin Howell',
      key: 2
    }
  ];
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('When the getAlluser Actio is called Then dispatch type & payload', async () => {
    getUsers.mockResolvedValue(Promise.resolve(response));

    await getAllUsers()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actTypes.userGetUsers,
      payload: users
    });
  });
});
