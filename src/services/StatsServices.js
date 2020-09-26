import {CORS_DETAILS_URL, CORS_PLAYERS_URL} from "../common/constants";

export const getAllDetails = () =>
    fetch(`${CORS_DETAILS_URL}`)
        .then(response => response.json())

export const getAllPlayerDetails = (playerId) =>
    fetch(`${CORS_PLAYERS_URL}/${playerId}/`)
        .then(response => response.json())
