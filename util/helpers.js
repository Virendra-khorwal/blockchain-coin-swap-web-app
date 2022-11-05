exports.getPoolImmutables = async (poolContract) => {
    const [factory, token0, token1, fee] = await Promise.all([
        poolContract.token0(),
        poolContract.token1(),
        poolContract.fee()
    ])

    const immutables = {
        token0: token0,
        token1: token1,
        fee: fee
    }

    return immutables
}

exports.getPoolState = async (poolContract) => {
    const slot = poolContract.slot()

    const state = {
        sqrtPriceX96: slot[0]
    }

    return state
}