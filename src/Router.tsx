import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Index";

export default function Router() {
  return (
    <Routes>
      <Route path="/header" element={<Header />}></Route>
    </Routes>
  );
}
