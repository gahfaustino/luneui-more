import { getAdditionalTypeExports, getAdditionalTypeImports } from './additionalTypes.js'
import { integrationTypes } from './integrationTypes.js'
import { utilityTypes } from './utilityTypes.js'

import fs from 'fs'

const getTypeName = (component, framework) => {
    const componentsWithoutFrameworkSpecificTypes = [
        'Accordion',
        'Avatar',
        'BottomNavigation',
        'Breadcrumb',
        'Icon',
        'OTPInput',
        'Rating',
        'Skeleton',
        'Spinner',
        'Stepper',
        'Table',
        'Progress',
        'SpeedDial'
    ]

    return componentsWithoutFrameworkSpecificTypes.includes(component)
        ? `${component}Props`
        : `${framework}${component}Props`
}

const format = template => template.trim().replace(new RegExp('^[ \\t]{12}', 'gm'), '')

const buildTypes = type => {
    const components = fs.readdirSync('src/components')

    if (type === 'ds') {
        return format(`
            import { FC } from 'ds'
            ${components.map(component => {
                return `import type { ${getTypeName(component, 'React')} as W${getTypeName(component, 'React')} } from './components/${component}/${component.toLowerCase()}'`
            }).join('\n')}

            ${getAdditionalTypeImports()}

            declare module 'luneui/${type}' {
                ${components.map(component => {
                    return `export const ${component}: FC<W${getTypeName(component, 'React')}>`
                }).join('\n\t')}

                ${components.map(component => {
                    return `export type ${component}Props = W${getTypeName(component, 'React')}`
                }).join('\n\t')}

                ${getAdditionalTypeExports()}
            }
        `)
    }

    if (type === 'utils') {
        return utilityTypes
    }

    if (type === 'integration') {
        return integrationTypes
    }
}

export default buildTypes
