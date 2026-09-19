import { defineScreenshotScenario } from '@verbb/craft-screenshots/api';
import { importJson, seedFields } from '../../support/fixtures';

export default defineScreenshotScenario({
    id: 'field-manager-feature-tour-import',
    output: 'feature-tour/import.png',
    route: '/admin/field-manager/import',
    viewport: { width: 1200, height: 720, deviceScaleFactor: 2 },
    setup: seedFields,
    waitFor: [
        { type: 'loadState', state: 'networkidle' },
        { type: 'selector', selector: 'textarea[name="data"]', state: 'visible' },
    ],
    steps: [
        { type: 'fill', selector: 'textarea[name="data"]', value: importJson },
        { type: 'click', selector: 'input[type="submit"]' },
        { type: 'wait', waitFor: { type: 'selector', selector: '#fieldmapping', state: 'visible' } },
        {
            type: 'evaluate',
            expression: `(() => {
                const content = document.querySelector('#content');
                const backButton = [...document.querySelectorAll('#content a, #content button')]
                    .find((element) => element.textContent?.trim() === 'Back');
                if (!(content instanceof HTMLElement) || !(backButton instanceof HTMLElement)) {
                    throw new Error('Unable to locate the Field Manager import panel.');
                }

                const contentTop = content.getBoundingClientRect().top;
                const contentHeight = Math.ceil(backButton.getBoundingClientRect().bottom - contentTop + 24);
                content.style.minHeight = '0';
                content.style.height = contentHeight + 'px';
            })()`,
        },
    ],
    target: { type: 'selector', selector: '#content', padding: 0 },
    caption: 'Field Manager mapping fields from an export before import.',
    intent: 'Captures the real Field Manager import-mapping workflow rendered inside the current Craft 5 control panel.',
});
