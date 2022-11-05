import { render, screen } from '@testing-library/react';
import Currency_Converter from './currency_converter.js';

describe('test currency converter app rendering', () => {
  test('renders learn react link', () => {
    render(<Currency_Converter />);
    const linkElement = screen.getByText(/0/i);
    expect(linkElement).toBeInTheDocument();
  });
});
