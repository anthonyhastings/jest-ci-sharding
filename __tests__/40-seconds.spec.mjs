import { waitFor } from '../src/wait-for.mjs';

test('resolves after 40 seconds', async () => {
  await expect(await waitFor(40000)).resolves;
}, 100000);
