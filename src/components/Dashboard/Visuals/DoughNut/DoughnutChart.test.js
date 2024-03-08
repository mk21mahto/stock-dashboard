// DoughnutChart.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DoughnutChart from './DoughnutChart';

// Mock the useDoughNutData hook
jest.mock('./useDoughNutData', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    assetLabel: ['Label1', 'Label2', 'Label3'],
    individualLabel: ['Label4', 'Label5', 'Label6'],
    assetData: [30, 40, 30],
    individualData: [25, 45, 30],
  })),
}));

describe('DoughnutChart component', () => {
  test('renders DoughnutChart with radio options and chart', () => {
    // Render the DoughnutChart component
    render(<DoughnutChart />);

    // Check if the DoughnutChart component is rendered
    expect(screen.getByTestId('doughnut-chart')).toBeInTheDocument();

    // Check if radio options for "Assets" and "Individual" are rendered
    expect(screen.getByLabelText('Assets')).toBeInTheDocument();
    expect(screen.getByLabelText('Individual')).toBeInTheDocument();

    // Check if the Doughnut chart is rendered
    expect(screen.getByRole('img')).toBeInTheDocument(); // Assuming the Doughnut component renders an image role
  });
});
