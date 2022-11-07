import Head from "next/head";
import { useContext, useState } from "react";
import WalletModal from "../components/WalletModal";
import { TransactionContext } from "../context/TransactionContext";

const Transaction = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);
  const [receiverAddress, setReceiverAddress] = useState("");
  const [amount, setAmount] = useState();
  const [amountValue, setAmountValue] = useState()
  const [value, setValue] = useState("");

  const transact = async() => {
    const resp = await fetch(`https://api.tatum.io/v3/ledger/transaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "0079133e-7674-4ac7-abd0-8a50f4521923",
      },
      body: JSON.stringify({
        senderAccountId: currentAccount,
        recipientAccountId: receiverAddress,
        amount: amountValue,
      }),
    });

    const data = await resp.json();
    return data;
  }

  const onSubmit = async() => {
    setReceiverAddress(value);
    setAmountValue(amount);
    const data = await transact();

    if(data) {
        console.log(data)
    }
  }

  return (
    <div>
      <Head>
        <title>Exaverse - Transaction</title>
      </Head>
      <main className="flex justify-center items-center">
        <div className="flex flex-col bg-dark-secondary rounded py-4 px-8 gap-y-4 text-white">
          <h1 className="text-2xl font-bold">Transaction Details</h1>
          <div className="flex items-center">
            <label className="w-44 text-xl">Receiver Address</label>
            <input className="rounded bg-dark-primary outline-none py-2 px-3 focus:outline-primary-color" placeholder="0x..." onChange={(e) => setValue(e.target.value)} />
          </div>
          <div className="flex items-center">
            <label className="w-44 text-xl">Amount</label>
            <input className="rounded bg-dark-primary outline-none py-2 px-3 focus:outline-primary-color" type='number' min='0' placeholder="0" onChange={(e) => setAmount(e.target.value)} />
          </div>
          {
            currentAccount? (
          <button className="border-2 rounded p-2 border-primary-color text-primary-color hover:bg-primary-color hover:text-white" type="submit" onClick={onSubmit} >
            Send
          </button>

            ) : (
                <WalletModal />
            )
          }
        </div>
      </main>
    </div>
  );
};

export default Transaction;
