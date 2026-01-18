import { Link } from "react-router-dom";

/* assets */
import Logo from "../assets/icons/logo.svg";

/* components */
import Btn from "./Btn";

function NavBar() {
  return (
    <nav className="py-4.5 bg-[#ffffff]">
      <div className="container flex align-middle justify-between">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <ul className="flex items-center gap-9 text-(--titl-color) text-[14px] font-bold ">
          <li>
            {" "}
            <Link to="/"> Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/posts"> Posts</Link>
          </li>
          <li>
            {" "}
            <Link to="/login">
              <Btn children={"Login"} style={"main_btn"}></Btn>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
