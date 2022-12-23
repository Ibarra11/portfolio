import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiGlobe } from "react-icons/fi";
import MOVIESPOT_IMG from "../../public/moviespot.png";
import useSearch_snippet from "../../public/useSearch_snippet.png";
export default function MovieSpot() {
  return (
    <article className="flex-1 pt-16 pb-8 px-9 bg-slate-800">
      <Head>
        <title>MovieSpot</title>
      </Head>
      <div className="max-w-4xl mx-auto pt-9">
        <div className="relative h-96 shadow-lg">
          <Image
            className="object-cover object-top rounded-lg"
            layout="fill"
            src={MOVIESPOT_IMG}
            alt="moviespot thumbnail"
          />
        </div>
        <section className="mb-8 ">
          <div className="relative">
            <h1 className="text-5xl text-gray-100 text-center mb-14 mt-9 sm:mb-9">
              MovieSpot
            </h1>
            <div className="absolute text-gray-300 flex items-center top-full left-1/2 -translate-x-1/2 sm:left-auto sm:h-full sm:top-0 sm:bottom-auto sm:translate-y-0 sm:translate-x-0  sm:right-0">
              <Link
                aria-label="Moviespot website"
                className={clsx(
                  "flex ml-auto items-center  px-4 h-12 duration-200 outline-none",
                  "hover:text-light-emerald",
                  "focus:text-light-emerald focus:ring-light-emerald focus:ring-4"
                )}
                href="https://flix-ibarra11.vercel.app/"
                target="_blank"
              >
                <FiGlobe size={20} />
              </Link>
              <Link
                aria-label="Github repository for moviesport"
                className={clsx(
                  "flex ml-auto items-center  px-4 h-12 duration-200 outline-none",
                  "hover:text-light-emerald",
                  "focus:text-light-emerald focus:ring-light-emerald focus:ring-4"
                )}
                href="https://github.com/Ibarra11/Movie_App"
                target="_blank"
              >
                <FiGithub size={20} />
              </Link>
            </div>
          </div>
          <p className="text-lg text-gray-300">
            MovieSpot is an entertainment web application that showcases the
            most popular movies and TV series. It includes a login/signup form
            where users need to provide credentials to authenicate themselves.
            Once they have been authenticated they can browse the various movies
            and TV series. If any movies or TV series spark their interest they
            can bookmark them for future reference.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl text-gray-100 mb-4">Built With</h2>
          <ul className="flex flex-wrap gap-2">
            <li className=" bg-slate-900 text-gray-300 p-2 rounded-lg">
              React
            </li>
            <li className=" bg-slate-900 text-gray-300 p-2 rounded-lg">
              TypeScript
            </li>
            <li className=" bg-slate-900 text-gray-300 p-2 rounded-lg">
              Next.js
            </li>
            <li className=" bg-slate-900 text-gray-300 p-2 rounded-lg">
              TailwindCSS
            </li>
            <li className=" bg-slate-900 text-gray-300 p-2 rounded-lg">
              Prisma
            </li>
            <li className=" bg-slate-900 text-gray-300 p-2 rounded-lg">
              GraphQL
            </li>
            <li className=" bg-slate-900 text-gray-300 p-2 rounded-lg">
              Cypress
            </li>
            <li className=" bg-slate-900 text-gray-300 p-2 rounded-lg">
              Jest Testing Library
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl text-gray-100 mb-6">What I Learned</h2>
          <div className="mb-4">
            <h3 className="text-xl text-gray-100 mb-3">Deployment</h3>
            <p className="text-base text-gray-300 mb-2">
              I had issues dealing with different environments when the app went
              in production. In development, I was using a development
              environment variable as a base URL for my API calls. When the app
              was in production and made API calls it was using the development
              environment variable, which would result in the API call failing.
              To resolve this, I just determined whether or not the app was
              running in production or development and set a variable to it and
              the API calls would use this variable as the base to the api call.
            </p>
            <p className="text-gray-300">
              I also ran into issues during the static generation of my pages
              because in the _app page I was making an API call to an endpoint
              to determine whether or not the user had a valid session. During
              static generation the server is not up yet so you can&apos;t make
              API calls during this time. To workaround this, I used a state
              variable to track whether the component was mounted or not. This
              just bypassed the static generation constraints, which might not
              be the best approach.
            </p>
          </div>

          <div className="mb-4 ">
            <h3 className="text-xl text-gray-100 mb-3">Type Safety</h3>
            <p className="text-base text-gray-300 mb-4">
              To bridge the gap between the backend and the frontend I used
              codegen to generate types for my GraphQL queries and mutations.
              The only thing that I didn&apos;t like about it was that I had to
              manually run codegen after I made a changes to the API. I also
              used TypeScript throughout the project and even made some hooks
              with TypeScript. For Example, this useSearch hook takes in an
              array of objects and returns a new array of objects that match the
              filter string based on a property of the object. In this case, the
              objects are movies and I return a new array of movies based on the
              searchValue. With generics I can ensure that whenever I use the
              hook the filterBy key has to be one of the properties of the
              objects in the array.
            </p>

            <Image
              src={useSearch_snippet}
              className="h-20 object-cover"
              alt="typescript code snippet"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-xl text-gray-100 mb-3">Password Management</h3>

            <p className="text-base text-gray-300">
              For my authentication, I decided to use Bcrypt and Iron-Session.
              The role of Bcrypt was to hash the passwords for the login and
              signup form. Once I verified that either they are a user or they
              have successfully signed up, I then create a session for the user
              using Iron-Session. This means that the user no longer has to sign
              in as long as their session is valid.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl text-gray-100 mb-3">Protected Routes</h3>

            <p className="text-base text-gray-300">
              There are some routes in that app that should only be seen by
              users. For Example, routes /, /movies, /tv-series, and
              /bookmarked. In order to protect these routes, I check the session
              when the user visits one of these pages and if there is no session
              they get redirected to the login page. I am checking the session
              client side, which means there is a little flash of content that
              is shown to unaunthenticated users.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
