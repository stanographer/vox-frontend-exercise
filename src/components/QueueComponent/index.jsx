import React from 'react';
import PropTypes from 'prop-types';

// Components
import StoryCard from '../../components/StoryCard';

const QueueComponent = ({title, state}) => {
  return (
      <section className="px-6 py-4">
        <h1 className="
              font-bold
              text-xl
              pb-4
              ">
          {title}
        </h1>
        {
          state.columns.queue.storyIds.map((storyId, index) => {
            if (state.stories[storyId]) {
              return <StoryCard
                  key={storyId}
                  id={index}
                  title={state.stories[storyId].title}
                  author={state.stories[storyId].author}
                  publishedTime={state.stories[storyId].publishedTime}
                  img={state.stories[storyId].img}
              />;
            }
          })
        }
      </section>
  );
};

QueueComponent.propTypes = {
  state: PropTypes.object,
};

export default QueueComponent;