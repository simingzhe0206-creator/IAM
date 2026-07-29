import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Projects } from './Projects';

describe('Projects editorial portfolio', () => {
  it('shows the approved introduction, four project links and no stale helper copy', () => {
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
    expect(screen.queryByText(/Detailed project information will be added as approved/i)).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Google Reviews' })).toBeInTheDocument();
    expect(screen.getByText('4.7')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Read all reviews on Google' })).toHaveAttribute(
      'href',
      expect.stringContaining('google.com/maps')
    );
  });

  it('uses a touch-scroll row below md and an edge-to-edge four-column desktop gallery', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );

    const gallery = screen.getByRole('region', { name: 'Selected projects' });
    expect(gallery).toHaveClass('flex', 'snap-x', 'snap-mandatory', 'overflow-x-auto');
    expect(gallery).toHaveClass('md:grid', 'md:grid-cols-4', 'md:overflow-visible', 'md:snap-none');

    const cards = within(gallery).getAllByRole('link');
    expect(cards).toHaveLength(4);
    cards.forEach((card) => {
      expect(card).toHaveClass(
        'w-[82vw]',
        'min-w-[280px]',
        'shrink-0',
        'snap-start',
        'sm:w-[420px]',
        'sm:min-w-[420px]',
        'md:w-auto',
        'md:min-w-0'
      );
    });
  });

  it('decodes project card images asynchronously and lazily loads cards after the first', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );

    const gallery = screen.getByRole('region', { name: 'Selected projects' });
    const images = Array.from(gallery.querySelectorAll('img'));

    expect(images).toHaveLength(4);
    expect(images[0]).toHaveAttribute('loading', 'eager');
    images.slice(1).forEach((image) => expect(image).toHaveAttribute('loading', 'lazy'));
    images.forEach((image) => expect(image).toHaveAttribute('decoding', 'async'));
  });
});
