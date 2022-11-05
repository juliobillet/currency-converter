import { render, screen, fireEvent } from '@testing-library/react';
import CurrencyConverter from './currency_converter';
import '@testing-library/jest-dom/extend-expect';

describe('test currency converter app rendering', () => {
  test('renders learn react link', () => {
    render(<CurrencyConverter />);
    const linkElement = screen.getByText(/0/i);
    expect(linkElement).toBeInTheDocument();
  });
});
