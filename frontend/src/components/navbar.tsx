import { AppLogo } from "./logo";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-10">
      <div>
        <AppLogo />
      </div>
      <div className="flex items-center gap-4">
        <div>Home</div>
        <div>Categories</div>
        <div>About</div>
        <div>
          <Button type="button" variant="outline">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};
