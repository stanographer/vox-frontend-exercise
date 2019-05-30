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
        {Object.values(state.stories)
            .map((ob, key) => (
                    <StoryCard
                        key={key}
                        id={key}
                        title={ob.title}
                        author={ob.author}
                        publishedTime={ob.publishedTime}
                        img={ob.img}
                    />

                )
            )
        }
      </section>
  );
};

QueueComponent.propTypes = {
  state: PropTypes.object,
};

export default QueueComponent;