import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const MyButton = ({ href, label, showIcon = true, className, target }) => {
  return (
    <Link
      className={clsx(
        "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold text-slate-800 transition-transform ease-out hover:scale-105",
        className,
      )}
      href={href}
      target={target}
    >
      <span className="absolute inset-0 z-0 h-full translate-y-9 bg-green-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
      <span className="relative flex items-center justify-center gap-2">
        {label} {showIcon && <MdArrowOutward className="inline-block" />}
      </span>
    </Link>
  );
};

export default MyButton;
