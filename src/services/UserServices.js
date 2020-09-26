import {API_URL_LOCAL} from "../common/constants";

export const logout = () =>
    fetch(`${API_URL_LOCAL}/logout`, {
        method: 'POST',
        credentials: "include"
    })

export const profile = async () => {
    const response = await fetch(`${API_URL_LOCAL}/currentUser`, {
        method: 'POST',
        credentials: "include"
    })
    if (response.ok) {
        return await response.json()
    }
}

export const getTeam = async (uid) => {
    const response = await fetch(`${API_URL_LOCAL}/api/user/${uid}/team`, {
        method: 'GET',
    })
    if(response.ok){
        return await response.json()
    }
}


export const register = async (user) => {
    let response = await fetch(`${API_URL_LOCAL}/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    })
    if(response.ok) {
        return await response.json()
    }
}

export const login = async (user) => {
    const response = await fetch(`${API_URL_LOCAL}/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    })
    if (response.ok) {
        const json = await response.json()
        return json
    }
}

export const createUser = async (user) => {
    const response = await fetch(`${API_URL_LOCAL}/register`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const deleteUser = async (userID) => {
    const response = await fetch(`${API_URL_LOCAL}/api/users/${userID}`, {
        method: 'DELETE'
    });
    return await response.json()
};

export const createTeam = async (uid, team) => {
    console.log(uid)
    console.log(team)
    const response = await fetch(`${API_URL_LOCAL}/api/user/${uid}/team`, {
        method: "POST",
        body: JSON.stringify(team),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const simulateGameWeeks = async (tid) => {
    console.log(tid)
    const response = await fetch(`${API_URL_LOCAL}/api/team/${tid}/gameweek`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const updateUser = async (user) => {
    console.log(user)
    const response = await fetch(`${API_URL_LOCAL}/update`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    });
    return await response.json()
};

export const updateTeam = async (uid, team) => {
    console.log(uid)
    console.log(team)
    const response = await fetch(`${API_URL_LOCAL}/api/user/${uid}/team`, {
        method: "PUT",
        body: JSON.stringify(team),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const superuser = async (user) => {
    const response = await fetch(`${API_URL_LOCAL}/userList`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    });
    return await response.json()
}

export const validateUser = async (user) => {
    const response = await fetch(`${API_URL_LOCAL}/validate`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const getUserData = (uid) =>
    fetch(`${API_URL_LOCAL}/api/users/${uid}`)
        .then(response => response.json())

