import { Game, Topology, SafeZone } from '#services/Game'
import { Pawn } from '#models/Pawn'

describe('SafeZone', () => {
    test('should initialize with correct values', () => {
        const safeZone = new SafeZone(1, 5)
        expect(safeZone.nth_safe_zone).toBe(1)
        expect(safeZone.distance_to_entry).toBe(5)
    })
})

describe('Topology', () => {
    let topology: Topology

    beforeEach(() => {
        topology = new Topology()
    })

    test('should initialize with default values', () => {
        expect(topology.max_players).toBe(4)
        expect(topology.n_pawns_per_player).toBe(4)
        expect(topology.length_finishline).toBe(5)
        expect(topology.entry_to_entry).toBe(5)
        expect(topology.safe_zones.length).toBe(1)
    })

    test('should accept custom safe zones', () => {
        const customSafeZones = [new SafeZone(1), new SafeZone(2)]
        const customTopology = new Topology(4, 4, 5, 5, customSafeZones)
        expect(customTopology.safe_zones.length).toBe(2)
    })
})

describe('Game', () => {
    let game: Game

    beforeEach(() => {
        game = new Game()
    })

    test('should initialize with default(4) max players', () => {
        expect(game).toBeInstanceOf(Game)
        // TODO
    })

    test('should add players up to max limit', () => {
        // default is 4
        game.add_player('Player 1')
        game.add_player('Player 2')
        game.add_player('Player 3')
        game.add_player('Player 4')

        expect(() => game.add_player('Player 5')).toThrowError(
            'Exceeded the max number of players (4).Cannot add player Player 5.'
        )
    })

    test('should create pawns correctly', () => {
        const pawn = game.create_pawn(0, 0)
        expect(pawn).toBeInstanceOf(Pawn)
        expect(pawn.position.x).toBe(0)
        expect(pawn.position.y).toBe(0)
    })

    test('should assign pawn to player successfully', () => {
        const player = game.add_player('Test Player')
        const pawn = game.create_pawn(0, 0)

        const result = game.assign_pawn(pawn.id, player!.id)
        expect(result).toBe(true)
    })

    test('should fail to assign non-existent pawn or player', () => {
        const player = game.add_player('Test Player')
        const pawn = game.create_pawn(0, 0) // of the Game(pushed)

        // re-push
        expect(game.assign_pawn('invalid-pawn-id', player!.id)).toBe(false)
        expect(game.assign_pawn(pawn.id, 'invalid-player-id')).toBe(false)
    })
})
