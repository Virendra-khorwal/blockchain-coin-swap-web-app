import { useEffect, useState } from "react";
import { tokenListApi } from "../pages/api/tokenListApi";
import Button from "../util/Button";
import TokenModalItem from "./TokenModalItem";
import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "../asset/lottie/loading.json";

const TokenModal = ({side, onSelectToken , selectedToken}) => {
  const [tokenList, setTokenList] = useState([]);
  const [selectToken, setSelectToken] = useState([]);
  const isSelected = !!selectToken;
  const onOpenSelectModal = async () => {
    const tokenList = await tokenListApi();
    setTokenList(tokenList);
  };
  // #FIX ADD token icon and name swaping feature
  console.log(side)

  return (
    <div>
      {/* The button to open modal */}
      <button onClick={onOpenSelectModal}>
        <label htmlFor="my-modal-3" className="btn w-32">
          { selectedToken >0 && selectedToken[side] > 0 ? (
            <div className="flex items-center gap-x-2 truncate">
              <img src={selectToken[side].logoURI} alt="Logo" />
              <h1>{selectToken[side].symbol}</h1>
            </div>
          ) : (
            "Select Token"
          )}
        </label>
      </button>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-96 overflow-hidden">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold sticky">Select a Token</h3>
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle right-0 top-2"
            >
              ✕
            </label>
          </div>
          <div></div>
          {tokenList.length <= 0 ? (
            <div>
              <Player src={loadingAnimation} loop autoplay />
            </div>
          ) : (
            <div className="h-72 overflow-y-scroll scrollbar-hide">
              {tokenList.map((token) => (
             
                <TokenModalItem
                  key={token.address}
                  token={token}
                  onClick={() => onSelectToken(token)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TokenModal;
