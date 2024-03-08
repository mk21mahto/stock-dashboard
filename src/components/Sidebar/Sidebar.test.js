// Sidebar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';

// Mock the useSelector hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Sidebar component', () => {
  test('renders Sidebar when isMenuOpen is true', () => {
    // Mock the useSelector hook to return true
    useSelector.mockReturnValue(true);

    render(<Sidebar />);

    // Assert that the component renders when isMenuOpen is true
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  test('does not render Sidebar when isMenuOpen is false', () => {
    // Mock the useSelector hook to return false
    useSelector.mockReturnValue(false);

    render(<Sidebar />);

    // Assert that the component does not render when isMenuOpen is false
    expect(screen.queryByText('Dashboard')).toBeNull();
  });
});
