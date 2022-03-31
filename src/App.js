import { Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getAllUsers } from './redux/user.actioncreator';
import { columns } from './services/columns';

function App() {
  // eslint-disable-next-line arrow-parens
  const { users } = useSelector(store => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Test instructions</h2>
      <ol>
        <li>
          <span>
            Create table comp from
            <a target="_blank" rel="noreferrer" href="https://ant.design/">
              Ant Design
            </a>
            with 3 columns: Name, Email, City.
          </span>
        </li>
        <li>
          <span>Load data for table from: </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://jsonplaceholder.typicode.com/users"
          >
            https://jsonplaceholder.typicode.com/users
          </a>
          .
        </li>
        <li>
          <span>
            Use
            <strong>
              <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
                Redux
              </a>
            </strong>
            or alternative.
          </span>
        </li>
        <li>
          <span>
            Add <strong>filter</strong> and <strong>sorter</strong>
            functionality to table
          </span>
        </li>
        <li>
          <span>
            Add new component to <strong>display always first row data</strong>{' '}
            of table
          </span>
        </li>
      </ol>
      <i>Estimate time: 1h</i>
      <Table
        dataSource={users}
        columns={columns}
        pagination={{ pageSize: 5 }}
        scroll={{ y: 240 }}
      />
      ;
    </div>
  );
}

export default App;
