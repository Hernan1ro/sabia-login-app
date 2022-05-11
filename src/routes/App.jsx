import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Page404 from "../pages/Page404";
import Main from "../pages/MainSection";
import useAccessToken from "../hooks/useAccessToken";

const App = () => {
  const { token } = useAccessToken();
  return (
    <BrowserRouter>
      <Routes>
        {!token && <Route path="/main" element={<Navigate to="/" />} />}
        {token && <Route path="/" element={<Navigate to="/main" />} />}
        {token && <Route path="/register" element={<Navigate to="/main" />} />}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
