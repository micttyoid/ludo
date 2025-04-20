import { IPawn } from '#interfaces/IPawn'

export class Pawn implements IPawn {
    constructor(
        public id: string,
        public position: { x: number; y: number },
        public readonly type: string,
    ) {}

    move(newX: number, newY: number): void {
        this.position = { x: newX, y: newY }
        console.log(`Moved ${this.type} ${this.id} to (${newX}, ${newY})`)
    }
}
