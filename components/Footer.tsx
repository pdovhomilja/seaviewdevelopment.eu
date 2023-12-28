import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex flex-row bg-black text-white h-20 text-xs text-muted-foreground items-center px-5">
      <div className="flex ml-auto ">
        <div className="space-x-2 pr-2">
          powered by Next.js{" "}
          <span className="bg-black rounded-md text-white px-1">14</span> hosted
          by:
          <span className="text-bold underline">
            <Link href="https://www.vercel.com">Vercel</Link>
          </span>
        </div>
        <div className="space-x-2">
          Supported by:
          <Link className="pl-1 font-bold" href="https://www.softbase.cz">
            SoftBase s.r.o.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
