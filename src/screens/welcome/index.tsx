/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'store';
import { indexRequest, addRequest, removeRequest } from 'store/todos/actions';

interface OwnProps {
  bar?:boolean
}

type Props = OwnProps & RouteComponentProps;

const Welcome : React.FunctionComponent<Props> = (props) => {
  const todos = useSelector((state:AppState) => state.TODOS);
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>('');

  useEffect(() => {
    dispatch(indexRequest());
  }, []);

  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hello world!</h1>
          <div className="columns">
            <div className="column">
              <div className={`control ${todos.loading && 'is-loading'}`}>
                <input className="input" value={value} onChange={e => setValue(e.target.value)} />
              </div>
            </div>
            <div className="column">
              <button className="button is-primary" type="button" onClick={() => dispatch(addRequest(value))}>Add Todo</button>
            </div>
          </div>
          <ul>
            {todos.data.map(todo => (
              <li>
                <input checked={todo.complete} type="checkbox" name="" id="" onChange={() => {}} />
                {' '}
                {todo.title}
                {' '}
                <button type="button" className="button is-small is-text" onClick={() => { dispatch(removeRequest(todo)); }}>remove</button>
                {' '}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
