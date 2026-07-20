import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Services } from './Services';

describe('Services overview cleanup', () => {
  it('starts with the five service groups without the old directory introduction', () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );

    expect(screen.queryByText('Service directory')).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Five coordinated areas of practice.' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Property & Boundary Surveys' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Infrastructure & Utility Surveys' })).toBeInTheDocument();
  });
});
