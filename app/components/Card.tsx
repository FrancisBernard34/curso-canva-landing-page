import Image from "next/image"

interface CardProps {
  icon: string,
  title: string,
  description: string
}

export function Card({ icon, title, description }: CardProps) {
  return (
    <div className="flex flex-col gap-8 justify-center items-center border-4 bg-[#0E1011] border-pink-500 text-white rounded-xl border-l-0 border-r-0 p-8">
      <Image src={icon} width={66} height={66} alt={title} />
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="max-w-[18em] text-left">{description}</p>
    </div>
  )
}