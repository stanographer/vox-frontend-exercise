import React from 'react';

const Nav = ({onReset, onSaveState}) => {
  return (
      <nav className="
      border-b
      border-borderGray
      flex
      items-center
      justify-between
      flex-wrap
      bg-white
      p-4
      ">
        <div className="
       w-full
       block
       flex-grow
       lg:flex
       lg:items-center
       lg:w-auto">
          {/*Area to put logo and header items*/}
          <div className="text-sm lg:flex-grow" />
          <div>
            <button className="
            bg-infoTeal
            mx-1
            py-3
            px-4
            rounded
            text-white"
            onClick={onReset}>Reset
            </button>
            <button className="
            bg-successGreen
            mx-1
            py-3
            px-4
            rounded
            text-white"
            onClick={onSaveState}>
              Save Changes
            </button>
          </div>
        </div>
      </nav>
  );
};

export default Nav;