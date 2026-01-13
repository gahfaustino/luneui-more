import path from 'path'

const config = {
    ssr: {
        noExternal: ['luneui']
    },
    css: {
        preprocessorOptions: {
            scss: {
                loadPaths: [
                    path.resolve(process.cwd())
                ]
            }
        }
    }
}

export const luneuiInstance = () => {
    return {
        name: 'luneui',
        config() {
            return config
        }
    }
}
