// main.ts
import { Terminal } from '#services/terminal'

const start_app = () => {
    const terminal = new Terminal({
        exit_keywords: ['quit', 'exit'],
        initial_prompt: 'App started!',
    })
    terminal.start_interaction()
}

start_app()
