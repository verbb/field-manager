import { defineScreenshotScenario } from '@verbb/craft-screenshots/api';

import { seedFields } from '../../support/fixtures';

export default defineScreenshotScenario({
    id: 'field-manager-feature-tour-overview',
    output: 'feature-tour/main.png',
    route: '/admin/field-manager',
    viewport: { width: 1200, height: 820, deviceScaleFactor: 2 },
    setup: seedFields,
    waitFor: [
        { type: 'loadState', state: 'networkidle' },
        { type: 'selector', selector: '#fieldmanager .field', state: 'visible' },
    ],
    steps: [
        {
            type: 'evaluate',
            expression: `(() => {
                const content = document.querySelector('#content');
                const exportButton = [...document.querySelectorAll('#content button, #content input')]
                    .find((element) => element.textContent?.trim() === 'Export selected' || (element instanceof HTMLInputElement && element.value === 'Export selected'));
                if (!(content instanceof HTMLElement) || !(exportButton instanceof HTMLElement)) {
                    throw new Error('Unable to locate the Field Manager content panel.');
                }

                const contentTop = content.getBoundingClientRect().top;
                const contentHeight = Math.ceil(exportButton.getBoundingClientRect().bottom - contentTop + 24);
                content.style.minHeight = '0';
                content.style.height = contentHeight + 'px';
            })()`,
        },
    ],
    target: { type: 'selector', selector: '#content', padding: 0 },
    caption: 'Field Manager listing native Craft fields with their handles and types.',
    intent: 'Captures the real Field Manager overview rendered inside the current Craft 5 control panel.',
});
