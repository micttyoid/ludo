import { resolve } from 'path'

// TODO: pattern key handling instead of path
export const alias = {
    ts_config_paths: {
        // each pair, key and value, is wild-carded automatically
        services: [resolve(__dirname, '../src/services')],
        models: [resolve(__dirname, '../src/models')],
        utils: [resolve(__dirname, '../src/utils')],
        interfaces: [resolve(__dirname, '../src/interfaces')],
    },
    package_json_imports: {
        services: resolve(__dirname, '../dist/services'),
        models: resolve(__dirname, '../dist/models'),
        utils: resolve(__dirname, '../dist/utils'),
        interfaces: resolve(__dirname, '../src/interfaces'),
    },
} as const
