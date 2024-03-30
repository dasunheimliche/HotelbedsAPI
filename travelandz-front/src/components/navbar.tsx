import Logo from "./atoms/logo";
import NavLinks from "./navlinks";
import NavAuth from "./navauth";

export default function Navbar() {
  return (
    <nav className="h-16 w-full flex px-8 items-center justify-between bg-transparent text-zinc-50 fixed">
      <Logo />
      <NavLinks />
      <NavAuth />
    </nav>
  );
}
