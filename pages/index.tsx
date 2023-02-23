import Image from "next/image";

export default function Home() {
  const dataImage =
    "http://projects.websetters.in/digg-seos/digg/wp-content/themes/twentytwenty-child-theme/img/demo-prof.jpg";

  return (
    <div className="flex flex-col items-center w- mt-8">
      <Image
        src={dataImage}
        className="rounded-full"
        width={96}
        height={96}
        alt=""
      />
      <h1 className="font-bold mt-4 text-xl">Username</h1>
    </div>
  );
}

function LinkedCard({ href , title, description }) {
  return (
    <a href={href}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </a>
  );
}
