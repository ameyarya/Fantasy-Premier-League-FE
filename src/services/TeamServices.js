import {API_URL_LOCAL} from "../common/constants";

export const getAllTeams = () =>
    fetch(`${API_URL_LOCAL}/api/teams`)
        .then(response => response.json())

export const getTeamUserId = (tid) =>
    fetch(`${API_URL_LOCAL}/api/user/team/${tid}`)
        .then(response => response.json())
