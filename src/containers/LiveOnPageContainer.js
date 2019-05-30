import React from 'react';
import LiveOnPageComponent from '../components/LiveOnPageComponent';
import { Droppable } from 'react-drag-and-drop';
import { connect } from 'react-redux';
import { addToLive } from '../redux/actions';

function mapStateToProps(state) {
  return {
    state,
  };
}

const mapDispatchToProps = {
  addToLive,
};

const ConnectedLiveOnPageContainer = ({addToLive}) => {
  return (
      <Droppable types={['story']} onDrop={addToLive.bind(this)}>
        <LiveOnPageComponent />
      </Droppable>
  );
};

const LiveOnPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConnectedLiveOnPageContainer);

export default LiveOnPageContainer;