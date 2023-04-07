// RNC_pool.js (By Brimarine)
// -----------
// Outputs a random pool of maps to be played according to the following rules.
// 1. Every map is played the same number of times.
// 2. A map cannot be played twice in the same match.
// 3. A map that is played in round 1 or 2 in one match must be played in round 4 or 5 in the
//    next match, and vice versa. The first time a map is played, it may be in any round.


function random_map_pool(
    // List of maps to be played. It is assumed all maps have distinct names.
    maplist,
    // Number of matches to play.
    matches,
    // Number of rounds per match (default 5).
    roundspermatch = 5,
) {
    // Number of times each map will be played. Assumes that each map will be played the same number
    // of times.
    const mapplays = matches * roundspermatch / maplist.length;

    // Returns whether two rounds belong in the same half of a match. Used for unbiasing.
    const samehalf = (rounda, roundb) => {
        const halfway = roundspermatch / 2;
        const parity = (round) => round < halfway;
        if (roundspermatch % 2 !== 0 && rounda === Math.floor(halfway) && rounda === roundb) {
            // A map can occur in the same round twice in a row iff it is the middle round.
            return false;
        }
        return parity(rounda) === parity(roundb);
    }

    // The technique for map choices we use is greedy, and may hit a point at which there are no
    // valid map picks that would not violate the constraints. The lazy way around this is to simply
    // bail out and try again if we encounter this situation.
    const timeout = 5000;
    restart: for (let i = 0; i < timeout; ++i) {
        // Records data associated to each map that will be updated as the selection progressed.
        const mapdata = new Map(maplist.map(map => [map, {
            // The number of times each map has currently been selected to be played (which will
            // never exceeed `mapplays`).
            count: 0,
            // The previous round number of this map, to avoid biasing. `null` when the map has not
            // yet been played.
            prevround: null,
        }]));
        // The map pool.
        const matchselection = [];

        // Choose the maps for each match.
        while (matchselection.length < matches) {
            // The list of maps to be played in this match.
            let roundselection = [];

            // The maps that may potentially be played in this round (i.e. that have not been played
            // enough times already).
            let matchcandidates = new Set(maplist.filter(map => mapdata.get(map).count < mapplays));

            // Choose the map for each round.
            for (let round = 0; round < roundspermatch; ++round) {
                const roundcandidates = Array.from(matchcandidates).filter(map => {
                    const prevround = mapdata.get(map).prevround;
                    return prevround === null || !samehalf(prevround, round);
                });
                // Bail out if there are no map candidates for this round.
                if (roundcandidates.length === 0) {
                    continue restart;
                }
                // Choose a random map out of the potential maps.
                const nextmap = roundcandidates[Math.floor(Math.random() * roundcandidates.length)];
                roundselection.push(nextmap);
                // Update the map data for the chosen map.
                const nextmapdata = mapdata.get(nextmap);
                ++nextmapdata.count;
                nextmapdata.prevround = round;
                // Make sure we will not choose this map again in the same match.
                matchcandidates.delete(nextmap);
            }

            matchselection.push(roundselection);
        }

        return matchselection;
    }

    console.error("Could not find a map pool selection fitting the criteria.");
    return [];
}

function pretty_print_map_pool(matchselection) {
    const output = [];
    for (let i = 0; i < matchselection.length; ++i) {
        output.push(`MATCH ${i + 1}`);
        for (let j = 0; j < matchselection[i].length; ++j) {
            output.push(`Round ${j + 1}. ${matchselection[i][j]}`);
        }
    }
    console.log(output.join("\n"));
}



const MapPoolBuilder = {
    build: function(
        // List of maps to be played. It is assumed all maps have distinct names.
        maplist,
        // Number of matches to play.
        matches,
        // Number of rounds per match (default 5).
        roundspermatch = 5,
    ){
        const output = random_map_pool(maplist, matches, roundspermatch);
        pretty_print_map_pool(output);
        return output;
    },
};
