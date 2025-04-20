declare module '../.config/alias' {
    export const alias: {
        ts_config_paths: {
            [key: string]: [string] | string[]
        }
        package_json_imports: {
            [key: string]: string
        }
    }
}
