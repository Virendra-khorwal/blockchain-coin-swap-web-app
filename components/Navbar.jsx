import { useState } from "react";

import { HiCreditCard } from "react-icons/hi";
import { IoMdNotifications, IoMdPerson } from "react-icons/io";

const Navbar = () => {
    const [walletConnected, setWalletConnected] = useState(false);
    return (
      <div className="py-6 px-10 flex justify-between">
        <div>
          <input
            className="bg-dark-secondary rounded text-xl py-2 px-4 text-white w-96 focus:outline focus:outline-primary-color focus:outline-2"
            placeholder="Search"
          />
        </div>
        <div className="text-white flex gap-x-10">
          {walletConnected ? (
            <div className="bg-dark-secondary rounded">
              <HiCreditCard />
              <p>9.99 ETH</p>
            </div>
          ) : (
            <div className="hover:bg-dark-light bg-dark-secondary rounded">
              <p className="text-primary-color  py-2 px-4 cursor-pointer">
                Connect Wallet
              </p>
            </div>
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