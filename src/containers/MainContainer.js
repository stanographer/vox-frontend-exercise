import React from 'react';
import { connect } from 'react-redux';
import { reorderLive } from '../redux/actions';

// Components
import MainComponent from '../components/MainComponent';

// Drag and drop.
import { DragDropContext } from 'react-beautiful-dnd';


const mapStateToProps = state => {
  console.log('mapStateToProps', state);
  return {
    state: state
  };
};

const mapDispatchToProps = {
  reorderLive,
};

const ConnectedMainContainer = ({state, reorderLive}) => {
  const onDragEnd = result => {

    const {
      destination,
      source,
      draggableId
    } = result;

    console.log('column', state.columns[source.droppableId]);

    // If there's no destination, then return.
    if (!destination) return;

    // Check to see if the location of the draggable has changed.
    if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) {

      // The user dropped the item back to the source; so don't do anything.
      return;
    }

    // Reorder the story IDs for the column.
    const column = state.columns[source.droppableId];
    const newStoryIds = Array.from(column.storyIds);
    newStoryIds.splice(source.index, 1);
    newStoryIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      storyIds: newStoryIds,
    };

    const newState = {
      ...state.columns,
      [newColumn.id]: newColumn,
    };

    reorderLive(newState);
  };


  return (
      <DragDropContext onDragEnd={onDragEnd}>
        <MainComponent  />
      </DragDropContext>
  );

};

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConnectedMainContainer);

export default MainContainer;

