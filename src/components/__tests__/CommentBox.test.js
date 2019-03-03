import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'
import Root from 'Root'

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  )
})

afterEach(() => {
  wrapper.unmount();
})

it('renders textarea and button', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(2);
});

describe('the textarea', () => {

  beforeEach(() => {
    wrapper.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapper.update();
  })

  it(' that user can type in value', () => {
    
    expect(wrapper.find('textarea').prop('value'))
    .toEqual('new comment');
  });
  
  it(' clears value after submit', () => {
    wrapper.find('textarea').simulate('submit');
    expect(wrapper.find('textarea').prop('value'))
    .toEqual('');
  });

});