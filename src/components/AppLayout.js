import { Outlet } from "react-router-dom";

//Component imports
import Header from "./Header";
import Footer from "./Footer";

//style sheet imports
console.log("inside applayout");
export default function AppLayout() {
  return (
    <div className="p-1">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}