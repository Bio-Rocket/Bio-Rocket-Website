// import { join } from 'path'
// import type { Config } from 'tailwindcss'
// import forms from '@tailwindcss/forms';
// import typography from '@tailwindcss/typography';
// import { skeleton } from '@skeletonlabs/tw-plugin'
// import { myCustomTheme } from './my-custom-theme'

// export default {
// 	darkMode: 'class',
// 	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [
// 		forms,
// 		typography,
// 		skeleton({
// 			themes: {
// 				preset: [
// 					{
// 						name: 'skeleton',
// 						enhancements: true,
// 					},
// 				],
// 				custom: [
// 					myCustomTheme
// 				]
// 			},
// 		}),
// 	],
// } satisfies Config;

import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { myCustomTheme } from './my-custom-theme'

// const { skeleton } = require('@skeletonlabs/tw-plugin');

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        './node_modules/@skeletonlabs/skeleton/**/*.{html,js,svelte,ts}'
    ],
    theme: {
        extend: {},
    },
    plugins: [
        forms,
        typography,
        // skeleton({
        //     themes: {
        //         preset: [
        //             {
        //                 name: 'skeleton',
        //                 enhancements: true,
        //             },
        //         ],
        //         custom: [
        //             myCustomTheme
        //         ]
        //     },
        // }),
    ],
} satisfies Config;
