import { IEntity } from '#interfaces/IEntity'
import { v4 as uuidv4 } from 'uuid'
import { Registry } from '#services/Registry'
import { UUIDv4 } from '#types/UUID'

export abstract class Entity implements IEntity {
    public readonly id: UUIDv4

    constructor() {
        this.id = uuidv4()

        // Register this entity in the global registry
        Registry.get_instance().register(this)
    }

    // Find an entity by its id
    public static find_by_id<T extends IEntity>(id: UUIDv4): T | undefined {
        return Registry.get_instance().find_by_id<T>(id)
    }

    public static get_all(): IEntity[] {
        return Registry.get_instance().get_all_entities()
    }

    public get_id(): UUIDv4 {
        return this.id
    }

    public destroy(): void {
        Registry.get_instance().unregister(this.id)
    }
}
