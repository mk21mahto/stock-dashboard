// Card.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';
import TopPerformer from './TopPerformer'; // Import the actual component

jest.mock('./TopPerformer', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="top-performer" />),
}));

describe('Card component', () => {
  test('renders Card with TopPerformer components', () => {
    render(<Card />);

    // Check if the Card component is rendered
    expect(screen.getByTestId('card-component')).toBeInTheDocument();

    // Check if TopPerformer components are rendered for each title
    expect(TopPerformer).toHaveBeenCalledTimes(3); // Ensure TopPerformer is called three times
  });
});
