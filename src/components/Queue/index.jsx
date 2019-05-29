import React from 'react';
import { connect } from 'react-redux';

// Components
import StoryCard from '../../components/StoryCard';

const mapStateToProps = state => {
  console.log('mapStateToProps', state);
  return {
    stories: state.stories
  };
};

const ConnectedQueue = ({stories}) => {
  console.log(stories);
  return (
      <section>
        <h1 className="
        font-bold
        text-xl
        pb-4">
          Queue
        </h1>
        {
          stories.map(({id, title, author, publishedTime, img, liveOrder}) => (
                  <StoryCard
                      key={id}
                      title={title}
                      author={author}
                      img={img}
                      publishedTime={publishedTime}
                      liveOrder={liveOrder}
                  />
              )
          )
        }
      </section>
  );
};

const Queue = connect(mapStateToProps)(ConnectedQueue);

export default Queue;