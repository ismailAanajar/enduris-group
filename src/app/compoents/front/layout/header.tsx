import React from "react";
import logo from "@/public/assets/logo.webp";
import Link from "next/link";
import Image from "next/image";
function Header() {
  return (
    <header className="container flex justify-between items-center">
      <Link href={"/"}>
        <Image
          src={logo}
          alt="enduris group logo"
          className="max-h-[75px] w-auto"
        />
      </Link>
      <nav>
        <ul className="flex gap-5">
          <li>
            <Link href={"/"} className="text-white">
              Accueil
            </Link>
          </li>
          <li className="text-white">
            <Link href={"qui_somme_nous"}>Qui somme-nous</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
