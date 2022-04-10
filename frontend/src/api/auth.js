const baseUrl = process.env.REACT_APP_SERVER
export default {
    async getUser(phone, password) {
        return (await fetch(baseUrl + '/auth', {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({phone, password}),
        })).json();
    }
}
