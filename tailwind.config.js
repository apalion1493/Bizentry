const options = require('./config') //options from config.js

const allPlugins = {
    typography: require('@tailwindcss/typography'),
    forms: require('@tailwindcss/forms'),
    containerQueries: require('@tailwindcss/container-queries'),
}

const plugins = Object.keys(allPlugins)
    .filter(k => options.plugins[k])
    .map(k => {
        if (k in options.plugins && options.plugins[k]) {
            return allPlugins[k]
        }
    })

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,php}'],
    darkMode: 'class',
    theme: {
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            '100%': '100%',
            '100-auto': '100% auto',
        },
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        },
        fontSize: {
            none: ['0px', '0px'],
            base: ['18px', '130%'],
            h1: ['60px', '120%'],
            h2: ['48px', '120%'],
            h3: ['40px', '130%'],
            h4: ['32px', '130%'],
            h5: ['26px', '130%'],
            h1Mob: ['56px', '120%'],
            h2Mob: ['30px', '120%'],
            Top1: ['24px', '130%'],
            Top2: ['22px', '130%'],
            Top3: ['20px', '130%'],
            Top4: ['35px', 'normal'],
            Top5: ['28px', '100%'],
            Top6: ['60px', '100%'],
            Top7: ['25px', 'normal'],
            Top8: ['100px', 'normal'],
            Top9: ['80px', 'normal'],
            body: ['16px', '120%'],
            body2: ['14px', '120%'],
            body3: ['8px', '120%'],
            body4: ['12px', '120%'],
            body5: ['10px', 'normal'],
        },
        screens: {
            '2xl': {max: '1216px'},
            xl: {max: '1216px'},
            lg: {max: '1023px'},
            md: {max: '767px'},
            sm: {max: '639px'},
            sm2: {max: '480px'},
            sm3: {max: '360px'},

            minsm: {min: '640px'},
            minmd: {min: '768px'},
            minlg: {min: '1024px'},
            minxl: {min: '1345px'},
            min2xl: {min: '1550px'},
        },
        container: {
            center: true,
            padding: {
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            lineHeight: {
                '100': '100%' //leading
            },
            boxShadow: {
                'v1': '0px 0px 16px 0px rgba(37, 51, 126, 0.05)',
                'v2': '0 0 20px 0 rgba(111, 132, 156, 0.10)',
            },
            borderRadius: {
                '4xl': '32px',
                '5xl': '40px',
                '6xl': '20px',
                '7xl': '10px',
            },
            colors: {
                transparent: 'transparent',
                pageBg: '#FAF9FB',
                Grey: '#6F849C',
                Grey2: '#A9B1B3',
                Grey3: '#ECEDF2',
                bgLight: '#A9B1B3',
                DarkGrey: '#596D7F',
                Error: '#ED484B',
                Error2: '#FFF6F6',
                Error3: '#DD00001A',
                Text: '#202020',
                Title: '#14142B',
                Red: '#DF4A53',
                Blue: '#2F3C8A',
                DarkBlue: '#091F44',
            },
            letterSpacing: {
                '04': '-0.4px', //tracking
                '12': '-1.2px', //tracking
                '24': '2.4px', //tracking
                '36': '3.6px', //tracking
            },
            padding: {
                '1/4': '25%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '5/6': '83.333333%',
                '1/24': '4.166667%',
                '2/24': '8.333333%',
                '3/24': '12.5%',
                '4/24': '16.666667%',
                '5/24': '20.833333%',
                '6/24': '25%',
                '7/24': '29.166667%',
                '8/24': '33.333333%',
                '2.5': '10px',
            },
        },
    },
    plugins: plugins,
}
