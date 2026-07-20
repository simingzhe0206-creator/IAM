import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { About } from './About';

describe('About editorial update', () => {
  it('removes mission and values and keeps the empty People portrait framework', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    expect(screen.queryByText('Mission and values')).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Reliable information. Practical support.' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'The team behind IAM.' })).toBeInTheDocument();
    expect(screen.getAllByLabelText('Future IAM team portrait')).toHaveLength(9);
  });
});
