import clsx from "clsx";
import React from "react";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FOOTER } from "@/utils/data";

export default async function Footer() {
  const data = FOOTER;

  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-green-400"
          >
            {data.full_name}
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            © {new Date().getFullYear()} {data.full_name}
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            {data.nav_item.map(({ label, uid }, index) => (
              <React.Fragment key={label}>
                <li>
                  <Link
                    className={clsx(
                      "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-green-400",
                    )}
                    href={uid}
                  >
                    {label}
                  </Link>
                </li>
                {index < data.nav_item.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] text-slate-400"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className="socials inline-flex justify-center sm:justify-end">
          <Link
            href={data.github_link}
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-green-400"
            aria-label={data.name + " on GitHub"}
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            href={data.linkedin_link}
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-green-400"
            aria-label={data.name + " on LinkedIn"}
            target="_blank"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </Bounded>
  );
}
