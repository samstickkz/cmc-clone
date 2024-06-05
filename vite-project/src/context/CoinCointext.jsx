import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  useEffect(() => {
    // Function to fetch coin data from CoinGecko API
    const fetchCoins = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-4gnqjEX2eVtmTgpdwgnS7ycH	",
        },
      };

      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        options
      )
        .then((response) => response.json())
        .then((response) => setAllCoins(response))
        .catch((err) => console.error(err));
    };

    fetchCoins();
  }, [currency]);

  const contextValue = {
    allCoins,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

// Add prop types validation
CoinContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CoinContextProvider;
