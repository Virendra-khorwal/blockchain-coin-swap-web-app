import Head from "next/head";
import { useState } from "react";
import CoinList from "../../components/CoinList";
import SearchBar from "../../components/SearchBar";
import useAxios from "../../hooks/useAxios";
import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "../../asset/lottie/loading.json";

const Stat = () => {
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1)

  const { response } = useAxios(
    `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${pageNumber}&sparkline=false`
  );

  if(!response) {
    return (
      <div>
        <Player className="w-32" src={loadingAnimation} autoplay loop />
      </div>
    );
  }

  const allCoins = response.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="w-full h-[500px]">
      <Head>
        <title>Blockchain App - Stat</title>
      </Head>
      <main>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-white">Stats</h1>
          <SearchBar onChange={handleChange} />
        </div>
        <div className="flex items-center gap-x-12 my-4 w-full bg-dark-light text-white p-2 px-4 rounded">
          <p>Icon</p>
          <p className="w-36">Name</p>
          <p className="w1-6">Symbol</p>
          <p className="w-24">Price</p>
          <p className="w-32">% Change</p>
          <p>Volume</p>
        </div>
        <div className="border-b border-primary-color">
          <CoinList filteredCoins={allCoins} />
        </div>
        <div className="flex gap-x-8 mt-4">
          <button
            disabled={pageNumber === 1}
            className={`bg-dark-secondary py-2 px-4 rounded hover:text-primary-color ${pageNumber===1 && 'cursor-not-allowed hover:text-white'}`}
            onClick={() => setPageNumber((prevState) => prevState - 1)}
          >
            Previous
          </button>
          <button
            className="bg-dark-secondary py-2 px-4 rounded hover:text-primary-color"
            onClick={() => setPageNumber((prevState) => prevState + 1)}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default Stat;

