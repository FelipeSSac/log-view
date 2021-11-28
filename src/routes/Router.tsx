import { Route, Routes } from "react-router";

import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";

export default function Router(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  )
}