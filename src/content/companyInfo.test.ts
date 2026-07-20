import { describe, expect, it } from 'vitest';
import { assets, contact, serviceCategories } from './site';

describe('official company information', () => {
  it('uses the approved IAM Surveyors contact details', () => {
    expect(contact.email).toBe('office@iamsurveyor.com.au');
    expect(contact.phone).toBe('+61 452 666 691');
    expect(contact.address).toBe('Shop 2/30-32 Herbert Street, West Ryde, NSW 2114');
    expect(contact.emailHref).toBe('mailto:office@iamsurveyor.com.au');
    expect(contact.phoneHref).toBe('tel:+61452666691');
    expect(contact.mapsHref).toContain('Shop%202%2F30-32%20Herbert%20Street');
  });

  it('uses the approved reverse logo and separates service and catalogue infrastructure images', () => {
    expect(assets.logo).toContain('iam-logo-colour-reverse.png');
    expect(assets.logoFooter).toContain('iam-logo-colour-reverse.png');
    expect(serviceCategories[4].image).toContain('pexels-serjosoza-30117031.jpg');
    expect(serviceCategories[4].catalogueImage).toContain('pexels-serjosoza-30463192.jpg');
  });
});
