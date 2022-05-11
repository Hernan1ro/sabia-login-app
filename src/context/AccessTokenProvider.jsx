import { useState, createContext } from "react";

const AccessTokenContext = createContext();

const AccessTokenProvider = ({ children }) => {
  const [token, setToken] = useState("");
  return (
    <AccessTokenContext.Provider value={{ token, setToken }}>
      {children}
    </AccessTokenContext.Provider>
  );
};

export { AccessTokenProvider, AccessTokenContext };
