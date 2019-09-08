/* eslint-disable max-len */
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
          <Link to="/characters/1/edit" className="button">Editar</Link>
        </div>

      </div>

      <div className="columns is-multiline">
        <div className="column">
          <div className="content">
            <h2>Teste</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus cumque error necessitatibus possimus doloremque culpa quibusdam suscipit alias saepe eveniet, optio pariatur expedita aut magni ducimus praesentium adipisci dolor voluptatem aliquid, quod aliquam? Explicabo, voluptate quidem dolores velit quos laboriosam deserunt perferendis mollitia reprehenderit obcaecati consequuntur tenetur voluptas perspiciatis incidunt in quas! Asperiores quos totam nostrum doloribus numquam optio officiis esse error in tempore dolor pariatur, ex facere aperiam. In sed ratione explicabo laborum, inventore facilis quisquam, reiciendis nam blanditiis nemo aut labore? Perspiciatis, magni numquam in voluptatibus eveniet accusamus quam quaerat, quod a repudiandae ullam corporis molestiae non, ad dicta quas voluptatum illum sit! Rerum dolorum, possimus eaque illo natus repellat doloribus officia quibusdam earum debitis modi quod laborum facilis omnis accusamus unde culpa voluptatibus quas architecto aliquid pariatur quisquam. Consequatur, voluptatem asperiores. Commodi aperiam, eum corrupti aliquam soluta modi maiores eligendi pariatur quibusdam sapiente error delectus voluptate praesentium, recusandae facilis animi illum laborum atque voluptatibus deleniti provident ab. Quos expedita cupiditate alias earum, minima aliquid totam impedit quaerat, illo quis temporibus repudiandae nihil. Ullam ab dignissimos laborum obcaecati omnis quae, praesentium esse quod voluptatem tempore ipsa aut molestiae facere repellendus? Modi nulla asperiores ipsum magnam nam quaerat culpa? Tempore, deleniti saepe incidunt ipsam et id voluptatum earum porro doloremque accusamus, est quos necessitatibus non modi minima. Possimus, quidem ex! Libero quae natus sunt veniam, dignissimos non distinctio? Deleniti dignissimos impedit assumenda veniam alias. Eius alias hic voluptates provident iste, adipisci consectetur voluptatibus fugit. Expedita maxime in ab deleniti sed aspernatur mollitia iure quisquam natus voluptatem quod quaerat laboriosam saepe iusto, doloremque suscipit earum labore ut sequi eum atque optio neque! Veniam magnam eius commodi. Delectus quia temporibus mollitia modi, quibusdam maxime error neque facilis aut corporis enim impedit ratione blanditiis, veritatis unde assumenda voluptate repellendus ab ipsam.</p>
          </div>
        </div>
      </div>


    </div>
  </div>
);

export default CharactersScreen;
