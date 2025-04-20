import { IPawn } from '#interfaces/IPawn'

export interface IPlayer {
    id: string
    name: string
    add_piece(piece: IPawn): void
    move_piece(pieceId: string, newX: number, newY: number): boolean
    get_piece_count(): number
}
