import { waitFor } from '../src/wait-for.mjs';

test('resolves after 10 seconds', async () => {
  await expect(await waitFor(10000)).resolves;
}, 100000);
