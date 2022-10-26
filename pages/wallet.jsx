import { useContext } from "react";
import Card from "../components/Card";
import { TransactionContext } from "../context/TransactionContext";
import { IoCopy } from "react-icons/io5";
const Wallet = () => {
  const { currentAccount } = useContext(TransactionContext);

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-10">My Wallet</h1>
      <Card>
        <div className="bg-dark-secondary flex flex-col gap-2">
          <h3 className="text-xl">Address</h3>
          <div className="flex items-center gap-4">
            <input
              className="bg-dark-light text-primary-color p-2 rounded outline-none w-max"
              defaultValue={currentAccount}
              readOnly
            />
            <button className="bg-dark-light p-2 text-xl rounded">
              <IoCopy />
            </button>
            {/* IoCopy*/}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Wallet;
