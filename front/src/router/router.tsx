import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cats } from "../pages/cats";
import { Clients } from "../pages/clients";
import { Dogs } from "../pages/dogs";
import { Login } from "../pages/login";
import { Menu } from "../pages/menu";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  );
}
