import { Link } from "react-router-dom";

/* assets */
import Logo from "../assets/icons/Logo.svg";
import Button from "./Button";

/* icons */
import { CiTwitter } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { LuLinkedin } from "react-icons/lu";

function Footer() {
  return (
    <footer className="border-solid border-t-1 ">
      <div className="container py-[5rem] ">
        <div className="flex justify-between align-middle flex-col md:gap-5 md:flex-row">
          <div>
            <Link to="/">
              <img src={Logo} alt="Logo svg" className=" mb-4" />
            </Link>
            <p className="text-[var(--text-color)] text-[1.4rem] font-weight-[400] max-w-[384px]">
              Create, read, and inspire. Discover amazing stories written by
              talented creators from around the world.
            </p>
          </div>

          <ul className="gap-0.5rem flex flex-col">
            <h3 className="text-[var(--title-color)] text-[2.4rem] font-bold mb-4">
              Quick Links
            </h3>
            <li>
              <Link to="/">
                <Button BtnStyle="linkAltBtn">Home</Button>
              </Link>
            </li>
            <li className="my-2">
              <Link to="/posts">
                <Button BtnStyle="linkAltBtn">Posts</Button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <Button BtnStyle="linkAltBtn">Login</Button>
              </Link>
            </li>
          </ul>

          <div>
            <h3 className="text-[var(--title-color)] text-[2.4rem] font-bold mb-4">
              Connect
            </h3>

            <div className="flex gap-3">
              <Button BtnStyle="linkAltBtn">
                <CiTwitter className="text-[2.8rem]"></CiTwitter>
              </Button>
              <Button BtnStyle="linkAltBtn">
                <VscGithubAlt className="text-[2.8rem]"></VscGithubAlt>
              </Button>
              <Button BtnStyle="linkAltBtn">
                <LuLinkedin className="text-[2.8rem]"></LuLinkedin>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex justify-center border-t-1 ">
        <p className="text-[var(--text-color)] mt-[3.2rem]">
          © 2025 Blogify. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
