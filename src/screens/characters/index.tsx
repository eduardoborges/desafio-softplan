/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, Link } from '@reach/router';
import { AppState } from 'store/types';
import { indexRequest } from 'store/characters/actions';
import debouce from 'lodash.debounce';
import { slugfy } from 'helpers';


interface OwnProps {
  bar?: boolean
}

type Props = OwnProps & RouteComponentProps;

const CharactersScreen: React.FunctionComponent<Props> = (props) => {
  const characters = useSelector((state:AppState) => state.CHARACTERS);
  const dispatch = useDispatch();

  const [isEndedScroll, setEndedScroll] = useState(false);

  const isEndScroll = () => {
    const position = window.innerHeight + document.documentElement.scrollTop;
    const height = document.documentElement.offsetHeight;
    return position + 150 >= height;
  };

  useEffect(() => {
    dispatch(indexRequest());
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="columns">

          <div className="column">
            <h1 className="title">
              Personagens
              {' '}
              {characters.loading && <small>...</small>}
            </h1>

          </div>

          <div className="column">
            <div className="field has-addons">
              <div className="control is-expanded">
                <input className="input is-medium" type="text" placeholder="Encontre um personagem" />
              </div>
              <div className="control">
                <a className="button is-medium">
                  Search
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="columns is-multiline">
          {characters.data.map(c => (
            <div className="column is-4" key={c.name}>
              <Link to={`/characters/${slugfy(c.name)}`}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">{c.name}</p>
                        <p className="subtitle is-6">@johnsmith</p>
                      </div>
                    </div>

                    <div className="content" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="columns">
          <div className="column">
            <button type="button" className="button is-fullwidth" onClick={() => dispatch(indexRequest())}>Carregar mais</button>
            <div className="title has-text-centered has-text-grey">{characters.loading ? 'Carregando...' : '•'}</div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default CharactersScreen;
