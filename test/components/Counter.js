import { expect } from 'chai';

import React from 'react';
import { shallow } from 'enzyme';

import Counter from 'components/Counter';

describe('<Counter />', () => {
  it('should render 2 buttons', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('button')).to.have.length(2);
  });
});
