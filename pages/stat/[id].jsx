import Head from "next/head";
import CoinChart from "../../components/CoinChart";
import { useRouter } from "next/router";
import useAxios from "../../hooks/useAxios";
import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "../../asset/lottie/loading.json";

const Coin = () => {

  const router = useRouter();
  const { id } = router.query;
  const { response } = useAxios(`coins/${id}`);

  if (!response) {
    return (
      <div>
        <Player className="w-32" src={loadingAnimation} autoplay loop />
      </div>
    );
  }


  return (
    <div className="flex flex-col gap-y-6 w-5/6">
      <Head>
        <title>Stat - {response.name}</title>
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
          <img className="w-16" src={response.image.large} alt={response.name} />
          <h1 className="text-6xl text-white">
            {response.name} ({response.symbol})
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
