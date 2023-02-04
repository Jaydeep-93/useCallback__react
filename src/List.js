import React, { useState, useEffect } from 'react';

export const List = ({ getItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log('updating items in List');
    setItems(getItems());
  }, [getItems]);
  return (
    <>
      <div className="m-3">
        This is list
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </>
  );
};
