import { useCallback, useState } from 'react'

export const useDropdown = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const isOpen = Boolean(anchorEl)

    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            if (event.currentTarget?.dataset?.name !== 'floor') {
                event.stopPropagation()
            }
            setAnchorEl(event.currentTarget)
        },
        [setAnchorEl]
    )

    const handleClose = useCallback(
        (event: React.MouseEvent<HTMLElement> | MouseEvent | TouchEvent) => {
            event.stopPropagation()
            setAnchorEl(null)
        },
        [setAnchorEl]
    )

    return {
        isOpen,
        anchorEl,
        handleClick,
        handleClose,
    }
}
