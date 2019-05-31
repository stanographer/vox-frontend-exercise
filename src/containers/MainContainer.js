import React from 'react';
import { connect } from 'react-redux';
import {
  addToLive,
  reorderLive,
} from '../redux/actions';

// Components
import MainComponent from '../components/MainComponent';

// Drag and drop.
import { DragDropContext } from 'react-beautiful-dnd';


const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = {
  addToLive,
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
    const start = state.columns[source.droppableId];
    const end = state.columns[destination.droppableId];

    // If reordering the same column.
    if (start === end) {
      const newStoryIds = Array.from(start.storyIds);

      newStoryIds.splice(source.index, 1);
      newStoryIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        storyIds: newStoryIds,
      };

      const newState = {
        ...state.columns,
        [newColumn.id]: newColumn,
      };

      reorderLive(newState);
      return;
    }

    // Moving from one column to another.
    const startStoryIds = Array.from(start.storyIds);
    startStoryIds.splice(source.index, 1);

    const endStoryIds = Array.from(end.storyIds);
    endStoryIds.splice(destination.index, 0, draggableId);

    const newStart = {
      ...start,
      storyIds: startStoryIds,
    };

    const newEnd = {
      ...end,
      storyIds: endStoryIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newEnd.id]: newEnd,
      },
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

