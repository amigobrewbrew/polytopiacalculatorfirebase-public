import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HelpPage from './helpPage';

describe('HelpPage', () => {
  test('renders HelpPage component', () => {
    render(<HelpPage />);
    const helpElement = screen.getByText(/press f12 to find the worst source code you have ever seen/i);
    expect(helpElement).toBeInTheDocument();
  });

  // Add more tests as needed
});