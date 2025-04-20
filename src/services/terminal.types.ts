// services/terminal.types.ts
export interface TerminalOptions {
    exit_keywords?: string[]
    initial_prompt?: string
    show_history?: boolean
    prompt_suffix?: string
}

export interface TerminalInterface {
    start_interaction(prompt?: string): void
    close(): void
    get_turn_count(): number
    add_exit_keyword(keyword: string): void
}

export type ExitKeyword = string
