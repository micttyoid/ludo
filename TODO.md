# TODO

## Coordinate system for pawn

- Can tell base, entry, home(destination)
- Can handle board variants

### Example 1.

(The variant of the image from REAMDE.md)

```yaml
max-number-of-players: 4
pawns-per-player: 4
length-finishline: 5
# may regard safezon-0 as entry
safezone-1:
# smaller distance 5 < 8
- distance-to-entry: 5   
entry-to-entry: 13
```

### Example 2.

![Variant 2](https://t3.ftcdn.net/jpg/06/57/16/02/360_F_657160213_YMxvQ5ngZGsNdznLIumxUVYJWWHpHZ66.jpg)

```yaml
max-number-of-players: 6
pawns-per-player: 4
length-finishline: 4
# may regard safezon-0 as entry
safezone-1:
# smaller distance 4 < 7
- distance-to-entry: 4
entry-to-entry: 11
```

**NOTE**: corners are usually skipped. if not skipped:
```yaml
entry-to-entry: 12
```

### Example 3.

![Variant3](https://as2.ftcdn.net/v2/jpg/03/53/80/87/1000_F_353808738_2L6Z4tzZsE9t9WvgCiAzSqyAfVxpicCa.jpg)

```yaml
max-number-of-players: 8
pawns-per-player: 4
length-finishline: 5
# may regard safezon-0 as entry
safezone-1:
# smaller distance: 5 < 8
- distance-to-entry: 5
entry-to-entry: 13
```

### Example 4.

![Variant4](https://i.ytimg.com/vi/vs6pzu-Fpog/maxresdefault.jpg)

```yaml
max-number-of-players: 3
pawns-per-player: 4
length-finishline: 5
# may regard safezone-0 as entry
safezone-1:
# smaller distance: 5 < 8
- distance-to-entry: 5
entry-to-entry: 13
```

### Example 5.

![Variant5](https://image.winudf.com/v2/image/Y29tLnByb3BoZXRpY2FwcHMua2luZy5sdWRvcGxheV9zY3JlZW5fM18xNTE0NTk2NDY3XzAyNA)

```yaml
max-number-of-players: 5
pawns-per-player: 4
length-finishline: 5
# may regard safezone-0 as entry
safezone-1:
# smaller distance: 5 < 8
- distance-to-entry: 5
entry-to-entry: 13
```

### Example 6.

![Variant6](https://cdn4.vectorstock.com/i/1000x1000/76/38/ludo-board-game-vector-8697638.jpg)

```yaml
max-number-of-players: 4
pawns-per-player: 3
length-finishline: 3
# No safezone-1 given(the four entries are the only safezone)
entry-to-entry: 8
```

### Example 7. (Meta)

![Variant7](https://staranddaisy.in/wp-content/uploads/2023/09/folks-work-3-in-1-ludo-naivri-2_966808fd-14ae-4dae-bf29-2e450a88fe28.jpg)

```yaml
max-number-of-players: 4
pawns-per-player: 4
length-finishline: 5
# No safezone-1 given(the four entries are the only safezone)
entry-to-entry: 13
```
**NOTE**: it has FAST LANEs

**NOTE**: it looks like you don't skip the corner between sidewalks?

### Example 8

It may look like meta, but it isn't

![Variant 8](https://cdn.vectorstock.com/i/1000v/34/23/ludo-board-game-vector-8703423.jpg)

```yaml
max-number-of-players: 4
pawns-per-player: 4
length-finishline: 5
# No safezone-1 given(the four entries are the only safezone)
entry-to-entry: 10
```

### Example 9

![Variant 9](https://shop-giiker.myshopify.com/cdn/shop/files/02.jpg)

```yaml
max-number-of-players: 4
pawns-per-player: 3
length-finishline: 4
# No safezone-1 given(the four entries are the only safezone)
entry-to-entry: 9
```

**NOTE**: Are those thin lines, something like FAST LANEs?

### Example 10 Jamaican Variant

![Jamaican Variant](https://sweetjamaicashopping.com/cdn/shop/products/IMG-20201029-WA0022__10023_1445x.jpg)

```yaml
max-number-of-players: 4
pawns-per-player: 4
length-finishline: 5
# No safezone-1 given(the four entries are the only safezone)
entry-to-entry: 12
```

**NOTE**
- `paws-per-player` is 4 by [How to Play Jamaican Ludo](https://youtu.be/_GVtXl6JPYU)
- Corners are [not skipped](images/jamaican-1.png)

## Thinking of possible variant

### Discriminatory variant

- Violates equal value among players: sidewalk, pawns, ...

### Odd number in even place(FOUND)
- Distance from entry-to-entry is odd: cannot get length of sidewalk


## Jeez! I may not cover?




### Special effects

Speicial effects from Variant 9
![Speicial effects from Variant 9](https://shop-giiker.myshopify.com/cdn/shop/files/04.jpg)