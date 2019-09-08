/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Character } from 'store/characters/types';


const CharacterCard : React.FC<Character> = char => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt={char.name} />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{char.name}</p>
          <p className="subtitle is-6">{char.height} cm | {char.mass} kgs</p>
        </div>
      </div>

      <div className="content" />
    </div>
  </div>
);

export default CharacterCard;
