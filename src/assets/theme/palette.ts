import { PaletteColor } from '@mui/material'

export interface MainColor {
    red: string
    yellow: string
    green: string
    blue: string
}
declare module '@mui/material/styles/createPalette' {
    interface Palette {
        mainColors: MainColor
        gray: PaletteColor
        [index: string]: PaletteColor
    }
    interface PaletteOptions {
        mainColors: MainColor
        gray: PaletteColor
    }
}
declare module '@mui/material/Chip' {
    export interface ChipPropsColorOverrides {
        mainColors: true
        gray: true
    }
}

declare module '@mui/material/SvgIcon' {
    export interface SvgIconPropsColorOverrides {
        mainColors: true
        gray: true
    }
}

// main
const MAIN_COLORS = {
    red: '#FF0000',
    blue: '#366EFF',
    yellow: '#FFEB33',
    green: '#10C200',
}

const GRAY = {
    light: '#F4F4F4',
    main: '#A9A9A9',
    dark: '#282828',
    contrastText: '#222222',
}

export const palette = {
    // main
    common: { black: '#121212', white: '#FFFFFF' },
    mainColors: { ...MAIN_COLORS },
    gray: { ...GRAY },
}
