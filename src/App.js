import React from 'react';

// Components
import Nav from './components/Nav';
import MainContainer from './containers/MainContainer';

const App = () =>
    <div>
      <header>
        <Nav />
      </header>
        <MainContainer />
    </div>;

export default App;
