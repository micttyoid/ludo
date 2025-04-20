import { IPawn } from '#interfaces/IPawn'
import { IPlayer } from '#interfaces/IPlayer'

export class Player implements IPlayer {
    private pieces: IPawn[] = []

    constructor(public readonly id: string, public readonly name: string) {}

    add_piece(piece: IPawn): void {
        this.pieces.push(piece)
        console.log(`Added piece ${piece.id} to player ${this.name}`)
    }

    move_piece(pieceId: string, newX: number, newY: number): boolean {
        const piece = this.pieces.find((p) => p.id === pieceId)
        if (piece) {
            piece.move(newX, newY)
            return true
        }
        return false
    }

    get_piece_count(): number {
        return this.pieces.length
    }
}
