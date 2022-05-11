import { useContext } from "react";
import { AccessTokenContext } from "../context/AccessTokenProvider";

const useAccessToken = () => {
  return useContext(AccessTokenContext);
};

export default useAccessToken;
