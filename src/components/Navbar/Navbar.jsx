import Link from "next/link";
import ThemeButtonToggle from "../ThemeButton/ThemeButtonToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <p className="font-bold">ACME</p>

      <div>
        <Link href="/">Home</Link>
        <Link href="/tasks">Tasks</Link>
      </div>
      <div>
        <ThemeButtonToggle></ThemeButtonToggle>
      </div>
    </div>
  );
};

export default Navbar;
