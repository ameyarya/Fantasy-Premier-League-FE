const allDetails = [
    //'Player'
]

const StatsReducer = (state = {
    allDetails: allDetails
}, action) => {
    switch (action.type) {
        case "GET_ALL_DETAILS":
            return {
                allDetails: action.allDetails
            }
        default:
            return state
    }
}


export default StatsReducer
