import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import axios from "axios";
import Image from "next/image";

import metaMaskIcon from "../../asset/metamask.svg";
import coinbaseIcon from "../../asset/coinbase.svg";
import walletConnectIcon from "../../asset/walletconnect.svg";

function SignIn() {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();

  const handleAuth = async (wal) => {
    if (isConnected) {
      await disconnectAsync();
    }

    console.log("Connect To Site Via Wallet");

    const userData = { network: "evm" };

    if (wal === "meta") {
      const { account, chain } = await connectAsync({
        connector: new MetaMaskConnector({}),
      });
      userData.address = account;
      userData.chain = chain.id;
    }

    if (wal === "coin") {
      const { account, chain } = await connectAsync({
        connector: new CoinbaseWalletConnector({}),
      });
      userData.address = account;
      userData.chain = chain.id;
    }

    if (wal === "wal") {
      const { account, chain } = await connectAsync({
        connector: new WalletConnectConnector({ options: { qrcode: true } }),
      });
      userData.address = account;
      userData.chain = chain.id;
    }

    console.log("Sending Connected Account and Chain ID to Moralis Auth API");

    const { data } = await axios.post("/api/auth/request-message", userData, {
      headers: {
        "content-type": "application/json",
      },
    });

    console.log("Received Signature Request From Moralis Auth API");

    const message = data.message;

    const signature = await signMessageAsync({ message });

    console.log("Succesful Sign In, Redirecting to User Page");

    const { url } = await signIn("credentials", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/user",
    });

    push(url);
  };

  return (
    <div className="flex flex-col gap-y-6 px-6 mt-4 text-dark-secondary">
      <button
        className="flex items-center gap-x-6 bg-white p-2 rounded justify-center hover:bg-accent-color"
        onClick={() => handleAuth("meta")}
      >
        <Image
          width="40rem"
          height="40rem"
          src={metaMaskIcon}
          alt="meta mask"
        />
        <p className="text-lg">Authenticate Via Meta Mask</p>
      </button>
      <button
        className="flex items-center gap-x-6 bg-white p-2 rounded justify-center hover:bg-accent-color"
        onClick={() => handleAuth("coin")}
      >
        <Image width="40rem" height="40rem" src={coinbaseIcon} alt="coinbase" />
        <p className="text-lg">Connect Via Coin base</p>
      </button>
      <button
        className="flex items-center gap-x-6 bg-white p-2 rounded justify-center hover:bg-accent-color"
        onClick={() => handleAuth("wal")}
      >
        <Image
          width="40rem"
          height="40rem"
          src={walletConnectIcon}
          alt="wallet connect"
        />
        <p className="text-lg">Connect Via Wallet Connect</p>
      </button>
    </div>
  );
}

export default SignIn;
