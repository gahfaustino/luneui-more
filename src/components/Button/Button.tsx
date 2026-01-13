import React from 'react'
import type { ReactButtonProps } from './button'

import { classNames } from '../../utils/classNames'

import styles from './button.module.scss'

const Button = ({
    theme,
    href,
    className,
    onClick,
    children,
    disabled,
    ...rest
}: ReactButtonProps) => {
    const classes = classNames([
        styles.button,
        theme && styles[theme],
        className
    ])

    if (href) {
        return (
            <a
                {...rest}
                href={href}
                className={classes}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : undefined}
                onClick={disabled ? (e) => e.preventDefault() : undefined}
            >
                {children}
            </a>
        )
    }

    return (
        <button
            {...rest}
            className={classes}
            onClick={onClick}
            disabled={disabled}
            aria-disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
