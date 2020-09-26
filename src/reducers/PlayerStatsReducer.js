const playerStats = [
    //'Player'
]
const PlayerStatsReducer = (state = {
    playerStats: playerStats
}, action) => {
    switch (action.type) {
        case "GET_PLAYER_STATS":
            return {
                playerStats: action.playerStats
            }

        default:
            return state
    }
}


export default PlayerStatsReducer
