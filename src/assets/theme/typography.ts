declare module '@mui/material/styles' {
    interface TypographyVariants {
        widgetTitle: React.CSSProperties
        taskTitle: React.CSSProperties
        body: React.CSSProperties
    }

    interface TypographyVariantsOptions {
        widgetTitle?: React.CSSProperties
        taskTitle?: React.CSSProperties
        body: React.CSSProperties
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        widgetTitle: true
        taskTitle: true
        body: true
    }
}

const FONT_PRIMARY = 'Abhaya Libre SemiBold, sans-serif'
const FONT_SECONDARY = 'Actor, sans-serif'

const WIDGET_TITLE = {
    fontSize: '36px',
    fontWeight: 400,
    lineHeight: '43px',
    fontFamily: FONT_SECONDARY,
}

const TASK_TITLE = {
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '28px',
}

const BODY = {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '17px',
    opacity: 0.6,
}

export const typography = {
    fontFamily: FONT_PRIMARY,
    widgetTitle: { ...WIDGET_TITLE },
    taskTitle: { ...TASK_TITLE },
    body: { ...BODY },
    ellipsis: {},
}
