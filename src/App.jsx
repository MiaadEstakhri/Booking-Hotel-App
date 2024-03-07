import { Toaster } from "react-hot-toast";
import { Header, LocationList } from "./components";
import "./App.css";

function App() {
  return (
    <main className="">
      <Toaster />
      <Header />
      <LocationList />
    </main>
  );
}

export default App;
