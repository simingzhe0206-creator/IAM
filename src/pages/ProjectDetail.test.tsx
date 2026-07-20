import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { ProjectDetail } from './ProjectDetail';

describe('project detail route', () => {
  it('renders the approved project and explicit pending detail values', () => {
    render(
      <MemoryRouter initialEntries={['/projects/strata-plan-help-st-chatswood']}>
        <Routes>
          <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'STRATA PLAN - 3-5 Help St Chatswood' })).toBeInTheDocument();
    expect(screen.getAllByText('Project information to be supplied')).toHaveLength(5);
    expect(screen.getByRole('link', { name: 'Back to Projects' })).toHaveAttribute('href', '/projects');
  });
});
