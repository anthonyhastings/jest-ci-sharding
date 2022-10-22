import { waitFor } from '../src/wait-for.mjs';

test('resolves after 20 seconds', async () => {
  await expect(await waitFor(20000)).resolves;
}, 100000);
