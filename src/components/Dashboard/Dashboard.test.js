// Dashboard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('Dashboard component', () => {
  test('renders Dashboard with Visuals and Card components', () => {
    render(<Dashboard />);

    // Check if the main heading is rendered
    expect(screen.getByText('Dashboard')).toBeInTheDocument();

    // Check if the Visuals component is rendered
    expect(screen.getByTestId('visuals-component')).toBeInTheDocument();

    // Check if the Card component is rendered
    expect(screen.getByTestId('card-component')).toBeInTheDocument();
  });
});
