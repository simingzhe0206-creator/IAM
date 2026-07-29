import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { About } from './About';

describe('About editorial update', () => {
  it('renders the six exact IAM team mappings with lazy-decoded portraits', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    expect(screen.queryByText('Mission and values')).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Reliable information. Practical support.' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'The team behind IAM.' })).toBeInTheDocument();
    expect(screen.getByText('Marcus Jiang')).toBeInTheDocument();
    expect(screen.getByText('Director')).toBeInTheDocument();
    expect(screen.getByText('Rayna Sun')).toBeInTheDocument();
    expect(screen.queryByLabelText('Future IAM team portrait')).not.toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: /IAM team member:/ })).toHaveLength(6);

    const expectedPeople = [
      ['Marcus Jiang', 'Director', 'marcus-jiang.jpg'],
      ['Bennie Ai', 'Project Administration', 'bennie-ai.png'],
      ['Rayna Sun', 'Accountant', 'rayna-sun.png'],
      ['Ming Su', 'Lead Draftman', 'ming-su.jpg'],
      ['Jannie Hu', 'Draftman', 'jannie-hu.png'],
      ['Justin Yu', 'Draftman', 'justin-yu.jpg']
    ] as const;

    expectedPeople.forEach(([name, role, imageFile]) => {
      const card = screen.getByText(name).closest('figure');
      expect(card).not.toBeNull();
      expect(card).toHaveClass('team-member');
      expect(card).toHaveAttribute('tabindex', '0');
      expect(within(card!).getByText(role)).toBeInTheDocument();
      expect(within(card!).getByRole('img', { name: `IAM team member: ${name}` })).toHaveAttribute(
        'src',
        expect.stringContaining(imageFile)
      );
      expect(within(card!).getByRole('img')).toHaveAttribute('loading', 'lazy');
      expect(within(card!).getByRole('img')).toHaveAttribute('decoding', 'async');
      expect(card?.querySelector('figcaption')).toHaveClass('team-member-caption');
    });
  });

  it('exposes the people interaction to keyboard focus', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const firstCard = container.querySelector<HTMLElement>('.team-member');
    await user.tab();

    expect(firstCard).toHaveFocus();
  });

  it('scales the whole people card above neighbours instead of zooming only the image', () => {
    const styles = readFileSync(resolve(process.cwd(), 'src/styles.css'), 'utf8');

    expect(styles).toMatch(/\.team-grid\s*\{[^}]*overflow:\s*visible;/s);
    expect(styles).toMatch(
      /\.team-member:hover,\s*\.team-member:focus\s*\{[^}]*z-index:\s*2;[^}]*transform:\s*scale\(1\.04\);/s
    );
    expect(styles).not.toMatch(
      /\.team-member:hover img,\s*\.team-member:focus img\s*\{[^}]*transform:\s*scale\(/s
    );
  });
});
