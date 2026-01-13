import React from 'react'

export type OptionalHugProps = {
    condition: boolean
    [key: string]: any
}

export type ReactOptionalHugProps = {
    wrapper: (_: React.ReactNode) => any
    children: React.ReactNode
} & OptionalHugProps
