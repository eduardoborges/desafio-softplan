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
import { CharacterCard } from 'components';
import { slugfy, searchList } from 'helpers';


interface OwnProps {
  bar?: boolean
}

type Props = OwnProps & RouteComponentProps;

const CharactersScreen: React.FunctionComponent<Props> = (props) => {
  const characters = useSelector((state:AppState) => state.CHARACTERS);
  const dispatch = useDispatch();

  const [search, setSearch] = useState<string>('');

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
                <input className="input is-medium" onChange={({ target }) => setSearch(target.value)} type="text" placeholder="Encontre um personagem" />
              </div>
              <div className="control">
                <button type="button" className="button is-medium">
                  Search
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="columns is-multiline">
          {searchList(characters.data, 'name', search).map(c => (
            <div className="column is-4" key={c.name}>
              <Link to={`/characters/${slugfy(c.name)}`}>
                <CharacterCard {...c} />
              </Link>
            </div>
          ))}
        </div>

        <div className="columns">
          <div className="column">
            <button type="button" className={`button is-fullwidth ${characters.loading && 'is-loading'}`} onClick={() => dispatch(indexRequest())}>Carregar mais</button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default CharactersScreen;
