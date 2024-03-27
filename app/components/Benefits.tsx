import Image from "next/image";

import { Archivo_Black } from "next/font/google";

const archivoblack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export function Benefits() {
  return (
    <section className="flex flex-col justify-center items-center gap-16 py-24 px-8 bg-[#0E1011] text-white">
      <div className="flex justify-center items-center text-center">
        <h2
          className={`xs:text-4xl 2xs:text-3xl text-2xl ${archivoblack.className}`}
        >
          <span className="text-pink-500">Alcance um novo patamar</span> em suas
          redes sociais com publicações mais atraentes
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-[30em] text-justify">
            <p>
              Todo o conteúdo do <span className="font-bold">Design Canva</span>{" "}
              foi pensado e desenvolvido para você aprender a fazer artes
              bonitas e profissionais de um jeito rápido, simples e intuitivo.
            </p>
            <p>
              Em pouco tempo você será capaz de criar posts para suas redes
              sociais, vídeos e logomarcas extremamente profissionais mesmo que
              esteja começando agora.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="/warranty_icon.png"
                alt="warranty icon"
                width={66}
                height={66}
              />
              <div className="flex flex-col">
                <h3 className="font-bold text-xl">Garantia de 07 dias</h3>
                <p>Sem burocracia e sem complicação</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="/verified_icon.png"
                alt="verified icon"
                width={66}
                height={66}
              />
              <div className="flex flex-col">
                <h3 className="font-bold text-xl">Acesso imediato</h3>
                <p>Login e senha enviado na hora</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="/clapperboard_icon.png"
                alt="clapperboard icon"
                width={66}
                height={66}
              />
              <div className="flex flex-col">
                <h3 className="font-bold text-xl">Curso 100% online</h3>
                <p>Estude onde e quando quiser</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/benefits_section_image.png"
            alt="designs demonstrations"
            width={600}
            height={500}
          />
        </div>
      </div>
      <div>
        <a
          href="https://go.hotmart.com/F91841132U?ap=67bf"
          target="_blank"
          className="mt-8"
        >
          <button className="relative inline-flex xs:w-[25rem] w-[22rem] xs:h-[4.65rem] h-[4rem] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c875ff_0%,#e64093_50%,#c875ff_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-pink px-3 py-1 text-2xl font-bold text-gray-100 uppercase backdrop-blur-3xl">
              Comprar Agora
            </span>
          </button>
        </a>
      </div>
    </section>
  );
}
