# TODO

## Coordinate system for pawn

- Can tell base, entry, home(destination)
- Can handle board variation(of N players where N != 4)

**True (most of time)**

For `meta` variants, the following condition is not always true:
- `distance_to_safezone_from_edge` > `length_finishline`

For `meta` variants, the following statement is not always true:
The total number of forwards of a pawn to reach its finishline is N such that:
```
N = max_number_of_players * 2 * (length_finishline + 1)
```

The total number of safe zones(including entries):
- if `distance_to_safezone_from_edge` is undefined: `max_number_of_players`
- if `distance_to_safezone_from_edge` is defined: `max_number_of_players * 2`

### Example 1.

(The variant of the image from REAMDE.md)

- `max_number_of_players` = 4
- `length_finishline` = 5
- `distance_to_safezone_from_edge` = 2

This implies all of the follwings:
- The length of any sidewalk(side from any finishline) is 6

### Example 2.

![Variant 2](https://t3.ftcdn.net/jpg/06/57/16/02/360_F_657160213_YMxvQ5ngZGsNdznLIumxUVYJWWHpHZ66.jpg)

- `max_number_of_players` = 6
- `length_finishline` = 4
- `distance_to_safezone_from_edge` = 1

This implies all of the follwings:
- The length of any sidewalk(side from any finishline) is 5

### Example 3.

![Variant3](https://as2.ftcdn.net/v2/jpg/03/53/80/87/1000_F_353808738_2L6Z4tzZsE9t9WvgCiAzSqyAfVxpicCa.jpg)

- `max_number_of_players` = 8
- `length_finishline` = 5
- `distance_to_safezone_from_edge` = 2

This implies all of the follwings:
- The length of any sidewalk(side from any finishline) is 6

### Example 4.

![Variant4](https://i.ytimg.com/vi/vs6pzu-Fpog/maxresdefault.jpg)

- `max_number_of_players` = 3
- `length_finishline` = 5
- `distance_to_safezone_from_edge` = 2

This implies all of the follwings:
- The length of any sidewalk(side from any finishline) is 6

### Example 5.

![Variant5](https://image.winudf.com/v2/image/Y29tLnByb3BoZXRpY2FwcHMua2luZy5sdWRvcGxheV9zY3JlZW5fM18xNTE0NTk2NDY3XzAyNA)

- `max_number_of_players` = 5
- `length_finishline` = 5
- `distance_to_safezone_from_edge` = 2

This implies all of the follwings:
- The length of any sidewalk(side from any finishline) is 6

### Example 6. (Meta)

![Variant6](https://cdn4.vectorstock.com/i/1000x1000/76/38/ludo-board-game-vector-8697638.jpg)

- `max_number_of_players` = 4
- `length_finishline` = 3
- `safezone_other_than_entry_per_player`= 0

Assigns explicitly for meta Ludo
- `length_sidewalk` = 4   **(via 8/2 NOT really "side" at this point...)**
- `pawns_per_player` = 3

### Example 7. (Meta)

![Variant7](https://staranddaisy.in/wp-content/uploads/2023/09/folks-work-3-in-1-ludo-naivri-2_966808fd-14ae-4dae-bf29-2e450a88fe28.jpg)

- `max_number_of_players` = 4
- `length_finishline` = 5
- `safezone_other_than_entry_per_player`= 1
- `distance_to_safezone_from_edge` = 2


Assigns explicitly for meta Ludo
- `length_sidewalk` = 4 + **FAST LANE** effects
- `pawns_per_player` = 4


## Jeez! I may not cover?

### Jamaican Variant

![Jamaican Variant](https://sweetjamaicashopping.com/cdn/shop/products/IMG-20201029-WA0022__10023_1445x.jpg)