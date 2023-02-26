import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="mx-auto">
      <div className="text-bold text-black p-5">
        <p>
          Sea View Development, a.s. působí na trhu od roku 2018. Jsme silnou
          developerskou skupinou, která realizuje výstavbu rezidenčních a
          komerčních center v Chorvatsku. Máme dlouholeté zkušenosti v
          poradenství a řízení investičních projektů. Se svými klienty –
          investičními partnery spolupracujeme jako dlouhodobý partner a to od
          počátečního procesu výstavby až po realizaci vlastního bydlení či
          pronájmu s cílem zajistit jim maximální spokojenost. Vybíráme takové
          developerské projekty, ve kterých uplatníme individuální přístup k
          požadavkům každého klienta. Nyní připravujeme developerský projekt v
          oblasti Sevid (Střední Dalmácie, Trogir Riviera). Tento projekt je
          ideální dlouhodobou investiční příležitostí do nemovitostí pro
          investory či investiční skupiny s možností okamžitého zhodnocení
          investice. Jedná se o výstavbu apartmánového komplexu, kde klient
          najde dostatek soukromí i prostor pro aktivní odpočinek, maximální
          komfort a bezpečí. Dvoupatrový apartmánový dům nabídne 14 nových
          apartmánů ve výjimečné a klidné lokalitě. Bude ideálním místem pro
          dlouhodobé či krátkodobé bydlení nebo jako dovolenkové sídlo se
          širokou nabídkou sportovního vyžití. Sevid je malé městečko ve střední
          Dalmácii. Je krásným, klidným a ideálním místem s čistým mořem, daleko
          od shonu města. V rámci vzájemné spolupráce Vám zprostředkujeme
          veškerou potřebnou dokumentaci, včetně právního servisu a výstavby na
          klíč. Investice do rezidenční nemovitosti právě této oblasti nabízí
          možnost užít si tradiční jadranský životní styl beze spěchu, s
          krásnými plážemi a zátokami, s více než 300 slunečnými dny v roce a
          volnočasovými aktivitami na pobřeží či na horách.
        </p>
      </div>
    </main>
  );
}
