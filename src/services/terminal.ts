// src/services/terminal.ts
import readline from 'readline'
import type { TerminalOptions, TerminalInterface } from './terminal.types'

export class Terminal implements TerminalInterface {
    private turn_count = 0
    private rl_interface: readline.Interface
    private exit_keywords: string[]

    constructor(private readonly options: TerminalOptions = {}) {
        this.exit_keywords = options.exit_keywords || ['exit', 'quit', 'done']
        this.rl_interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false,
        })
        this.setup_close_handler()
    }

    public start_interaction(prompt?: string): void {
        this.interaction_loop(
            this.generate_prompt(null, prompt || this.options.initial_prompt)
        )
    }

    public close(): void {
        this.rl_interface.close()
    }

    public get_turn_count(): number {
        return this.turn_count
    }

    public add_exit_keyword(keyword: string): void {
        if (!this.exit_keywords.includes(keyword)) {
            this.exit_keywords.push(keyword)
        }
    }

    private generate_prompt(
        answer: string | null,
        custom_prompt?: string
    ): string {
        this.turn_count += 1
        let base = custom_prompt || `Turn ${this.turn_count}`

        if (this.options.show_history && answer) {
            base += ` (prev: ${answer})`
        }

        return base
    }

    private interaction_loop(prompt: string): void {
        this.rl_interface.question(`${prompt}\n> `, (answer: string) => {
            if (this.exit_keywords.includes(answer.toLowerCase().trim())) {
                this.close()
            } else {
                this.interaction_loop(this.generate_prompt(answer))
            }
        })
    }

    private setup_close_handler(): void {
        this.rl_interface.on('close', () => {
            console.log('Session ended')
            process.exit(0)
        })
    }
}
