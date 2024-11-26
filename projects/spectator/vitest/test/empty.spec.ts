import { describe, expect, it } from 'vitest';
import { createHostFactory } from '@ngneat/spectator/vitest';

describe('empty test', () => {
  it('should pass', () => {
    console.log(createHostFactory);
    expect(true).toBe(true);
  });
});
