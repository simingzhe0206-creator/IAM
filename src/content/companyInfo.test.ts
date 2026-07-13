import { describe, expect, it } from 'vitest';
import { contact } from './site';

describe('official company information', () => {
  it('uses the approved IAM Surveyors contact details', () => {
    expect(contact.email).toBe('office@iamsurveyor.com.au');
    expect(contact.phone).toBe('+61 452 666 691');
    expect(contact.address).toBe('Shop 2/30-32 Herbert Street, West Ryde, NSW 2114');
    expect(contact.emailHref).toBe('mailto:office@iamsurveyor.com.au');
    expect(contact.phoneHref).toBe('tel:+61452666691');
    expect(contact.mapsHref).toContain('Shop%202%2F30-32%20Herbert%20Street');
  });
});
