/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form, Input, Select,
} from '@rocketseat/unform';
import { AppState } from 'store/types';
import { updateChar } from 'store/characters/actions';
import { slugfy } from 'helpers';

interface OwnProps {
  slug?: string,
}

type Props = RouteComponentProps & OwnProps;

const CharactersScreen: React.FC<Props> = (props) => {
  const details = useSelector(({ CHARACTERS: { data } }: AppState) => data.find(p => slugfy(p.name) === slugfy(props ? props.slug : '')));
  const dispatch = useDispatch();

  const onSubmit = (form:any) => {
    dispatch(updateChar(form));
  };

  const onBack = () => {
    navigate(`/characters/${props.slug !== undefined ? props.slug : ''}`);
  };


  return (
    <div className="section">
      <div className="container">

        {details ? (
          <>
            <Form onSubmit={onSubmit} initialData={details}>
              <div className="modal is-active">
                <div className="modal-background" onClick={onBack} />
                <div className="modal-card">
                  <header className="modal-card-head">
                    <p className="modal-card-title">Editar Personagem</p>
                    <button type="button" className="delete" onClick={onBack} aria-label="close" />
                  </header>
                  <section className="modal-card-body">
                    <div className="columns">
                      <div className="column">
                        <h1 className="title">{details.name}</h1>
                      </div>
                    </div>

                    <div className="columns is-multiline">

                      <Input name="name" hidden />

                      <div className="column is-6">
                        <span className="label">Nascimento (anos estelares)</span>
                        <Input name="birth_year" type="text" className="input" />
                      </div>

                      <div className="column is-6">
                        <span className="label">Altura</span>
                        <Input name="height" type="text" className="input" />
                      </div>

                      <div className="column is-6">
                        <span className="label">Peso</span>
                        <Input name="mass" type="number" min={0} className="input" />
                      </div>

                      <div className="column is-6">
                        <span className="label">Olhos</span>
                        <Input name="eye_color" type="text" className="input" />

                      </div>

                      <div className="column is-6">
                        <span className="label">Cabelo</span>
                        <Input name="hair_color" type="text" className="input" />
                      </div>

                      <div className="column is-6">
                        <span className="label">Pele</span>
                        <Input name="skin_color" type="text" className="input" />
                      </div>

                      <div className="column is-6">
                        <span className="label">Gênero</span>
                        <div className="select is-fullwidth">
                          <Select name="gender" options={['female', 'male'].map(g => ({ title: g, id: g }))} />
                        </div>
                      </div>

                    </div>
                  </section>
                  <footer className="modal-card-foot">
                    <button type="submit" className="button is-primary">Salvar</button>
                    <button type="button" className="button is-danger" onClick={onBack}>Cancelar</button>
                  </footer>
                </div>
              </div>

            </Form>
          </>
        ) : <h1 className="title">Not found</h1>}


      </div>
    </div>
  );
};

export default CharactersScreen;
