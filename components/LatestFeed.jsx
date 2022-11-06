import useAxios from "../hooks/useAxios";
import FeedCard from "./FeedCard";
import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "../asset/lottie/loading.json";

const LatestFeed = () => {
  const { response } = useAxios(
    `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`
  );

  if (!response) {
    return (
      <div>
        <Player className="w-32" src={loadingAnimation} autoplay loop />
      </div>
    );
  }

  console.log(response)

  return (
    <div className="bg-dark-secondary rounded w-76 p-2 sm:w-64">
      <h1 className="text-xl text-left mb-4 font-bold text-white">
        Top 20 Trending
      </h1>
      <div className="grid grid-cols-5 overflow-y-scroll scrollbar-hide 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 h-[200px] gap-2 ">
        {response.map((coin) => (
          <FeedCard
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestFeed;
