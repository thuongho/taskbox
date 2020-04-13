import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Taskbox', () => {
  const { getByText } = render(<App />);
  console.log('getByText', getByText);
  const linkElement = getByText(/Taskbox/i);
  expect(linkElement).toBeInTheDocument();
});
