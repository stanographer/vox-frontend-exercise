import React from 'react';
import styled from 'styled-components';

// Redux
import { connect } from 'react-redux';

// Components
import Column from '../components/Column';

// Drag and drop.
import { DragDropContext } from 'react-beautiful-dnd';
import { addToLive, reorderLive } from '../redux/actions';

const Container = styled.div`
  display: flex;
`;

const mapStateToProps = state => {
  console.log('mapStateToProps', state);
  return {
    state: state
  };
};

const mapDispatchToProps = {
  addToLive,
  reorderLive,
};

class ConnectedQueueContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = this.props.state;
  }

  onDragEnd = result => {

    const {
      destination,
      source,
      draggableId
    } = result;

    // console.log('column', state.columns[source.droppableId]);

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

    // Reorder the story IDs for the same column.
    const start = this.state.columns[source.droppableId];
    const end = this.state.columns[destination.droppableId];

    if (start === end) {
      const newStoryIds = Array.from(start.storyIds);
      newStoryIds.splice(source.index, 1);
      newStoryIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        storyIds: newStoryIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        }
      };

      this.setState(newState);
    }

    // Moving from one column to another.
    const startStoryIds = Array.from(start.storyIds);
    const endStoryIds = Array.from(end.storyIds);

    startStoryIds.splice(source.index, 1);
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
       ...this.state,
       columns: {
         ...this.state.columns,
         [newStart.id]: newStart,
         [newEnd.id]: newEnd,
       },
     };

     this.setState(newState);
  };

  render() {
    return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container>
            {this.state.columnOrder.map(columnId => {
              const column = this.state.columns[columnId];
              const stories = column.storyIds.map(storyId => this.state.stories[storyId]);

              console.log('stories', stories);
              console.log('column', column);

              return <Column key={column.id} column={column} stories={stories} />;
            })}
          </Container>
        </DragDropContext>
    );
  }
}

const ColumnContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConnectedQueueContainer);

export default ColumnContainer;