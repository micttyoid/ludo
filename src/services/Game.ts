import { Player } from '#models/Player'
import { Pawn } from '#models/Pawn'

export class Game {
    private players: Player[] = []
    private pieces: Pawn[] = []

    add_player(id: string, name: string): Player {
        const player = new Player(id, name)
        this.players.push(player)
        return player
    }

    create_piece(id: string, x: number, y: number, type: string): Pawn {
        const piece = new Pawn(id, { x, y }, type)
        this.pieces.push(piece)
        return piece
    }

    assign_piece(pieceId: string, playerId: string): boolean {
        const piece = this.pieces.find((p) => p.id === pieceId)
        const player = this.players.find((p) => p.id === playerId)

        if (piece && player) {
            player.add_piece(piece)
            this.pieces = this.pieces.filter((p) => p.id !== pieceId)
            return true
        }
        return false
    }
}
