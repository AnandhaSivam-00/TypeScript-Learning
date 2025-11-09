import { PagesFunction } from "@cloudflare/workers-types";

const setHeader = () => {
    return {
        "Content-Type": "application/json"
    }
}

const setErrorResponse = (code: number) => {
    return {
        status: code, 
        headers: setHeader() 
    }
}

export const onRequest: PagesFunction = async ({ request, env }) => {
    const url = new URL(request.url);

    try {
        switch(url.searchParams.get("endpoint")) {
            case "tot-count": {
                const limit = url.searchParams.get("limit");
                const offset = url.searchParams.get("offset");

                if(limit === null || offset === null) {
                    return new Response(
                        JSON.stringify({ error: "Invalid endpoint parameters" }),
                        setErrorResponse(400)
                    );
                }

                const response = await fetch(`${env.POKEAPI_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)
                const data = await response.text();

                return new Response(data, {
                    headers: setHeader(),
                    status: response.status
                })
            }
            case "pokemon": {
                const name = url.searchParams.get("name");

                if(name === null) {
                    return new Response(
                        JSON.stringify({ error: "Invalid endpoint parameters" }),
                        setErrorResponse(400)
                    )
                }

                const response = await fetch(`${env.POKEAPI_BASE_URL}/pokemon/${name}`)

                if(response.status === 404) {
                    return new Response(
                        JSON.stringify({ error: {
                            name: "Not Found",
                            message: `Pokemon named ${name} was not found in the Pokedex database`
                        }}),
                        setErrorResponse(404)
                    )
                }
                const data = await response.text();

                return new Response(data, {
                    headers: setHeader(),
                    status: response.status
                })
            }
            case "pokemon-species": {
                const name = url.searchParams.get("name");

                if(name === null) { 
                    return new Response(
                        JSON.stringify({ error: "Invalid endpoint parameters" }),
                        setErrorResponse(400)
                    )
                }

                const response = await fetch(`${env.POKEAPI_BASE_URL}/pokemon-species/${name}`)

                if(response.status === 404) {
                    return new Response(
                        JSON.stringify({ error: {
                            name: "Not Found",
                            message: `Pokemon species named ${name} was not found in the Pokedex database`
                        }}),
                        setErrorResponse(404)
                    )
                }
                const data = await response.text();

                return new Response(data, {
                    headers: setHeader(),
                    status: response.status
                })
            }
            default:
                throw new Error("Invalid endpoint");
        }
    }
    catch(error) {
        console.log(error);

        return new Response(
            JSON.stringify({ error: "Server error" }),
            setErrorResponse(500)
        )
    }
}