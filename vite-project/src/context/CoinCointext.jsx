import { createContext } from "react";
import PropTypes from "prop-types";

export const CoinContext = createContext;

const CoinContextProvider = (props) => {
  const contextValue = {};
  return (
    <CoinContext.provider value={contextValue}>
      {props.children}
    </CoinContext.provider>
  );
};

// Add prop types validation
CoinContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CoinContextProvider;
