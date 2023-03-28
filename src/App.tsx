import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menus';

function App() {

  const menuItems = [
    {
      id: 1,
      label: 'Menu item 1',
      subMenuItems: [
        {
          id: 5,
          label: 'Sub-menu item 1.1',
        },
    ]
    },
    {
      id: 2,
      label: 'Menu item 2',
      subMenuItems: [
        {
          id: 3,
          label: 'Sub-menu item 2.1',
        },
        {
          id: 4,
          label: 'Sub-menu item 2.2',
        },
      ],
    },
  ];

  return (
    <div className="App">
      <header className="App-header">

        <div className="container">
          <Menu menuItems={menuItems} />
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

