import React from "react";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-5 h-full">
      <div>
        <h1 className="text-2xl text-[rgb(48,65,88)]">Contact</h1>
      </div>
      <div className="flex flex-row space-x-2 ">
        <p>
          <EnvelopeIcon className="w-6 h-6" />
        </p>
        <p>
          <Link href="mailto:info@seaviewdevelopment.eu">
            info@seaviewdevelopment.eu
          </Link>
        </p>
      </div>
      <div className="flex flex-row space-x-2 ">
        <p>
          <MapPinIcon className="w-6 h-6" />
        </p>
        <p>Švábova 772/18, 152 00 Praha 5, Czech Republic</p>
      </div>
    </div>
  );
};

export default Contacts;
