import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Footer } from './Footer';

describe('site footer', () => {
  it('omits the service groups directory', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.queryByText('Service groups')).not.toBeInTheDocument();
    expect(screen.getByText('Copyright 2026 IAM Surveyors.')).toBeInTheDocument();
  });
});
