import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Projects } from './Projects';

describe('Projects editorial portfolio', () => {
  it('shows the approved introduction, four projects and Google reviews entry', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        /From residential developments and commercial buildings to subdivision, infrastructure and construction projects/
      )
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /STRATA PLAN - 3-5 Help St Chatswood/i })).toHaveAttribute(
      'href',
      '/projects/strata-plan-help-st-chatswood'
    );
    expect(screen.getByRole('link', { name: /BIM MODELLING - 529 KENT STREET SYDNEY/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /CONSTRUCTION SURVEY - M7-M12 Integration project/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /DEPOSIT PLAN - 33-35 Hynds, Box Hill, NSW 2765/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Google Reviews' })).toBeInTheDocument();
    expect(screen.getByText('4.7')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Read all reviews on Google' })).toHaveAttribute(
      'href',
      expect.stringContaining('google.com/maps')
    );
  });
});
