import Head from "next/head";
import Image from "next/image";
import moviespot_img from "../../public/moviespot.png";
import useSearch_snippet from "../../public/useSearch_snippet.png";
export default function MovieSpot() {
  return (
    <div className="flex-1 pt-16 bg-gray-800">
      <Head>
        <title>MovieSpot</title>
      </Head>

      <div className="max-w-4xl mx-auto pt-9">
        <div className="relative h-96 shadow-lg">
          <Image
            className="object-cover rounded-lg"
            layout="fill"
            src={moviespot_img}
            alt="moviespot thumbnail"
          />
        </div>
        <section className="mb-8 text-gray-800">
          <h1 className="text-5xl text-center my-9">MovieSpot</h1>
          <p className="text-l">
            MovieSpot is one of the challenges provided by Frontend Mentor. It
            is a entertainment web app showcasing the most popular movies and tv
            shows. In order to use the application users have to signup or
            login. Once they have been authenticated they can proceed to view
            and bookmark their favorite movies and tv shows for future
            reference.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl mb-4">Built With</h2>
          <ul className="flex flex-wrap gap-2">
            <li className=" bg-gray-300 p-2 rounded-lg">React</li>
            <li className=" bg-gray-300 p-2 rounded-lg">TypeScript</li>
            <li className=" bg-gray-300 p-2 rounded-lg">Next.js</li>
            <li className=" bg-gray-300 p-2 rounded-lg">TailwindCSS</li>
            <li className=" bg-gray-300 p-2 rounded-lg">Prisma</li>
            <li className=" bg-gray-300 p-2 rounded-lg">GraphQL</li>
            <li className=" bg-gray-300 p-2 rounded-lg">Cypress</li>
            <li className=" bg-gray-300 p-2 rounded-lg">
              Jest Testing Library
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl mb-6">What I Learned</h2>
          <div className="mb-4 ">
            <h3 className="text-2xl mb-3">Deployment</h3>

            <p className="text-base">
              I had issues dealing with different environments when the app went
              in production. In development, I was using a development
              environment variable as a base URL for my API calls. When the app
              was in production and made API calls it was using the development
              environment variable, which would result in the API call failing.
              To resolve this, I just determined whether or not the app was
              running in production or development and set a variable to it and
              the API calls would use this variable as the base to the api call.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl mb-3">Proudction Build</h3>

            <p className="text-base">
              I had issues dealing with different environments when the app went
              in production. In development, I was using a development
              environment variable as a base URL for my API calls. When the app
              was in production and made API calls it was using the development
              environment variable, which would result in the API call failing.
              To resolve this, I just determined whether or not the app was
              running in production or development and set a variable to it and
              the API calls would use this variable as the base to the api call.
            </p>
          </div>

          <div className="mb-4 ">
            <h3 className="text-2xl mb-3">Type Safety</h3>
            <p className="text-base mb-4">
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
          <div className="mb-4 ">
            <h3 className="text-2xl mb-3">Password Management</h3>

            <p className="text-base">
              For my authentication, I decided to use Bcrypt and Iron-Session.
              The role of Bcrypt was to hash the passwords for the login and
              signup form. Once I verified that either they are a user or they
              have successfully signed up, I then create a session for the user
              using Iron-Session. This means that the user no longer has to sign
              in as long as their session is valid.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl mb-3">Protected Routes</h3>

            <p className="text-base">
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
    </div>
  );
}
