import { waitFor } from '../src/wait-for.mjs';

test('resolves after 50 seconds', async () => {
  await expect(await waitFor(50000)).resolves;
}, 100000);
