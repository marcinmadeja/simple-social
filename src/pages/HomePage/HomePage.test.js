import React from 'react';
import HomePage from './HomePage';

const defaultProps = {

};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {

  };

  const component = <HomePage {...actions} {...props} />;
  const shallowComponent = shallow(<HomePage />);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('HomePage', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
