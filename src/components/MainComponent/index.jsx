import React from 'react';
import ColumnContainer from '../../containers/ColumnContainer';
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
            h-12">
            <div className="
            bg-white
            h-auto">
              <ColumnContainer />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Main;