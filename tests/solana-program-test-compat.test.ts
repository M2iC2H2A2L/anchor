import { ProgramTest } from '@solana/program-test';
import { expect } from 'chai';

describe('Solana Program Test Compatibility', () => {
  it('should initialize ProgramTest', async () => {
    const programTest = new ProgramTest();
    expect(programTest).toBeDefined();
    await programTest.startTest();
  });
});
