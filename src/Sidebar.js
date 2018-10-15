import React from 'react';

const Sidebar = (props) => {
  return (
    <aside className="App-sidebar">
      <h3>Rubriques</h3>
      <ul>
        <li><a href="#">Cuisine</a></li>
        <li><a href="#">Sport</a></li>
        <li><a href="#">Pétanque</a></li>
        <li><a href="#">Informatique</a></li>
        <li><a href="#">People</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
