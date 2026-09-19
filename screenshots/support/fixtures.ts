import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { ScreenshotSetupContext } from '@verbb/craft-screenshots/types';

const supportDir = dirname(fileURLToPath(import.meta.url));
const seedScript = readFileSync(join(supportDir, 'seed', 'seed-fields.php'), 'utf8');

export async function seedFields(context: ScreenshotSetupContext): Promise<void> {
    await context.runCraftScript(seedScript, { label: 'seed-field-manager-fields' });
}

export const importJson = JSON.stringify([
    { name: 'Assets', handle: 'importAssets', type: 'craft\\fields\\Assets', settings: {} },
    { name: 'Categories', handle: 'importCategories', type: 'craft\\fields\\Categories', settings: {} },
    { name: 'Brand colour', handle: 'importBrandColour', type: 'craft\\fields\\Color', settings: {} },
    { name: 'Content type', handle: 'importContentType', type: 'craft\\fields\\Dropdown', settings: { options: [{ label: 'Article', value: 'article', default: true }] } },
]);
