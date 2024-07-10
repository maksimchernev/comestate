export const GQLFetcher = async (query) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;

    const headers = {
        "Content-Type": "application/json",
    };

    const resp = await fetch(url, {
        headers: headers,
        method: "POST",
        body: JSON.stringify(query),
    });
    const json = await resp.json();
    return json;
};
