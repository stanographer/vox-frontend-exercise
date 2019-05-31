import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { addToLive, resetAll } from './redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initialState as INITIAL_STATE } from './data';

// Components
import Nav from './components/Nav';
import Column from './components/Column';

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = {
  addToLive,
  resetAll,
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
    this.props.resetAll();
    this.setState(INITIAL_STATE);
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

  // Toast notifications.
  savedChanges = () => {
    if (!toast.isActive(this.toastId)) {
      toast('Your changes have been saved! 🌈', {
        containerId: 'A',
        type: 'success',
      });
    }
  };

  resetChanges = () => {
    if (!toast.isActive(this.toastId)) {
      toast('Your changes have been reset! 🦄', {
        containerId: 'A',
        type: 'info',
      });
    }
  };

  // To-do: implement failed-changes notification.
  failedChanges = () => {
    if (!toast.isActive(this.toastId)) {
      toast('Failed to save changes! 😩', {
        containerId: 'A',
        type: 'error',
      });
    }
  };

  render() {
    return (
        <div>
          <header>
            <ToastContainer containerId={'A'} position={toast.POSITION.TOP_CENTER} />
            <Nav
                onReset={() => {

                  // Fire reset and notification.
                  this.onReset();
                  this.resetChanges();
                }}
                onSaveState={async () => {

                  // Save changes to localstorage and fire notification.
                  await this.props.addToLive(this.state);
                  await this.setState(this.props.state);
                  this.savedChanges();
                }}
            />
          </header>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Container className="
            mx-5
            my-4
            px-0">
              {this.state.columnOrder.map(columnId => {
                const column = this.state.columns[columnId];
                const stories = column.storyIds.map(storyId => this.state.stories[storyId]);

                return <Column key={column.id} column={column} stories={stories} />;
              })}
            </Container>
          </DragDropContext>
        </div>
    );
  }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConnectedApp);

export default App;
