import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

// Converts date object into string elements.
function getTimeStrings(time) {
  const timeObj = moment(time);

  return {
    time: timeObj.format('h:mm a'),
    day: timeObj.format('D'),
    month: timeObj.format('MMM'),
    year: timeObj.format('YYYY'),
  };
}

const PublishedTime = ({time, classes}) => {
  const timeStrings = getTimeStrings(time);

  return (
      <p className={classes}>
        Published {timeStrings.month} {timeStrings.day}, {timeStrings.year} at {timeStrings.time}
      </p>
  );
};

PublishedTime.propTypes = {
  time: PropTypes.instanceOf(Date),
  classes: PropTypes.string,
};

export default PublishedTime;