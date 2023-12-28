import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex w-full h-full items-center">
      <div className="text-bold text-black w-1/2 mx-auto">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          We are a strong development group that builds residential and
          commercial centers in Croatia.
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Sea View Development, a.s. has been operating in the market since
          2018. We are a strong development group that carries out the
          construction of residential and commercial centers in Croatia. We have
          long-term experience in consulting and managing investment projects.
          We work with our clients – investment partners as a long-term partner
          from the initial construction process to the realization of living or
          renting with the aim of ensuring their maximum satisfaction. We choose
          such development projects in which we apply an individual approach to
          the requirements of each client. We are now preparing a development
          project in the Sevid area (Central Dalmatia, Trogir Riviera). This
          project is an ideal long-term investment opportunity in real estate
          for investors or investment groups with the possibility of immediate
          appreciation of the investment. It is about the construction of an
          apartment complex, where the client will find enough privacy and space
          for active rest, maximum comfort and safety. The two-story apartment
          building will offer 14 new apartments in an exceptional and quiet
          location. It will be an ideal place for long-term or short-term living
          or as a holiday residence with a wide range of sports activities.
          Sevid is a small town in central Dalmatia. It is a beautiful, quiet
          and ideal place with clean sea, far from the hustle and bustle of the
          city. As part of mutual cooperation, we will provide you with all the
          necessary documentation, including legal services and turnkey
          construction. Investing in residential real estate in this area offers
          the opportunity to enjoy the traditional Adriatic lifestyle without
          haste, with beautiful beaches and bays, with more than 300 sunny days
          a year and leisure activities on the coast or in the mountains.
        </p>
      </div>
    </main>
  );
}
