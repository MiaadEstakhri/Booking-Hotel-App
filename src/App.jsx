import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { AppLayout, Header, LocationList } from "./components";
import "./App.css";

function App() {
  return (
    <main className="mx-5">
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<LocationList />} />
        <Route path="/hotels" element={<AppLayout />}></Route>
      </Routes>
    </main>
  );
}

export default App;
