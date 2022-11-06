import Head from "next/head";
import CoinChart from "../../components/CoinChart";
import { useRouter } from "next/router";

const Coin = ({ coin }) => {

  const router = useRouter();
  const { id } = router.query;


  return (
    <div className="flex flex-col gap-y-6 w-5/6">
      <Head>
        <title>Stat - {coin.name}</title>
      </Head>
      <div>
        <button
          onClick={() => history.back()}
          className="bg-dark-light px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
      <main className="flex gap-y-4 flex-col">
        <div className="flex items-center gap-x-4 ">
          <img className="w-16" src={coin.image.large} alt={coin.name} />
          <h1 className="text-6xl text-white">
            {coin.name} ({coin.symbol})
          </h1>
        </div>
        <div>
          <CoinChart id={id} />
        </div>
      </main>
    </div>
  );
};

export default Coin;

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
};
