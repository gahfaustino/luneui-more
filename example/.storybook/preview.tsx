import React from 'react'
import type { Preview } from '@storybook/react'
import './preview.scss'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'oldstoreltda',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: [
                    { value: 'techcorp', title: 'TechCorp' },
                    { value: 'oldstoreltda', title: 'Old Store Ltda' }
                ],
                dynamicTitle: true
            }
        }
    },
    decorators: [
        (Story, context) => {
            React.useEffect(() => {
                document.documentElement.setAttribute('data-theme', context.globals.theme)
            }, [context.globals.theme])

            return <Story />
        }
    ]
}

export default preview
