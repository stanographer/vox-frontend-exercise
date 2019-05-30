import React from 'react';
import styled from 'styled-components';

// Redux
import { connect } from 'react-redux';

// Components
import Column from '../components/Column';

// Drag and drop.
import { DragDropContext } from 'react-beautiful-dnd';
import { reorderLive } from '../redux/actions';

const StoryList = styled.div`
   padding: 8px;
`;

const mapStateToProps = state => {
  console.log('mapStateToProps', state);
  return {
    state: state
  };
};

// const mapDispatchToProps = {
//   reorderLive,
// };

class ConnectedQueueContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

     this.state = this.props.state;
  }

  // const mockDragResult = {
  //   draggableId: '0',
  //   type: 'TYPE',
  //   reason: 'DROP',
  //   source: {
  //     droppableId: '0',
  //     index: 0,
  //   },
  //   destination: {
  //     droppableId: 'live',
  //      index: 1,
  //   },
  // };

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

    // Reorder the story IDs for the column.
    const column = this.state.columns[source.droppableId];
    const newStoryIds = Array.from(column.storyIds);
    newStoryIds.splice(source.index, 1);
    newStoryIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
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
  };

  render() {
    return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const stories = column.storyIds.map(storyId => this.state.stories[storyId]);

            console.log('stories', stories);
            console.log('column', column);

            return <Column key={column.id} column={column} stories={stories} />;
          })}
        </DragDropContext>
    );
  }
}

const QueueContainer = connect(
    mapStateToProps,
    null,
)(ConnectedQueueContainer);

export default QueueContainer;