import { HomeProvider } from "./src/contexts/HomeContext";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <HomeProvider>
      <Home/>
    </HomeProvider>
  );
}
