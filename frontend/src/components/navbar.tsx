"use client";

import { navbarLinks } from "@/constants/navbar-links";
import { AppLogo } from "./logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getAppsPath } from "@/lib/config";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const router = useRouter();
  const pathName = usePathname();

  const { loginPath, registerPath } = getAppsPath();

  if (pathName !== loginPath && pathName !== registerPath) {
    return (
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-dark sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <AppLogo size="xs" mode={darkMode ? "dark" : "light"} />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {navbarLinks.map((link) => {
            return (
              <Link
                key={link.id}
                className="text-sm font-medium hover:text-red-300 ease-in-out duration-150"
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <Button className="ml-4" variant="outline" onClick={toggleDarkMode}>
          {darkMode ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
          <span className="sr-only">
            {darkMode ? "Switch to light mode" : "Switch to dark mode"}
          </span>
        </Button>
        <Button
          className="ml-4"
          variant="outline"
          onClick={() => router.push(loginPath)}
        >
          Sign In
        </Button>
      </header>
    );
  }
};
