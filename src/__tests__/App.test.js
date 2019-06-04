import React from 'react';
import App from '../App';
import data from '../data';
import { shallow } from 'enzyme';

// Create mock functions.
let [resetAll, addToLive] = new Array(2).fill(jest.fn());

function shallowSetup() {
  const props = {
    state: {...data},
    resetAll,
    addToLive,
  };

  // Wrapper instance around rendered output.
  const enzymeWrapper = shallow(<App {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Shallow rendered App module.', () => {
  it('Should render the main App module with the list of cards.', () => {
    const {enzymeWrapper, props} = shallowSetup();
    expect(enzymeWrapper.find({title: 'Fill Murray'}).to.have.property({style: 'background-image: url("https://www.fillmurray.com/300/300")'}));
  });
});

