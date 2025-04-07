// App.tsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import BackButton from "./back";

function App() {
  return (
    <div>
      <Header />
      <BackButton />
      <Outlet />
    </div>
  );
}

export default App;
