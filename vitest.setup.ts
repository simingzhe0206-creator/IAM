import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

class IntersectionObserverMock implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = '';
  readonly thresholds = [];

  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
