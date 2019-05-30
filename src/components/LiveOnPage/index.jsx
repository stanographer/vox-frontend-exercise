import React from 'react';
import { Droppable } from 'react-drag-and-drop';

function onDrop(data) {
  alert(`a ${JSON.stringify(data)} dropped!`);
  // => banana
}

const LiveOnPage = () => {
  return (
      <Droppable types={['story']} onDrop={onDrop.bind(this)}>
        <section className="
        bg-white
        px-6
        py-4
        h-auto">
          <h1 className="
          font-bold
          text-xl
          pb-4">Live on the Page</h1>
        </section>
      </Droppable>
  );
};

export default LiveOnPage;