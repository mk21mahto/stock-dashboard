// Head.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Head from './Head';
import { toggleMenu } from '../utils/appSlice';

const mockStore = configureStore();

test('renders Head component', () => {
  const store = mockStore();

  render(
    <Provider store={store}>
      <Head />
    </Provider>
  );

  expect(screen.getByAltText('menu')).toBeInTheDocument();
  expect(screen.getByAltText('logo')).toBeInTheDocument();
  expect(screen.getByAltText('user')).toBeInTheDocument();
});

test('dispatches toggleMenu action when menu is clicked', () => {
  const store = mockStore();

  render(
    <Provider store={store}>
      <Head />
    </Provider>
  );

  fireEvent.click(screen.getByAltText('menu'));

  const actions = store.getActions();
  expect(actions).toEqual([toggleMenu()]);
});
