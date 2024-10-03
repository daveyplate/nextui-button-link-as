import React, { forwardRef } from 'react'
import { Button } from '@nextui-org/button'

export const ButtonAs = forwardRef(({ buttonAs, ...props }, ref) => {
    return (
        <Button ref={ref} as={buttonAs} {...props} />
    )
})