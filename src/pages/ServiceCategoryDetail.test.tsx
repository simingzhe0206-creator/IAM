import { render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { ServiceCategoryDetail } from './ServiceCategoryDetail';

describe('service category detail cleanup', () => {
  it('keeps category navigation sticky and removes supporting survey services', () => {
    render(
      <MemoryRouter initialEntries={['/services/category/property-boundary-surveys']}>
        <Routes>
          <Route path="/services/category/:categorySlug" element={<ServiceCategoryDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.queryByText('Additional capabilities')).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Supporting survey services' })).not.toBeInTheDocument();
    expect(screen.getByTestId('service-category-navigation')).toHaveClass('lg:sticky');
  });

  it('shows the lettable area survey as the fourth property and boundary service', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/services/category/property-boundary-surveys']}>
        <Routes>
          <Route path="/services/category/:categorySlug" element={<ServiceCategoryDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: 'Lettable Area Survey' })).toHaveAttribute('href', '#lettable-area-survey');
    expect(screen.getByRole('heading', { name: 'Lettable Area Survey' })).toBeInTheDocument();
    expect(screen.getByText(/accurately measures the floor area of commercial, office, retail or industrial premises/i)).toBeInTheDocument();
    expect(screen.getByText('Lettable area calculation schedule')).toBeInTheDocument();

    const lettableAreaArticle = container.querySelector<HTMLElement>('#lettable-area-survey');
    expect(lettableAreaArticle).not.toBeNull();
    expect(
      within(lettableAreaArticle!).queryByRole('heading', { name: 'Frequently asked questions' })
    ).not.toBeInTheDocument();
  });

  it('lazy-decodes non-hero service images', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/services/category/property-boundary-surveys']}>
        <Routes>
          <Route path="/services/category/:categorySlug" element={<ServiceCategoryDetail />} />
        </Routes>
      </MemoryRouter>
    );

    const serviceImages = Array.from(container.querySelectorAll('article img'));
    expect(serviceImages.length).toBeGreaterThan(0);
    serviceImages.forEach((image) => {
      expect(image).toHaveAttribute('loading', 'lazy');
      expect(image).toHaveAttribute('decoding', 'async');
    });
  });
});
