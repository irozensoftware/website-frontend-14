"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export default function NavLink({ name, link }) {
  const pathName = usePathname();
  return (
    <Link href={link} className={`relative text-black-muted uppercase text-sm`}>
      <span
        className={`absolute inset-0   duration-300 ${
          link === pathName
            ? "border-primary-base border-b-2"
            : "hover:border-primary-base"
        }`}
      ></span>
      <span className="relative z-10">{name}</span>
    </Link>
  );
}
