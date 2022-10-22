import { waitFor } from '../src/wait-for.mjs';

test('resolves after 30 seconds', async () => {
  await expect(await waitFor(30000)).resolves;
}, 100000);
