import React from 'react'
import './App.css'
import UserList from './components/UserList'

const App: React.FC = () => {
  return (
    <div>
      <h1>Users List</h1>
      <UserList />
    </div>
  );
};

export default App;
