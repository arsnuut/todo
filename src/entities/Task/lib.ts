import { PriorityType } from './types'
import { palette } from 'assets/theme/palette'

const PriorityColors: Record<PriorityType, string> = {
    high: palette.mainColors.red,
    low: palette.mainColors.blue,
    medium: palette.mainColors.yellow,
}

export const getColor = (priority: PriorityType) => {
    return PriorityColors[priority]
}
