import React from 'react'

export type ButtonProps = {
    theme?: 'secondary'
        | 'outline'
        | 'flat'
        | 'info'
        | 'success'
        | 'warning'
        | 'alert'
    target?: '_self'
        | '_blank'
        | '_parent'
        | '_top'
        | '_unfencedTop'
        | ''
    href?: string
    className?: string
    [key: string]: any
}

export type ReactButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children?: React.ReactNode
} & ButtonProps
