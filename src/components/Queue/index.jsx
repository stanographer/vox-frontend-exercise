import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  stories: state.stories
});

const ConnectedQueue = () => {
  return (
      <section>
        <h1 className="
        font-bold
        text-xl
        px-6
        py-2">Queue</h1>
        <ul>
          {/*{*/}
          {/*  stories.map(el => (*/}
          {/*          <li key={el.title}>*/}
          {/*            {el.title}*/}
          {/*          </li>*/}
          {/*      )*/}
          {/*  )*/}
          {/*}*/}
        </ul>
      </section>
  );
};

const Queue = connect(ConnectedQueue)(mapStateToProps, null);

export default Queue;