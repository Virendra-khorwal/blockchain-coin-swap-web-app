import { useEffect, useState } from "react";
import Image from "next/image";
import Card from "../components/Card";
import { IoIosClose } from "react-icons/io";

import metaMaskIcon from "../asset/metamask.svg";
import coinbaseIcon from "../asset/coinbase.svg";
import walletConnectIcon from "../asset/walletconnect.svg";

const WalletModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      setDisabled(true);
    } else if(!modalOpen) {
      setDisabled(false)
    }
  }, [modalOpen, disabled]);

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn w-full bg-dark-light rounded py-2 hover:bg-primary-color hover:text-white"
        disabled={disabled}
      >
        Connect Wallet
      </button>
      {modalOpen && (
        <div className="z-50 absolute inset-2/4 top-1/4 w-max">
          <Card>
            <div className="flex justify-between">
              <label className="font-bold text-xl">Select the Wallet</label>
              <button
                className="text-3xl bg-dark-light hover:bg-primary-color rounded-full"
                onClick={() => setModalOpen(false)}
              >
                <IoIosClose />
              </button>
            </div>
            <div className="flex flex-col gap-y-6 px-6 mt-4 text-dark-secondary">
              <button className="flex items-center gap-x-6 bg-white p-2 rounded justify-center hover:bg-accent-color">
                <Image
                  width="40rem"
                  height="40rem"
                  src={metaMaskIcon}
                  alt="meta mast"
                />
                <p className="text-lg">Connect Via Meta Mask</p>
              </button>
              <button className="flex items-center gap-x-6 bg-white p-2 rounded justify-center hover:bg-accent-color">
                <Image
                  width="40rem"
                  height="40rem"
                  src={coinbaseIcon}
                  alt="coinbase"
                />
                <p className="text-lg">Connect Via Coin base</p>
              </button>
              <button className="flex items-center gap-x-6 bg-white p-2 rounded justify-center hover:bg-accent-color">
                <Image
                  width="40rem"
                  height="40rem"
                  src={walletConnectIcon}
                  alt="wallet connect"
                />{" "}
                <p className="text-lg">Connect Via Wallet Connect</p>
              </button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WalletModal;
