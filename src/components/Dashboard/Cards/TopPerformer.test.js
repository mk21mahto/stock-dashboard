// TopPerformer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopPerformer from './TopPerformer';

describe('TopPerformer component', () => {
  test('renders TopPerformer with title and items', () => {
    // Define test props
    const title = 'Top Holding';

    // Render the TopPerformer component
    render(<TopPerformer title={title} />);

    // Check if the TopPerformer component is rendered
    expect(screen.getByTestId('top-performer')).toBeInTheDocument();

    // Check if the title is rendered
    expect(screen.getByText(title)).toBeInTheDocument();

    // Check if the list items are rendered
    expect(screen.getByText('Etherium')).toBeInTheDocument();
    expect(screen.getByText('Amazon')).toBeInTheDocument();
    expect(screen.getByText('Dollar')).toBeInTheDocument();
  });
});
