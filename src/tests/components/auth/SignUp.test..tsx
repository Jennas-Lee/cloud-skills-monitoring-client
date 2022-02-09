import React from 'react';
import { getAllByText, getByText, render, screen } from '@testing-library/react';
import App from '../../../App';

test('renders navbar', () => {
  const { getAllByText } = render(<App />);
  const element = getAllByText("클라우드컴퓨팅 기능경기대회 모니터링");
  expect(element).toBeTruthy();
});

test('renders navbar menus - cams', () => {
  const { getAllByText } = render(<App />);
  const element = getAllByText("Cams");
  expect(element).toBeTruthy();
});

test('renders navbar menus - Dashboard', () => {
  const { getAllByText } = render(<App />);
  const element = getAllByText("Dashboard");
  expect(element).toBeTruthy();
});

test('renders navbar settings menu - Avatar(Before SignIn)', () => {
  const { getByText } = render(<App />);
  const element = getByText("?");
  expect(element).toBeTruthy();
});

test('renders navbar settings menu - SignIn', () => {
  const { getByText } = render(<App />);
  const element = getByText("Sign In");
  expect(element).toBeTruthy();
});

test('renders navbar settings menu - SignUp', () => {
  const { getByText } = render(<App />);
  const element = getByText("Sign Up");
  expect(element).toBeTruthy();
});
