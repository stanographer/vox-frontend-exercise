import React from 'react';
import styled from 'styled-components';

// Redux
import { connect } from 'react-redux';

// Components
import QueueComponent from '../components/QueueComponent';

// Drag and drop.
import { Droppable } from 'react-beautiful-dnd';

const StoryList = styled.div`
   padding: 8px;
`;

const mapStateToProps = state => {
  console.log('mapStateToProps', state);
  return {
    state: state
  };
};

const ConnectedQueueContainer = ({state}) => (
    <Droppable droppableId={state.columns.queue.id}>
      {provided => (
        <StoryList
            // Provides props that you need to be applied to the designated droppable component.
            {...provided.droppableProps}

            // A styled component has a callback prop named innerRef which returns the component DOM node.
            // Property which is a fxn used to supply the DOM node of your component to beautiful-dnd.
            ref={provided.innerRef}
        >
          <QueueComponent
              title={state.columns.queue.title}
              state={state}
          />
          {/*Increases the necessary space when moving droppable items*/}
          {provided.placeholder}
        </StoryList>
      )}
    </Droppable>

);

const QueueContainer = connect(mapStateToProps)(ConnectedQueueContainer);

export default QueueContainer;