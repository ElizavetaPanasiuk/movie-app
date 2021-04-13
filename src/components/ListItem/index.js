import React from 'react';
import './ListItem.css';

const ListItem = ({name, image, description, genres }) => {
  return(
    <div className="list-item">
      <div className="banner">
        <img src={`${image}`} alt=""/>
      </div>
      <div className="list-item-information">
        <h2 className="film-name">
          {name}
        </h2>
        <ul className="film-genres-list">
          {genres.map(elem => <li className="film-genres-list-item">{elem}</li>)}
        </ul>
        <div className="film-description">
          {description}
        </div>
      </div>
    </div>
  )
}

export default ListItem;