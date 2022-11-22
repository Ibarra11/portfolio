import Head from "next/head";
import Image from "next/image";
import audiophile_img from "../../public/audiophile.png";

export default function Audiophile() {
  return (
    <div className="flex-1 pt-16 bg-gray-200">
      <Head>
        <title>Audiophile</title>
      </Head>

      <div className="max-w-4xl mx-auto pt-9">
        <div className="relative h-96 shadow-lg">
          <Image
            className="object-cover object-top rounded-lg"
            layout="fill"
            src={audiophile_img}
            alt="audiphile thumbnail"
          />
        </div>

        <section className="mb-8">
          <h1 className="text-5xl text-center my-9">Audiophile</h1>
          <p className=" text-lg">
            Audiophile is a fictional ecommerce site for headphones that is one
            of the challenges provided by Frontend Mentor. It does not have a
            backend, but it does keep track of the users purchases in the cart
            locally. It also features a full checkout system that is validated
            with Formik and Yup.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl mb-4">Built With</h2>
          <ul className="flex flex-wrap gap-2">
            <li className=" bg-gray-300 p-2 rounded-lg">React</li>
            <li className=" bg-gray-300 p-2 rounded-lg">TypeScript</li>
            <li className=" bg-gray-300 p-2 rounded-lg">React Router</li>
            <li className=" bg-gray-300 p-2 rounded-lg">Framer Motion</li>
            <li className=" bg-gray-300 p-2 rounded-lg">Styled Components</li>
            <li className=" bg-gray-300 p-2 rounded-lg">Cypress</li>
            <li className=" bg-gray-300 p-2 rounded-lg">
              Jest Testing Library
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl mb-6">What I Learned</h2>
          <div className="mb-4">
            <h3 className=" text-2xl mb-2">Framer Motion</h3>
            <p className="text-base">
              I learned how to use Framer Motion to animate page transitions and
              the modal. Framer motion makes it very easy to animate pages based
              on when they mount and unmount. Essentially, the initial state for
              the page begins offscreen to the left and transitions in the
              correct position on mount. Before the next page transitions it
              waits for the old page to transition to its exit state before
              begininning its enter state. For the modal, I just animated it
              coming in from afar giving the illusion that it is coming at you.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl mb-4">Context</h3>

            <p className="text-base">
              I utilized context for this project in order to prevent prop
              drilling. I had global state, the shopping cart, which some
              components needed to add/remove items. Instead of having to pass
              the state and the updater function through intermediary
              components, the components that needed the state or update
              function could just use it.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-2xl mb-4">Testing</h3>
            <p className="text-base">
              For testing, I used Cypress and Jest Testing Library. I used Jest
              Testing Library for unit testing, in this case it was the
              incrementing/decrementing items before you add them to the cart. I
              just tested that the user could not decrement to a number smaller
              to 1 and clicking the increment button increased the item amount
              by 1. For Cypress, I did more integration test on the checkout
              form and cart functionality. For the cart, I tried to simulate a
              process that a user would take and assert that the app reflected
              the correct state. For example, if a user adds an item to the
              cart, and then opens the cart, it should display the item the user
              just added.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
