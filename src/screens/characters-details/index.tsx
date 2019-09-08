/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store/types';
import { slugfy } from 'helpers';
import dayjs from 'dayjs';

interface OwnProps {
  slug?: string,
}

type Props = RouteComponentProps & OwnProps;

const CharactersScreen: React.FC<Props> = (props) => {
  const details = useSelector((state: AppState) => state.CHARACTERS.data.find(p => slugfy(p.name) === slugfy(props ? props.slug : '')));
  const { children } = props;
  return (
    <>
      {children}
      <div className="section">
        <div className="container">

          {details ? (
            <>
              <div className="columns">
                <div className="column">
                  <h1 className="title">
                    {details.name}
                    {' '}
                    <Link to={`/characters/${slugfy(details.name)}/edit`} className="button is-small is-text">Editar</Link>
                    {' '}
                  </h1>
                </div>
              </div>

              <div className="columns is-multiline">

                <div className="column is-3">
                  <span className="label">Data de criação</span>
                  <span>{dayjs(details.created).format('DD/MM/YYYY [às] hh:mm:ss')}</span>
                  <hr />
                </div>

                <div className="column is-3">
                  <span className="label">Nascimento (anos estelares)</span>
                  <span>{details.birth_year}</span>
                  <hr />
                </div>

                <div className="column is-3">
                  <span className="label">Altura</span>
                  <span>{details.height} cm</span>
                  <hr />
                </div>

                <div className="column is-3">
                  <span className="label">Peso</span>
                  <span>{details.mass} kgs</span>
                  <hr />
                </div>

                <div className="column is-3">
                  <span className="label">Olhos</span>
                  <span>{details.eye_color}</span>
                  <hr />
                </div>

                <div className="column is-3">
                  <span className="label">Cabelo</span>
                  <span>{details.hair_color}</span>
                  <hr />
                </div>

                <div className="column is-3">
                  <span className="label">Pele</span>
                  <span>{details.skin_color}</span>
                  <hr />
                </div>

                <div className="column is-3">
                  <span className="label">Gênero</span>
                  <span>{details.gender === 'female' ? 'Mulher/fêmea' : 'Homem/Macho'}</span>
                  <hr />
                </div>


              </div>
            </>
          ) : <h1 className="title">Not found</h1>}


        </div>
      </div>
    </>
  );
};

export default CharactersScreen;
