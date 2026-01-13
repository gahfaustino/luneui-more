import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'luneui/ds'

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: 'select',
            options: ['primary', 'secondary', 'outline', 'flat', 'info', 'success', 'warning', 'alert']
        }
    }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Botão Primário',
        theme: 'primary'
    }
}

export const Secondary: Story = {
    args: {
        children: 'Botão Secundário',
        theme: 'secondary'
    }
}

export const Outline: Story = {
    args: {
        children: 'Botão Outline',
        theme: 'outline'
    }
}

export const Flat: Story = {
    args: {
        children: 'Botão Flat',
        theme: 'flat'
    }
}

export const Info: Story = {
    args: {
        children: 'Botão Info',
        theme: 'info'
    }
}

export const Success: Story = {
    args: {
        children: 'Botão Sucesso',
        theme: 'success'
    }
}

export const Warning: Story = {
    args: {
        children: 'Botão Aviso',
        theme: 'warning'
    }
}

export const Alert: Story = {
    args: {
        children: 'Botão Alerta',
        theme: 'alert'
    }
}

export const Disabled: Story = {
    args: {
        children: 'Botão Desabilitado',
        theme: 'primary',
        disabled: true
    }
}

export const AsLink: Story = {
    args: {
        children: 'Botão como Link',
        theme: 'primary',
        href: 'https://example.com'
    }
}

export const AllThemes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Button theme="primary">Primário</Button>
            <Button theme="secondary">Secundário</Button>
            <Button theme="outline">Outline</Button>
            <Button theme="flat">Flat</Button>
            <Button theme="info">Info</Button>
            <Button theme="success">Sucesso</Button>
            <Button theme="warning">Aviso</Button>
            <Button theme="alert">Alerta</Button>
            <Button theme="primary" disabled>Desabilitado</Button>
        </div>
    )
}
