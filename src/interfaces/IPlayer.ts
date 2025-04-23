import { IPawn } from '#interfaces/IPawn'
import { UUIDv4 } from '#types/UUID'
import { IEntity } from '#interfaces/IEntity'

export interface IPlayer extends IEntity {
    // Move from base to entry
    enter_pawn(): IPawn
    // Bring the pawn back to base
    base_pawn(pawn: IPawn): IPawn
    get_pawns(): IPawn[]
    //get_name(): string
    set_next_player(player: IPlayer): void
    set_next_player_by_id(player_id: UUIDv4): void
    get_next_player(): IPlayer | undefined
}
