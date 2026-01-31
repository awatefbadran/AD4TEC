"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  responsive?: boolean;
}

const Logo = ({ className = "", responsive = true }: LogoProps) => {
  return (
    <Link href="/">
      <div className={`flex items-center ${className}`}>
        <img
          src="/ad4tec-icon.png"
          alt="AD4TEC Icon"
          className="w-6 h-6 md:w-8 md:h-8"
        />

        <img
          src="/ad4tec-logo.png"
          alt="AD4TEC Logo"
          className={`${responsive ? "hidden md:block" : "block"} h-8 md:h-10 mx-2`}
        />
      </div>
    </Link>
  );
};

export default Logo;
