/** @type {import('jest').Config} */
const { parse } = require('comment-json')
const path = require('path')
const fs = require('fs')
const tsconfig_json = parse(
    fs.readFileSync(path.join(__dirname, '../tsconfig.json'), 'utf8')
)

const mapitem_regex_to_path = (key, value) => {
    // Convert '#utils/*' -> '^#utils/(.*)$' and map to '<rootDir>/src/utils/$1'
    const regex = `^${key.replace('*', '(.*)')}$`
    const path = value.replace('*', '$1')
    return [regex, `<rootDir>/${path}`]
}
const tsconfig_json_to_mfm = () => {
    if (!tsconfig_json.compilerOptions?.paths) return {}

    const mapper = new Map()
    for (const [key, value] of Object.entries(
        tsconfig_json.compilerOptions.paths
    )) {
        if (typeof value === 'string' && key.startsWith('#')) {
            // Convert '#utils/*' -> '^#utils/(.*)$' and map to '<rootDir>/src/utils/$1'
            mapper.set(...mapitem_regex_to_path(key, value))
        }
        if (Array.isArray(value) && key.startsWith('#')) {
            value.forEach((_value, _, _fo) => {
                if (typeof _value === 'string') {
                    mapper.set(...mapitem_regex_to_path(key, _value))
                }
            })
        }
    }
    return mapper
}

const config = {
    verbose: true,
    silent: false,
    rootDir: '..',
    roots: ['<rootDir>/test/'],
    moduleNameMapper: Object.fromEntries(tsconfig_json_to_mfm()),
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': [
            'babel-jest',
            { configFile: './.config/babel.config.js' },
        ],
    },
    testMatch: ['**/?(*.)+(spec|test).ts'],
    moduleFileExtensions: ['ts', 'js'],
}

module.exports = config
