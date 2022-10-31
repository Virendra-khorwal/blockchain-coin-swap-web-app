import { useContext} from "react";
import { HiCreditCard } from "react-icons/hi";
import { IoMdNotifications, IoMdPerson } from "react-icons/io";
import { TransactionContext } from "../context/TransactionContext";
import WalletModal from "./WalletModal";
import { useRouter } from "next/router";

const Navbar = () => {
    const {connectWallet, currentAccount} = useContext(TransactionContext);
      const router = useRouter();

    return (
      <div className="py-6 px-10 flex justify-between">
        <div>
          <input
            className="bg-dark-secondary rounded text-xl py-2 px-4 text-white w-96 focus:outline focus:outline-primary-color focus:outline-2"
            placeholder="Search"
          />
        </div>
        <div className="text-white flex gap-x-10">
          {currentAccount ? (
            <button
              className="bg-dark-secondary rounded flex items-center px-4 gap-x-3 cursor-pointer"
              onClick={() => router.push("/wallet")}
            >
              <HiCreditCard />
              <p className="truncate w-16">{currentAccount}</p>
            </button>
          ) : (
            <WalletModal />
          )}
          <div className="py-2 px-4 flex items-center bg-dark-secondary rounded cursor-pointer hover:bg-dark-light">
            <IoMdNotifications />
          </div>
          <div className="flex py-2 px-4 items-center gap-x-2 rounded cursor-pointer bg-primary-color">
            <IoMdPerson />
            <span>Login</span>
          </div>
        </div>
      </div>
    );
}

export default Navbar;