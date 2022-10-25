import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import moviespot_img from "../../public/moviespot.png";
export default function DetailedProject() {
  const router = useRouter();
  const { title } = router.query;

  return (
    <div className="flex-1 pt-16   bg-slate-900">
      <Head>
        <title>{title}</title>
      </Head>

      <div className=" max-w-6xl mx-auto">
        <h1 className="text-6xl text-center mb-9 text-light-emerald ">
          {title && title[0].toUpperCase() + title.slice(1)}
        </h1>
        <div className="grid grid-cols-3 gap-6 border-2 border-red-500">
          <div className="col-span-2">
            <div className="relative h-96">
              <Image
                className="object-cover"
                layout="fill"
                src={moviespot_img}
                alt="moviespot thumbnail"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between col-span-1 row-span-1">
            <div className="border-2 border-black">
              <ul className="flex gap-8 ">
                <li>Website</li>
                <li>Github</li>
              </ul>
            </div>
            <div className="border-2 border-black">
              <ul className=" flex gap-2 flex-wrap">
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
                <li>GraphQL</li>
                <li>Prisma</li>
                <li>Prisma</li>
              </ul>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className=" text-3xl">Overview</h2>
            <p className=" text-lg">MovieSpot is a web application that f</p>
          </div>
          <div className="col-span-2">
            <h2 className="text-3xl">What I Learned</h2>
            <ul>
              <li>
                <h3 className=" text-2xl">Authentication</h3>
                <p></p>
              </li>
              <li>
                <h3 className=" text-2xl">Accessibility</h3>
                <p></p>
              </li>
              <li>
                <h3 className=" text-2xl">Type Safety</h3>
                <p></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
