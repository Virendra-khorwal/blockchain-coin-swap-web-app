import Link from "next/link";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";

const CoinCard = ({
  name,
  id,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <Link href="/stat/[id]" as={`/stat/${id}`}>
      <div className="flex items-center gap-x-12 my-4 w-full hover:bg-dark-light cursor-pointer text-white p-2 px-4 rounded">
        <img src={image} className="w-8" alt="Logo" />
        <h1 className="text-lg font-bold w-36">{name}</h1>
        <h1 className="w-16">{symbol.toUpperCase()}</h1>
        <h1 className="w-24">$ {price}</h1>
        {priceChange < 0 && (
          <h3 className="text-[red] w-32 flex items-center gap-x-2">
            <IoIosTrendingDown />
            {priceChange} %
          </h3>
        )}
        {priceChange >= 0 && (
          <h3 className="text-[green] w-32 flex items-center gap-x-2">
            <IoIosTrendingUp />
            {priceChange} %
          </h3>
        )}

        <p>$ {marketcap}</p>
      </div>
    </Link>
  );
};

export default CoinCard;
