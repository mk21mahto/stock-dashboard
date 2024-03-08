// File: Body.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Body from './Body';

test('renders Body component without crashing', () => {
  render(<Body />);
});

test('renders Sidebar and Dashboard components inside Body', () => {
  render(<Body />);

  const sidebarElement = screen.getByTestId('sidebar');
  const dashboardElement = screen.getByTestId('dashboard');

  expect(sidebarElement).toBeInTheDocument();
  expect(dashboardElement).toBeInTheDocument();
});

// Add more tests as needed to cover specific functionality
