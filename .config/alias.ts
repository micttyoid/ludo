import { resolve } from 'path'

// TODO: pattern key handling instead of path
export const alias = {
    ts_config_paths: {
        // each pair, key and value, is wild-carded automatically
        interfaces: [resolve(__dirname, '../src/interfaces')],
        models: [resolve(__dirname, '../src/models')],
        services: [resolve(__dirname, '../src/services')],
        types: [resolve(__dirname, '../src/types')],
        utils: [resolve(__dirname, '../src/utils')],
    },
    package_json_imports: {
        interfaces: resolve(__dirname, '../dist/interfaces'),
        models: resolve(__dirname, '../dist/models'),
        services: resolve(__dirname, '../dist/services'),
        types: [resolve(__dirname, '../dist/types')],
        utils: resolve(__dirname, '../dist/utils'),
    },
} as const
