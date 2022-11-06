import { useContext, useState } from "react";
import Card from "../components/Card";
import { TransactionContext } from "../context/TransactionContext";
import { IoCopy } from "react-icons/io5";
import WalletModal from "../components/WalletModal";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Wallet = () => {
  const { currentAccount } = useContext(TransactionContext);
  const [copied, setCopied] = useState(false);

  //   const onCopy = () => {

  //   }

  // ADD Copy text feature

  if (!currentAccount) {
    return (
      <div className="flex flex-col gap-y-4">
        <h1 className="text-4xl text-white">Connect your Wallet first</h1>
        <WalletModal />
      </div>
    );
  }

  const copyText = () => {
    setCopied(true)
    const copyText = currentAccount
    navigator.clipboard.writeText(copyText)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div>
      <Head>
        <title>Wallet</title>
      </Head>
      <main className="text-white">
        <h1 className="text-2xl font-bold mb-10">My Wallet</h1>
        <Card>
          <div className="bg-dark-secondary flex flex-col gap-2">
            <h3 className="text-xl">Address</h3>
            <div className="flex items-center gap-4">
              <p id="copyText" className="bg-dark-light text-primary-color p-2 rounded outline-none w-max">
                {currentAccount}
              </p>
              <div className="tooltip tooltip-info" data-tip={`${copied? "copied" : "copy"}`}>
                  <button className="bg-dark-light p-2 text-xl rounded" onClick={() => copyText()}>
                    <IoCopy />
                  </button>
              </div>
              {/* IoCopy*/}
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Wallet;
