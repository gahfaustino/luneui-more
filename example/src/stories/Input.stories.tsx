import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from 'luneui/ds'

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: 'select',
            options: ['info', 'success', 'warning', 'alert', 'fill']
        },
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'number', 'tel', 'url']
        }
    }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Nome',
        placeholder: 'Digite seu nome',
        subText: 'Seu nome completo'
    }
}

export const Email: Story = {
    args: {
        label: 'Email',
        type: 'email',
        placeholder: 'seu@email.com',
        subText: 'Digite um email válido'
    }
}

export const Password: Story = {
    args: {
        label: 'Senha',
        type: 'password',
        placeholder: '••••••••',
        subText: 'Mínimo 8 caracteres'
    }
}

export const Required: Story = {
    args: {
        label: 'Campo Obrigatório',
        required: true,
        placeholder: 'Campo obrigatório',
        subText: 'Este campo é obrigatório'
    }
}

export const Disabled: Story = {
    args: {
        label: 'Campo Desabilitado',
        disabled: true,
        value: 'Valor desabilitado',
        subText: 'Campo desabilitado'
    }
}

export const Info: Story = {
    args: {
        label: 'Campo Info',
        theme: 'info',
        placeholder: 'Informação',
        subText: 'Campo informativo'
    }
}

export const Success: Story = {
    args: {
        label: 'Campo Sucesso',
        theme: 'success',
        placeholder: 'Sucesso',
        subText: 'Valor aceito com sucesso!'
    }
}

export const Warning: Story = {
    args: {
        label: 'Campo Aviso',
        theme: 'warning',
        placeholder: 'Atenção',
        subText: 'Verifique este valor'
    }
}

export const Alert: Story = {
    args: {
        label: 'Campo Erro',
        theme: 'alert',
        placeholder: 'Erro',
        subText: 'Este campo contém erros'
    }
}

export const Fill: Story = {
    args: {
        label: 'Campo Preenchido',
        theme: 'fill',
        value: 'Valor preenchido',
        subText: 'Estilo alternativo'
    }
}

export const InteractiveForm: Story = {
    render: () => {
        const [name, setName] = React.useState('')
        const [email, setEmail] = React.useState('')
        const [password, setPassword] = React.useState('')

        const getNameTheme = () => {
            if (!name) return undefined
            return name.length < 3 ? 'alert' : 'success'
        }

        const getEmailTheme = () => {
            if (!email) return undefined
            return email.includes('@') ? 'success' : 'alert'
        }

        const getPasswordTheme = () => {
            if (!password) return undefined
            return password.length >= 8 ? 'success' : 'warning'
        }

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
                <Input
                    label="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome"
                    theme={getNameTheme()}
                    subText={
                        !name
                            ? 'Nome completo'
                            : name.length < 3
                                ? '❌ Nome muito curto'
                                : '✅ Nome válido'
                    }
                    required
                />
                <Input
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    theme={getEmailTheme()}
                    subText={
                        !email
                            ? 'Email válido'
                            : email.includes('@')
                                ? '✅ Email válido'
                                : '❌ Email inválido'
                    }
                    required
                />
                <Input
                    label="Senha"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    theme={getPasswordTheme()}
                    subText={
                        !password
                            ? 'Mínimo 8 caracteres'
                            : password.length < 8
                                ? '⚠️ Senha fraca'
                                : '✅ Senha forte'
                    }
                    required
                />
            </div>
        )
    }
}
