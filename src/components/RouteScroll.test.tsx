import { act, render } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { RouteScroll } from './RouteScroll';

function NavigationHarness() {
  const navigate = useNavigate();

  return (
    <>
      <RouteScroll />
      <button onClick={() => navigate('/projects')}>Projects</button>
      <button onClick={() => navigate('/services#construction-surveys')}>Construction</button>
      <div id="construction-surveys">Construction surveys</div>
    </>
  );
}

describe('route scrolling', () => {
  it('scrolls ordinary page navigation to the top', async () => {
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined);
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <NavigationHarness />
      </MemoryRouter>
    );

    scrollTo.mockClear();
    await act(async () => getByRole('button', { name: 'Projects' }).click());

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'auto' });
  });

  it('scrolls service menu hash navigation to the matching introduction', async () => {
    const scrollIntoView = vi.fn();
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <NavigationHarness />
      </MemoryRouter>
    );
    const target = document.getElementById('construction-surveys');
    Object.defineProperty(target, 'scrollIntoView', { value: scrollIntoView, configurable: true });

    await act(async () => getByRole('button', { name: 'Construction' }).click());

    expect(scrollIntoView).toHaveBeenCalledWith({ block: 'start', behavior: 'auto' });
  });
});
