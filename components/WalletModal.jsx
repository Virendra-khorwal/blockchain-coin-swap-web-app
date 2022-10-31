import { useEffect, useState } from "react";
import Card from "../components/Card";
import { IoIosClose } from "react-icons/io";

import SignIn from "../pages/api/signin";
import { WagmiConfig } from "wagmi";

import { createClient, configureChains, defaultChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

const client = createClient({
  provider,
  webSocketProvider,
});


const WalletModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      setDisabled(true);
    } else if (!modalOpen) {
      setDisabled(false);
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
            <WagmiConfig client={client}>
              <SignIn />
            </WagmiConfig>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WalletModal;
