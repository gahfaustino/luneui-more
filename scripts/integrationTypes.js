export const integrationTypes = `
import { Plugin } from 'vite'

declare module 'luneui/integration' {
    export const luneuiInstance: () => Plugin
}
`
