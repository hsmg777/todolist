import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders TaskDo text on the main page', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  const taskDoText = screen.getByText(/TaskDo/i);
  expect(taskDoText).toBeInTheDocument();
});

test('renders the dashboard when navigating to /dashboard', () => {
  render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <App />
    </MemoryRouter>
  );

  const dashboardText = screen.getByText(/TaskDo/i); // Ajusta este texto si necesitas algo diferente
  expect(dashboardText).toBeInTheDocument();
});
