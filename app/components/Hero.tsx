import Image from "next/image";
import { Boxes } from "./ui/background-boxes";

import { Archivo_Black } from "next/font/google";

const archivoblack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export function Hero() {
  return (
    <section className="flex flex-col bg-slate-950 justify-center items-center py-24 px-8 dark z-20 overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes className="hero-section" />
      <div
        className={`flex flex-col max-w-[48rem] px-4 gap-6 justify-center items-center text-center z-20 text-white ${archivoblack.className}`}
      >
        <div>
          <h1 className="xs:text-6xl 2xs:text-4xl text-3xl font-black uppercase">
            Aprenda a criar <span className="text-pink-500">Posts</span>{" "}
            Profissionais
          </h1>
        </div>
        <div>
          <p className="xs:text-xl 2xs:text-lg xs:max-w-[31em] 2xs:max-w-[28rem] font-sans">
            Descubra como se destacar da concorrência criando posts, logos e
            templates de forma descomplicada e prática, mesmo sem ter
            experiência com design.
          </p>
        </div>
        <div>
          <iframe
            src="https://www.youtube.com/embed/PBU4btJ0Wag"
            allowFullScreen
            className="rounded-xl md:w-[48rem] md:h-[28rem] xs:w-[35rem] xs:h-[20rem] 2xs:w-[25rem] 2xs:h-[12rem] w-[20rem] h-[12rem]"
          ></iframe>
        </div>
        <div className="select-none pointer-events-none">
          <Image src="/payments.png" width={483} height={25} alt="supported payments"></Image>
        </div>
      </div>
    </section>
  );
}
