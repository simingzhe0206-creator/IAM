import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { ProjectDetail } from './ProjectDetail';

describe('project detail route', () => {
  it('renders the approved project detail content', () => {
    render(
      <MemoryRouter initialEntries={['/projects/strata-plan-help-st-chatswood']}>
        <Routes>
          <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: '3-5 Help St Chatswood' })).toBeInTheDocument();
    expect(screen.queryByText('Project overview')).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Strata Plan' })).not.toBeInTheDocument();
    expect(screen.getByText('Project Type')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Mixed Use Development')).toBeInTheDocument();
    expect(screen.getByText('AUD $61.9 Million Project')).toBeInTheDocument();
    expect(screen.getByText('Multi-stage planning and approvals (2021–Present)')).toBeInTheDocument();
    expect(screen.getByText('Draft Strata Plan')).toBeInTheDocument();
    expect(screen.getByText(/Located in the heart of Chatswood CBD/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Request a Quote' })).toHaveAttribute('href', '/quote');
    expect(screen.queryByText(/Project information to be supplied/i)).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Back to Projects' })).toHaveAttribute('href', '/projects');
  });
});
