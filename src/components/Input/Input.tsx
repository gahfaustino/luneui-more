import React from 'react'
import type { ReactInputProps } from './input'

import OptionalHug from '../OptionalHug/OptionalHug.tsx'

import { classNames } from '../../utils/classNames'

import styles from './input.module.scss'

const Input = ({
    type = 'text',
    theme,
    label,
    subText,
    value,
    className,
    labelClassName,
    children,
    required,
    id,
    ...rest
}: ReactInputProps) => {
    // WCAG: Generates unique ID to associate label and input
    const inputId = id || `input-${React.useId()}`
    const subTextId = subText ? `${inputId}-description` : undefined

    const classes = classNames([
        styles.input,
        theme && styles[theme],
        className
    ])

    const labelClasses = classNames([
        styles['input-label'],
        labelClassName
    ])

    const useLabel = !!(label || subText || children)

    return (
        <OptionalHug condition={useLabel} wrapper={children => (
            <label className={labelClasses} htmlFor={inputId}>
                {children}
            </label>
        )}>
            {label && (
                <div
                    className={styles.label}
                    dangerouslySetInnerHTML={{ __html: label }}
                />
            )}
            <OptionalHug
                condition={!!children}
                wrapper={childrenContent => (
                    <div className={styles.wrapper}>
                        {childrenContent}
                    </div>
                )}
            >
                <React.Fragment>
                    {children}
                    <input
                        id={inputId}
                        type={type}
                        className={classes}
                        defaultValue={value}
                        required={required}
                        aria-required={required}
                        aria-describedby={subTextId}
                        aria-invalid={theme === 'alert' ? true : undefined}
                        {...rest}
                    />
                </React.Fragment>
            </OptionalHug>
            {subText && (
                <div
                    id={subTextId}
                    className={styles.subtext}
                    dangerouslySetInnerHTML={{ __html: subText }}
                    // WCAG: Indicates this is help text
                    role={theme === 'alert' ? 'alert' : undefined}
                />
            )}
        </OptionalHug>
    )
}

export default Input
