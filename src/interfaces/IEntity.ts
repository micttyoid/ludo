import { UUIDv4 } from '#types/UUID'

export interface IEntity {
    get_id(): UUIDv4
}
