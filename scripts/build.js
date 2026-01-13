import { buildImports, buildUtilImports } from './buildImports.js'
import buildTypes from './buildTypes.js'

import fs from 'fs'

const folders = {
    'src/components': 'dist/components',
    'src/scss': 'dist/scss',
    'src/utils': 'dist/utils'
}

const files = {
    'README.md': 'dist/README.md',
    'LICENSE': 'dist/LICENSE',
    'package.json': 'dist/package.json',
    'src/integration.js': 'dist/integration.js',
    'src/boniteza.d.ts': 'dist/boniteza.d.ts',
    'luneui.config.scss': 'dist/luneui.config.scss'
}

console.log('🚀 Preparando o build do pacote... Segura que lá vem código!')

if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist')
}

Object.keys(folders).forEach(key => {
    fs.cp(key, folders[key], { recursive: true }, error => {
        if (error) {
            console.error('🚨 Eita! Erro ao copiar diretório (alguém mexeu nos arquivos?)', error)
        }
    })
})

Object.keys(files).forEach(key => {
    fs.copyFile(key, files[key], error => {
        if (error) {
            console.error('🚨 Opa! Erro ao copiar arquivo (será que ele existe mesmo?)', error)
        }

        if (key.includes('package.json')) {
            const packageJson = fs.readFileSync(key, 'utf-8')
            const modifiedPackageJson = packageJson
                .replace(/,\s+"luneui":\s"[0-9.]+"/g, '')
                .replace('vitest run &&', 'cd .. && vitest run &&')

            fs.writeFileSync(files[key], modifiedPackageJson)
        }
    })
})

fs.writeFileSync('dist/ds.js', buildImports('tsx'))
fs.writeFileSync('dist/index.js', buildUtilImports())
fs.writeFileSync('dist/ds.d.ts', buildTypes('ds'))
fs.writeFileSync('dist/index.d.ts', buildTypes('utils'))
fs.writeFileSync('dist/integration.d.ts', buildTypes('integration'))

console.log('✅ Pacote buildado com sucesso! Tá prontinho para conquistar o mundo! 🎉')
