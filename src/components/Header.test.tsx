import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Header } from './Header';

describe('services navigation', () => {
  it('shows only the five category links in the desktop services dropdown', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const dropdown = screen.getByTestId('desktop-service-menu');
    const links = within(dropdown).getAllByRole('link');

    expect(links).toHaveLength(5);
    expect(links.map((link) => link.textContent?.trim())).toEqual([
      'Property & Boundary Surveys',
      'Construction Surveys',
      'Development & Cadastral Surveys',
      'Spatial & Digital Surveys',
      'Infrastructure & Utility Surveys'
    ]);
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '/services#property-boundary-surveys',
      '/services#construction-surveys',
      '/services#development-cadastral-surveys',
      '/services#spatial-digital-surveys',
      '/services#infrastructure-utility-surveys'
    ]);
  });
});
