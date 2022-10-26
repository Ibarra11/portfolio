import Head from "next/head";
import Image from "next/image";
import moviespot_img from "../../public/moviespot.png";
import useSearch_snippet from "../../public/useSearch_snippet.png";
export default function DetailedProject() {
  return (
    <div className="flex-1 pt-16 bg-slate-50">
      <Head>
        <title>Audiophile</title>
      </Head>

      <div className=" max-w-6xl mx-auto">
        <h1 className="text-6xl text-center mb-9 text-light-emerald ">
          Audiophile
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
              <h3 className=" text-2xl">Framer Motion</h3>
              <p>
                I learned how to use Framer Motion to animate page transitions
                and the modal. Framer motion makes it very easy to animate pages
                based on when they mount and unmount. Essentially, the initial
                state for the page begins offscreen to the left and transitions
                in the correct position on mount. Before the next page
                transitions it waits for the old page to transition to its exit
                state before begininning its enter state. For the modal, I just
                animated it coming in from afar giving the illusion that it is
                coming at you.
              </p>
              <div>
                <h3>Context</h3>

                <p>
                  I utilized context for this project in order to prevent prop
                  drilling. I had global state, the shopping cart, which some
                  components needed to add/remove items. Instead of having to
                  pass the state and the updater function through intermediary
                  components, the components that needed the state or update
                  function could just use it.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl">Testing</h3>
              <p>
                For testing, I used Cypress and Jest Testing Library. I used
                Jest Testing Library for unit testing, in this case it was the
                incrementing/decrementing items before you add them to the cart.
                I just tested that the user could not decrement to a number
                smaller to 1 and clicking the increment button increased the
                item amount by 1. For Cypress, I did more integration test on
                the checkout form and cart functionality. For the cart, I tried
                to simulate a process that a user would take and assert that the
                app reflected the correct state. For example, if a user adds an
                item to the cart, and then opens the cart, it should display the
                item I just added.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
