
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #62A945 
		"--color-primary-50": "231 242 227", // #e7f2e3
		"--color-primary-100": "224 238 218", // #e0eeda
		"--color-primary-200": "216 234 209", // #d8ead1
		"--color-primary-300": "192 221 181", // #c0ddb5
		"--color-primary-400": "145 195 125", // #91c37d
		"--color-primary-500": "98 169 69", // #62A945
		"--color-primary-600": "88 152 62", // #58983e
		"--color-primary-700": "74 127 52", // #4a7f34
		"--color-primary-800": "59 101 41", // #3b6529
		"--color-primary-900": "48 83 34", // #305322
		// secondary | #f55469 
		"--color-secondary-50": "254 229 233", // #fee5e9
		"--color-secondary-100": "253 221 225", // #fddde1
		"--color-secondary-200": "253 212 218", // #fdd4da
		"--color-secondary-300": "251 187 195", // #fbbbc3
		"--color-secondary-400": "248 135 150", // #f88796
		"--color-secondary-500": "245 84 105", // #f55469
		"--color-secondary-600": "221 76 95", // #dd4c5f
		"--color-secondary-700": "184 63 79", // #b83f4f
		"--color-secondary-800": "147 50 63", // #93323f
		"--color-secondary-900": "120 41 51", // #782933
		// tertiary | #72419f 
		"--color-tertiary-50": "234 227 241", // #eae3f1
		"--color-tertiary-100": "227 217 236", // #e3d9ec
		"--color-tertiary-200": "220 208 231", // #dcd0e7
		"--color-tertiary-300": "199 179 217", // #c7b3d9
		"--color-tertiary-400": "156 122 188", // #9c7abc
		"--color-tertiary-500": "114 65 159", // #72419f
		"--color-tertiary-600": "103 59 143", // #673b8f
		"--color-tertiary-700": "86 49 119", // #563177
		"--color-tertiary-800": "68 39 95", // #44275f
		"--color-tertiary-900": "56 32 78", // #38204e
		// success | #2ded1d 
		"--color-success-50": "224 252 221", // #e0fcdd
		"--color-success-100": "213 251 210", // #d5fbd2
		"--color-success-200": "203 251 199", // #cbfbc7
		"--color-success-300": "171 248 165", // #abf8a5
		"--color-success-400": "108 242 97", // #6cf261
		"--color-success-500": "45 237 29", // #2ded1d
		"--color-success-600": "41 213 26", // #29d51a
		"--color-success-700": "34 178 22", // #22b216
		"--color-success-800": "27 142 17", // #1b8e11
		"--color-success-900": "22 116 14", // #16740e
		// warning | #38453e 
		"--color-warning-50": "225 227 226", // #e1e3e2
		"--color-warning-100": "215 218 216", // #d7dad8
		"--color-warning-200": "205 209 207", // #cdd1cf
		"--color-warning-300": "175 181 178", // #afb5b2
		"--color-warning-400": "116 125 120", // #747d78
		"--color-warning-500": "56 69 62", // #38453e
		"--color-warning-600": "50 62 56", // #323e38
		"--color-warning-700": "42 52 47", // #2a342f
		"--color-warning-800": "34 41 37", // #222925
		"--color-warning-900": "27 34 30", // #1b221e
		// error | #283be6 
		"--color-error-50": "223 226 251", // #dfe2fb
		"--color-error-100": "212 216 250", // #d4d8fa
		"--color-error-200": "201 206 249", // #c9cef9
		"--color-error-300": "169 177 245", // #a9b1f5
		"--color-error-400": "105 118 238", // #6976ee
		"--color-error-500": "40 59 230", // #283be6
		"--color-error-600": "36 53 207", // #2435cf
		"--color-error-700": "30 44 173", // #1e2cad
		"--color-error-800": "24 35 138", // #18238a
		"--color-error-900": "20 29 113", // #141d71
		// surface | #f5ece5 
		"--color-surface-50": "250 246 237", // #faf6ed
		"--color-surface-100": "253 251 250", // #fdfbfa
		"--color-surface-200": "253 250 249", // #fdfaf9
		"--color-surface-300": "251 247 245", // #fbf7f5
		"--color-surface-400": "248 242 237", // #f8f2ed
		"--color-surface-500": "245 236 229", // #f5ece5
		"--color-surface-600": "221 212 206", // #ddd4ce
		"--color-surface-700": "184 177 172", // #b8b1ac
		"--color-surface-800": "147 142 137", // #938e89
		"--color-surface-900": "120 116 112", // #787470
		
	}
}