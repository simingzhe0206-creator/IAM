import { describe, expect, it } from 'vitest';
import { serviceCategories, services } from './site';

const expectedCategoryTitles = [
  'Property & Boundary Surveys',
  'Construction Surveys',
  'Development & Cadastral Surveys',
  'Spatial & Digital Surveys',
  'Infrastructure & Utility Surveys'
];

describe('service navigation content', () => {
  it('exposes exactly the five approved service categories in order', () => {
    expect(serviceCategories.map((category) => category.title)).toEqual(expectedCategoryTitles);
  });

  it('maps every legacy detailed service into a consolidated category page', () => {
    const mappedSlugs = new Set(
      serviceCategories.flatMap((category) => category.services.flatMap((service) => service.slug ?? []))
    );

    expect(services.map((service) => service.slug).filter((slug) => !mappedSlugs.has(slug))).toEqual([]);
  });
});
