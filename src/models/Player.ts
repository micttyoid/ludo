import { Entity } from '#models/Entity'
import { IPawn } from '#interfaces/IPawn'
import { IPlayer } from '#interfaces/IPlayer'
import { Pawn } from '#models/Pawn'
import { UUIDv4 } from '#types/UUID'

/*
// Create players
const player1 = new Player("Player 1", 3);
const player2 = new Player("Player 2", 3);
const player3 = new Player("Player 3", 3);

// Set up turn order (circular)
player1.set_next_player(player2);
player2.set_next_player(player3);
player3.set_next_player(player1);

// Simulate turns
let current_player: IPlayer | undefined = player1;
for (let turn = 1; turn <= 10; turn++) {
  if (!current_player) {
    console.log("Error: No current player");
    break;
  }
  
  console.log(`Turn ${turn}: ${current_player.get_name()}'s turn`);
  
  // Move to the next player
  current_player = current_player.get_next_player();
}
 */

export class Player extends Entity implements IPlayer {
    private _pawns: IPawn[] = []
    private _n_pawns: number
    private _id_next_player?: UUIDv4
    // public id

    constructor(
        n_pawns: number,
        public readonly name: string,
        id_next_player?: UUIDv4
    ) {
        super()
        this._n_pawns = n_pawns
        if (id_next_player) {
            this._id_next_player = id_next_player
        }

        // Initialize pawns up to the specified number
        for (let i = 0; i < this._n_pawns; i++) {
            //this._pawns.push(new Pawn(this))
        }
    }

    public static find_player_by_id(player_id: UUIDv4): IPlayer | undefined {
        return Entity.find_by_id<IPlayer>(player_id)
        //as IPlayer | undefined
    }

    // Move from base to entry
    public enter_pawn(): IPawn {
        // TODO
        return this._pawns[0]
    }

    // move from base to entry
    public base_pawn(pawn: IPawn): IPawn {
        // TODO
        return this._pawns[0]
    }

    public get_pawns(): IPawn[] {
        return this._pawns
    }

    public find_pawn_by_id(pawn_id: UUIDv4): IPawn | undefined {
        return Entity.find_by_id<Pawn>(pawn_id)
    }

    public set_next_player(next_player: IPlayer): void {
        this._id_next_player = next_player.get_id()
    }

    public set_next_player_by_id(player_id: UUIDv4): void {
        this._id_next_player = player_id
    }

    public get_next_player(): IPlayer | undefined {
        if (!this._id_next_player) {
            return undefined
        }
        return Player.find_player_by_id(this._id_next_player)
    }
}
