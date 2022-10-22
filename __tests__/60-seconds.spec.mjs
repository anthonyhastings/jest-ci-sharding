import { waitFor } from '../src/wait-for.mjs';

test('resolves after 60 seconds', async () => {
  await expect(await waitFor(60000)).resolves;
}, 100000);
