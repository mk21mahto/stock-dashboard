// Visuals.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Visuals from './Visuals';
import DoughnutChart from './DoughNut/DoughnutChart'; // Import the actual component

jest.mock('./DoughNut/DoughnutChart', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="doughnut-chart" />),
}));

jest.mock('./LineChart/Chart', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="line-chart" />),
}));

describe('Visuals component', () => {
  test('renders Visuals with content and charts', () => {
    // Render the Visuals component
    render(<Visuals />);

    // Check if the Visuals component is rendered
    expect(screen.getByTestId('visuals-component')).toBeInTheDocument();

    // Check if the total balance and percentage are rendered
    expect(screen.getByText('Total Balance : $10,881')).toBeInTheDocument();
    expect(screen.getByText('(26.7%)')).toBeInTheDocument();

    // Check if the DoughnutChart component is rendered
    expect(screen.getByTestId('doughnut-chart')).toBeInTheDocument();

    // Check if the Chart component is rendered
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();
  });
});
