import React, { forwardRef } from 'react'
import Link from 'next/link'

export const LinkAs = forwardRef(({ linkAs, ...props }, ref) => {
    return (
        <Link ref={ref} as={linkAs} {...props} />
    )
})