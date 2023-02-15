# RNC - Royal Nations Cup

Website to display a leaderboard for rnc.

### Flags

Flags are from Nado. They should probably follow the [iso alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) standard but have not checked xdd

## Leaderboard
The leaderboard is fetching data from [npotion.io](https://www.npoint.io). To fetch from a specific endpoint add a `npoint` url parameter with the value of the npoint id. So for example `&npoint=efc43aed2665ee53a7d6` will fetch from `https://api.npoint.io/efc43aed2665ee53a7d6`.

```
{
  // changes the title of the leaderboard
  "title": "Round A",
  // applies a offset to the position
  "startPosition": 8,
  // array of positions to display in a diffrent color
  "highlightPositions": [8,9,10],
  "entries": [
    {
      "name": "World",
      "flag": "WOR",
      "points": 11
    },
    {
      "name": "Germany",
      "flag": "GER",
      "points": 12
    },
    {
      "name": "Austrailia",
      "flag": "AUS",
      "points": 4
    },
    {
      "name": "Brazil",
      "flag": "BRA",
      "points": 3
    },
    {
      "name": "Canada",
      "flag": "CAN",
      "points": 10
    },
    {
      "name": "France",
      "flag": "FRA",
      "points": 9
    },
    {
      "name": "United States",
      "flag": "USA",
      "points": 9
    },
    {
      "name": "United Kingdom",
      "flag": "GBR",
      "points": 9
    }
  ]
}
```

## Refresh Button

A refresh button can be shown using `refresh=true` as url parameter

## Additional notes

> To change the default end point edit the **href** in the `index.html` 
