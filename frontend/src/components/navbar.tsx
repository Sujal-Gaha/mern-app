"use client";

import { navbarLinks } from "@/constants/navbar-links";
import { AppLogo } from "./logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAppsPath } from "@/lib/config";

export const Navbar = () => {
  const router = useRouter();

  const { loginPath } = getAppsPath();

  return (
    <nav className="flex items-center justify-between py-2 px-10">
      <div>
        <AppLogo size="md" />
      </div>
      <div className="flex items-center gap-10">
        {navbarLinks.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.href}
              className="font-medium hover:text-red-500"
            >
              {link.name}
            </Link>
          );
        })}
        <div>
          <Button
            type="button"
            variant="outline"
            className="font-medium hover:text-red-500"
            onClick={() => router.push(loginPath)}
          >
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};
