# TODO

## Coordinate system for pawn

- Can tell base, entry, home(destination)
- Can handle board variation(of N players where N != 4)

Alway true otherwise respective error is raised on starup:
- `distance_to_safezone_from_edge` > `length_finishline`

The total number of forwards of a pawn to reach its finishline:
```
number_of_players * 2 * (length_finishline + 1)
```

The total number of safe zones(including entries):
```
number_of_players * 2
```

### Example 1.

(The variant of the image from REAMDE.md)

- `number_of_players` = 4
- `length_finishline` = 5
- `distance_to_safezone_from_edge` = 2

This implies all of the follwings:
- The length of any sidewalk(side from any finishline) is 6

### Example 2.

![Variant 2](https://t3.ftcdn.net/jpg/06/57/16/02/360_F_657160213_YMxvQ5ngZGsNdznLIumxUVYJWWHpHZ66.jpg)

- `number_of_players` = 6
- `length_finishline` = 4
- `distance_to_safezone_from_edge` = 1

This implies all of the follwings:
- The length of any sidewalk(side from any finishline) is 5

### Example 3.

![Variant3](https://as2.ftcdn.net/v2/jpg/03/53/80/87/1000_F_353808738_2L6Z4tzZsE9t9WvgCiAzSqyAfVxpicCa.jpg)

- `number_of_players` = 8
- `length_finishline` = 5
- `distance_to_safezone_from_edge` = 2

This implies all of the follwings:
- The length of any sidewalk(side from any finishline) is 6

### Example 4.

![Variant4](https://i.ytimg.com/vi/vs6pzu-Fpog/maxresdefault.jpg)

- `number_of_players` = 3
- `length_finishline` = 5
- `distance_to_safezone_from_edge` = 2

This implies all of the follwings:
- The length of any sidewalk(side from any finishline) is 6
