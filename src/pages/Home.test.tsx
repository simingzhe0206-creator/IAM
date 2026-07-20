import { render, screen } from '@testing-library/react';
import type { PropsWithChildren } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { Home } from './Home';

vi.mock('../components/Reveal', () => ({
  Reveal: ({ children, className }: PropsWithChildren<{ className?: string }>) => (
    <div className={className}>{children}</div>
  )
}));

vi.stubGlobal(
  'IntersectionObserver',
  class IntersectionObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
);

describe('home hero video', () => {
  it('loads responsive loop videos directly without a poster image or controls', () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const video = container.querySelector('video');
    expect(video).not.toBeNull();
    expect(video).not.toHaveAttribute('poster');
    expect(video).not.toHaveAttribute('controls');
    expect(video).toHaveAttribute('preload', 'auto');
    expect(video?.querySelector('source[media="(max-width: 767px)"]')).toHaveAttribute(
      'src',
      expect.stringContaining('iam-home-hero-mobile.mp4')
    );
    expect(video?.querySelector('source:not([media])')).toHaveAttribute(
      'src',
      expect.stringContaining('iam-home-hero-desktop.mp4')
    );
  });

  it('uses the approved About IAM copy and offsets catalogue item five', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: 'Reliable survey data for every stage of your project.' })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'From detail surveys and boundary identification to subdivision and construction support, we deliver accurate information that keeps your project moving.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('We Support')).toBeInTheDocument();

    const infrastructureCard = screen.getByRole('link', { name: /Infrastructure & Utility Surveys/i });
    expect(infrastructureCard).toHaveClass('lg:translate-y-6');
    expect(infrastructureCard.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining('pexels-serjosoza-30463192.jpg')
    );
  });
});
