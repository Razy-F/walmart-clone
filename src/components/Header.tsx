import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "@img/logo.png";
import {
  Grid2x2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

const Header = () => {
  return (
    <header className="flex bg-walmart md:flex-row items-center px-10 py-7 space-x-5 flex-col">
      <div className="flex space-x-5 w-full items-center">
        <Link href={"/"}>
          <Image src={logoImage} alt="logo" width={50} height={50} />
        </Link>
        <form
          action=""
          className="flex items-center bg-white rounded-full w-full flex-1"
        >
          <input
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
      </div>
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
          href={"/"}
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
