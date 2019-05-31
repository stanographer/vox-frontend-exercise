import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

// Components
import Nav from './components/Nav';
import Column from './components/Column';


const mapStateToProps = state => {
  return {
    state: state
  };
};

const Container = styled.div`
  display: flex;
  padding: 0 2rem;
`;

class ConnectedApp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = this.props.state;
  }

  onReset = () => {
     this.setState(this.props.state);
  };

  onDragEnd = result => {
    const {
      destination,
      source,
      draggableId,
    } = result;

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
        },
      };

     this.setState(newState);
     return;
    }

    // Moving from one column to another.
    const startStoryIds = Array.from(start.storyIds);
    startStoryIds.splice(source.index, 1);

    const newStart = {
      ...start,
      storyIds: startStoryIds,
    };

    const endStoryIds = Array.from(end.storyIds);
    endStoryIds.splice(destination.index, 0, draggableId);

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
        <div>
          <header>
            <Nav onReset={this.onReset} />
          </header>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Container>
              {this.state.columnOrder.map(columnId => {
                const column = this.state.columns[columnId];
                const stories = column.storyIds.map(storyId => this.state.stories[storyId]);

                return <Column key={column.id} column={column} stories={stories} />;
              })}
            </Container>
          </DragDropContext>
        </div>
    )
  }
}

const App = connect(
    mapStateToProps,
)(ConnectedApp);

export default App;
