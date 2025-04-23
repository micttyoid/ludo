import { UUIDv4 } from '#types/UUID'
import { IEntity } from '#interfaces/IEntity'

export interface IPawn extends IEntity {
    position: { x: number; y: number }
    move(new_x: number, new_y: number): void
}
