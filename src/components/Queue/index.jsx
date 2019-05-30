import React from 'react';
import { connect } from 'react-redux';

// Components
import StoryCard from '../../components/StoryCard';

// Drag and drop.
import { Draggable } from 'react-drag-and-drop'

const mapStateToProps = state => {
  console.log('mapStateToProps', state);
  return {
    stories: state.stories
  };
};

const ConnectedQueue = ({stories}) => {
  console.log(stories);
  return (
      <section className="px-6 py-4">
        <h1 className="
        font-bold
        text-xl
        pb-4
        ">
          Queue
        </h1>
        {
          stories.map(({id, title, author, publishedTime, img, liveOrder}) => (
              <Draggable type="story" data={JSON.stringify(id)}>
                  <StoryCard
                      key={id}
                      title={title}
                      author={author}
                      img={img}
                      publishedTime={publishedTime}
                      liveOrder={liveOrder}
                  />
              </Draggable>
              )
          )
        }
      </section>
  );
};

const Queue = connect(mapStateToProps)(ConnectedQueue);

export default Queue;