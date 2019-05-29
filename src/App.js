import React from 'react';
import './App.css';

// Components
import Nav from './components/Nav';
import Queue from './components/Queue';
import LiveOnPage from './components/LiveOnPage';

function App() {
  return (
      <div>
        <header>
          <Nav />
        </header>

        <div className="px-2 py-3">
          <div className="flex
          flex-wrap
          sm:flex-wrap
          md:flex-no-wrap
          mx-10">
            <div className="
            w-full
            sm:w-full
            md:w-1/2
            px-4
            h-12">
              <div className="bg-gray-500 h-12">
                <Queue />
              </div>
            </div>
            <div className="
            w-full
            sm:w-full
            md:w-1/2
            px-4
            h-12">
              <div className="bg-gray-400 h-12">
                <LiveOnPage />
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default App;
