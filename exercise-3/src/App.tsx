import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Promotion from "./routes/Home/Promotion";
import Registration from "./routes/Home/Registration";
import HomeBody from "./routes/Home/HomeBody";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="promotion" element={<Promotion />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}