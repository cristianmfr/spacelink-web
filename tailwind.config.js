/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                modalOpen: {
                    '0%': { opacity: 0, transform: 'scale(0.9)' },
                    '100%': { opacity: 1, transform: 'scale(1)' },
                },
                modalClose: {
                    '0%': { opacity: 1, transform: 'scale(1)' },
                    '100%': { opacity: 0, transform: 'scale(0.9)' },
                },
                sliderOpen: {
                    '0%': { transform: 'translateX(320px)' },
                    '100%': { transform: 'translateX(0px)' },
                },
                sliderClose: {
                    '0%': { transform: 'translateX(0px)' },
                    '100%': { transform: 'translateX(320px)' },
                },
            },
            animation: {
                modalOpen: 'modalOpen 100ms ease-out forwards',
                modalClose: 'modalClose 100ms ease-in forwards',
                sliderOpen: 'sliderOpen 400ms ease-out forwards',
                sliderClose: 'sliderClose 400ms ease-in forwards',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            colors: {
                'low-light': '#8F8F8F',
                'low-pure': '#000000',
                'low-medium': '#1F1F1F',
                'low-dark': '#0A0A0A',

                'high-light': '#F7F9FB',
                'high-pure': '#FFFFFF',
                'high-medium': '#E1E5E8',
                'high-dark': '#D6E0EA',

                'primary-light': '#DFEBFF',
                'primary-pure': '#005AF9',
                'primary-medium': '#114EB8',
                'primary-dark': '#0032A0',

                'secondary-light': '#EAF0F8',
                'secondary-pure': '#828D9E',
                'secondary-medium': '#759FD1',
                'secondary-dark': '#828D9E',

                'green-light': '#C7FFCC',
                'green-pure': '#00F514',
                'green-medium': '#31F500',
                'green-dark': '#24B200',

                'red-light': '#FFE2E2',
                'red-pure': '#E00000',
                'red-medium': '#CD0000',
                'red-dark': '#A30000',

                'orange-light': '#FFDEAC',
                'orange-pure': '#FF6B00',
                'orange-medium': '#E05E00',
                'orange-dark': '#B84D00',

                'backdrop-pure': 'rgba(0, 0, 0, 0.4)',
            },
            gridTemplateColumns: {
                20: 'repeat(20, minmax(0, 1fr))',
            },
            gridColumn: {
                'span-19': 'span 19 / span 19',
            },
            borderRadius: {
                none: '0',
                xs: '10px',
                sm: '16px',
                md: '22px',
                lg: '30px',
                pill: '100%',
                circular: '50%',
            },
            borderWidth: {
                thin: '1.5px',
                small: '3px',
                medium: '5px',
                bold: '8px',
            },
            spacing: {
                quark: '4px',
                nano: '8px',
                xxxs: '16px',
                xxs: '24px',
                xs: '32px',
                sm: '40px',
                md: '48px',
                lg: '56px',
                xl: '64px',
                xxl: '80px',
                xxxl: '120px',
                huge: '160px',
                giant: '200px',
            },
            fontSize: {
                xxxs: '12px',
                xxs: '14px',
                xsx: '16px',
                xs: '18px',
                smx: '22px',
                sm: '26px',
                md: '34px',
                lg: '42px',
                xl: '56px',
                xxl: '64px',
                xxxl: '72px',
            },
            height: {
                xxs: '24px',
                xs: '28px',
                sm: '40px',
                smx: '48px',
                md: '52px',
                lg: '64px',
                xl: '70px',
                xxl: '78px',
            },
            width: {
                xs: '66px',
                sm: '102px',
                md: '248px',
                lg: '406px',
                xl: '532px',
            },
        },
    },
    plugins: [],
}
