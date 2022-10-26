import Head from "next/head";
import Image from "next/image";
import moviespot_img from "../../public/moviespot.png";
import useSearch_snippet from "../../public/useSearch_snippet.png";
export default function DetailedProject() {
  const router = useRouter();
  const { title } = router.query;

  return (
    <div className="flex-1 pt-16 bg-slate-50">
      <Head>
        <title>MovieSpot</title>
      </Head>

      <div className=" max-w-6xl mx-auto">
        <h1 className="text-6xl text-center mb-9 text-light-emerald ">
          MovieSpot
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

          <section className="col-span-2">
            <h2 className="text-3xl">What I Learned</h2>
            <div>
              <h3 className=" text-2xl">Deployment</h3>
              <div>
                <h4>Development/Production Environment</h4>
                <p>
                  I had issues dealing with different environments when the app
                  went in production. In development, I was using a development
                  environment variable as a base URL for my API calls. When the
                  app was in production and made API calls it was using the
                  development environment variable, which would result in the
                  API call failing. To resolve this, I just determined whether
                  or not the app was running in production or development and
                  set a variable to it and the API calls would use this variable
                  as their base.
                </p>
              </div>
              <div>
                <h4>Production Build</h4>

                <p>
                  During the production build I ran into some issues because in
                  the _app page I was making an API call to an endpoint to
                  determine whether or not the user had a valid session. During
                  static generation the server is not up yet so you can&apos;t
                  make API calls during this time. To workaround this, I used a
                  state variable to track whether the component was mounted or
                  not. Because once its mounted that means that the server is
                  running, so I can safely make API calls. This just bypassed
                  the static generation constraints, which might not be the best
                  approach. Alternatively, what I could of done is check the
                  session on the page level with getServerSideProps, but I
                  decided to check the session on the _app because I would only
                  have to check in one place and with getServerSideProps I would
                  have to check it in each page.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl">Type Safety</h3>
              <p>
                To bridge the gap between the backend and the frontend I used
                codegen to generate types for my GraphQL queries and mutations.
                I also used TypeScript throughout the project and even made some
                hooks with TypeScript. For Example, this useSearch hook takes in
                an array of objects and returns a new array of objects that
                match the filter string based on a property of the object. In
                this case, the objects are movies and I return a new array of
                movies based on the searchValue. With generics I can ensure that
                whenever I use the hook the filterBy key has to be one of the
                properties of the objects in the array.
              </p>

              <Image
                src={useSearch_snippet}
                className="h-20 object-cover"
                alt="typescript code snippet"
              />
            </div>
            <div>
              <h3>Authentication</h3>
              <div>
                <h4>Password Management</h4>
                <p>
                  For my authentication, I decided to use Bcrypt and
                  Iron-Session. The role of Bcrypt was to hash the passwords for
                  the login and signup form. Once I verified that either they
                  are a user or they have successfully signed up, I then create
                  a session for the user using Iron-Session. This means that the
                  user no longer has to sign in as long as their session is
                  valid.
                </p>
              </div>
              <div>
                <h4>Protected Routes</h4>
                <p>
                  There are some routes in that app that should only be seen by
                  users. For Example, routes /, /movies, /tv-series, and
                  /bookmarked. In order to protect these routes, I check the
                  session when the user visits one of these pages and if there
                  is no session they get redirected to the login page. I am
                  checking the session client side, which means there is a
                  little flash of content that is shown to unaunthenticated
                  users.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
