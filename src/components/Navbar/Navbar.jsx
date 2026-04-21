import Link from "next/link";
import ThemeButton from "../ThemeButton/ThemeButton";


const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <p className="font-bold">ACME</p>

      <div>
        <Link href="/">Home</Link>
        <Link href="/tasks">Tasks</Link>
      </div>
      <div>
        <ThemeButton></ThemeButton>
      </div>
    </div>
  );
};

export default Navbar;
