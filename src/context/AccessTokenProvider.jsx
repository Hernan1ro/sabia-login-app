import { useState, createContext } from "react";

const AccessTokenContext = createContext();

const AccessTokenProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [newUser, setNewUser] = useState("");
  return (
    <AccessTokenContext.Provider
      value={{
        token,
        setToken,
        newUser,
        setNewUser,
      }}
    >
      {children}
    </AccessTokenContext.Provider>
  );
};

export { AccessTokenProvider, AccessTokenContext };
