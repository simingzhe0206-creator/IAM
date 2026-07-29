import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { About } from './About';

describe('About editorial update', () => {
  it('renders the approved IAM team portraits', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    expect(screen.queryByText('Mission and values')).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Reliable information. Practical support.' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'The team behind IAM.' })).toBeInTheDocument();
    expect(screen.getByText('Marcus Jiang')).toBeInTheDocument();
    expect(screen.getByText('Director')).toBeInTheDocument();
    expect(screen.getByText('Rayna Sun')).toBeInTheDocument();
    expect(screen.queryByLabelText('Future IAM team portrait')).not.toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: /IAM team member:/ })).toHaveLength(6);
  });
});
