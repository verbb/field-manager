(function(){var e=document.createElement(`style`);e.textContent=`:root{--pk-color-white: #fff;--pk-color-black: #000;--pk-color-link: #2563eb;--pk-color-error: #d81f23;--pk-color-success: var(--pk-color-teal-700);--pk-color-warning: var(--pk-color-amber-700);--pk-color-gray-50: hsl(212, 60%, 97%);--pk-color-gray-100: hsl(212, 50%, 93%);--pk-color-gray-150: hsl(212, 40%, 89%);--pk-color-gray-200: hsl(212, 30%, 85%);--pk-color-gray-250: hsl(211, 20%, 75%);--pk-color-gray-300: hsl(211, 13%, 65%);--pk-color-gray-350: hsl(211, 11%, 59%);--pk-color-gray-400: hsl(210, 10%, 53%);--pk-color-gray-500: hsl(211, 12%, 43%);--pk-color-gray-550: hsl(210, 13%, 40%);--pk-color-gray-600: hsl(209, 14%, 37%);--pk-color-gray-700: hsl(209, 18%, 30%);--pk-color-gray-800: hsl(209, 20%, 25%);--pk-color-gray-900: hsl(210, 24%, 16%);--pk-color-gray-1000: hsl(210, 24%, 10%);--pk-color-slate-50: rgba(96, 125, 159, .05);--pk-color-slate-100: rgba(96, 125, 159, .1);--pk-color-slate-150: rgba(96, 125, 159, .15);--pk-color-slate-200: rgba(96, 125, 159, .2);--pk-color-slate-250: rgba(96, 125, 159, .25);--pk-color-slate-300: rgba(96, 125, 159, .3);--pk-color-slate-350: rgba(96, 125, 159, .35);--pk-color-slate-400: rgba(96, 125, 159, .4);--pk-color-slate-500: rgba(96, 125, 159, .5);--pk-color-slate-550: rgba(96, 125, 159, .55);--pk-color-slate-600: rgba(96, 125, 159, .6);--pk-color-slate-700: rgba(96, 125, 159, .7);--pk-color-slate-800: rgba(96, 125, 159, .8);--pk-color-slate-900: rgba(96, 125, 159, .9);--pk-color-slate-1000: rgba(96, 125, 159, 1);--pk-color-red-50: #fef2f2;--pk-color-red-100: #fee2e2;--pk-color-red-200: #fecaca;--pk-color-red-300: #fca5a5;--pk-color-red-400: #f87171;--pk-color-red-500: #ef4444;--pk-color-red-600: #dc2626;--pk-color-red-700: #b91c1c;--pk-color-red-800: #991b1b;--pk-color-red-900: #7f1d1d;--pk-color-red-950: #450a0a;--pk-color-orange-50: #fff7ed;--pk-color-orange-100: #ffedd5;--pk-color-orange-200: #fed7aa;--pk-color-orange-300: #fdba74;--pk-color-orange-400: #fb923c;--pk-color-orange-500: #f97316;--pk-color-orange-600: #ea580c;--pk-color-orange-700: #c2410c;--pk-color-orange-800: #9a3412;--pk-color-orange-900: #7c2d12;--pk-color-orange-950: #431407;--pk-color-amber-50: #fffbeb;--pk-color-amber-100: #fef3c7;--pk-color-amber-200: #fde68a;--pk-color-amber-300: #fcd34d;--pk-color-amber-400: #fbbf24;--pk-color-amber-500: #f59e0b;--pk-color-amber-600: #d97706;--pk-color-amber-700: #b45309;--pk-color-amber-800: #92400e;--pk-color-amber-900: #78350f;--pk-color-amber-950: #451a03;--pk-color-yellow-50: #fefce8;--pk-color-yellow-100: #fef9c3;--pk-color-yellow-200: #fef08a;--pk-color-yellow-300: #fde047;--pk-color-yellow-400: #facc15;--pk-color-yellow-500: #eab308;--pk-color-yellow-600: #ca8a04;--pk-color-yellow-700: #a16207;--pk-color-yellow-750: #93580b;--pk-color-yellow-800: #854d0e;--pk-color-yellow-900: #713f12;--pk-color-yellow-950: #422006;--pk-color-lime-50: #f7fee7;--pk-color-lime-100: #ecfccb;--pk-color-lime-200: #d9f99d;--pk-color-lime-300: #bef264;--pk-color-lime-400: #a3e635;--pk-color-lime-500: #84cc16;--pk-color-lime-600: #65a30d;--pk-color-lime-700: #4d7c0f;--pk-color-lime-800: #3f6212;--pk-color-lime-900: #365314;--pk-color-lime-950: #1a2e05;--pk-color-green-050: #f0fdf4;--pk-color-green-100: #dcfce7;--pk-color-green-200: #bbf7d0;--pk-color-green-300: #86efac;--pk-color-green-400: #4ade80;--pk-color-green-500: #22c55e;--pk-color-green-600: #16a34a;--pk-color-green-700: #15803d;--pk-color-green-800: #166534;--pk-color-green-900: #14532d;--pk-color-green-950: #052e16;--pk-color-emerald-50: #ecfdf5;--pk-color-emerald-100: #d1fae5;--pk-color-emerald-200: #a7f3d0;--pk-color-emerald-300: #6ee7b7;--pk-color-emerald-400: #34d399;--pk-color-emerald-500: #10b981;--pk-color-emerald-600: #059669;--pk-color-emerald-700: #047857;--pk-color-emerald-800: #065f46;--pk-color-emerald-900: #064e3b;--pk-color-emerald-950: #022c22;--pk-color-teal-50: #f0fdfa;--pk-color-teal-100: #ccfbf1;--pk-color-teal-200: #99f6e4;--pk-color-teal-300: #5eead4;--pk-color-teal-400: #2dd4bf;--pk-color-teal-500: #14b8a6;--pk-color-teal-550: #11a697;--pk-color-teal-600: #0d9488;--pk-color-teal-700: #0f766e;--pk-color-teal-800: #115e59;--pk-color-teal-900: #134e4a;--pk-color-teal-950: #042f2e;--pk-color-teal-550-border: #008779;--pk-color-cyan-50: #ecfeff;--pk-color-cyan-100: #cffafe;--pk-color-cyan-200: #a5f3fc;--pk-color-cyan-300: #67e8f9;--pk-color-cyan-400: #22d3ee;--pk-color-cyan-500: #06b6d4;--pk-color-cyan-600: #0891b2;--pk-color-cyan-700: #0e7490;--pk-color-cyan-800: #155e75;--pk-color-cyan-900: #164e63;--pk-color-cyan-950: #083344;--pk-color-sky-50: #f0f9ff;--pk-color-sky-100: #e0f2fe;--pk-color-sky-200: #bae6fd;--pk-color-sky-300: #7dd3fc;--pk-color-sky-400: #38bdf8;--pk-color-sky-500: #0ea5e9;--pk-color-sky-600: #0284c7;--pk-color-sky-700: #0369a1;--pk-color-sky-800: #075985;--pk-color-sky-900: #0c4a6e;--pk-color-sky-950: #082f49;--pk-color-blue-50: #eff6ff;--pk-color-blue-100: #dbeafe;--pk-color-blue-200: #bfdbfe;--pk-color-blue-300: #93c5fd;--pk-color-blue-400: #60a5fa;--pk-color-blue-500: #3b82f6;--pk-color-blue-600: #2563eb;--pk-color-blue-700: #1d4ed8;--pk-color-blue-800: #1e40af;--pk-color-blue-900: #1e3a8a;--pk-color-blue-950: #172554;--pk-color-indigo-50: #eef2ff;--pk-color-indigo-100: #e0e7ff;--pk-color-indigo-200: #c7d2fe;--pk-color-indigo-300: #a5b4fc;--pk-color-indigo-400: #818cf8;--pk-color-indigo-500: #6366f1;--pk-color-indigo-600: #4f46e5;--pk-color-indigo-700: #4338ca;--pk-color-indigo-800: #3730a3;--pk-color-indigo-900: #312e81;--pk-color-indigo-950: #1e1b4b;--pk-color-violet-50: #f5f3ff;--pk-color-violet-100: #ede9fe;--pk-color-violet-200: #ddd6fe;--pk-color-violet-300: #c4b5fd;--pk-color-violet-400: #a78bfa;--pk-color-violet-500: #8b5cf6;--pk-color-violet-600: #7c3aed;--pk-color-violet-700: #6d28d9;--pk-color-violet-800: #5b21b6;--pk-color-violet-900: #4c1d95;--pk-color-violet-950: #2e1065;--pk-color-purple-50: #faf5ff;--pk-color-purple-100: #f3e8ff;--pk-color-purple-200: #e9d5ff;--pk-color-purple-300: #d8b4fe;--pk-color-purple-400: #c084fc;--pk-color-purple-500: #a855f7;--pk-color-purple-600: #9333ea;--pk-color-purple-700: #7e22ce;--pk-color-purple-800: #6b21a8;--pk-color-purple-900: #581c87;--pk-color-purple-950: #3b0764;--pk-color-fuchsia-50: #fdf4ff;--pk-color-fuchsia-100: #fae8ff;--pk-color-fuchsia-200: #f5d0fe;--pk-color-fuchsia-300: #f0abfc;--pk-color-fuchsia-400: #e879f9;--pk-color-fuchsia-500: #d946ef;--pk-color-fuchsia-600: #c026d3;--pk-color-fuchsia-700: #a21caf;--pk-color-fuchsia-800: #86198f;--pk-color-fuchsia-900: #701a75;--pk-color-fuchsia-950: #4a044e;--pk-color-pink-50: #fdf2f8;--pk-color-pink-100: #fce7f3;--pk-color-pink-200: #fbcfe8;--pk-color-pink-300: #f9a8d4;--pk-color-pink-400: #f472b6;--pk-color-pink-500: #ec4899;--pk-color-pink-600: #db2777;--pk-color-pink-700: #be185d;--pk-color-pink-800: #9d174d;--pk-color-pink-900: #831843;--pk-color-pink-950: #500724;--pk-color-rose-50: #fff1f2;--pk-color-rose-100: #ffe4e6;--pk-color-rose-200: #fecdd3;--pk-color-rose-300: #fda4af;--pk-color-rose-400: #fb7185;--pk-color-rose-500: #f43f5e;--pk-color-rose-600: #e11d48;--pk-color-rose-700: #be123c;--pk-color-rose-800: #9f1239;--pk-color-rose-900: #881337;--pk-color-rose-950: #4c0519;--pk-radius-xs: 2px;--pk-radius-sm: 3px;--pk-radius-md: 4px;--pk-radius-lg: 5px;--pk-shadow-focus: 0 0 0 2px var(--pk-color-sky-600), 0 0 5px 1px hsl(from var(--pk-color-sky-600) h s l / .7);--pk-shadow-focus-inset: 0 0 0 1px #fff, 0 0 0 3px var(--pk-color-sky-600), 0 0 5px 1px hsl(from var(--pk-color-sky-600) h s l / .7);--pk-shadow-popup: 0 0 0 1px rgba(31, 41, 51, .1), 0 5px 20px rgba(31, 41, 51, .25);--pk-shadow-popover: 0 0 0 1px hsl(from hsl(210, 10%, 53%) h s l / 25%), 0 25px 100px hsl(from hsl(210, 24%, 16%) h s l / 50%);--pk-shadow-modal: 0 0 0 1px color-mix(in oklab, var(--pk-color-gray-400) 25%, transparent), 0 25px 100px color-mix(in oklab, var(--pk-color-gray-900) 50%, transparent);--pk-font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--pk-font-family-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;--pk-font-size-mono: .9em;--pk-line-height-mono: 1.5;--pk-font-size-sm: 13px;--pk-font-size-base: 14px;--pk-line-height: 1.4;--pk-checkbox-size: 1rem;--pk-radio-size: 1rem;--pk-input-height: var(--pk-btn-height-default);--pk-input-control-line-height: 1.25rem;--pk-input-border-color: var(--pk-color-slate-400);--pk-input-border: 1px solid var(--pk-input-border-color);--pk-input-border-radius: var(--pk-radius-sm);--pk-input-bg: rgb(251, 252, 254);--pk-input-placeholder-color: var(--pk-color-gray-400);--pk-input-focus-shadow: 0 0 0 1px var(--pk-color-sky-600), 0 0 4px 0 hsl(from var(--pk-color-sky-600) h s l / .7);--pk-input-invalid-focus-shadow: 0 0 0 1px var(--pk-color-rose-600), 0 0 4px 0 hsl(from var(--pk-color-rose-600) h s l / .7);--pk-input-mono-font-family: var(--pk-font-family-mono);--pk-input-mono-font-size: var(--pk-font-size-mono);--pk-input-mono-line-height: var(--pk-line-height-mono);--pk-textarea-border-radius: var(--pk-radius-md);--pk-checkbox-border-color: #c0cbd9;--pk-control-label-gap: .35rem;--pk-btn-icon-gap-xxs: 4px;--pk-btn-icon-gap-xs: 4px;--pk-btn-icon-gap-sm: 5px;--pk-btn-icon-gap-default: 6px;--pk-btn-icon-gap-lg: 7px;--pk-btn-icon-gap-xl: 8px;--pk-btn-icon-gap: var(--pk-btn-icon-gap-default);--pk-btn-caret-size-xxs: 10px;--pk-btn-caret-size-xs: 11px;--pk-btn-caret-size-sm: 11px;--pk-btn-caret-size-default: 12px;--pk-btn-caret-size-lg: 13px;--pk-btn-caret-size-xl: 14px;--pk-control-height-xxs: 24px;--pk-control-height-xs: 26px;--pk-control-height-sm: 30px;--pk-control-height-default: 34px;--pk-control-height-lg: 38px;--pk-control-height-xl: 42px;--pk-btn-height-xxs: var(--pk-control-height-xxs);--pk-btn-height-xs: var(--pk-control-height-xs);--pk-btn-height-sm: var(--pk-control-height-sm);--pk-btn-height-default: var(--pk-control-height-default);--pk-btn-height-lg: var(--pk-control-height-lg);--pk-btn-height-xl: var(--pk-control-height-xl);--pk-control-font-xxs: 11px;--pk-control-font-xs: 12px;--pk-control-font-sm: 13px;--pk-control-font-default: var(--pk-font-size-base);--pk-control-font-lg: var(--pk-font-size-base);--pk-control-font-xl: 1rem;--pk-btn-font-xxs: var(--pk-control-font-xxs);--pk-btn-font-xs: var(--pk-control-font-xs);--pk-btn-font-sm: var(--pk-control-font-sm);--pk-btn-font-default: var(--pk-control-font-default);--pk-btn-font-lg: var(--pk-control-font-lg);--pk-btn-font-xl: var(--pk-control-font-xl);--pk-btn-padding-inline-xxs: 5px;--pk-btn-padding-inline-xs: 7px;--pk-btn-padding-inline-sm: 8px;--pk-btn-padding-inline-default: 9px;--pk-btn-padding-inline-lg: 12px;--pk-btn-padding-inline-xl: 15px;--pk-btn-icon-size-xxs: 10px;--pk-btn-icon-size-xs: 11px;--pk-btn-icon-size-sm: 13px;--pk-btn-icon-size-default: 14px;--pk-btn-icon-size-lg: 14px;--pk-btn-icon-size-xl: 16px;--pk-btn-radius-xxs: var(--pk-radius-sm);--pk-btn-radius-xs: var(--pk-radius-sm);--pk-btn-radius-sm: var(--pk-radius-md);--pk-btn-radius-default: var(--pk-radius-lg);--pk-btn-radius-lg: var(--pk-radius-lg);--pk-btn-radius-xl: var(--pk-radius-lg);--pk-action-fill: var(--pk-color-slate-250);--pk-action-fill-hover: var(--pk-color-slate-300);--pk-action-fill-active: var(--pk-color-slate-400);--pk-action-on: var(--pk-color-gray-700);--pk-action-primary-fill: var(--pk-color-red-600);--pk-action-primary-fill-hover: var(--pk-color-red-700);--pk-action-primary-fill-active: var(--pk-color-red-800);--pk-action-primary-on: var(--pk-color-white);--pk-chart-series-1: var(--pk-color-blue-600);--pk-chart-series-2: var(--pk-color-orange-600);--pk-chart-series-3: var(--pk-color-teal-600);--pk-chart-series-4: var(--pk-color-amber-600);--pk-chart-series-5: var(--pk-color-pink-600);--pk-chart-series-6: var(--pk-color-green-700);--pk-chart-series-7: var(--pk-color-violet-600);--pk-chart-series-8: var(--pk-color-red-600);--pk-chart-other: var(--pk-color-gray-300);--pk-chart-comparison: var(--pk-color-gray-350);--pk-chart-ordinal-1: var(--pk-color-blue-400);--pk-chart-ordinal-2: var(--pk-color-blue-500);--pk-chart-ordinal-3: var(--pk-color-blue-600);--pk-chart-ordinal-4: var(--pk-color-blue-800);--pk-chart-surface: var(--pk-color-white);--pk-chart-text: var(--pk-color-gray-900);--pk-chart-text-secondary: var(--pk-color-gray-600);--pk-chart-text-muted: var(--pk-color-gray-500);--pk-chart-grid: var(--pk-color-gray-100);--pk-chart-axis: var(--pk-color-gray-200);--pk-chart-crosshair: var(--pk-color-gray-300);--pk-chart-border: var(--pk-color-slate-200);--pk-chart-tooltip-background: var(--pk-color-white);--pk-chart-tooltip-shadow: var(--pk-shadow-popup);--pk-chart-toggle-background: var(--pk-color-slate-100);--pk-chart-table-head-background: var(--pk-color-gray-50);--pk-chart-positive: var(--pk-color-teal-700);--pk-chart-positive-background: color-mix(in srgb, var(--pk-color-teal-500) 12%, transparent);--pk-chart-negative: var(--pk-color-red-700);--pk-chart-negative-background: color-mix(in srgb, var(--pk-color-red-500) 12%, transparent);--pk-chart-meter-ok: var(--pk-color-blue-600);--pk-chart-meter-warning: var(--pk-color-amber-600);--pk-chart-meter-danger: var(--pk-color-red-600)}html.pk-scroll-lock{--pk-scroll-lock: 1}@layer pk-utilities{:is(pk-alert,pk-state-panel,pk-spinner,pk-icon,pk-browser-frame,pk-button,pk-checkbox,pk-checkbox-select,pk-color-input,pk-code-editor,pk-input,pk-input-group,pk-input-group-addon,pk-input-group-button,pk-input-group-input,pk-input-group-text,pk-input-group-textarea,pk-textarea,pk-tiptap-editor,pk-tiptap-input,pk-tiptap-content,pk-field,pk-separator,pk-status,pk-status-label,pk-toggle,pk-toggle-group,pk-lightswitch,pk-button-group,pk-button-group-separator,pk-button-group-text,pk-dropdown-label,pk-dropdown-item,pk-dropdown-separator,pk-radio,pk-radio-group,pk-tab,pk-tab-heading,pk-tab-panel,pk-tabs,pk-wizard,pk-wizard-step,pk-setup-checklist,pk-setup-step,pk-scroll-area,pk-option,pk-option-group,pk-select,pk-calendar,pk-date-picker,pk-combobox,pk-autocomplete,pk-image-browser,pk-time-picker,pk-copy-button,pk-connect,pk-connect-oauth,pk-data-table,pk-data-table-toolbar,pk-editable-table,pk-line-chart,pk-bar-chart,pk-donut-chart,pk-funnel-chart,pk-sparkline,pk-meter):not(:defined){animation:2s step-end pk-fouce}:is(pk-dialog,pk-popup):not(:defined){display:none}:is(pk-dropdown-menu,pk-popover,pk-tooltip):not(:defined)>:not([slot=trigger]){display:none}:is(pk-select,pk-combobox,pk-time-picker,pk-checkbox-select):not(:defined)>:not([slot]){display:none}.pk-cloak:has(:not(:defined)){animation:2s step-end pk-fouce}@keyframes pk-fouce{0%{visibility:hidden}}}.pk-dialog__header{position:relative;display:flex;flex-shrink:0;flex-direction:column;gap:.25rem;padding:1rem;border-bottom:1px solid var(--pk-color-gray-150);border-radius:var(--pk-radius-lg) var(--pk-radius-lg) 0 0;background:#f3f7fb;text-align:left}.pk-dialog__title{margin:0;font-size:.9375rem;font-weight:600;line-height:1.2;color:var(--pk-color-gray-700)}.pk-dialog__body{padding:1rem;font-size:var(--pk-font-size-sm);line-height:1.5;color:var(--pk-color-gray-600)}.pk-dialog__footer{display:flex;flex-direction:row;justify-content:flex-end;gap:.5rem;padding:.625rem 1rem;border-top:1px solid var(--pk-color-gray-150);border-radius:0 0 var(--pk-radius-lg) var(--pk-radius-lg);background:#e4edf6}.pk-dialog__close{--pk-dialog-close-focus-padding: .25rem;position:absolute;top:calc(1rem - var(--pk-dialog-close-focus-padding));right:calc(1rem - var(--pk-dialog-close-focus-padding));opacity:.7;line-height:1;--pk-btn-padding-inline: var(--pk-dialog-close-focus-padding);--pk-btn-height: calc(1.125rem + 2 * var(--pk-dialog-close-focus-padding));--pk-btn-font: 1.125rem;--pk-btn-radius: var(--pk-radius-sm)}.pk-dialog__close:hover{opacity:1}.pk-dialog__close:focus-visible{opacity:1}
/*$vite$:1*/`,document.head.appendChild(e);var t=Object.defineProperty,n=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},r={width:448,height:512,path:`M352 64c0-17.7-14.3-32-32-32L128 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32L32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32z`},i={width:448,height:512,path:`M448 64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32L32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32z`},a={width:448,height:512,path:`M288 64c0 17.7-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32L32 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`},o={width:448,height:512,path:`M448 64c0 17.7-14.3 32-32 32L192 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`},s={width:384,height:512,path:`M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`},c={width:512,height:512,path:`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z`},l={width:512,height:512,path:`M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z`},u={width:512,height:512,path:`M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z`},d={width:512,height:512,path:`M436.7 74.7L448 85.4 448 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l47.9 0-7.6-7.2c-.2-.2-.4-.4-.6-.6-75-75-196.5-75-271.5 0s-75 196.5 0 271.5 196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c99.9-99.9 261.7-100 361.7-.3z`},ee={width:384,height:512,path:`M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z`},te={width:512,height:512,path:`M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z`},ne={width:448,height:512,path:`M224 0c17.7 0 32 14.3 32 32l0 168.6 144-83.1c15.3-8.8 34.9-3.6 43.7 11.7s3.6 34.9-11.7 43.7L288 256 432 339.1c15.3 8.8 20.6 28.4 11.7 43.7s-28.4 20.6-43.7 11.7L256 311.4 256 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-168.6-144 83.1c-15.3 8.8-34.9 3.6-43.7-11.7S.7 348 16 339.1L160 256 16 172.9C.7 164-4.5 144.5 4.3 129.1S32.7 108.6 48 117.4L192 200.6 192 32c0-17.7 14.3-32 32-32z`},re={width:384,height:512,path:`M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l32 0 0 320-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l224 0c70.7 0 128-57.3 128-128 0-46.5-24.8-87.3-62-109.7 18.7-22.3 30-51 30-82.3 0-70.7-57.3-128-128-128L32 32zM288 160c0 35.3-28.7 64-64 64l-96 0 0-128 96 0c35.3 0 64 28.7 64 64zM128 416l0-128 128 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-128 0z`},ie={width:576,height:512,path:`M416 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c17.7 0 32 14.3 32 32l0 37.5c0 25.5 10.1 49.9 28.1 67.9l22.6 22.6-22.6 22.6c-18 18-28.1 42.4-28.1 67.9l0 37.5c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c53 0 96-43 96-96l0-37.5c0-8.5 3.4-16.6 9.4-22.6l45.3-45.3c12.5-12.5 12.5-32.8 0-45.3l-45.3-45.3c-6-6-9.4-14.1-9.4-22.6l0-37.5c0-53-43-96-96-96zM160 32c-53 0-96 43-96 96l0 37.5c0 8.5-3.4 16.6-9.4 22.6L9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l45.3 45.3c6 6 9.4 14.1 9.4 22.6L64 384c0 53 43 96 96 96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32-14.3-32-32l0-37.5c0-25.5-10.1-49.9-28.1-67.9L77.3 256 99.9 233.4c18-18 28.1-42.4 28.1-67.9l0-37.5c0-17.7 14.3-32 32-32l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0z`},ae={width:448,height:512,path:`M128 0C110.3 0 96 14.3 96 32l0 32-32 0C28.7 64 0 92.7 0 128l0 48 448 0 0-48c0-35.3-28.7-64-64-64l-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32zM0 224L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192-448 0z`},oe={width:320,height:512,path:`M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z`},se={width:320,height:512,path:`M140.3 135.2c12.6-10.3 31.1-9.5 42.8 2.2l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301.4 320 288.5 320l-256 0c-12.9 0-24.6-7.8-29.6-19.8S.7 274.5 9.9 265.4l128-128 2.4-2.2z`},ce={width:448,height:512,path:`M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z`},f={width:448,height:512,path:`M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z`},le={width:320,height:512,path:`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z`},ue={width:320,height:512,path:`M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z`},de={width:448,height:512,path:`M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z`},fe={width:512,height:512,path:`M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z`},pe={width:512,height:512,path:`M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`},me={width:512,height:512,path:`M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-192a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z`},he={width:512,height:512,path:`M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z`},ge={width:384,height:512,path:`M320 32l-8.6 0C300.4 12.9 279.7 0 256 0L128 0C104.3 0 83.6 12.9 72.6 32L64 32C28.7 32 0 60.7 0 96L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-352c0-35.3-28.7-64-64-64zM136 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0z`},_e={width:512,height:512,path:`M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`},ve={width:512,height:512,path:`M288 448l-224 0 0-224 48 0 0-64-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-48-64 0 0 48zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z`},ye={width:576,height:512,path:`M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z`},be={width:448,height:512,path:`M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z`},xe={width:448,height:512,path:`M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z`},Se={width:448,height:512,path:`M0 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm168 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm224-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z`},Ce={width:512,height:512,path:`M502.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L413 53.8C369.6 20.1 315.2 0 256 0 114.6 0 0 114.6 0 256 0 315.2 20.1 369.6 53.8 413L9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L99 458.2c43.3 33.7 97.8 53.8 157 53.8 141.4 0 256-114.6 256-256 0-59.2-20.1-113.6-53.8-157l44.4-44.4zM367.2 99.5L99.5 367.2C77.1 335.9 64 297.5 64 256 64 150 150 64 256 64 297.5 64 335.9 77.1 367.2 99.5zm-222.5 313L412.5 144.8c22.4 31.4 35.5 69.8 35.5 111.2 0 106-86 192-192 192-41.5 0-79.9-13.1-111.2-35.5z`},we={width:576,height:512,path:`M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z`},Te={width:576,height:512,path:`M272 48L160 48c-8.8 0-16 7.2-16 16l0 176-48 0 0-176c0-35.3 28.7-64 64-64L293.5 0c17 0 33.3 6.7 45.3 18.7L461.3 141.3c12 12 18.7 28.3 18.7 45.3l0 53.5-48 0 0-32-88 0c-39.8 0-72-32.2-72-72l0-88zM96 384l48 0 0 64c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-64 48 0 0 64c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-64zM412.1 160L320 67.9 320 136c0 13.3 10.7 24 24 24l68.1 0zM24 288l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 336c-13.3 0-24-10.7-24-24s10.7-24 24-24zm208 0l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm208 0l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z`},Ee={width:448,height:512,path:`M32 0C49.7 0 64 14.3 64 32l0 16 69-17.2c38.1-9.5 78.3-5.1 113.5 12.5 46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1l0 279.7c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4-37.9-19-81.4-23.7-122.5-13.4L64 384 64 480c0 17.7-14.3 32-32 32S0 497.7 0 480L0 32C0 14.3 14.3 0 32 0zM64 187.1l64-13.9 0 65.5-64 13.9 0 65.5 48.8-12.2c5.1-1.3 10.1-2.4 15.2-3.3l0-63.9 38.9-8.4c8.3-1.8 16.7-2.5 25.1-2.1l0-64c13.6 .4 27.2 2.6 40.4 6.4l23.6 6.9 0 66.7-41.7-12.3c-7.3-2.1-14.8-3.4-22.3-3.8l0 71.4c21.8 1.9 43.3 6.7 64 14.4l0-69.8 22.7 6.7c13.5 4 27.3 6.4 41.3 7.4l0-64.2c-7.8-.8-15.6-2.3-23.2-4.5l-40.8-12 0-62c-13-3.8-25.8-8.8-38.2-15-8.2-4.1-16.9-7-25.8-8.8l0 72.4c-13-.4-26 .8-38.7 3.6l-25.3 5.5 0-75.2-64 16 0 73.1zM320 335.7c16.8 1.5 33.9-.7 50-6.8l14-5.2 0-71.7-7.9 1.8c-18.4 4.3-37.3 5.7-56.1 4.5l0 77.4zm64-149.4l0-70.8c-20.9 6.1-42.4 9.1-64 9.1l0 69.4c13.9 1.4 28 .5 41.7-2.6l22.3-5.2z`},De={width:448,height:512,path:`M71.3 295.6c-21.9-21.9-21.9-57.3 0-79.2s57.3-21.9 79.2 0 21.9 57.3 0 79.2s-57.4 21.9-79.2 0zM184.4 182.5c-21.9-21.9-21.9-57.3 0-79.2s57.3-21.9 79.2 0 21.9 57.3 0 79.2-57.3 21.8-79.2 0zm0 147c21.9-21.9 57.3-21.9 79.2 0s21.9 57.3 0 79.2s-57.3 21.9-79.2 0c-21.9-21.8-21.9-57.3 0-79.2zM297.5 216.4c21.9-21.9 57.3-21.9 79.2 0s21.9 57.3 0 79.2s-57.3 21.9-79.2 0c-21.8-21.9-21.8-57.3 0-79.2z`},Oe={width:512,height:512,path:`M64 224a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM256 96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm192 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM256 416a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM64 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z`},ke={width:320,height:512,path:`M128 64A64 64 0 1 0 0 64 64 64 0 1 0 128 64zm0 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM0 448c0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64-64 28.7-64 64zM320 64a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM192 256a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zM320 448c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64z`},Ae={width:512,height:512,path:`M448 96c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-64 32c-15.8 7.9-22.2 27.1-14.3 42.9s27.1 22.2 42.9 14.3l17.7-8.8 0 236.2-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-288zM64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 128 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-128 0 0-128z`},je={width:576,height:512,path:`M96 96c0-17.7-14.3-32-32-32S32 78.3 32 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 96 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-96 0 0-128zM368 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l81.1 0c21.5 0 38.9 17.4 38.9 38.9 0 13.9-7.5 26.8-19.6 33.8l-76.3 43.6C347.5 269.7 320 317.1 320 368.5l0 47.5c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-128 0 0-15.5c0-28.4 15.2-54.6 39.9-68.7l76.3-43.6C532.2 237.9 552 203.8 552 166.9 552 110.1 505.9 64 449.1 64L368 64z`},Me={width:576,height:512,path:`M96 96c0-17.7-14.3-32-32-32S32 78.3 32 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 96 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-96 0 0-128zM352 256c0 17.7 14.3 32 32 32l56 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-88 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l88 0c61.9 0 112-50.1 112-112 0-31.3-12.9-59.7-33.6-80 20.7-20.3 33.6-48.7 33.6-80 0-61.9-50.1-112-112-112l-88 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l88 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-56 0c-17.7 0-32 14.3-32 32z`},Ne={width:512,height:512,path:`M64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 96 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-96 0 0-128zm288 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 44.2 35.8 80 80 80l80 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-80 0c-8.8 0-16-7.2-16-16l0-112z`},Pe={width:576,height:512,path:`M96 96c0-17.7-14.3-32-32-32S32 78.3 32 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 96 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-96 0 0-128zM352 64c-17.7 0-32 14.3-32 32l0 144c0 17.7 14.3 32 32 32l80 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-80 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l80 0c66.3 0 120-53.7 120-120S498.3 208 432 208l-48 0 0-80 120 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L352 64z`},Fe={width:512,height:512,path:`M32 64c17.7 0 32 14.3 32 32l0 128 96 0 0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-96 0 0 128c0 17.7-14.3 32-32 32S0 433.7 0 416L0 96C0 78.3 14.3 64 32 64zm352 64c-17.7 0-32 14.3-32 32l0 53.5c10-3.5 20.8-5.5 32-5.5l32 0c53 0 96 43 96 96l0 48c0 53-43 96-96 96l-32 0c-53 0-96-43-96-96l0-192c0-53 43-96 96-96l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0zM352 304l0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32z`},Ie={width:576,height:512,path:`M315 315L473.4 99.9 444.1 70.6 229 229 315 315zm-187 5l0 0 0-71.7c0-15.3 7.2-29.6 19.5-38.6L420.6 8.4C428 2.9 437 0 446.2 0 457.6 0 468.5 4.5 476.6 12.6l54.8 54.8c8.1 8.1 12.6 19 12.6 30.5 0 9.2-2.9 18.2-8.4 25.6L334.4 396.5c-9 12.3-23.4 19.5-38.6 19.5l-71.7 0-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3L128 320zM7 466.3l51.7-51.7 70.6 70.6-19.7 19.7c-4.5 4.5-10.6 7-17 7L24 512c-13.3 0-24-10.7-24-24l0-4.7c0-6.4 2.5-12.5 7-17z`},Le={width:512,height:512,path:`M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z`},Re={width:384,height:512,path:`M128 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-58.7 0-133.3 320 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l58.7 0 133.3-320-64 0c-17.7 0-32-14.3-32-32z`},ze={width:384,height:512,path:`M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9 32.7-34.4 52.7-80.9 52.7-132.1 0-106-86-192-192-192S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9l201.7 0zM288 432l-192 0 0 16c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80l0-16zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24z`},Be={width:576,height:512,path:`M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z`},Ve={width:384,height:512,path:`M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z`},He={width:512,height:512,path:`M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z`},Ue={width:512,height:512,path:`M0 72C0 58.8 10.7 48 24 48l48 0c13.3 0 24 10.7 24 24l0 104 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-80-24 0C10.7 96 0 85.3 0 72zM30.4 301.2C41.8 292.6 55.7 288 70 288l4.9 0c33.7 0 61.1 27.4 61.1 61.1 0 19.6-9.4 37.9-25.2 49.4l-24 17.5 33.2 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-90.7 0C13.1 464 0 450.9 0 434.7 0 425.3 4.5 416.5 12.1 411l70.5-51.3c3.4-2.5 5.4-6.4 5.4-10.6 0-7.2-5.9-13.1-13.1-13.1L70 336c-3.9 0-7.7 1.3-10.8 3.6L38.4 355.2c-10.6 8-25.6 5.8-33.6-4.8S-1 324.8 9.6 316.8l20.8-15.6zM224 64l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z`},We={width:512,height:512,path:`M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z`},Ge={width:448,height:512,path:`M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z`},Ke={width:448,height:512,path:`M0 64C0 46.3 14.3 32 32 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 112 224 0 0-112-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 320 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-144-224 0 0 144 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-320-16 0C14.3 96 0 81.7 0 64z`},qe={width:448,height:512,path:`M160 0L416 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 416c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-416-48 0 0 416c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160-48 0C71.6 320 0 248.4 0 160S71.6 0 160 0z`},Je={width:512,height:512,path:`M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z`},Ye={width:448,height:512,path:`M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z`},Xe={width:512,height:512,path:`M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z`},Ze={width:448,height:512,path:`M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 136zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 136z`},Qe={width:512,height:512,path:`M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z`},$e={width:512,height:512,path:`M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z`},et={width:512,height:512,path:`M307.8 18.4c-12 5-19.8 16.6-19.8 29.6l0 80-112 0c-97.2 0-176 78.8-176 176 0 113.3 81.5 163.9 100.2 174.1 2.5 1.4 5.3 1.9 8.1 1.9 10.9 0 19.7-8.9 19.7-19.7 0-7.5-4.3-14.4-9.8-19.5-9.4-8.8-22.2-26.4-22.2-56.7 0-53 43-96 96-96l96 0 0 80c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-9.2-9.2-22.9-11.9-34.9-6.9z`},tt={width:576,height:512,path:`M32 448L160 64h64l128 384h-64l-32-96H128l-32 96H32zm117.3-160h85.3L192 160l-42.7 128zM336 448l80-240h48l80 240h-48l-16-48h-80l-16 48h-48zm80-96h48l-24-72-24 72z`},nt={width:512,height:512,path:`M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 224zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384z`},rt={width:512,height:512,path:`M0 416c0 8.8 7.2 16 16 16l65.6 0c7.4 36.5 39.7 64 78.4 64s71-27.5 78.4-64L496 432c8.8 0 16-7.2 16-16s-7.2-16-16-16l-257.6 0c-7.4-36.5-39.7-64-78.4-64s-71 27.5-78.4 64L16 400c-8.8 0-16 7.2-16 16zm112 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM304 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48-80c-38.7 0-71 27.5-78.4 64L16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l257.6 0c7.4 36.5 39.7 64 78.4 64s71-27.5 78.4-64l65.6 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-65.6 0c-7.4-36.5-39.7-64-78.4-64zM192 144a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm78.4-64C263 43.5 230.7 16 192 16s-71 27.5-78.4 64L16 80C7.2 80 0 87.2 0 96s7.2 16 16 16l97.6 0c7.4 36.5 39.7 64 78.4 64s71-27.5 78.4-64L496 112c8.8 0 16-7.2 16-16s-7.2-16-16-16L270.4 80z`},it={width:512,height:512,path:`M96 157.5C96 88.2 152.2 32 221.5 32L368 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L221.5 96c-34 0-61.5 27.5-61.5 61.5 0 31 23.1 57.2 53.9 61l44.1 5.5 222 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l83.1 0C103 204.6 96 181.8 96 157.5zM349.2 336l65.5 0c.9 6.1 1.4 12.2 1.4 18.5 0 69.3-56.2 125.5-125.5 125.5L144 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l146.5 0c34 0 61.5-27.5 61.5-61.5 0-6.4-1-12.7-2.8-18.5z`},at={width:576,height:512,path:`M96 64C78.3 64 64 78.3 64 96s14.3 32 32 32l15.3 0 89.6 128-89.6 128-15.3 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c10.4 0 20.2-5.1 26.2-13.6L240 311.8 325.8 434.4c6 8.6 15.8 13.6 26.2 13.6l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-15.3 0-89.6-128 89.6-128 15.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-10.4 0-20.2 5.1-26.2 13.6L240 200.2 154.2 77.6C148.2 69.1 138.4 64 128 64L96 64zM544 320c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16c-15.8 7.9-22.2 27.1-14.3 42.9 5.6 11.2 16.9 17.7 28.6 17.7l0 80c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-128z`},ot={width:576,height:512,path:`M544 32c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16C449.9 27.3 443.5 46.5 451.4 62.3 457 73.5 468.3 80 480 80l0 80c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-128zM96 64C78.3 64 64 78.3 64 96s14.3 32 32 32l15.3 0 89.6 128-89.6 128-15.3 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c10.4 0 20.2-5.1 26.2-13.6L240 311.8 325.8 434.4c6 8.6 15.8 13.6 26.2 13.6l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-15.3 0-89.6-128 89.6-128 15.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-10.4 0-20.2 5.1-26.2 13.6L240 200.2 154.2 77.6C148.2 69.1 138.4 64 128 64L96 64z`},st={width:448,height:512,path:`M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64l-320 0-6.5-.3C25.2 476.4 0 449.1 0 416L0 96C0 60.7 28.7 32 64 32l320 0zM64 320l0 96 128 0 0-96-128 0zm192 0l0 96 128 0 0-96-128 0zM64 256l128 0 0-96-128 0 0 96zm192 0l128 0 0-96-128 0 0 96z`},ct={width:576,height:512,path:`M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L322.7 256.9 368.2 96 471 96 465 120.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l11-44.1C545.6 61.3 522.7 32 491.5 32l-319 0c-19.8 0-37.3 12.1-44.5 30.1l-87-87zM180.4 114.5l4.6-18.5 116.7 0-30.8 109-90.5-90.5zM241 310.8L211.3 416 160 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-42.2 0 15.1-53.3-51.9-51.9z`},lt={width:512,height:512,path:`M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z`},ut={width:384,height:512,path:`M0 32C0 14.3 14.3 0 32 0L96 0c17.7 0 32 14.3 32 32S113.7 64 96 64l0 160c0 53 43 96 96 96s96-43 96-96l0-160c-17.7 0-32-14.3-32-32S270.3 0 288 0l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 160c0 88.4-71.6 160-160 160S32 312.4 32 224L32 64C14.3 64 0 49.7 0 32zM0 480c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32z`},dt={width:384,height:512,path:`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`},ft={width:128,height:512,path:`M64 144a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0 224c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-112c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56z`},pt={width:512,height:512,path:`M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z`},mt={width:512,height:512,path:`M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z`},ht={width:448,height:512,path:`M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z`},gt={alignCenter:r,alignJustify:i,alignLeft:a,alignRight:o,arrowDown:s,arrowLeft:c,arrowRight:l,arrowRotateLeft:u,arrowRotateRight:d,arrowUp:ee,arrowUpRightFromSquare:te,asterisk:ne,bold:re,bracketsCurly:ie,calendar:ae,caretDown:oe,caretUp:se,check:ce,chevronDown:f,chevronLeft:le,chevronRight:ue,chevronUp:de,circle:fe,circleCheck:pe,circleExclamation:me,circleInfo:he,clipboard:ge,clock:_e,clone:ve,code:ye,copy:be,download:xe,ellipsis:Se,ellipsisVertical:ft,emptySet:Ce,eye:we,fileDashedLine:Te,flagCheckered:Ee,gear:pt,gripDots:Oe,gripDotsVertical:ke,gripMove:De,h1:Ae,h2:je,h3:Me,h4:Ne,h5:Pe,h6:Fe,heading:Ke,highlighter:Ie,house:Le,italic:Re,lightbulb:ze,link:Be,lock:Ve,list:He,listOl:Ue,listUl:We,minus:Ge,paragraph:qe,pen:Je,penToSquare:mt,plus:Ye,circlePlus:Xe,quoteRight:Ze,arrowsRotate:Qe,magnifyingGlass:$e,share:et,smallCaps:tt,sliders:nt,slidersOutline:rt,strikethrough:it,subscript:at,superscript:ot,table:st,textSlash:ct,trash:ht,triangleExclamation:lt,underline:ut,xmark:dt},_t=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),p=e=>{let t=e.trim();return t&&(/[A-Z]/.test(t)?_t(t):t.toLowerCase())},m=`__PK_ICON_REGISTRY__`,vt=`__PK_ICON_REGISTRY_LISTENERS__`,h=()=>{let e=globalThis;return e[m]||(e[m]={}),e[m]},yt=()=>{let e=globalThis;return e[vt]||(e[vt]=new Set),e[vt]},bt=()=>{for(let e of yt())try{e()}catch{}},xt=e=>{let t=yt();return t.add(e),()=>{t.delete(e)}},St=()=>Object.keys(h()).sort(),Ct=e=>{if(!e)return;let t=h();return t[p(e)]??t[e]},wt=(e,t)=>{let n=p(e);if(!n)throw Error(`registerIcon: name must be a non-empty string`);if(!t?.path||!t.width||!t.height)throw Error(`registerIcon: icon "${n}" must include width, height, and path`);h()[n]=t,bt()},Tt=e=>{let t=!1;for(let[n,r]of Object.entries(e)){let e=p(n);if(!e)throw Error(`registerIcon: name must be a non-empty string`);if(!r?.path||!r.width||!r.height)throw Error(`registerIcon: icon "${e}" must include width, height, and path`);h()[e]=r,t=!0}t&&bt()},Et=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),Dt=e=>{let{width:t,height:n}=e;if(t===n)return`0 0 ${t} ${n}`;let r=Math.max(t,n);return`${(t-r)/2} ${(n-r)/2} ${r} ${r}`},g=(e,t={})=>{let{title:n,className:r,attributes:i={}}=t,a={xmlns:`http://www.w3.org/2000/svg`,viewBox:Dt(e),overflow:`visible`,...i};return r&&(a.class=r),n?(a.role=`img`,a[`aria-label`]=n):(a[`aria-hidden`]=`true`,a.focusable=`false`),`<svg ${Object.entries(a).map(([e,t])=>`${e}="${Et(t)}"`).join(` `)}><path fill="currentColor" d="${Et(e.path)}"/></svg>`},Ot=n({alignCenter:()=>r,alignJustify:()=>i,alignLeft:()=>a,alignRight:()=>o,arrowDown:()=>s,arrowLeft:()=>c,arrowRight:()=>l,arrowRotateLeft:()=>u,arrowRotateRight:()=>d,arrowUp:()=>ee,arrowUpRightFromSquare:()=>te,arrowsRotate:()=>Qe,asterisk:()=>ne,bold:()=>re,bracketsCurly:()=>ie,calendar:()=>ae,caretDown:()=>oe,caretUp:()=>se,check:()=>ce,chevronDown:()=>f,chevronLeft:()=>le,chevronRight:()=>ue,chevronUp:()=>de,circle:()=>fe,circleCheck:()=>pe,circleExclamation:()=>me,circleInfo:()=>he,circlePlus:()=>Xe,clipboard:()=>ge,clock:()=>_e,clone:()=>ve,code:()=>ye,copy:()=>be,download:()=>xe,ellipsis:()=>Se,ellipsisVertical:()=>ft,emptySet:()=>Ce,eye:()=>we,fileDashedLine:()=>Te,flagCheckered:()=>Ee,gear:()=>pt,getIcon:()=>Ct,getIconNames:()=>St,gripDots:()=>Oe,gripDotsVertical:()=>ke,gripMove:()=>De,h1:()=>Ae,h2:()=>je,h3:()=>Me,h4:()=>Ne,h5:()=>Pe,h6:()=>Fe,heading:()=>Ke,highlighter:()=>Ie,house:()=>Le,iconToSvg:()=>g,iconViewBox:()=>Dt,icons:()=>gt,italic:()=>Re,lightbulb:()=>ze,link:()=>Be,list:()=>He,listOl:()=>Ue,listUl:()=>We,lock:()=>Ve,magnifyingGlass:()=>$e,minus:()=>Ge,normalizeIconName:()=>p,paragraph:()=>qe,pen:()=>Je,penToSquare:()=>mt,plus:()=>Ye,quoteRight:()=>Ze,registerIcon:()=>wt,registerIcons:()=>Tt,share:()=>et,sliders:()=>nt,slidersOutline:()=>rt,smallCaps:()=>tt,strikethrough:()=>it,subscribeIconRegistry:()=>xt,subscript:()=>at,superscript:()=>ot,table:()=>st,textSlash:()=>ct,trash:()=>ht,triangleExclamation:()=>lt,underline:()=>ut,xmark:()=>dt}),_=(e,t={})=>g(e,{title:t.title}),kt=(e,t={})=>{let n=document.createElement(`template`);n.innerHTML=_(e,t);let r=n.content.firstElementChild;if(!(r instanceof SVGSVGElement))throw Error(`Icon render did not produce an SVG element.`);return r},At=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,Mt=Object.getOwnPropertyNames,Nt=Object.prototype.hasOwnProperty,Pt=(e,t)=>{let n={};for(var r in e)At(n,r,{get:e[r],enumerable:!0});return t||At(n,Symbol.toStringTag,{value:`Module`}),n},Ft=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=Mt(t),a=0,o=i.length,s;a<o;a++)s=i[a],!Nt.call(e,s)&&s!==n&&At(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=jt(t,s))||r.enumerable});return e},It=(e,t,n)=>(Ft(e,t,`default`),n&&Ft(n,t,`default`)),Lt=`M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l208 0 32 0 16 0 256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L320 64l-16 0-32 0L64 64zm512 48c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16l-256 0 0-288 256 0zM178.3 175.9l64 144c4.5 10.1-.1 21.9-10.2 26.4s-21.9-.1-26.4-10.2L196.8 316l-73.6 0-8.9 20.1c-4.5 10.1-16.3 14.6-26.4 10.2s-14.6-16.3-10.2-26.4l64-144c3.2-7.2 10.4-11.9 18.3-11.9s15.1 4.7 18.3 11.9zM179 276l-19-42.8L141 276l38 0zM456 164c-11 0-20 9-20 20l0 4-52 0c-11 0-20 9-20 20s9 20 20 20l72 0 35.1 0c-7.3 16.7-17.4 31.9-29.8 45l-.5-.5-14.6-14.6c-7.8-7.8-20.5-7.8-28.3 0s-7.8 20.5 0 28.3L430 298.3c-5.9 3.6-12.1 6.9-18.5 9.8l-3.6 1.6c-10.1 4.5-14.6 16.3-10.2 26.4s16.3 14.6 26.4 10.2l3.6-1.6c12-5.3 23.4-11.8 34-19.4c4.3 3 8.6 5.8 13.1 8.5l18.9 11.3c9.5 5.7 21.8 2.6 27.4-6.9s2.6-21.8-6.9-27.4l-18.9-11.3c-.9-.5-1.8-1.1-2.7-1.6c17.2-18.8 30.7-40.9 39.6-65.4L534 228l2 0c11 0 20-9 20-20s-9-20-20-20l-16 0-44 0 0-4c0-11-9-20-20-20z`,Rt=()=>{let e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);e.setAttribute(`aria-hidden`,`true`),e.setAttribute(`xmlns`,`http://www.w3.org/2000/svg`),e.setAttribute(`viewBox`,`0 0 640 512`);let t=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return t.setAttribute(`d`,Lt),e.append(t),e},v=Pt({createIconElement:()=>kt,createTranslationIconElement:()=>Rt,renderIconHtml:()=>_});It(v,Ot);var y=globalThis,zt=y.ShadowRoot&&(y.ShadyCSS===void 0||y.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Bt=Symbol(),Vt=new WeakMap,Ht=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Bt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(zt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Vt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Vt.set(t,e))}return e}toString(){return this.cssText}},b=e=>new Ht(typeof e==`string`?e:e+``,void 0,Bt),x=(e,...t)=>new Ht(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,Bt),Ut=(e,t)=>{if(zt)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=y.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Wt=zt?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return b(t)})(e):e,{is:Gt,defineProperty:Kt,getOwnPropertyDescriptor:qt,getOwnPropertyNames:Jt,getOwnPropertySymbols:Yt,getPrototypeOf:Xt}=Object,S=globalThis,Zt=S.trustedTypes,Qt=Zt?Zt.emptyScript:``,$t=S.reactiveElementPolyfillSupport,C=(e,t)=>e,w={toAttribute(e,t){switch(t){case Boolean:e=e?Qt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},en=(e,t)=>!Gt(e,t),tn={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:en};Symbol.metadata??=Symbol(`metadata`),S.litPropertyMetadata??=new WeakMap;var T=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=tn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Kt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=qt(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tn}static _$Ei(){if(this.hasOwnProperty(C(`elementProperties`)))return;let e=Xt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C(`properties`))){let e=this.properties,t=[...Jt(e),...Yt(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Wt(e))}else e!==void 0&&t.push(Wt(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ut(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?w:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?w:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??en)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};T.elementStyles=[],T.shadowRootOptions={mode:`open`},T[C(`elementProperties`)]=new Map,T[C(`finalized`)]=new Map,$t?.({ReactiveElement:T}),(S.reactiveElementVersions??=[]).push(`2.1.2`);var nn=globalThis,rn=e=>e,E=nn.trustedTypes,an=E?E.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,on=`$lit$`,D=`lit$${Math.random().toFixed(9).slice(2)}$`,sn=`?`+D,cn=`<${sn}>`,O=document,k=()=>O.createComment(``),A=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ln=Array.isArray,un=e=>ln(e)||typeof e?.[Symbol.iterator]==`function`,dn=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fn=/-->/g,pn=/>/g,M=RegExp(`>|${dn}(?:([^\\s"'>=/]+)(${dn}*=${dn}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),mn=/'/g,hn=/"/g,gn=/^(?:script|style|textarea|title)$/i,N=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),P=Symbol.for(`lit-noChange`),F=Symbol.for(`lit-nothing`),_n=new WeakMap,I=O.createTreeWalker(O,129);function vn(e,t){if(!ln(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return an===void 0?t:an.createHTML(t)}var yn=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=j;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===j?c[1]===`!--`?o=fn:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=M):(gn.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=M):o=pn:o===M?c[0]===`>`?(o=i??j,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?M:c[3]===`"`?hn:mn):o===hn||o===mn?o=M:o===fn||o===pn?o=j:(o=M,i=void 0);let d=o===M&&e[t+1].startsWith(`/>`)?` `:``;a+=o===j?n+cn:l>=0?(r.push(s),n.slice(0,l)+on+n.slice(l)+D+d):n+D+(l===-2?t:d)}return[vn(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},bn=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=yn(t,n);if(this.el=e.createElement(l,r),I.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=I.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(on)){let t=u[o++],n=i.getAttribute(e).split(D),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Cn:r[1]===`?`?wn:r[1]===`@`?Tn:R}),i.removeAttribute(e)}else e.startsWith(D)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(gn.test(i.tagName)){let e=i.textContent.split(D),t=e.length-1;if(t>0){i.textContent=E?E.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],k()),I.nextNode(),c.push({type:2,index:++a});i.append(e[t],k())}}}else if(i.nodeType===8){if(i.data===sn)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(D,e+1))!==-1;)c.push({type:7,index:a}),e+=D.length-1}}a++}}static createElement(e,t){let n=O.createElement(`template`);return n.innerHTML=e,n}};function L(e,t,n=e,r){if(t===P)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=A(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=L(e,i._$AS(e,t.values),i,r)),t}var xn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??O).importNode(t,!0);I.currentNode=r;let i=I.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Sn(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new En(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=I.nextNode(),a++)}return I.currentNode=O,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Sn=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=L(this,e,t),A(e)?e===F||e==null||e===``?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==P&&this._(e):e._$litType$===void 0?e.nodeType===void 0?un(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&A(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=bn.createElement(vn(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new xn(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=_n.get(e.strings);return t===void 0&&_n.set(e.strings,t=new bn(e)),t}k(t){ln(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(k()),this.O(k()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=rn(e).nextSibling;rn(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},R=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=F}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=L(this,e,t,0),a=!A(e)||e!==this._$AH&&e!==P,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=L(this,r[n+o],t,o),s===P&&(s=this._$AH[o]),a||=!A(s)||s!==this._$AH[o],s===F?e=F:e!==F&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Cn=class extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}},wn=class extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}},Tn=class extends R{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=L(this,e,t,0)??F)===P)return;let n=this._$AH,r=e===F&&n!==F||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==F&&(n===F||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},En=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){L(this,e)}},Dn=nn.litHtmlPolyfillSupport;Dn?.(bn,Sn),(nn.litHtmlVersions??=[]).push(`3.3.3`);var On=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Sn(t.insertBefore(k(),e),e,void 0,n??{})}return i._$AI(e),i},kn=globalThis,z=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=On(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return P}};z._$litElement$=!0,z.finalized=!0,kn.litElementHydrateSupport?.({LitElement:z});var An=kn.litElementPolyfillSupport;An?.({LitElement:z}),(kn.litElementVersions??=[]).push(`4.2.2`);var B=e=>(t,n)=>{let r=()=>{customElements.get(e)||customElements.define(e,t)};n===void 0?r():n.addInitializer(r)},jn=new Map;function Mn(e,t,n){let r=t.flatMap(e=>Array.isArray(e)?e:[e]).map(e=>`cssText`in e&&typeof e.cssText==`string`?e.cssText:b(e).cssText).join(`
`);if(!(`adoptedStyleSheets`in Document.prototype)||typeof CSSStyleSheet>`u`){let i=n??String(t.length);if(!e.querySelector(`style[data-pk-adopted-styles="${i}"]`)){let t=document.createElement(`style`);t.dataset.pkAdoptedStyles=i,t.textContent=r,e.prepend(t)}return}let i=n??r,a=jn.get(i);a||(a=new CSSStyleSheet,a.replaceSync(r),jn.set(i,a)),e.adoptedStyleSheets=[...e.adoptedStyleSheets,a]}var Nn=x`
    @layer pk-component {
        :host {
            display: inline-block;
            vertical-align: middle;
        }
    }
`;x`
    .pk-focus-ring:focus {
        outline: none;
    }

    .pk-focus-ring:focus-visible {
        box-shadow: var(--pk-shadow-focus);
    }
`;var Pn=x`
    @layer pk-reset {
        :host {
            box-sizing: border-box;
        }

        :host *,
        :host *::before,
        :host *::after {
            box-sizing: border-box;
        }

        :host(:not([hidden])) {
            /* Prevent UA / CP margin on unstyled custom element hosts in light DOM. */
            margin: 0;
        }
    }
`,V=class extends z{constructor(...e){super(...e),this.pkRenderFailed=!1}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}connectedCallback(){super.connectedCallback(),this.hasAttribute(`data-pk`)||this.setAttribute(`data-pk`,``)}createRenderRoot(){let e=super.createRenderRoot();return Mn(e,[Pn],`pk-shadow-reset`),e}performUpdate(){if(!this.pkRenderFailed)try{let e=super.performUpdate();e instanceof Promise&&e.catch(e=>{this.handleRenderFailure(e)})}catch(e){this.handleRenderFailure(e)}}handleRenderFailure(e){let t=e instanceof Error?e:Error(String(e));this.pkRenderFailed=!0,this.dispatchEvent(new CustomEvent(`pk-error`,{detail:{tagName:this.localName||this.tagName.toLowerCase(),message:t.message,stack:t.stack},bubbles:!0,composed:!0}));try{let e=this.renderRoot;if(e){e.textContent=``;let t=document.createElement(`div`);t.setAttribute(`part`,`error`),t.setAttribute(`role`,`alert`),t.textContent=`This control failed to load.`,e.appendChild(t)}}catch{}}};function H(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var Fn={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:en},In=(e=Fn,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function U(e){return(t,n)=>typeof n==`object`?In(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function W(e){return U({...e,state:!0,attribute:!1})}var Ln=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function Rn(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Ln(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Ln(n,r,{get(){return a(this)}})}}var zn=class{constructor(e,...t){this.host=e,this.boundSlots=new Set,this.lastHasContent=new Map,this.handleSlotChange=()=>{let e=!1;for(let t of this.slotNames){let n=this.test(t);this.lastHasContent.get(t)!==n&&(this.lastHasContent.set(t,n),e=!0)}e&&this.host.requestUpdate()},this.slotNames=t,e.addController(this)}hostConnected(){this.bindSlotListeners()}hostUpdated(){this.bindSlotListeners()}hostDisconnected(){for(let e of this.boundSlots)e.removeEventListener(`slotchange`,this.handleSlotChange);this.boundSlots.clear()}bindSlotListeners(){for(let e of this.slotNames){let t=this.findSlot(e);t&&!this.boundSlots.has(t)&&(this.boundSlots.add(t),t.addEventListener(`slotchange`,this.handleSlotChange),this.lastHasContent.has(e)||this.lastHasContent.set(e,this.test(e)))}}findSlot(e){return this.host.shadowRoot?e?this.host.shadowRoot.querySelector(`slot[name="${e}"]`):this.host.shadowRoot.querySelector(`slot:not([name])`):null}test(e,t=!1){if(t||this.hasLightDomSlotContent(e))return!0;let n=this.findSlot(e);return n?n.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE):!1}hasLightDomSlotContent(e){return[...this.host.children].some(t=>t.getAttribute(`slot`)===e)}};function Bn(e=`default`){return e===`xxs`||e===`xs`?`xxs`:e===`lg`||e===`xl`?`sm`:`xs`}function Vn(e=`default`,t){return t||(e===`primary`||e===`secondary`||e===`dashed`||e===`outline`||e===`transparent`?e:`default`)}var Hn=[Nn,x`
        @layer pk-component {
            :host {
                display: block;
                box-sizing: border-box;
            }

            :host([centered]) {
                position: absolute;
                top: 50%;
                left: 50%;
                display: block;
                width: fit-content;
                height: fit-content;
                margin: 0;
                transform: translate(-50%, -50%);
            }

            .spinner {
                display: block;
                box-sizing: border-box;
                margin-inline: auto;
                border-style: solid;
                border-bottom-color: transparent;
                border-left-color: transparent;
                border-radius: 50%;
                animation: pk-spinner-spin 0.5s linear infinite;
            }

            /* Sizes */
            :host([size='xxs']) .spinner {
                width: 0.75rem;
                height: 0.75rem;
                border-width: 1px;
            }

            :host([size='xs']) .spinner {
                width: 1rem;
                height: 1rem;
                border-width: 2px;
            }

            :host([size='sm']) .spinner,
            :host(:not([size])) .spinner {
                width: 1.5rem;
                height: 1.5rem;
                border-width: 2px;
            }

            :host([size='md']) .spinner {
                width: 2rem;
                height: 2rem;
                border-width: 2px;
            }

            :host([size='lg']) .spinner {
                width: 3rem;
                height: 3rem;
                border-width: 2px;
            }

            :host([size='xl']) .spinner {
                width: 4rem;
                height: 4rem;
                border-width: 2px;
            }

            /* Variants — matched to button loading contrast */
            :host([variant='default']:not([tone])) .spinner {
                border-top-color: var(--pk-color-red-500);
                border-right-color: var(--pk-color-red-500);
            }

            :host([variant='primary']:not([tone])) .spinner,
            :host([variant='secondary']:not([tone])) .spinner {
                border-top-color: var(--pk-color-white);
                border-right-color: var(--pk-color-white);
            }

            :host([variant='dashed']:not([tone])) .spinner,
            :host([variant='outline']:not([tone])) .spinner,
            :host([variant='transparent']:not([tone])) .spinner {
                border-top-color: var(--pk-color-gray-700);
                border-right-color: var(--pk-color-gray-700);
            }

            /* Standalone tone overrides */
            :host([tone='sky']) .spinner {
                border-top-color: var(--pk-color-sky-600);
                border-right-color: var(--pk-color-sky-600);
            }

            :host([tone='emerald']) .spinner {
                border-top-color: var(--pk-color-emerald-600);
                border-right-color: var(--pk-color-emerald-600);
            }

            :host([tone='violet']) .spinner {
                border-top-color: var(--pk-color-violet-600);
                border-right-color: var(--pk-color-violet-600);
            }

            :host([tone='amber']) .spinner {
                border-top-color: var(--pk-color-amber-500);
                border-right-color: var(--pk-color-amber-500);
            }

            @keyframes pk-spinner-spin {
                to {
                    transform: rotate(360deg);
                }
            }
        }
    `],G=class extends V{constructor(...e){super(...e),this.variant=`default`,this.size=`sm`,this.centered=!1}static{this.styles=Hn}render(){return N`
            <div part="base" class="spinner" aria-hidden="true"></div>
        `}};H([U({reflect:!0})],G.prototype,`variant`,void 0),H([U({reflect:!0})],G.prototype,`size`,void 0),H([U({reflect:!0})],G.prototype,`tone`,void 0),H([U({type:Boolean,reflect:!0})],G.prototype,`centered`,void 0),G=H([B(`pk-spinner`)],G);var Un=x`
    @layer pk-component {
        slot[name='start']::slotted(svg),
        slot[name='end']::slotted(svg) {
            display: block;
            width: 1em;
            height: 1em;
            flex-shrink: 0;
            pointer-events: none;
            vertical-align: middle;
            overflow: visible;
        }
    }
`;function Wn(e,t=`var(--pk-btn-radius, var(--pk-radius-lg))`){let n=b(e),r=b(t);return x`
        ${n} {
            border-top-left-radius: var(--pk-bg-start-start-radius, ${r});
            border-top-right-radius: var(--pk-bg-start-end-radius, ${r});
            border-bottom-left-radius: var(--pk-bg-end-start-radius, ${r});
            border-bottom-right-radius: var(--pk-bg-end-end-radius, ${r});
        }
    `}function Gn(){return x`
        :host([data-pk-group-orientation='horizontal']:not([data-pk-group-item-first]):not([data-pk-group-item-last])) {
            --pk-bg-start-start-radius: 0;
            --pk-bg-start-end-radius: 0;
            --pk-bg-end-start-radius: 0;
            --pk-bg-end-end-radius: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-item-first]:not([data-pk-group-item-last])) {
            --pk-bg-start-end-radius: 0;
            --pk-bg-end-end-radius: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-item-last]:not([data-pk-group-item-first])) {
            --pk-bg-start-start-radius: 0;
            --pk-bg-end-start-radius: 0;
        }

        :host([data-pk-group-orientation='vertical']:not([data-pk-group-item-first]):not([data-pk-group-item-last])) {
            --pk-bg-start-start-radius: 0;
            --pk-bg-start-end-radius: 0;
            --pk-bg-end-start-radius: 0;
            --pk-bg-end-end-radius: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-item-first]:not([data-pk-group-item-last])) {
            --pk-bg-end-start-radius: 0;
            --pk-bg-end-end-radius: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-item-last]:not([data-pk-group-item-first])) {
            --pk-bg-start-start-radius: 0;
            --pk-bg-start-end-radius: 0;
        }
    `}function Kn(){return x`
        :host([data-pk-group-orientation='horizontal'][data-pk-group-join][variant='outline']),
        :host([data-pk-group-orientation='horizontal'][data-pk-group-join][variant='dashed']) {
            margin-inline-start: var(--pk-bg-horizontal-indent-outlined, 0);
            margin-block-start: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-join][variant='outline']),
        :host([data-pk-group-orientation='vertical'][data-pk-group-join][variant='dashed']) {
            margin-block-start: var(--pk-bg-vertical-indent-outlined, 0);
            margin-inline-start: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([variant='outline']):not([variant='dashed']):not([variant='link']):not([variant='none'])) {
            margin-inline-start: var(--pk-bg-horizontal-indent, 0);
            margin-block-start: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([variant='outline']):not([variant='dashed']):not([variant='link']):not([variant='none'])) {
            margin-block-start: var(--pk-bg-vertical-indent, 0);
            margin-inline-start: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][data-pk-group-join][variant='primary']),
        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][data-pk-group-join][variant='secondary']),
        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][data-pk-group-join][variant='default']) {
            margin-inline-start: 0;
            margin-block-start: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider][data-pk-group-join][variant='primary']),
        :host([data-pk-group-orientation='vertical'][data-pk-group-divider][data-pk-group-join][variant='secondary']),
        :host([data-pk-group-orientation='vertical'][data-pk-group-divider][data-pk-group-join][variant='default']) {
            margin-block-start: 0;
            margin-inline-start: 0;
        }

        /* Filled variants — Craft margin gap; parent background shows through.
         * !important: outer preflight/utilities beat non-important :host margin
         * (revert-layer cannot restore shadow host values — it still specifies outer 0).
         */
        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='primary']),
        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='secondary']),
        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='default']) {
            margin-inline-end: var(--pk-btn-group-gap, 1px) !important;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='primary']),
        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='secondary']),
        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='default']) {
            margin-block-end: var(--pk-btn-group-gap, 1px) !important;
        }
    `}function qn(e){let t=b(e);return x`
        :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])) ${t} {
            border-left-width: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])) ${t} {
            border-top-width: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider]:not([variant='outline']):not([variant='dashed'])) ${t} {
            border-left-width: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider]:not([variant='outline']):not([variant='dashed'])) ${t} {
            border-top-width: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='outline']) ${t},
        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='dashed']) ${t} {
            border-right-width: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='outline']) ${t},
        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='dashed']) ${t} {
            border-bottom-width: 0;
        }
    `}var Jn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Yn=e=>(...t)=>({_$litDirective$:e,values:t}),Xn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},K=class extends Xn{constructor(e){if(super(e),this.it=F,e.type!==Jn.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===F||e==null)return this._t=void 0,this.it=e;if(e===P)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};K.directiveName=`unsafeHTML`,K.resultType=1;var Zn=Yn(K),Qn=class extends K{};Qn.directiveName=`unsafeSVG`,Qn.resultType=2;var q=Yn(Qn),J=Yn(class extends Xn{constructor(e){if(super(e),e.type!==Jn.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return P}}),$n=[Nn,Un,Gn(),Wn(`.button`),Kn(),qn(`.button`),x`
        @layer pk-component {
            :host {
                font-family: var(--pk-font-family);
                cursor: pointer;
                --pk-btn-height: var(--pk-btn-height-default);
                --pk-btn-font: var(--pk-btn-font-default);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-default);
                --pk-btn-icon-size: var(--pk-btn-icon-size-default);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-default);
                --pk-btn-caret-size: var(--pk-btn-caret-size-default);
                --pk-btn-radius: var(--pk-btn-radius-default);
                /*
                 * Slotted labels inherit from the host — pin the size-token font
                 * (and button line-height) so Craft CP / Tailwind hosts match.
                 */
                font-size: var(--pk-btn-font);
                line-height: 1.2;
            }

            :host([disabled]) {
                cursor: not-allowed;
                pointer-events: none;
            }

            :host([loading]):not([disabled]) {
                pointer-events: none;
            }

            .button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: var(--pk-btn-icon-gap);
                box-sizing: border-box;
                width: auto;
                margin: 0;
                /* Every button carries a 1px border (transparent for fill/plain variants) so the box
                 * model is identical across variants and states. Prevents width shift when swapping a
                 * button between filled and outline/dashed, or toggling states. Matches Bootstrap
                 * (transparent baseline) and  (border always present, only color changes).
                 */
                border: 1px solid transparent;
                border-radius: var(--pk-btn-radius);
                font: inherit;
                font-size: var(--pk-btn-font);
                font-weight: 400;
                line-height: 1.2;
                text-decoration: none;
                white-space: nowrap;
                /* Inherit host cursor so className/style (e.g. cursor-move) pierce shadow. */
                cursor: inherit;
                user-select: none;
                vertical-align: middle;
                appearance: none;
                background: var(--pk-btn-fill, var(--pk-action-fill));
                color: var(--pk-btn-on, var(--pk-action-on));
                height: var(--pk-btn-height);
                min-height: var(--pk-btn-height);
                /* Block padding defaults to 0 (height tokens center content). Override for nav rows. */
                padding-block: var(--pk-btn-padding-block, 0);
                padding-inline: var(--pk-btn-padding-inline);
                transition: background-color 0.12s ease, box-shadow 0.12s ease, color 0.12s ease;
            }

            .button:disabled {
                opacity: 0.5;
            }

            .icon-slot {
                display: none;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                line-height: 0;
            }

            .icon-slot--has-content {
                display: inline-flex;
            }

            /* Fixed token sizes for all icons (labeled or icon-only) — matches plugin-kit-react Button. */
            .icon-slot slot::slotted(svg),
            slot[name='start']::slotted(svg),
            slot[name='end']::slotted(svg) {
                display: block;
                width: var(--pk-btn-icon-size);
                height: var(--pk-btn-icon-size);
                flex-shrink: 0;
                pointer-events: none;
            }

            .icon-slot slot::slotted(img),
            slot[name='start']::slotted(img),
            slot[name='end']::slotted(img) {
                display: block;
                width: var(--pk-btn-icon-size);
                height: var(--pk-btn-icon-size);
                object-fit: contain;
                flex-shrink: 0;
                pointer-events: none;
            }

            /* pk-icon sizes itself from font-size (1em), so scale it to the
             * icon token. This keeps the idiomatic slotted pk-icon usage in
             * sync with raw slotted svg. Set width/height explicitly — %/size-full
             * collapses when the icon-slot has no definite box.
             */
            .icon-slot slot::slotted(pk-icon),
            slot[name='start']::slotted(pk-icon),
            slot[name='end']::slotted(pk-icon) {
                font-size: var(--pk-btn-icon-size);
                width: var(--pk-btn-icon-size);
                height: var(--pk-btn-icon-size);
                /* Kill pk-icon's text-baseline nudge (-0.125em) — flex slots center optically. */
                vertical-align: 0;
                flex-shrink: 0;
                pointer-events: none;
            }

            .label {
                display: inline-flex;
                align-items: center;
                min-width: 0;
                line-height: 1.2;
            }

            /* Trailing slot (status): grow + clip the label so end sits at the far edge
             * and long titles truncate instead of colliding with the indicator.
             */
            .button:has(.icon-slot--end.icon-slot--has-content) .label:not(.is-empty) {
                flex: 1 1 auto;
                overflow: hidden;
            }

            .label.is-empty {
                display: none;
            }

            /* Icon-only (no label): square hit box = size height. Button owns the target;
             * glyph size comes from --pk-btn-icon-size. Do not Tailwind-size the Icon.
             * Opt out with icon (compact), size=none, or group-trigger (narrow disclosure cap).
             */
            :host(:not([icon]):not([size='none']):not([group-trigger])) .button:not(.has-label) {
                width: var(--pk-btn-height);
                min-width: var(--pk-btn-height);
                padding-inline: 0;
            }

            /* Compact density (icon attr): padless box that hugs the glyph.
             * size still drives --pk-btn-icon-size; height/width tiers do not apply.
             * Use for dense x / ellipsis in cells — not for table action rows (prefer square above).
             * line-height: 0 collapses whitespace flex-struts so the glyph sits dead-center.
             */
            :host([icon]) {
                display: inline-flex;
                line-height: 0;
                vertical-align: middle;
            }

            :host([icon]) .button {
                display: flex;
                width: auto;
                min-width: 0;
                height: auto;
                min-height: 0;
                padding-inline: 0.25rem;
                padding-block: 0;
                line-height: 0;
                align-items: center;
                justify-content: center;
            }

            /* Keep label space while loading even before slotchange runs. */
            .button.loading .label.is-empty {
                display: inline-flex;
                visibility: hidden;
            }

            /* Sizes — token-driven scale (see tokens.css) */
            :host([size='xxs']) {
                --pk-btn-height: var(--pk-btn-height-xxs);
                --pk-btn-font: var(--pk-btn-font-xxs);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-xxs);
                --pk-btn-icon-size: var(--pk-btn-icon-size-xxs);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-xxs);
                --pk-btn-caret-size: var(--pk-btn-caret-size-xxs);
                --pk-btn-radius: var(--pk-btn-radius-xxs);
            }

            :host([size='xs']) {
                --pk-btn-height: var(--pk-btn-height-xs);
                --pk-btn-font: var(--pk-btn-font-xs);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-xs);
                --pk-btn-icon-size: var(--pk-btn-icon-size-xs);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-xs);
                --pk-btn-caret-size: var(--pk-btn-caret-size-xs);
                --pk-btn-radius: var(--pk-btn-radius-xs);
            }

            :host([size='sm']) {
                --pk-btn-height: var(--pk-btn-height-sm);
                --pk-btn-font: var(--pk-btn-font-sm);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-sm);
                --pk-btn-icon-size: var(--pk-btn-icon-size-sm);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-sm);
                --pk-btn-caret-size: var(--pk-btn-caret-size-sm);
                --pk-btn-radius: var(--pk-btn-radius-sm);
            }

            :host([size='default']) {
                --pk-btn-height: var(--pk-btn-height-default);
                --pk-btn-font: var(--pk-btn-font-default);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-default);
                --pk-btn-icon-size: var(--pk-btn-icon-size-default);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-default);
                --pk-btn-caret-size: var(--pk-btn-caret-size-default);
                --pk-btn-radius: var(--pk-btn-radius-default);
            }

            :host([size='lg']) {
                --pk-btn-height: var(--pk-btn-height-lg);
                --pk-btn-font: var(--pk-btn-font-lg);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-lg);
                --pk-btn-icon-size: var(--pk-btn-icon-size-lg);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-lg);
                --pk-btn-caret-size: var(--pk-btn-caret-size-lg);
                --pk-btn-radius: var(--pk-btn-radius-lg);
            }

            :host([size='xl']) {
                --pk-btn-height: var(--pk-btn-height-xl);
                --pk-btn-font: var(--pk-btn-font-xl);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-xl);
                --pk-btn-icon-size: var(--pk-btn-icon-size-xl);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-xl);
                --pk-btn-caret-size: var(--pk-btn-caret-size-xl);
                --pk-btn-radius: var(--pk-btn-radius-xl);
            }

            /* No preset scale — size to content or set --pk-btn-* on the host for one-off dimensions
             * (height, padding, font, icon, radius) without fighting a named size tier.
             * Pair with icon for a padless glyph host, or set --pk-btn-padding-inline / --pk-btn-height yourself.
             */
            :host([size='none']) {
                --pk-btn-height: auto;
                --pk-btn-font: inherit;
                --pk-btn-padding-inline: 0px;
                --pk-btn-padding-block: 0px;
                --pk-btn-icon-size: 1em;
                --pk-btn-icon-gap: 0px;
                --pk-btn-caret-size: 1em;
                --pk-btn-radius: 0px;
            }

            :host([size='none']) .button {
                height: auto;
                min-height: auto;
                width: 100%;
            }

            /* Variants */
            :host([variant='default']) {
                --pk-btn-fill: var(--pk-action-fill);
                --pk-btn-fill-hover: var(--pk-action-fill-hover);
                --pk-btn-fill-active: var(--pk-action-fill-active);
                --pk-btn-on: var(--pk-action-on);
            }

            :host([variant='primary']) {
                --pk-btn-fill: var(--pk-action-primary-fill);
                --pk-btn-fill-hover: var(--pk-action-primary-fill-hover);
                --pk-btn-fill-active: var(--pk-action-primary-fill-active);
                --pk-btn-on: var(--pk-action-primary-on);
            }

            :host([variant='primary']) .button,
            :host([variant='secondary']) .button {
                -moz-osx-font-smoothing: grayscale;
                -webkit-font-smoothing: antialiased;
            }

            :host([variant='secondary']) {
                --pk-btn-fill: var(--pk-color-gray-500);
                --pk-btn-fill-hover: var(--pk-color-gray-550);
                --pk-btn-fill-active: var(--pk-color-gray-600);
                --pk-btn-on: var(--pk-color-white);
            }

            :host([variant='outline']) .button {
                background: transparent;
                border-color: var(--pk-color-slate-400);
                color: var(--pk-color-gray-700);
            }

            :host([variant='transparent']) .button {
                background: transparent;
                color: var(--pk-color-gray-700);
            }

            /* link/none opt out of the shared transparent 1px border: they never render a border, so
             * carrying one only pads the box by 2px inline (and 2px block at size='none', where height
             * is auto). These are the "inline text" / "no chrome" variants — content-sized is the point,
             * and neither participates in button-group border joins. Other variants keep the stable box.
             */
            /*
             * Craft CP sets --link-color on :root (inherits into shadow). Prefer that,
             * then kit --pk-color-link — not sky-700 (reads as a different “CP blue”).
             * Color on :host so consumer utilities (e.g. text-[var(--link-color)]) can override.
             * Height must be content-sized — default --pk-btn-height (34px) bloated table rows.
             */
            :host([variant='link']) {
                color: var(--link-color, var(--pk-color-link));
                --pk-btn-height: auto;
                --pk-btn-padding-inline: 0;
                --pk-btn-padding-block: 0;
            }

            :host([variant='link']) .button {
                background: transparent;
                border-width: 0;
                border-radius: 0;
                color: inherit;
                width: auto;
                height: auto;
                min-height: 0;
                padding: 0;
                text-underline-offset: 2px;
            }

            :host([variant='dashed']) .button {
                background: transparent;
                border-style: dashed;
                border-color: var(--pk-color-slate-500);
                color: var(--pk-color-gray-700);
            }

            :host([variant='none']) .button {
                border-width: 0;
                border-radius: 0;
                background: transparent;
                color: inherit;
            }

            /* Interaction — pseudo-classes only; playground matrices use dev/pk-button-demo-states.css */
            .button:hover:not(:disabled) {
                background: var(--pk-btn-fill-hover, var(--pk-btn-fill));
            }

            :host([variant='outline']) .button:hover:not(:disabled),
            :host([variant='transparent']) .button:hover:not(:disabled),
            :host([variant='dashed']) .button:hover:not(:disabled) {
                background: var(--pk-color-slate-150);
            }

            :host([variant='link']) .button:hover:not(:disabled) {
                background: transparent;
                text-decoration: underline;
            }

            :host([variant='none']) .button:hover:not(:disabled) {
                background: transparent;
            }

            .button:active:not(:disabled) {
                background: var(--pk-btn-fill-active, var(--pk-btn-fill-hover, var(--pk-btn-fill)));
            }

            :host([variant='outline']) .button:active:not(:disabled),
            :host([variant='transparent']) .button:active:not(:disabled),
            :host([variant='dashed']) .button:active:not(:disabled) {
                background: var(--pk-color-slate-200);
            }

            :host([variant='link']) .button:active:not(:disabled),
            :host([variant='none']) .button:active:not(:disabled) {
                background: transparent;
            }

            .button:focus {
                outline: none;
            }

            .button:focus-visible {
                box-shadow: var(--pk-shadow-focus);
            }

            /* Bordered variants: fold the button's own border into the focus ring by recoloring it to
             * the accent (and solidifying dashed) so focus reads as one cohesive ring instead of a
             * doubled border. The ring is thinned to 1px here because the recolored 1px border already
             * supplies the other half — total 2px, matching the filled variants' ring weight.
             */
            :host([variant='outline']) .button:focus-visible,
            :host([variant='dashed']) .button:focus-visible {
                border-color: var(--pk-color-sky-600);
                box-shadow: 0 0 0 1px var(--pk-color-sky-600), 0 0 5px 1px hsl(from var(--pk-color-sky-600) h s l / 0.7);
            }

            :host([variant='dashed']) .button:focus-visible {
                border-style: solid;
            }

            :host(.pk-dialog__close) .button:focus-visible {
                box-shadow: 0 0 0 2px var(--pk-color-gray-600);
            }

            :host-context(pk-button-group) {
                position: relative;
            }

            :host-context(pk-button-group[orientation='vertical']) {
                display: block;
                width: 100%;
                max-width: 100%;
                box-sizing: border-box;
            }

            :host-context(pk-button-group[orientation='vertical']) .button {
                width: 100%;
                box-sizing: border-box;
            }

            :host-context(pk-button-group:focus-visible) {
                z-index: 2;
            }

            /* Bordered variants — matching border divider (filled uses margin gap via buttonGroupIndentStyles) */

            :host([variant='primary']) .button:focus-visible,
            :host([variant='secondary']) .button:focus-visible {
                box-shadow: var(--pk-shadow-focus-inset);
            }

            :host-context(pk-button-group[exclusive]):host([aria-pressed='true']) .button {
                background: var(--pk-color-gray-500);
                color: var(--pk-color-white);
            }

            :host-context(pk-button-group[exclusive]):host([aria-pressed='true']) .button:hover:not(:disabled) {
                background: var(--pk-color-gray-550);
            }

            :host-context(pk-button-group[exclusive]):host([aria-pressed='true']) .button:active:not(:disabled) {
                background: var(--pk-color-gray-600);
            }

            :host-context(pk-button-group[exclusive]):host([aria-pressed='true']) .button:focus-visible {
                box-shadow: var(--pk-shadow-focus);
            }

            :host([variant='link']) .button:focus-visible {
                box-shadow: none;
                text-decoration: underline;
            }

            .button.loading {
                position: relative;
                cursor: default;
                pointer-events: none;
            }

            .label.loading {
                visibility: hidden;
            }

            .button.loading .icon-slot,
            .button.loading slot[name='start']::slotted(*),
            .button.loading slot[name='end']::slotted(*) {
                visibility: hidden;
            }

            .button.caret .icon-slot--end.icon-slot--has-content {
                display: none;
            }

            /* Scope to the caret span — the button host also gets class caret when
               with-caret is set; an unscoped .caret rule was adding 2px margin
               to the whole button and shifting dropdown anchors left. */
            .button > .caret {
                display: inline-flex;
                align-self: center;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                line-height: 0;
                /* Sits slightly further from the label than the flex gap alone. */
                margin-inline-start: 2px;
            }

            /* Caret has its own per-size token (--pk-btn-caret-size), kept deliberately smaller than
             * --pk-btn-icon-size so it reads as a subordinate dropdown affordance next to real icons.
             */
            .button > .caret svg {
                display: block;
                width: var(--pk-btn-caret-size);
                height: var(--pk-btn-caret-size);
            }

            :host([group-trigger]) .button {
                padding-inline: 6px;
            }

            /* Compact disclosure cap — hide content, keep only the shared SVG caret (centered). */
            :host([group-trigger]) .label,
            :host([group-trigger]) .icon-slot {
                display: none;
            }

            :host([group-trigger]) .button > .caret {
                margin-inline-start: 0;
            }

            :host([size='sm'][group-trigger]) .button,
            :host([size='xs'][group-trigger]) .button,
            :host([size='xxs'][group-trigger]) .button {
                padding-inline: 6px;
            }

            :host([size='lg'][group-trigger]) .button {
                padding-inline: 10px;
            }

            :host([size='xl'][group-trigger]) .button {
                padding-inline: 12px;
            }

            :host-context(pk-button-group[orientation='horizontal']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='outline']) .button,
            :host-context(pk-button-group[orientation='horizontal']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='dashed']) .button,
            :host-context(pk-button-group[orientation='horizontal']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='transparent']) .button {
                border-left-width: 0;
            }

            :host-context(pk-button-group[orientation='vertical']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='outline']) .button,
            :host-context(pk-button-group[orientation='vertical']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='dashed']) .button,
            :host-context(pk-button-group[orientation='vertical']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='transparent']) .button {
                border-top-width: 0;
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])[variant='outline']) .button,
            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])[variant='dashed']) .button,
            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])[variant='transparent']) .button {
                border-left-width: 0;
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])[variant='outline']) .button,
            :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])[variant='dashed']) .button,
            :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])[variant='transparent']) .button {
                border-top-width: 0;
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][variant='outline']) .button {
                box-shadow: none;
                border-left-width: 1px;
                border-left-style: solid;
                border-left-color: var(--pk-btn-group-divider-color-outline, var(--pk-color-slate-400));
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-divider][variant='outline']) .button {
                box-shadow: none;
                border-top-width: 1px;
                border-top-style: solid;
                border-top-color: var(--pk-btn-group-divider-color-outline, var(--pk-color-slate-400));
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][variant='dashed']) .button {
                box-shadow: none;
                border-left-width: 1px;
                border-left-style: dashed;
                border-left-color: var(--pk-btn-group-divider-color-dashed, var(--pk-color-slate-500));
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-divider][variant='dashed']) .button {
                box-shadow: none;
                border-top-width: 1px;
                border-top-style: dashed;
                border-top-color: var(--pk-btn-group-divider-color-dashed, var(--pk-color-slate-500));
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][variant='outline']) .button:focus-visible,
            :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][variant='dashed']) .button:focus-visible {
                box-shadow: var(--pk-shadow-focus);
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-divider][variant='outline']) .button:focus-visible,
            :host([data-pk-group-orientation='vertical'][data-pk-group-divider][variant='dashed']) .button:focus-visible {
                box-shadow: var(--pk-shadow-focus);
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='outline']) .button,
            :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='dashed']) .button {
                border-right-width: 0;
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='outline']) .button,
            :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='dashed']) .button {
                border-bottom-width: 0;
            }
        }
    `],er=g(f),Y=class extends V{constructor(...e){super(...e),this.variant=`default`,this.size=`default`,this.disabled=!1,this.loading=!1,this.withCaret=!1,this.groupTrigger=!1,this.icon=!1,this.title=``,this.ariaLabel=null,this.ariaPressed=null,this.ariaExpanded=null,this.ariaHasPopup=null,this.type=`button`,this.hasDefaultSlotContent=!1,this.hasStartSlotContent=!1,this.hasEndSlotContent=!1,this.startSlotChanged=e=>{this.iconSlotChanged(e,`start`)},this.endSlotChanged=e=>{this.iconSlotChanged(e,`end`)},this.handleHostClick=e=>{if(this.disabled||this.loading||this.href||this.type!==`submit`&&this.type!==`reset`)return;let t=this.resolveAssociatedForm();t&&(e.preventDefault(),e.stopPropagation(),this.type===`reset`?t.reset():typeof t.requestSubmit==`function`?t.requestSubmit():t.dispatchEvent(new Event(`submit`,{bubbles:!0,cancelable:!0})))}}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}static{this.styles=$n}defaultSlotChanged(e){let t=e.target;this.hasDefaultSlotContent=t.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE)}iconSlotChanged(e,t){let n=e.target.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE);t===`start`?this.hasStartSlotContent=n:this.hasEndSlotContent=n}buttonClasses(){return J({button:!0,"has-label":this.hasDefaultSlotContent,loading:this.loading,caret:this.withCaret,"group-trigger":this.groupTrigger})}connectedCallback(){super.connectedCallback(),this.setAttribute(`data-slot`,`button`),this.addEventListener(`click`,this.handleHostClick)}disconnectedCallback(){this.removeEventListener(`click`,this.handleHostClick),super.disconnectedCallback()}resolveAssociatedForm(){let e=(this.form||this.getAttribute(`form`)||``).trim();if(e){let t=this.ownerDocument?.getElementById(e);if(t instanceof HTMLFormElement&&t.id!==`main`)return t}let t=this.closest(`form`);return t&&t.id!==`main`?t:null}render(){let e=this.spinnerSize||Bn(this.size),t=Vn(this.variant,this.spinnerVariant),n=!!this.href,r=this.ariaLabel||this.title||``;return N`
            ${n?N`
                    <a
                        part="base"
                        class=${this.buttonClasses()}
                        href=${this.href}
                        target=${this.target??F}
                        rel=${this.rel??F}
                        aria-label=${r||F}
                        aria-pressed=${this.ariaPressed??F}
                        aria-expanded=${this.ariaExpanded??F}
                        aria-haspopup=${this.ariaHasPopup??F}
                    >
                        ${this.renderInner(e,t)}
                    </a>
                `:N`
                    <button
                        part="base"
                        class=${this.buttonClasses()}
                        type=${this.type}
                        ?disabled=${this.disabled}
                        aria-disabled=${this.disabled?`true`:F}
                        aria-busy=${this.loading?`true`:F}
                        aria-label=${r||F}
                        aria-pressed=${this.ariaPressed??F}
                        aria-expanded=${this.ariaExpanded??F}
                        aria-haspopup=${this.ariaHasPopup??F}
                        name=${this.name??F}
                        value=${this.value??F}
                    >
                        ${this.renderInner(e,t)}
                    </button>
                `}
        `}renderInner(e,t){return N`
            <span
                class=${J({"icon-slot":!0,"icon-slot--start":!0,"icon-slot--has-content":this.hasStartSlotContent})}
            >
                <slot name="start" @slotchange=${this.startSlotChanged}></slot>
            </span>
            ${this.loading?N`
                    <pk-spinner
                        variant=${t}
                        size=${e}
                        tone=${this.spinnerTone??F}
                        centered
                    ></pk-spinner>
                `:F}
            <span
                class=${J({label:!0,"is-empty":!this.hasDefaultSlotContent,loading:this.loading})}
            >
                <slot @slotchange=${this.defaultSlotChanged}></slot>
            </span>
            <span
                class=${J({"icon-slot":!0,"icon-slot--end":!0,"icon-slot--has-content":this.hasEndSlotContent})}
            >
                <slot name="end" @slotchange=${this.endSlotChanged}></slot>
            </span>
            ${this.withCaret||this.groupTrigger?N`<span part="caret" class="caret">${q(er)}</span>`:F}
        `}};H([U({reflect:!0})],Y.prototype,`variant`,void 0),H([U({reflect:!0})],Y.prototype,`size`,void 0),H([U({type:Boolean,reflect:!0})],Y.prototype,`disabled`,void 0),H([U({type:Boolean,reflect:!0})],Y.prototype,`loading`,void 0),H([U({reflect:!0,attribute:`spinner-size`})],Y.prototype,`spinnerSize`,void 0),H([U({reflect:!0,attribute:`spinner-variant`})],Y.prototype,`spinnerVariant`,void 0),H([U({reflect:!0,attribute:`spinner-tone`})],Y.prototype,`spinnerTone`,void 0),H([U({type:Boolean,reflect:!0,attribute:`with-caret`})],Y.prototype,`withCaret`,void 0),H([U({type:Boolean,reflect:!0,attribute:`group-trigger`})],Y.prototype,`groupTrigger`,void 0),H([U({type:Boolean,reflect:!0})],Y.prototype,`icon`,void 0),H([U()],Y.prototype,`href`,void 0),H([U()],Y.prototype,`target`,void 0),H([U()],Y.prototype,`rel`,void 0),H([U()],Y.prototype,`name`,void 0),H([U()],Y.prototype,`value`,void 0),H([U()],Y.prototype,`title`,void 0),H([U({attribute:`aria-label`})],Y.prototype,`ariaLabel`,void 0),H([U({attribute:`aria-pressed`})],Y.prototype,`ariaPressed`,void 0),H([U({attribute:`aria-expanded`})],Y.prototype,`ariaExpanded`,void 0),H([U({attribute:`aria-haspopup`})],Y.prototype,`ariaHasPopup`,void 0),H([U()],Y.prototype,`type`,void 0),H([U({reflect:!0})],Y.prototype,`form`,void 0),H([W()],Y.prototype,`hasDefaultSlotContent`,void 0),H([W()],Y.prototype,`hasStartSlotContent`,void 0),H([W()],Y.prototype,`hasEndSlotContent`,void 0),Y=H([B(`pk-button`)],Y);var tr=class extends Event{constructor(e){super(`pk-copy`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail={value:e}}},X=class extends Event{constructor(){super(`pk-copy-error`,{bubbles:!0,cancelable:!1,composed:!0})}};async function nr(e){await navigator.clipboard.writeText(e)}function rr(e,t,n){if(!t)return n||null;let r=t.includes(`.`),i=t.includes(`[`)&&t.includes(`]`),a=t,o=``;r?[a,o]=t.trim().split(`.`):i&&([a,o]=t.trim().replace(/\]$/,``).split(`[`));let s=`getElementById`in e?e.getElementById(a):null;if(!s)return null;if(i)return s.getAttribute(o)??``;if(r){let e=s[o];return e==null?``:String(e)}return s.textContent??``}var ir=x`
    @layer pk-component {
        :host {
            display: inline-block;
        }

        /* Match React CopyButton size="icon" — square, no horizontal padding. */
        pk-button::part(base) {
            padding-inline: 0;
            width: var(--pk-btn-height-default);
            min-width: var(--pk-btn-height-default);
            border-color: var(--pk-copy-button-border-color);
            border-radius: var(--pk-copy-button-radius);
            background: var(--pk-copy-button-background);
            color: var(--pk-copy-button-color);
        }

        pk-button::part(base):hover:not(:disabled) {
            border-color: var(
                --pk-copy-button-hover-border-color,
                var(--pk-copy-button-border-color)
            );
            background: var(--pk-copy-button-hover-background);
            color: var(--pk-copy-button-hover-color, var(--pk-copy-button-color));
        }

        /*
         * In-control trailing action (slot=end on pk-input, etc.): same family as
         * combobox expand/clear and image-browser clear — flex-reserved hit box
         * flush to the field edge, glyph sized via --pk-input-decoration-size.
         */
        :host([slot='end']) {
            display: inline-flex;
            align-self: stretch;
            height: auto;
            /* size=none buttons resolve --pk-btn-icon-size: 1em against this. */
            font-size: var(--pk-input-decoration-size, 0.75rem);
        }

        :host([slot='end']) pk-button {
            display: flex;
            height: 100%;
        }

        :host([slot='end']) pk-button::part(base) {
            box-sizing: border-box;
            width: calc(
                var(--pk-input-decoration-size, 0.75rem) + var(--pk-input-padding-inline, 8px)
            );
            min-width: calc(
                var(--pk-input-decoration-size, 0.75rem) + var(--pk-input-padding-inline, 8px)
            );
            height: 100%;
            min-height: 100%;
            padding: 0;
            border-width: 0;
            border-radius: 0;
            background: transparent;
            color: var(--pk-color-gray-600);
        }

        :host([slot='end']) pk-button::part(base):hover:not(:disabled) {
            color: var(--pk-color-gray-800);
        }
    }
`,ar=_(v.check).replace(`<svg`,`<svg slot="start" part="success-icon"`),or=_(v.copy).replace(`<svg`,`<svg slot="start" part="copy-icon"`),sr=2e3,Z=class extends V{constructor(...e){super(...e),this.hasSlotController=new zn(this,`icon`),this.value=``,this.from=``,this.disabled=!1,this.variant=`transparent`,this.ariaLabel=`Copy`,this.copiedLabel=`Copied`,this.copied=!1,this.resetCopied=()=>{this.copied=!1}}static{this.styles=ir}disconnectedCallback(){window.clearTimeout(this.resetTimer),super.disconnectedCallback()}scheduleReset(){window.clearTimeout(this.resetTimer),this.resetTimer=window.setTimeout(this.resetCopied,sr)}async copy(){if(this.disabled)return;let e=rr(this.getRootNode(),this.from,this.value);if(e==null||e===``)this.dispatchEvent(new X);else try{await nr(e),this.copied=!0,this.scheduleReset(),this.dispatchEvent(new tr(e))}catch{this.dispatchEvent(new X)}}render(){let e=this.getAttribute(`slot`)===`end`;return N`
            <pk-button
                part="button"
                variant=${e?`none`:this.variant}
                size=${e?`none`:`default`}
                ?icon=${e}
                aria-label=${this.copied?this.copiedLabel:this.ariaLabel}
                ?disabled=${this.disabled}
                @click=${this.copy}
            >
                ${this.copied?Zn(ar):this.hasSlotController.test(`icon`)?N`<slot name="icon" slot="start"></slot>`:Zn(or)}
            </pk-button>
        `}};H([U()],Z.prototype,`value`,void 0),H([U()],Z.prototype,`from`,void 0),H([U({type:Boolean,reflect:!0})],Z.prototype,`disabled`,void 0),H([U({reflect:!0})],Z.prototype,`variant`,void 0),H([U({attribute:`aria-label`})],Z.prototype,`ariaLabel`,void 0),H([U({attribute:`copied-label`})],Z.prototype,`copiedLabel`,void 0),H([W()],Z.prototype,`copied`,void 0),Z=H([B(`pk-copy-button`)],Z);var Q=class extends V{constructor(...e){super(...e),this.icon=``,this.name=``,this.unsubscribeRegistry=null}static{this.styles=x`
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: none;
            /* Square em box + slight baseline nudge for inline text. Flex
             * parents (e.g. button slots) should zero vertical-align. */
            width: 1em;
            height: 1em;
            line-height: 1;
            vertical-align: -0.125em;
        }

        svg {
            display: block;
            width: 100%;
            height: 100%;
            fill: currentColor;
            /* Allow intentional path overhang past the icon canvas. */
            overflow: visible;
        }
    `}connectedCallback(){super.connectedCallback(),this.unsubscribeRegistry=xt(()=>{this.requestUpdate()})}disconnectedCallback(){this.unsubscribeRegistry?.(),this.unsubscribeRegistry=null,super.disconnectedCallback()}render(){let e=Ct(this.icon||this.name);return e?N`${q(g(e,{title:this.label}))}`:F}};H([U()],Q.prototype,`icon`,void 0),H([U()],Q.prototype,`name`,void 0),H([U()],Q.prototype,`label`,void 0),Q=H([B(`pk-icon`)],Q);var cr=x`
    @layer pk-component {
        :host {
            display: flex;
            flex: 1 1 auto;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: var(--pk-state-panel-min-height, var(--_pk-state-panel-min-height));
            padding: var(--pk-state-panel-padding, var(--_pk-state-panel-padding));
            color: var(--pk-state-panel-body-color, var(--pk-color-gray-500));
            font-family: var(--pk-font-family);
            font-size: var(--_pk-state-panel-font-size);
            line-height: var(--pk-line-height);
            text-align: center;
            --pk-state-panel-accent: var(--pk-color-slate-500);
            --pk-state-panel-icon-background: color-mix(
                in srgb,
                var(--pk-color-slate-200) 55%,
                transparent
            );
            --_pk-state-panel-font-size: var(--pk-font-size-sm);
            --_pk-state-panel-title-size: var(--pk-font-size-base);
            --_pk-state-panel-content-width: 32rem;
            --_pk-state-panel-min-height: 11rem;
            --_pk-state-panel-padding: 2rem 0.875rem;
            --_pk-state-panel-icon-shell-size: 2.125rem;
            --_pk-state-panel-icon-size: 1.0625rem;
            --_pk-state-panel-icon-radius: var(--pk-radius-lg);
            --_pk-state-panel-icon-margin-bottom: 0.625rem;
            --_pk-state-panel-body-margin-top: 0.375rem;
            --_pk-state-panel-details-margin-top: 0.75rem;
            --_pk-state-panel-details-font-size: 0.75rem;
            --_pk-state-panel-details-content-margin-top: 0.625rem;
            --_pk-state-panel-details-max-height: 14rem;
            --_pk-state-panel-details-pre-padding: 0.625rem;
            --_pk-state-panel-details-pre-radius: var(--pk-radius-md);
            --_pk-state-panel-details-pre-font-size: 0.6875rem;
            --_pk-state-panel-copy-button-size: var(--pk-btn-height-xs);
            --_pk-state-panel-copy-icon-size: var(--pk-btn-icon-size-xs);
            --_pk-state-panel-copy-inset: 0.375rem;
            --_pk-state-panel-copy-radius: var(--pk-radius-md);
            --_pk-state-panel-copy-status-size: 0.6875rem;
            --_pk-state-panel-actions-gap: 0.4375rem;
            --_pk-state-panel-actions-margin-top: 1rem;
            --_pk-state-panel-action-height: var(--pk-btn-height-sm);
            --_pk-state-panel-action-font: var(--pk-btn-font-sm);
            --_pk-state-panel-action-padding-inline: var(--pk-btn-padding-inline-sm);
            --_pk-state-panel-action-icon-size: var(--pk-btn-icon-size-sm);
            --_pk-state-panel-action-icon-gap: var(--pk-btn-icon-gap-sm);
            --_pk-state-panel-action-caret-size: var(--pk-btn-caret-size-sm);
            --_pk-state-panel-action-radius: var(--pk-btn-radius-sm);
        }

        :host([size='sm']) {
            --_pk-state-panel-font-size: var(--pk-btn-font-xs);
            --_pk-state-panel-title-size: var(--pk-font-size-sm);
            --_pk-state-panel-content-width: 28rem;
            --_pk-state-panel-min-height: 8rem;
            --_pk-state-panel-padding: 1.25rem 0.75rem;
            --_pk-state-panel-icon-shell-size: 1.75rem;
            --_pk-state-panel-icon-size: 0.875rem;
            --_pk-state-panel-icon-radius: var(--pk-radius-md);
            --_pk-state-panel-icon-margin-bottom: 0.5rem;
            --_pk-state-panel-body-margin-top: 0.25rem;
            --_pk-state-panel-details-margin-top: 0.625rem;
            --_pk-state-panel-details-font-size: 0.6875rem;
            --_pk-state-panel-details-content-margin-top: 0.5rem;
            --_pk-state-panel-details-max-height: 10rem;
            --_pk-state-panel-details-pre-padding: 0.5rem;
            --_pk-state-panel-details-pre-radius: var(--pk-radius-sm);
            --_pk-state-panel-details-pre-font-size: 0.6875rem;
            --_pk-state-panel-copy-button-size: var(--pk-btn-height-xxs);
            --_pk-state-panel-copy-icon-size: var(--pk-btn-icon-size-xxs);
            --_pk-state-panel-copy-inset: 0.3125rem;
            --_pk-state-panel-copy-radius: var(--pk-radius-sm);
            --_pk-state-panel-copy-status-size: 0.6875rem;
            --_pk-state-panel-actions-gap: 0.375rem;
            --_pk-state-panel-actions-margin-top: 0.75rem;
            --_pk-state-panel-action-height: var(--pk-btn-height-xs);
            --_pk-state-panel-action-font: var(--pk-btn-font-xs);
            --_pk-state-panel-action-padding-inline: var(--pk-btn-padding-inline-xs);
            --_pk-state-panel-action-icon-size: var(--pk-btn-icon-size-xs);
            --_pk-state-panel-action-icon-gap: var(--pk-btn-icon-gap-xs);
            --_pk-state-panel-action-caret-size: var(--pk-btn-caret-size-xs);
            --_pk-state-panel-action-radius: var(--pk-btn-radius-xs);
        }

        :host([size='lg']) {
            --_pk-state-panel-font-size: var(--pk-font-size-base);
            --_pk-state-panel-title-size: 1rem;
            --_pk-state-panel-content-width: 35rem;
            --_pk-state-panel-min-height: 14rem;
            --_pk-state-panel-padding: 2.5rem 1rem;
            --_pk-state-panel-icon-shell-size: 2.5rem;
            --_pk-state-panel-icon-size: 1.25rem;
            --_pk-state-panel-icon-radius: 0.625rem;
            --_pk-state-panel-icon-margin-bottom: 0.75rem;
            --_pk-state-panel-body-margin-top: 0.5rem;
            --_pk-state-panel-details-margin-top: 1rem;
            --_pk-state-panel-details-font-size: 0.8125rem;
            --_pk-state-panel-details-content-margin-top: 0.75rem;
            --_pk-state-panel-details-max-height: 18rem;
            --_pk-state-panel-details-pre-padding: 0.75rem;
            --_pk-state-panel-details-pre-radius: var(--pk-radius-lg);
            --_pk-state-panel-details-pre-font-size: 0.75rem;
            --_pk-state-panel-copy-button-size: var(--pk-btn-height-sm);
            --_pk-state-panel-copy-icon-size: var(--pk-btn-icon-size-sm);
            --_pk-state-panel-copy-inset: 0.5rem;
            --_pk-state-panel-copy-radius: var(--pk-radius-lg);
            --_pk-state-panel-copy-status-size: 0.75rem;
            --_pk-state-panel-actions-gap: 0.5rem;
            --_pk-state-panel-actions-margin-top: 1.25rem;
            --_pk-state-panel-action-height: 2.125rem;
            --_pk-state-panel-action-font: var(--pk-font-size-base);
            --_pk-state-panel-action-padding-inline: 9px;
            --_pk-state-panel-action-icon-size: 14px;
            --_pk-state-panel-action-icon-gap: 6px;
            --_pk-state-panel-action-caret-size: 12px;
            --_pk-state-panel-action-radius: var(--pk-radius-lg);
        }

        :host([variant='info']) {
            --pk-state-panel-accent: var(--pk-color-sky-600);
            --pk-state-panel-icon-background: var(--pk-color-sky-50);
        }

        :host([variant='success']) {
            --pk-state-panel-accent: var(--pk-color-teal-600);
            --pk-state-panel-icon-background: var(--pk-color-teal-50);
        }

        :host([variant='warning']) {
            --pk-state-panel-accent: var(--pk-color-amber-600);
            --pk-state-panel-icon-background: var(--pk-color-amber-50);
        }

        :host([variant='error']) {
            --pk-state-panel-accent: var(--pk-color-rose-600);
            --pk-state-panel-icon-background: color-mix(
                in srgb,
                var(--pk-color-rose-500) 12%,
                transparent
            );
        }

        /* A page-level state has nothing around it, so it gets more presence: a larger icon, or a plugin's own spot
           illustration in the icon slot, centred in concentric rings that fade outward. The icon sits straight on
           the page, without a shell. After the size and variant rules, so its scale wins. */
        :host([layout='page']) {
            overflow: hidden;
            --pk-state-panel-icon-background: transparent;
            --_pk-state-panel-font-size: var(--pk-font-size-base);
            --_pk-state-panel-title-size: 1.125rem;
            --_pk-state-panel-content-width: 30rem;
            --_pk-state-panel-min-height: 22rem;
            /* The top leaves room for the filled rings, three gaps out from the icon's centre, so none is cut off. */
            --_pk-state-panel-padding: calc(var(--_pk-state-panel-ring-gap) * 3 - 2rem) 1rem 4rem;
            --_pk-state-panel-icon-shell-size: 4rem;
            --_pk-state-panel-icon-size: 2rem;
            --_pk-state-panel-icon-radius: 0;
            --_pk-state-panel-icon-margin-bottom: 1.75rem;
            --_pk-state-panel-body-margin-top: 0.5rem;
            --_pk-state-panel-ring-gap: 3rem;
        }

        /* Slotted art fills the whole icon area, keeping its own proportions. */
        :host([layout='page']) .icon:has(slot[name='icon']) {
            width: 100%;
            height: 100%;
        }

        /* The panel holds the rings' stacking, so they paint under the shell's background and over nothing outside. */
        :host([layout='page']) .panel {
            position: relative;
            z-index: 0;
        }

        :host([layout='page']) .icon-shell {
            position: relative;
        }

        /* Absolutely positioned, so the rings never change the panel's size. The first ring clears the icon. Each
           ring's band is filled, whitest at the centre and stepping down outward, under the ring lines. */
        :host([layout='page']) .icon-shell::before {
            --_pk-state-panel-ring-fill: var(--pk-state-panel-ring-fill, var(--pk-color-white));
            content: '';
            position: absolute;
            z-index: -1;
            top: 50%;
            left: 50%;
            width: 24rem;
            height: 24rem;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background:
                repeating-radial-gradient(
                    circle,
                    transparent 0 calc(var(--_pk-state-panel-ring-gap) - 1px),
                    var(--pk-state-panel-ring-color, var(--pk-color-gray-200))
                        calc(var(--_pk-state-panel-ring-gap) - 1px) var(--_pk-state-panel-ring-gap)
                ),
                radial-gradient(
                    circle,
                    color-mix(in srgb, var(--_pk-state-panel-ring-fill) 90%, transparent) 0
                        var(--_pk-state-panel-ring-gap),
                    color-mix(in srgb, var(--_pk-state-panel-ring-fill) 50%, transparent)
                        var(--_pk-state-panel-ring-gap) calc(var(--_pk-state-panel-ring-gap) * 2),
                    color-mix(in srgb, var(--_pk-state-panel-ring-fill) 25%, transparent)
                        calc(var(--_pk-state-panel-ring-gap) * 2) calc(var(--_pk-state-panel-ring-gap) * 3),
                    transparent calc(var(--_pk-state-panel-ring-gap) * 3)
                );
            mask-image: radial-gradient(circle closest-side, #000 15%, transparent 100%);
            pointer-events: none;
        }

        .panel {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: min(
                100%,
                var(--pk-state-panel-content-width, var(--_pk-state-panel-content-width))
            );
            min-width: 0;
        }

        .icon-shell {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: var(--pk-state-panel-icon-shell-size, var(--_pk-state-panel-icon-shell-size));
            height: var(--pk-state-panel-icon-shell-size, var(--_pk-state-panel-icon-shell-size));
            margin-bottom: var(--_pk-state-panel-icon-margin-bottom);
            border-radius: var(--pk-state-panel-icon-radius, var(--_pk-state-panel-icon-radius));
            background: var(--pk-state-panel-icon-background);
            color: var(--pk-state-panel-accent);
        }

        .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: var(--pk-state-panel-icon-size, var(--_pk-state-panel-icon-size));
            height: var(--pk-state-panel-icon-size, var(--_pk-state-panel-icon-size));
            font-size: var(--pk-state-panel-icon-size, var(--_pk-state-panel-icon-size));
        }

        .icon svg,
        .icon pk-icon,
        .icon ::slotted(*) {
            display: block;
            width: 100%;
            height: 100%;
            fill: currentColor;
        }

        .title {
            margin: 0;
            color: var(--pk-state-panel-title-color, var(--pk-color-gray-900));
            font-size: var(--pk-state-panel-title-size, var(--_pk-state-panel-title-size));
            font-weight: 600;
            line-height: 1.4;
        }

        .title ::slotted(*) {
            margin: 0;
            color: inherit;
            font: inherit;
        }

        .body {
            max-width: 100%;
            margin-top: var(--_pk-state-panel-body-margin-top);
        }

        .body ::slotted(*) {
            margin-block: 0;
        }

        .details {
            width: 100%;
            margin-top: var(--_pk-state-panel-details-margin-top);
            color: var(--pk-state-panel-accent);
            font-size: var(--_pk-state-panel-details-font-size);
        }

        summary {
            width: fit-content;
            margin-inline: auto;
            border-radius: var(--pk-radius-sm);
            cursor: pointer;
        }

        summary:focus-visible,
        .copy:focus-visible {
            outline: none;
            box-shadow: var(--pk-shadow-focus);
        }

        .details-content {
            position: relative;
            margin-top: var(--_pk-state-panel-details-content-margin-top);
            color: var(--pk-color-gray-800);
            text-align: start;
        }

        .details-scroll {
            min-width: 0;
        }

        .details-content ::slotted(pre) {
            box-sizing: border-box;
            max-height: var(
                --pk-state-panel-details-max-height,
                var(--_pk-state-panel-details-max-height)
            );
            margin: 0;
            padding: var(--_pk-state-panel-details-pre-padding);
            overflow: auto;
            border: 1px solid var(--pk-color-gray-200);
            border-radius: var(--_pk-state-panel-details-pre-radius);
            background: var(--pk-color-white);
            color: var(--pk-color-gray-800);
            font:
                var(--_pk-state-panel-details-pre-font-size)/1.5 ui-monospace,
                SFMono-Regular,
                Consolas,
                'Liberation Mono',
                monospace;
            overflow-wrap: anywhere;
            user-select: text;
            white-space: pre-wrap;
        }

        :host([copyable]) .details-content ::slotted(pre) {
            max-height: none;
            padding-inline-end: calc(
                var(--_pk-state-panel-details-pre-padding) +
                    var(--_pk-state-panel-copy-button-size) +
                    var(--_pk-state-panel-copy-inset)
            );
            overflow: visible;
            border: 0;
            border-radius: 0;
            background: transparent;
        }

        :host([copyable]) .details-content {
            overflow: hidden;
            border: 1px solid var(--pk-color-gray-200);
            border-radius: var(--_pk-state-panel-details-pre-radius);
            background: var(--pk-color-white);
        }

        :host([copyable]) .details-scroll {
            position: relative;
            max-height: var(
                --pk-state-panel-details-max-height,
                var(--_pk-state-panel-details-max-height)
            );
            overflow: auto;
        }

        .copy-overlay {
            position: sticky;
            z-index: 1;
            top: 0;
            display: flex;
            justify-content: flex-end;
            height: 0;
            pointer-events: none;
        }

        .copy {
            flex: none;
            margin-block-start: var(--_pk-state-panel-copy-inset);
            margin-inline-end: var(--_pk-state-panel-copy-inset);
            pointer-events: auto;
            --pk-btn-height-default: var(--_pk-state-panel-copy-button-size);
            --pk-btn-icon-size-default: var(--_pk-state-panel-copy-icon-size);
            --pk-btn-radius-default: var(--_pk-state-panel-copy-radius);
            --pk-copy-button-background: var(--pk-color-white);
            --pk-copy-button-border-color: transparent;
            --pk-copy-button-hover-border-color: transparent;
            --pk-copy-button-color: var(--pk-color-gray-300);
            --pk-copy-button-hover-color: var(--pk-color-gray-500);
            --pk-copy-button-hover-background: color-mix(
                in srgb,
                var(--pk-color-gray-300) 6%,
                var(--pk-color-white)
            );
        }

        .copy-status {
            display: block;
            margin-top: 0.375rem;
            color: var(--pk-color-red-700);
            font-size: var(--_pk-state-panel-copy-status-size);
            text-align: start;
        }

        .copy-status:not([data-error]) {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        .actions {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: var(--_pk-state-panel-actions-gap);
            margin-top: var(--_pk-state-panel-actions-margin-top);
        }

        .actions slot::slotted(pk-button) {
            --pk-btn-height-default: var(--_pk-state-panel-action-height);
            --pk-btn-font-default: var(--_pk-state-panel-action-font);
            --pk-btn-padding-inline-default: var(--_pk-state-panel-action-padding-inline);
            --pk-btn-icon-size-default: var(--_pk-state-panel-action-icon-size);
            --pk-btn-icon-gap-default: var(--_pk-state-panel-action-icon-gap);
            --pk-btn-caret-size-default: var(--_pk-state-panel-action-caret-size);
            --pk-btn-radius-default: var(--_pk-state-panel-action-radius);
        }
    }
`,lr=3e3,ur={empty:v.emptySet,info:v.circleInfo,success:v.circleCheck,warning:v.triangleExclamation,error:v.triangleExclamation},$=class extends V{constructor(...e){super(...e),this.hasSlotController=new zn(this,`title`,`icon`,`details`,`actions`),this.variant=`empty`,this.size=`default`,this.layout=`region`,this.heading=``,this.headingLevel=2,this.icon=``,this.hideIcon=!1,this.announce=`off`,this.detailsLabel=`Details`,this.detailsOpen=!1,this.copyable=!1,this.copyLabel=`Copy details`,this.copiedLabel=`Details copied.`,this.copyErrorLabel=`Copy failed. Select the details and copy them manually.`,this.copyStatus=``,this.copyFailed=!1}static{this.styles=cr}disconnectedCallback(){window.clearTimeout(this.copyStatusResetTimer),super.disconnectedCallback()}hasTitle(){return!!this.heading||this.hasSlotController.test(`title`)}get detailsValue(){return(this.detailsSlot?.assignedNodes({flatten:!0})??[]).map(e=>e.textContent??``).join(``).trim()}resetCopyStatusLater(){window.clearTimeout(this.copyStatusResetTimer),this.copyStatusResetTimer=window.setTimeout(()=>{this.copyStatus=``,this.copyFailed=!1},lr)}showCopySuccess(){this.copyFailed=!1,this.copyStatus=this.copiedLabel,this.resetCopyStatusLater()}showCopyError(){this.copyFailed=!0,this.copyStatus=this.copyErrorLabel,this.resetCopyStatusLater()}handleCopySuccess(){this.showCopySuccess()}handleCopyError(){this.showCopyError(),this.selectDetails()}selectDetails(){let e=this.detailsSlot?.assignedNodes({flatten:!0})??[],t=e[0],n=e[e.length-1];if(!t||!n)return;this.detailsOpen=!0;let r=document.createRange();r.setStartBefore(t),r.setEndAfter(n);let i=window.getSelection();i?.removeAllRanges(),i?.addRange(r)}async copyDetails(){let e=this.detailsValue;if(!e)this.showCopyError(),this.dispatchEvent(new X);else if(this.copyButton)this.copyButton.value=e,await this.copyButton.copy();else try{await nr(e),this.showCopySuccess();let t=new tr(e);this.dispatchEvent(t)}catch{this.showCopyError(),this.selectDetails(),this.dispatchEvent(new X)}}handleDetailsToggle(e){this.detailsOpen=e.currentTarget.open}renderIcon(){if(this.hideIcon)return F;let e;return e=this.hasSlotController.test(`icon`)?N`<slot name="icon"></slot>`:this.icon?N`<pk-icon .icon=${this.icon}></pk-icon>`:q(_(ur[this.variant]??ur.empty)),N`
            <span part="icon-shell" class="icon-shell" aria-hidden="true">
                <span part="icon" class="icon">${e}</span>
            </span>
        `}render(){let e=this.announce===`assertive`?`alert`:this.announce===`polite`?`status`:F,t=this.announce===`off`?F:this.announce,n=this.hasSlotController.test(`details`),r=this.hasSlotController.test(`actions`);return N`
            <div
                part="base"
                class="panel"
                role=${e}
                aria-live=${t}
                aria-atomic=${this.announce===`off`?F:`true`}
            >
                ${this.renderIcon()}

                ${this.hasTitle()?N`
                        <div
                            part="title"
                            class="title"
                            role="heading"
                            aria-level=${this.headingLevel}
                        >
                            ${this.hasSlotController.test(`title`)?N`<slot name="title"></slot>`:this.heading}
                        </div>
                    `:F}

                <div part="body" class="body"><slot></slot></div>

                ${n?N`
                        <details
                            part="details"
                            class="details"
                            ?open=${this.detailsOpen}
                            @toggle=${this.handleDetailsToggle}
                        >
                            <summary part="details-summary">${this.detailsLabel}</summary>
                            <div part="details-content" class="details-content">
                                <div class="details-scroll">
                                    ${this.copyable?N`
                                            <div class="copy-overlay">
                                                <pk-copy-button
                                                    part="copy-button"
                                                    class="copy"
                                                    variant="transparent"
                                                    aria-label=${this.copyLabel}
                                                    .copiedLabel=${this.copiedLabel}
                                                    .value=${this.detailsValue}
                                                    @pk-copy=${this.handleCopySuccess}
                                                    @pk-copy-error=${this.handleCopyError}
                                                ></pk-copy-button>
                                            </div>
                                        `:F}
                                    <slot name="details"></slot>
                                </div>
                            </div>

                            ${this.copyable?N`
                                    <span
                                        part="copy-status"
                                        class="copy-status"
                                        data-error=${this.copyFailed?``:F}
                                        role="status"
                                        aria-live="polite"
                                    >${this.copyStatus}</span>
                                `:F}
                        </details>
                    `:F}

                ${r?N`<div part="actions" class="actions"><slot name="actions"></slot></div>`:F}
            </div>
        `}};H([U({reflect:!0})],$.prototype,`variant`,void 0),H([U({reflect:!0})],$.prototype,`size`,void 0),H([U({reflect:!0})],$.prototype,`layout`,void 0),H([U()],$.prototype,`heading`,void 0),H([U({type:Number,attribute:`heading-level`})],$.prototype,`headingLevel`,void 0),H([U()],$.prototype,`icon`,void 0),H([U({type:Boolean,attribute:`hide-icon`,reflect:!0})],$.prototype,`hideIcon`,void 0),H([U({reflect:!0})],$.prototype,`announce`,void 0),H([U({attribute:`details-label`})],$.prototype,`detailsLabel`,void 0),H([U({type:Boolean,attribute:`details-open`,reflect:!0})],$.prototype,`detailsOpen`,void 0),H([U({type:Boolean,reflect:!0})],$.prototype,`copyable`,void 0),H([U({attribute:`copy-label`})],$.prototype,`copyLabel`,void 0),H([U({attribute:`copied-label`})],$.prototype,`copiedLabel`,void 0),H([U({attribute:`copy-error-label`})],$.prototype,`copyErrorLabel`,void 0),H([Rn(`slot[name="details"]`)],$.prototype,`detailsSlot`,void 0),H([Rn(`pk-copy-button.copy`)],$.prototype,`copyButton`,void 0),H([W()],$.prototype,`copyStatus`,void 0),H([W()],$.prototype,`copyFailed`,void 0),$=H([B(`pk-state-panel`)],$)})();