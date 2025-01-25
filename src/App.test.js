import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders MainPage component on initial load', () => {
  render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  );

  // Verifica que el texto principal esté presente
  const titleElement = screen.getByText(/TASKDO/i);
  expect(titleElement).toBeInTheDocument();
});
