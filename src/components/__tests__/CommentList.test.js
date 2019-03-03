import React from 'react'
import { mount } from 'enzyme'
import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapper;

beforeEach(() => {

  const initialState = {
    comments: ['comment one', 'comment two']
  }

  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

afterEach(() => {
  wrapper.unmount();
})

it('creates one LI per comment', () => {
  expect(wrapper.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  expect(wrapper.render().text()).toContain('comment one');
  expect(wrapper.render().text()).toContain('comment two');
})