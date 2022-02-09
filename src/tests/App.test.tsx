import React from 'react';
import { getAllByText, getByText, render, screen } from '@testing-library/react';
import App from '../App';

test('renders main page which contain "기능경기대회"', () => {
  const { getAllByText } = render(<App />);
  const element = getAllByText(/[0-9]{4}.*기능경기대회/i);
  expect(element).toBeTruthy();
});
