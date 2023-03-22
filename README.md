# RNC - Royal Nations Cup

Website to display a leaderboard for rnc.

## Flags

Flags are from Nado and can be found at `assets/flags`. They should probably follow the [iso alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) standard but have not checked xdd

## Leaderboard
The leaderboard is fetching data from [npoint.io](https://www.npoint.io). To fetch from a specific endpoint add a `npoint` url parameter with the value of the npoint id. So for example `&npoint=efc43aed2665ee53a7d6` will fetch from `https://api.npoint.io/efc43aed2665ee53a7d6`.

```
{
  // sets the title of the leaderboard
  "title": "Round A",
  // sets the subtitle
  "subtitle": "Most prestigious royal tournament",
  // applies a offset to the position (1 means to start at position 1)
  "startPosition": 8,
  // array of positions to display in a green color
  "successPositions": [8, 9, 10],
  // array of positions to display in a red color
  "dangerPositions": [15, 14],
  "entries": [
    {
      "name": "World",
      "flag": "WOR",
      "points": [8, 1, 4]
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


## Team pages
The team pages are also fetching data from [npoint.io](https://www.npoint.io). To fetch from a specific endpoint add a `npoint` url parameter with the value of the npoint id. Also required is a flag id to identify the team. Add eg. `id=GER` as a parameter to fetch the German team.

```
{
  "teams": [{
    // display title
    "title": "Germany",
    // display subtitle
    "subtitle": "Qualifier Results",
    // flag MUST match with the flag of the Leaderboard and is used as id
    "flag": "GER",
    // When true the rounds get hidden
    "hideRounds": false,
    // Positions that get the role captain assigned
    "captainPositions": [4],
    // Positions that get the role player assigned
    "playerPositions": [1,3],
    // Positions that are out
    "outPositions": [6,5],
    "player": [
      {
        // player name
        "name": "Player A",
        // How many points this player scored (array of numbers to sum up or simple number)
        "points": [4, 3, 4]
      },
      {
        "name": "Player B",
        "points": [3, 1, 2]
      },
      {
        "name": "Player C",
        "points": [1, 3, 1]
      },
      {
        "name": "Player C",
        "points": [2, 2, 3]
      }
    ]
  }]
}
```

## Additional notes

> To change the default end point edit the **href** in the `index.html`.
> Another one is also in `LeaderBoard.html` for the team pages  

## Font
Website is using the [soloist](https://www.cdnfonts.com/soloist.font) font