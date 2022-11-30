import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiGlobe } from "react-icons/fi";

export default function WhereInTheWorld() {
  return (
    <div className="flex-1 pt-16 pb-8 px-9 =bg-gray-200">
      <Head>
        <title>Where in the world?</title>
      </Head>

      <div className="max-w-4xl mx-auto pt-9">
        <div className="relative h-96 shadow-lg">
          <Image
            className="object-cover object-top rounded-lg"
            layout="fill"
            src="/where-in-the-world.png"
            alt="where in the world website screenshot"
          />
        </div>
        <section className="mb-8 text-gray-800">
          <div className="relative">
            <h1 className="text-5xl text-center mb-14 mt-9 sm:mb-9">
              Where in the world?
            </h1>
            <div className="absolute flex items-center top-full left-1/2 -translate-x-1/2  sm:left-auto sm:h-full sm:top-0 sm:bottom-auto sm:translate-y-0 sm:translate-x-0  sm:right-0">
              <Link href="https://rest-countries-hgak.vercel.app/">
                <a className="flex ml-auto items-center  px-4 h-12 duration-200 hover:text-light-emerald focus:text-light-emerald">
                  <FiGlobe size={20} />
                </a>
              </Link>
              <Link href="https://github.com/Ibarra11/Rest_Countries">
                <a className="flex items-center  px-4 h-12 duration-200 hover:text-light-emerald focus:text-light-emerald">
                  <FiGithub size={20} />
                </a>
              </Link>
            </div>
          </div>
          <p className="text-lg">
            A web application that uses the REST countries API. The goal of the
            app was to utilize the new Next.js 13 features like server
            components and the new app directory;
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl mb-4">Built With</h2>
          <ul className="flex flex-wrap gap-2">
            <li className=" bg-gray-300 p-2 rounded-lg">React</li>
            <li className=" bg-gray-300 p-2 rounded-lg">TypeScript</li>
            <li className=" bg-gray-300 p-2 rounded-lg">Next.js</li>
            <li className=" bg-gray-300 p-2 rounded-lg">TailwindCSS</li>
            <li className=" bg-gray-300 p-2 rounded-lg">SWR</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl mb-6">What I Learned</h2>
          <div className="mb-4 ">
            <h3 className="text-2xl mb-3">Server Components</h3>

            <p className="text-base mb-4">
              My first thought when I was building this app was that I was going
              to mostly use server components. However, I soon realized that if
              the component needs to be interactive, then it can&apos;t be used
              as a server component. For example, on the / page a grid of all
              the countries is displayed. I wanted to use a server component for
              this grid of countries, but I had to have a way of filtering this
              grid based either on search input or select input. And, the grid
              also had pagination in the form of a load more button. As a
              result, I made the grid a client component, which now can have
              state and be interactive.
            </p>
            <p className="text-base">
              I was able to use server components on the individual countries
              detail page. With the new Next.js api folder the getStaticPaths
              and getStaticParams API&apos;s are removed. Instead they provide a
              different API called generateStaticParams, which basically
              provides the list of pages that Next.js will statically generate.
              On the page itself, I use fetch to make an api call with the
              params passed from generateStaticParams directly in the component.
              From my understanding, the component is completely rendered on the
              server and there is no hydration step on the client.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl mb-3">Dark Mode</h3>

            <p className="text-base mb-4">
              I was able to implement dark mode, but there was a flash of the
              wrong colors depending on the users preference or what they had
              chosen on the app. For instance, if the users has a dark
              preference on their operating system the app what show the light
              mode first then the dark mode. The issue was that the page is
              server rendered, so you don&apos;t have the ability to see what
              the user prefers or check local storage. The way that I trigger
              dark mode is by adding a class of dark to the root HTML element.
              When the page is first rendered the root HTML element does not
              have a class of dark , which results in the light mode being
              applied, and then I check the users preference in useEffect and if
              it is dark I add a class of dark to the root HTML element. This
              way of adding dark mode is not the best user experience because
              they see a flash of content changing.
            </p>
            <p className="text-base">
              Upon looking through the internet for possible solutions to this
              issue I found an article by Josh Comeau called{" "}
              <Link href="https://www.joshwcomeau.com/react/dark-mode/">
                <a className=" border-b-2 border-dark-emerald ">
                  The Quest for the Perfect Dark Mode.{" "}
                </a>
              </Link>
              In his article, he was able to solve this issue by adding a script
              before the app renders. The script is blocking meaning that the
              app wont render until the script is done executing and the script
              executes at runtime. Within the script, we can access local
              storage and users operating system preference because it&apos;
              running at runtime and can set the app in the correct state before
              it first renders. In his solution, he uses CSS variables, but for
              mine I just had to add a class of dark to the root HTML element.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
