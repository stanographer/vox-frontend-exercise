import React from 'react';

// Components
import Nav from './components/Nav';
import Queue from './components/Queue';
import LiveOnPage from './components/LiveOnPage';

const App = () =>
    <div>
      <header>
        <Nav />
      </header>
      <div className="px-2 py-3">
        <div className="
          flex
          flex-wrap
          sm:flex-wrap
          md:flex-no-wrap
          mx-10">
          <div className="
            h-12
            w-full
            sm:w-full
            md:w-1/2
            h-12">
            <div className="
            bg-white
            h-auto
            px-6
            py-4">
              <Queue />
            </div>
          </div>
          <div className="
            w-full
            sm:w-full
            md:w-1/2
            px-4
            h-12">
            <div className="bg-gray-400 h-auto">
              <LiveOnPage />
            </div>
          </div>
        </div>
      </div>
    </div>;

export default App;
