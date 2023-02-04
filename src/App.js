import React, { useState, useCallback } from 'react';
import './style.css';
import { List } from './List';

export default function App() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState('light');

  const getItems = useCallback(() => {
    return [number, +number + 1, +number + 2];
  }, [number]);

  return (
    <>
      <div>
        current Theme: {theme}
        <span
          className="btn btn-sm btn-outline-dark mx-3"
          onClick={() => {
            setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
          }}
        >
          Toggle Theme
        </span>
      </div>

      <div className="m-3">
        <input
          value={number}
          type="number"
          onChange={(e) => {
            setNumber((prev) => e.target.value);
          }}
        />
        <List getItems={getItems} />
      </div>
    </>
  );
}
