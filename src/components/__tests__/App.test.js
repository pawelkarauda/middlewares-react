import React from 'react'
import App from 'components/App'
import { shallow } from 'enzyme'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it('should contain comment box', () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('should contain comment list', () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});