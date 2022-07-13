import "./index.css";

import { DAppProvider, Mainnet } from "@usedapp/core";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Change this to your own Infura project id: https://infura.io/register
const INFURA_PROJECT_ID = "be05494c2bff4e0782942a501db13a81";
const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    // [Mainnet.chainId]: "https://rinkeby.infura.io/v3/2a3cc95237aa40b69abed701a432b46f",
    [Mainnet.chainId]: "https://mainnet.infura.io/v3/" + INFURA_PROJECT_ID,
  },
}


ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
        <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
