import Image from "next/image";
import data from "../data.json";

function LinkCard({
  href,
  title,
  image
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center w-full p-2 rounded-md hover:scale-105 transition-all duration-300 border border-gray-300 mt-2 mb-3 md:w-[75%] lg:w-[60%] bg-gray-50 hover:bg-[#8c9ddf]"
    >
      <div className="flex items-center w-full">
      {image && <Image
        src={image}
        className="rounded-sm"
        width={50}
        height={50}
        alt={title}
      />}
        <h2 className="flex justify-center font-semibold w-full">{title}</h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full mt-16 justify-center px-8">
      <Image
        src={data.avatar}
        className="rounded-full"
        width={96}
        height={96}
        alt={data.name}
      />
      <h1 className="font-bold mt-4 text-xl">{data.name}</h1>

      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      {data.socials.map((social)=> (
        <LinkCard key={social.href} {...social} />
      ))}
    </div>
  );
}
