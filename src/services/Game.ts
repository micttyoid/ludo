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

    add_player(name: string): Player | null {
        if (this._players.length >= this._max_players) {
            throw new Error(
                `Exceeded the max number of players (${this._max_players}).` +
                    `Cannot add player ${name}.`
            )
        }

        const player = new Player(4, name)
        this._players.push(player)
        return player
    }

    create_pawn(x: number, y: number): Pawn {
        const pawn = new Pawn({ x, y })

        this._pawns.push(pawn)
        return pawn
    }

    assign_pawn(pawnId: string, playerId: string): boolean {
        const pawn = this._pawns.find((p) => p.id === pawnId)
        const player = this._players.find((p) => p.id === playerId)

        if (pawn && player) {
            //player.add_pawn(pawn)
            this._pawns = this._pawns.filter((p) => p.id !== pawnId)
            return true
        }
        return false
    }
}
