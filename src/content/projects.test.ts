import { describe, expect, it } from 'vitest';
import { getProjectBySlug, projects } from './site';

describe('approved IAM projects', () => {
  it('keeps the confirmed project titles, routes and assets in order', () => {
    expect(
      projects.map(({ slug, title, image }) => ({ slug, title, image: image.split('/').at(-1) }))
    ).toEqual([
      {
        slug: 'strata-plan-help-st-chatswood',
        title: 'STRATA PLAN - 3-5 Help St Chatswood',
        image: '01.webp'
      },
      {
        slug: 'bim-modelling-kent-street-sydney',
        title: 'BIM MODELLING - 529 KENT STREET SYDNEY',
        image: '02.webp'
      },
      {
        slug: 'construction-survey-m7-m12',
        title: 'CONSTRUCTION SURVEY - M7-M12 Integration project',
        image: '03.jpg'
      },
      {
        slug: 'deposit-plan-hynds-box-hill',
        title: 'DEPOSIT PLAN - 33-35 Hynds, Box Hill, NSW 2765',
        image: '04.webp'
      }
    ]);
  });

  it('resolves known projects and leaves unsupplied facts explicit', () => {
    const project = getProjectBySlug('strata-plan-help-st-chatswood');

    expect(project?.details).toHaveLength(5);
    expect(project?.details.every((detail) => detail.value === 'Project information to be supplied')).toBe(true);
    expect(getProjectBySlug('not-a-project')).toBeUndefined();
  });
});
