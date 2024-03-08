// Chart.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Chart from './Chart';

// Mock monthlyMockData for testing purposes
jest.mock('../../../../mock/getMonthlyMock', () => ({
  monthlyMockData: {
    Jan: [
      { asset: 'Asset1', price: 100 },
      { asset: 'Asset2', price: 150 },
      // Add more assets as needed for testing
    ],
    // Add data for other months as needed for testing
  },
}));

describe('Chart component', () => {
  test('renders Chart with filters and Line chart', () => {
    render(<Chart />);

    // Check if the Chart component is rendered
    expect(screen.getByTestId('chart-component')).toBeInTheDocument();

    // Check the number of options in the asset dropdown
    const assetDropdown = screen.getByTestId('asset-dropdown');
    expect(assetDropdown.children.length).toBe(2); // Assuming two assets in the mock data

    // Check the number of options in the months dropdown
    const monthsDropdown = screen.getByTestId('months-dropdown');
    expect(monthsDropdown.children.length).toBe(3); // Assuming three options for months

    // Check if Line chart is rendered
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();
  });

  test('handles filter changes', () => {
    render(<Chart />);

    // Change the asset filter
    const assetDropdown = screen.getByTestId('asset-dropdown');
    fireEvent.change(assetDropdown, { target: { value: 'Asset2' } });

    // Check if the asset state is updated
    expect(screen.getByTestId('chart-component')).toHaveTextContent('Asset2');

    // Change the months filter
    const monthsDropdown = screen.getByTestId('months-dropdown');
    fireEvent.change(monthsDropdown, { target: { value: '6' } });

    // Check if the months state is updated
    expect(screen.getByTestId('chart-component')).toHaveTextContent('6 months');
  });
});
