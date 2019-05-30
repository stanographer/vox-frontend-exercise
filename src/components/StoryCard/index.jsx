import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import PublishedTime from '../../components/PublishedTime';

const StoryCard = ({title, author, publishedTime, img}) => {
  return (
      <Fragment>
        <div className="
        border
        border-borderGray
        border-solid
        max-w-sm
        w-full
        lg:max-w-full
        lg:flex
        mb-6">
          <div
              className="
              h-auto
              lg:h-32
              lg:w-32
              flex-none
              bg-cover
              text-center
              overflow-hidden"
              style={{
                backgroundImage: `url(${img})`
              }}
              title="Man holding a shotglass">
          </div>
          <div
              className="
              bg-white
              p-4
              sm:p-2
              flex
              flex-col
              justify-between
              leading-normal">
            <div className="
            mb-0
            lg:mt-4
            ">
              <div className="
              text-gray-900
              font-bold
              text-lg">
                {title}
              </div>
            </div>
            <div className="
            flex
            items-center
            mb-2">
              <div className="text-sm">
                <p className="
                pb-2
                pt-1
                sm:m-0
                text-infoTextGray
                leading-none">
                  {author}
                </p>
                <PublishedTime
                    time={publishedTime}
                    classes="
                    text-xs
                    text-infoTextGray
                    mb-2
                    sm:m-0"
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
  );
};

StoryCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  publishedTime: PropTypes.object,
  liveOrder: PropTypes.instanceOf(Date),
};

export default StoryCard;
