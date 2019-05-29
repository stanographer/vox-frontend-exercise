import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  console.log('mapStateToProps', state);
  return {
      stories: state.stories
  };
};

const ConnectedQueue = ({stories}) => {
  console.log(stories);
  return (
      <section>
        <h1 className="
        font-bold
        text-xl
        px-6
        py-2">Queue</h1>
        <ul>
          {
            stories.map(({id, title}) => (
                    <li key={id}>
                      {title}
                    </li>
                )
            )
          }
        </ul>
      </section>
  );
};

const Queue = connect(mapStateToProps)(ConnectedQueue);

export default Queue;