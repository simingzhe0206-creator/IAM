import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { projects } from '../content/site';
import { ProjectDetail } from './ProjectDetail';

describe('project detail route', () => {
  it.each(projects)('renders the approved project detail content for $slug', (project) => {
    render(
      <MemoryRouter initialEntries={[`/projects/${project.slug}`]}>
        <Routes>
          <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: project.detailTitle })).toBeInTheDocument();
    expect(screen.getByText('Project Type')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Discuss a similar project with IAM.' })).toBeInTheDocument();

    for (const detail of project.metadata) {
      for (const value of detail.value) {
        expect(screen.getByText(value)).toBeInTheDocument();
      }
    }

    for (const paragraph of project.overview) {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    }

    expect(screen.getByRole('link', { name: 'Request a Quote' })).toHaveAttribute('href', '/quote');
    expect(screen.getByRole('link', { name: 'Back to Projects' })).toHaveAttribute('href', '/projects');
  });
});
