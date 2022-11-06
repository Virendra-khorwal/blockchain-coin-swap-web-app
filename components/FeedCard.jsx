import Link from 'next/link'
const FeedCard = ({ name, id, symbol, image, price, priceChange }) => {
  console.log(name);

  return (
    <Link href={`/stat/${id}`} >
      <div className="w-full cursor-pointer hover:bg-primary-color text-white bg-dark-light rounded p-2 flex gap-x-6 xl:gap-x-2">
        <img className="w-20 xl:w-12 xl:h-12" src={image} alt={name} />
        <div className="flex gap-x-4 flex-col justify-center">
          <h1 className="text-xl xl:text-lg">{name}</h1>
          <div className="flex justify-between gap-x-6 xl:gap-x-4">
            <p className="w-20">$ {price}</p>
            <p className={`${priceChange < 0 ? "text-[red]" : "text-[green]"}`}>
              {priceChange} %
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeedCard;
