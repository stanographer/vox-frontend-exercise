import React from 'react';

// Components
import Nav from './components/Nav';
import Main from './components/Main';

// Drag and drop.
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const App = () =>
    <div>
      <header>
        <Nav />
      </header>
      <DragDropContextProvider backend={HTML5Backend}>
        <Main />
      </DragDropContextProvider>

    </div>;

export default App;
