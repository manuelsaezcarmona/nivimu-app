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
  const page = render(
    <Provider store={configureStore()}>
      <App />
    </Provider>
  );
  const ulElement = screen.getByText(/add new component to of table/i);
  const tableElement = screen.getByRole('table');
  expect(ulElement).toBeInTheDocument();
  expect(tableElement).toBeInTheDocument();
  expect(page).toMatchSnapshot();
});
