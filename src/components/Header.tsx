"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FormEvent } from "react";
import logoImage from "@img/logo.png";
import {
  Grid2x2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.search.value;
    router.push(`/search?q=${input}`);
    console.log(input);
  };
  return (
    <header className="flex bg-walmart md:flex-row items-center px-10 py-7 space-x-5 flex-col">
      <Link href={"/"} className="mb-5 md:mb-0">
        <Image src={logoImage} alt="logo" width={50} height={50} />
      </Link>
      <form
        action=""
        className="flex items-center bg-white rounded-full w-full flex-1 text-black"
        onSubmit={handleSubmit}
      >
        <input
          name="search"
          type="text"
          placeholder="Search Everything..."
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-xs"
        />
        <button
          type="submit"
          className="rounded-full size-10 px-2 bg-yellow-400 cursor-pointer"
        >
          <Search className="rounded-full h-10" />
        </button>
      </form>

      <div className="flex space-x-5 mt-5 md:mt-0">
        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2x2 size={20} />
          <p>Departments</p>
        </Link>

        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>
        <Link
          href={"/"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Heart size={20} />
          <div>
            <p className="text-xs font-extralight">Reorder</p>
            <p>My Items</p>
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign In</p>
            <p>Account</p>
          </div>
        </Link>
        <Link
          href={"/basket"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <ShoppingCart size={20} />
          <div>
            <p className="text-xs font-extralight">No Items</p>
            <p>$0.00</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
