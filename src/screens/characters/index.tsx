/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { RouteComponentProps, Link } from '@reach/router';


interface OwnProps {
  bar?: boolean
}

type Props = OwnProps & RouteComponentProps;

const CharactersScreen: React.FunctionComponent<Props> = props => (
  <div className="section">
    <div className="container">

      <div className="columns">
        <div className="column">

          <h1 className="title">Tony Stark</h1>
        </div>

        <div className="column">
          <div className="button is-primary">Editar</div>
        </div>

      </div>

      <div className="columns is-multiline">
        {Array.from(new Array(25)).map((v, i) => (
          <div className="column is-4">
            <Link to="/character/1">

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
                      <p className="title is-4">John Smith</p>
                      <p className="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>

                  <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                    {' '}
                    <a>@bulmaio</a>
                  .
                    <a href="#">#css</a>
                    {' '}
                    <a href="#">#responsive</a>
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>


    </div>
  </div>
);

export default CharactersScreen;
