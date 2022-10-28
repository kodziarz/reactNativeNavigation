const address = "http://192.168.0.73:3000/"

export const registerUser = async (login, password) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({
            login: login,
            password: password
        }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }
    return await fetch(address + "user/", options)
}

export const getUsersList = async () => {
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }
    return await fetch(address + "users/", options)
}

export const deleteUser = async (login, password) => {
    const options = {
        method: "DELETE",
        body: {
            login: login,
            password: password
        },
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }
    return await fetch(address + "user/", options)
}