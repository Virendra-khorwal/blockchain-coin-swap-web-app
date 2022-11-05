

const TokenModalItem = ({token, onClick}) => {

    return (
        <button className="flex gap-x-4 my-4 hover:bg-primary-color p-2 rounded w-full" onClick={onClick} >
            <img src={token.logoURI} alt='token logo' />
            <h1>
                {token.symbol}
            </h1>
        </button>
    )
}

export default TokenModalItem;