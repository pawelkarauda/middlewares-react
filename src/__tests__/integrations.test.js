import React from 'react'
import {mount} from 'enzyme'
import moxios from 'moxios'
import Root from 'Root'
import App from 'components/App'

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      {
        id: 1,
        name: 'comma 2'
      },
      {
        id: 2,
        name: 'comma 12'
      },
      {
        id: 13,
        name: 'comma 21'
      }
    ]
  });

})

afterEach(() => {
  moxios.uninstall();
})

it('can fetch a list of comments and display them', (done) => {
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );

  wrapper.find('.fetch-comments').simulate('click');
  
  moxios.wait(() =>{

    wrapper.update();
    expect(wrapper.find('li').length).toEqual(3);
    done();
    wrapper.unmount();
    
  })
})