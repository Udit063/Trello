import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={30}
          height={30}
        />
        <p className="text-lg text-neutral-700 ">Taskflow</p>
      </div>
    </Link>
  );
};
