# TODO

## Coordinate system for pawn

- Can tell base, entry, home(destination)
- Can handle board variation(of N players where N != 4)

### Example
- `number_of_players` = 4
- `length_finish_line` = 5
- `distance_to_safezone_from_edge` = 1

The total number of forwards of a pawn to reach its finish line:
```
number_of_players * 2 * (length_finish_line + 1)
```

The total number of safe zones(including entries):
```
number_of_players * 2
```

This also implies all of the follwings:
- The length of a sidewalk(side from any finish line) is 6


This should raise the respective error if any of followings is true:
- `safezone_other_than_entry` is set "false"
- `distance_to_safezone_from_edge` > 5
