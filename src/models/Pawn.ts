import { IPawn } from '#interfaces/IPawn'
import { Entity } from '#models/Entity'
import { IPlayer } from '#interfaces/IPlayer'
import { UUIDv4 } from '#types/UUID'

export class Pawn extends Entity implements IPawn {
    constructor(public position: { x: number; y: number }) {
        super()
    }

    public static find_player_by_id(id: UUIDv4): Pawn | undefined {
        return Entity.find_by_id<Pawn>(id)
    }

    public move(new_x: number, new_y: number): void {
        this.position = { x: new_x, y: new_y }
        //return this._pawns[0]
    }
}
