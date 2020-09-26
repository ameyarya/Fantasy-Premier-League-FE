const allTeams = []

const TeamsReducer = (state = {
    allTeams: allTeams, val: 0
}, action) => {
    switch (action.type) {
        case "GET_ALL_TEAMS":
            return {
                allTeams: action.allTeams
            }
        case "GET_TEAM_USER_ID":
            return {
                val: action.val
            }
        case "GET_SORTED_TEAMS_1":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek1) - (a.gameWeek.gameWeek1))
            }
        case "GET_SORTED_TEAMS_2":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek2) - (a.gameWeek.gameWeek2))
            }
        case "GET_SORTED_TEAMS_3":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek3) - (a.gameWeek.gameWeek3))
            }
        case "GET_SORTED_TEAMS_4":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek4) - (a.gameWeek.gameWeek4))
            }
        case "GET_SORTED_TEAMS_5":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek5) - (a.gameWeek.gameWeek5))
            }
        case "GET_SORTED_TEAMS_6":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek6) - (a.gameWeek.gameWeek6))
            }
        case "GET_SORTED_TEAMS_7":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek7) - (a.gameWeek.gameWeek7))
            }
        case "GET_SORTED_TEAMS_8":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek8) - (a.gameWeek.gameWeek8))
            }
        case "GET_SORTED_TEAMS_9":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek9) - (a.gameWeek.gameWeek9))
            }
        case "GET_SORTED_TEAMS_10":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek10) - (a.gameWeek.gameWeek10))
            }
        case "GET_SORTED_TEAMS_11":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek11) - (a.gameWeek.gameWeek11))
            }
        case "GET_SORTED_TEAMS_12":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek12) - (a.gameWeek.gameWeek12))
            }
        case "GET_SORTED_TEAMS_13":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek13) - (a.gameWeek.gameWeek13))
            }
        case "GET_SORTED_TEAMS_14":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek14) - (a.gameWeek.gameWeek14))
            }
        case "GET_SORTED_TEAMS_15":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek15) - (a.gameWeek.gameWeek15))
            }
        case "GET_SORTED_TEAMS_16":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek16) - (a.gameWeek.gameWeek16))
            }
        case "GET_SORTED_TEAMS_17":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek17) - (a.gameWeek.gameWeek17))
            }
        case "GET_SORTED_TEAMS_18":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek18) - (a.gameWeek.gameWeek18))
            }
        case "GET_SORTED_TEAMS_19":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek19) - (a.gameWeek.gameWeek19))
            }
        case "GET_SORTED_TEAMS_20":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek20) - (a.gameWeek.gameWeek20))
            }
        case "GET_SORTED_TEAMS_21":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek21) - (a.gameWeek.gameWeek21))
            }
        case "GET_SORTED_TEAMS_22":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek22) - (a.gameWeek.gameWeek22))
            }
        case "GET_SORTED_TEAMS_23":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek23) - (a.gameWeek.gameWeek23))
            }
        case "GET_SORTED_TEAMS_24":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek24) - (a.gameWeek.gameWeek24))
            }
        case "GET_SORTED_TEAMS_25":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek25) - (a.gameWeek.gameWeek25))
            }
        case "GET_SORTED_TEAMS_26":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek26) - (a.gameWeek.gameWeek26))
            }
        case "GET_SORTED_TEAMS_27":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek27) - (a.gameWeek.gameWeek27))
            }
        case "GET_SORTED_TEAMS_28":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek28) - (a.gameWeek.gameWeek28))
            }
        case "GET_SORTED_TEAMS_29":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek29) - (a.gameWeek.gameWeek29))
            }
        case "GET_SORTED_TEAMS_30":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek30) - (a.gameWeek.gameWeek30))
            }
        case "GET_SORTED_TEAMS_31":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek31) - (a.gameWeek.gameWeek31))
            }
        case "GET_SORTED_TEAMS_32":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek32) - (a.gameWeek.gameWeek32))
            }
        case "GET_SORTED_TEAMS_33":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek33) - (a.gameWeek.gameWeek33))
            }
        case "GET_SORTED_TEAMS_34":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek34) - (a.gameWeek.gameWeek34))
            }
        case "GET_SORTED_TEAMS_35":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek35) - (a.gameWeek.gameWeek35))
            }
        case "GET_SORTED_TEAMS_36":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek36) - (a.gameWeek.gameWeek36))
            }
        case "GET_SORTED_TEAMS_37":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek37) - (a.gameWeek.gameWeek37))
            }
        case "GET_SORTED_TEAMS_38":
            return {
                allTeams: action.allTeams.sort(
                    (a, b) => (b.gameWeek.gameWeek38) - (a.gameWeek.gameWeek38))
            }

        default:
            return state
    }
}

export default TeamsReducer
