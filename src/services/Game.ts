import { Player } from '#models/Player'
import { Pawn } from '#models/Pawn'

export class Game {
    private _players: Player[] = []
    private _pawns: Pawn[] = []
    private _max_players: number

    constructor(max_players: number = 4) {
        // Typical Ludo is 4 player max
        this._max_players = max_players
    }

    add_player(id: string, name: string): Player | null {
        if (this._players.length >= this._max_players) {
            throw new Error(
                `Exceeded the maximum number of players (${this._max_players}). Cannot add player ${name}.`
            )
        }

        const player = new Player(id, name)
        this._players.push(player)
        return player
    }

    create_piece(id: string, x: number, y: number, type: string): Pawn {
        const piece = new Pawn(id, { x, y }, type)
        this._pawns.push(piece)
        return piece
    }

    assign_piece(pieceId: string, playerId: string): boolean {
        const piece = this._pawns.find((p) => p.id === pieceId)
        const player = this._players.find((p) => p.id === playerId)

        if (piece && player) {
            player.add_piece(piece)
            this._pawns = this._pawns.filter((p) => p.id !== pieceId)
            return true
        }
        return false
    }
}
