import React from 'react';
import { mount } from 'enzyme';

import Login from '../src/Components/Login';

test('clicking login button calls our login function', () => {
  let state = false;
  const handleLogin = () => {
    state = !state;
  };
  const wrapper = mount(
    <Login handleLogin={handleLogin}/>
  );
  expect(state).toBe(true);
});
