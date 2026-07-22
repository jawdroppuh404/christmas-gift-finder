import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('starts the expanded questionnaire and moves to the next question', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Pick a gift that feels personal' })).toBeInTheDocument();
  expect(screen.getByText('Pick with purpose, gift with confidence')).toBeInTheDocument();
  expect(screen.getByText('Answer a few questions to help us learn more about the gift-getter')).toBeInTheDocument();
  expect(screen.getByText('Question 1 of 15')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'What is your gift budget?' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Under $25' }));
  fireEvent.click(screen.getByRole('button', { name: 'Next' }));

  expect(screen.getByText('Question 2 of 15')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'What is their age range?' })).toBeInTheDocument();
});
