const TOKEN_LIST_API = process.env.TOKEN_LIST_API

export const tokenListApi = async() => {
    console.log("Initializing")
    let response = await fetch("https://tokens.coingecko.com/uniswap/all.json");
    let tokenListJSON = await response.json()
    return tokenListJSON.tokens;
}

