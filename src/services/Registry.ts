import { IEntity } from '#interfaces/IEntity'
import { UUIDv4 } from '#types/UUID'

/* Example:
function main() {
    console.log("Starting game...")
    
    // The Registry is a singleton, so we don't need to explicitly initialize it.
    // It's automatically initialized when first accessed.
    const registry = Registry.get_instance()
    
    // Clear any existing entities (useful for restarting the game)
    registry.clear()

    console.log("Entity registry initialized and cleared.")
    
    // Create players
    console.log("\nCreating players...")
    const player1 = new Player("Alice", 2)
    ...
}

main()
*/

// Global registry for all game entities
export class Registry {
    private static instance: Registry
    private entities: Map<UUIDv4, IEntity> = new Map()

    // Private constructor to enforce singleton pattern
    private constructor() {}

    // Get the singleton instance of the registry
    public static get_instance(): Registry {
        if (!Registry.instance) {
            Registry.instance = new Registry()
        }
        return Registry.instance
    }

    /**
     * Register an entity in the global registry
     * @param entity The entity to register
     */
    public register(entity: IEntity): void {
        const id = entity.get_id()
        if (this.entities.has(id)) {
            throw new Error(`Entity with ID ${id} is already registered`)
        }
        this.entities.set(id, entity)
    }

    /**
     * Unregister an entity from the global registry
     * @param id The ID of the entity to unregister
     */
    public unregister(id: UUIDv4): void {
        this.entities.delete(id)
    }

    /**
     * Find an entity by its ID
     * @param id The ID of the entity to find
     * @returns The entity if found, undefined otherwise
     */
    public find_by_id<T extends IEntity>(id: UUIDv4): T | undefined {
        return this.entities.get(id) as T | undefined
    }

    /**
     * Get all registered entities
     * @returns All registered entities
     */
    public get_all_entities(): IEntity[] {
        return Array.from(this.entities.values())
    }

    public clear(): void {
        this.entities.clear()
    }
}
