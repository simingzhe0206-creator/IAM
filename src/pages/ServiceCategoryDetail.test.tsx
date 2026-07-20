import { render, screen } from '@testing-library/react';
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
});
