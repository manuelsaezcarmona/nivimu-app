import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Table } from 'antd';
import configureStore from './redux/store';

import App from './App';

jest.mock('antd', () => ({
  Table: () => {
    const Table = 'Table';
    return <Table />;
  }
}));

test('renders App ', () => {
  render(
    <Provider store={configureStore()}>
      <App />
    </Provider>
  );
  const Element = screen.getByText(/add new component to of table/i);
  expect(Element).toBeInTheDocument();
});
