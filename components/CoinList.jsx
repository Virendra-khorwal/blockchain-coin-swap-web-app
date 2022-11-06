import CoinCard from "./CoinCard";

const CoinList = ({filteredCoins}) => {
    return <div className="h-[440px] overflow-y-scroll scrollbar-hide">
        {
            filteredCoins.map(coin => {
                return <CoinCard 
                    key={coin.id}
                    name={coin.name}
                    id={coin.id}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    marketcap={coin.market_cap}
                    volume={coin.total_volume}
                    image={coin.image}
                    priceChange= {coin.price_change_percentage_24h}
                    
                />
            })
        }
    </div>
}

export default CoinList;