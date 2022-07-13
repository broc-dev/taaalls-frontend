import { Contract } from "@ethersproject/contracts";
import { utils } from 'ethers'
import { shortenAddress, useCall, useEthers, useLookupAddress, useContractFunction } from "@usedapp/core";
import React, { useEffect, useState } from "react";

import { Body, Button, Container, Header, Image, Link } from "./components";
import logo from "./taaalls-logo.png";
import firstTaaall from "./first-taaall.png";

import { addresses, abis } from "@my-app/contracts";

function WalletButton() {
  const [rendered, setRendered] = useState("");

  const ens = useLookupAddress();
  const { account, activateBrowserWallet, deactivate, error } = useEthers();

  useEffect(() => {
    if (ens) {
      setRendered(ens);
    } else if (account) {
      setRendered(shortenAddress(account));
    } else {
      setRendered("");
    }
  }, [account, ens, setRendered]);

  useEffect(() => {
    if (error) {
      console.error("Error while connecting wallet:", error.message);
    }
  }, [error]);

  return (
    <Button
      onClick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}
    >
      {rendered === "" && "CONNEEEEECT"}
      {rendered !== "" && rendered}
    </Button>
  );
}

function App() {
  const { account, activateBrowserWallet, deactivate, error, chainId } = useEthers();

  const taaallsInterface = new utils.Interface(abis.taaalls);
  const taaallsContractAddress = addresses.taaalls;
  const contract = new Contract(taaallsContractAddress, taaallsInterface);

  const MintAuthor = () => {
    const { state, send } = useContractFunction(contract, 'authorMint', {
      transactionName: 'Mint Author',
      gasLimitBufferPercentage: 10,
    })
    const { status } = state

    const mintOne = () => {
      try {
        void send(3)
      } catch (e) {
        console.log(e);
      }
    }

    return (
      <div>
        <Button className="mint-button" onClick={() => mintOne()}>MIIINT</Button>
        {status !== "None" && <p className="status">{status == "Exception" ? "Error" : "Pending"}</p>}
      </div>
    )
  }

  const MintOne = () => {
    const { state, send } = useContractFunction(contract, 'mintOne', {
      transactionName: 'Mint One',
      gasLimitBufferPercentage: 10,
    })
    const { status } = state

    const mintOne = () => {
      void send()
    }

    return (
      <div>
        <Button className="mint-button" onClick={() => mintOne()}>MIIINT</Button>
        {status !== "None" && <p className="status">{status == "Exception" ? "Error" : "Pending"}</p>}
      </div>
    )
  }

  const MintFive = () => {
    const { state, send } = useContractFunction(contract, 'mintFive', {
      transactionName: 'Mint Five',
      gasLimitBufferPercentage: 10,
    })
    const { status } = state

    const mintFiveTaaalls = () => {
      void send({ value: utils.parseEther('0.0345') })
    }

    return (
      <div>
        <Button className="mint-button" onClick={() => mintFiveTaaalls()}>MIIINT</Button>
        {status !== "None" && <p className="status">{status == "Exception" ? "Error" : "Pending"}</p>}
      </div>
    )
  }

  const MintSixtyNine = () => {
    const { state, send } = useContractFunction(contract, 'mintSixtyNine', {
      transactionName: 'Mint Sixty Nine',
      gasLimitBufferPercentage: 10,
    })
    const { status } = state

    const mintSixtyNineTaaalls = () => {
      void send({ value: utils.parseEther('0.42') })
    }

    return (
      <div>
        <Button className="mint-button" onClick={() => mintSixtyNineTaaalls()}>MIIINT</Button>
        {status !== "None" && <p className="status">{status == "Exception" ? "Error" : "Pending"}</p>}
      </div>
    )
  }

  // // Read more about useDapp on https://usedapp.io/
  // const { error: contractCallError, value: tokenBalance } =
  //   useCall({
  //      contract: new Contract(addresses.taaalls, abis.taaalls),
  //      method: "balanceOf",
  //      args: ["0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C"],
  //   }) ?? {};


  return (
    <Container>
      <Header>
        <Image src={logo} alt="taaalls-logo" />
        <WalletButton />
      </Header>
      <Body>
        <h1 className="taaalls-title">
          MIIIINT YOUUUR TAAALLS
        </h1>
        <div className="mint-pane">
          <div className="mint-item">
            <span className="mint-title">TALL</span>
            <hr />
            <p>MIIINT ONE</p>
            <p>FREE</p>
            <p>2 MAX</p>
            <MintAuthor />
            <MintOne />
          </div>
          <div className="mint-item">
            <span className="mint-title">TAALLER</span>
            <hr />
            <p>MIIINT FIVE</p>
            <p>0.0069 ETH EACH</p>
            <p>12 MAX</p>
            <MintFive />
          </div>
          <div className="mint-item">
            <span className="mint-title">TAAALLEST</span>
            <hr />
            <p>MIIINT 69</p>
            <p>0.420 ETH TOTAL</p>
            <p>75 MAX</p>
            <MintSixtyNine />
          </div>
        </div>
        <div className="social-links">
          <Link href="https://twitter.com/taaallsNFT">
            Twitter
          </Link>
          <Link href="https://thegraph.com/docs/quick-start">Discord</Link>
        </div>
      </Body>
    </Container>
  );
}

export default App;
