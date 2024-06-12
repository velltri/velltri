import { nextui } from "@nextui-org/theme"
import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            clipPath: {
                custom: "ellipse(50% 30% at 50% 100%)",
            },
        },
    },
    plugins: [
        nextui(),
        function ({ addUtilities }: any) {
            const newUtilities = {
                ".clip-path-custom": {
                    "clip-path": "ellipse(50% 30% at 50% 100%)",
                },
            }

            addUtilities(newUtilities)
        },
    ],
}
export default config
