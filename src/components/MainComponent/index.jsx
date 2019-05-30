import React from 'react';
import QueueContainer from '../../containers/QueueContainer';
import LiveOnPageContainer from '../../containers/LiveOnPageContainer';

// MainComponent component that wraps home-page elements.
const Main = () => {
  return (
      <div className="px-2 py-3 min-h-screen">
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
            h-auto">
              <QueueContainer />
            </div>
          </div>
          <div className="
            w-full
            sm:w-full
            md:w-1/2
            px-6
            h-12">
            <div className="bg-gray-400">
              <LiveOnPageContainer />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Main;