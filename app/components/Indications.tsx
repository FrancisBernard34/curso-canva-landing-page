import { Card } from "./Card";

import { Archivo_Black } from "next/font/google";

const archivoblack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export function Indications() {
  return (
    <section className="flex flex-col justify-center items-center bg-[#141819] text-white py-24 px-8 gap-10">
      <h2
        className={`text-4xl max-w-[20em] text-center ${archivoblack.className}`}
      >
        Para quem indicamos nosso Curso{" "}
        <span className="text-pink-500">Design Canva</span>?
      </h2>
      <p className="text-[#abb0b6] text-lg text-center">
        Tudo o que você precisa para criar artes profissionais
      </p>
      <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
        <Card
          icon="/business_owners.png"
          title="Donos de Negócio"
          description="Para você que possui seu próprio negócio e deseja fazer suas publicações sem gastar rios de dinheiro com um designer."
        />
        <Card
          icon="/liberal_professionals.png"
          title="Profissionais liberais"
          description="Advogados, dentistas, psicólogos, manicures, nutricionistas, etc. que desejam ter uma imagem única e irresistível na internet."
        />
        <Card
          icon="/content_creators.png"
          title="Criadores de conteúdo"
          description="Pessoas que desejam transformar suas redes sociais em um negócio de sucesso e aumentar a qualidade de suas postagens."
        />
      </div>
      <a href="https://go.hotmart.com/F91841132U?ap=67bf" target="_blank" className="mt-8">
        <button className="relative inline-flex xs:w-[25rem] w-[22rem] xs:h-[4.65rem] h-[4rem] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#e64093_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-2xl font-bold text-white backdrop-blur-3xl">
            Comprar Agora
          </span>
        </button>
      </a>
    </section>
  );
}
