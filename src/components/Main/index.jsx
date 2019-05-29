import React from 'react';
import Queue from '../Queue';
import LiveOnPage from '../LiveOnPage';

// Main component that wraps home-page elements.
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
              <Queue />
            </div>
          </div>
          <div className="
            w-full
            sm:w-full
            md:w-1/2
            px-6
            h-12">
            <div className="bg-gray-400">
              <LiveOnPage />
            </div>
          </div>
        </div>
      </div>
  )
};

export default Main;