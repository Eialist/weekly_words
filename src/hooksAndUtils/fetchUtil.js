export async function get(url) {
    return await (await fetch(url)).json();
}

export async function post(url, body) {
    return await (
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
    ).json();
}