import { useState } from "react";
import * as Toast from "@radix-ui/react-toast";
import { TfiClose } from "react-icons/tfi";
import { TbCircleCheck } from "react-icons/tb";
export default function Contact() {
  const [isToastOpen, setIsToastOpen] = useState(true);
  async function sendEmail(event) {
    const { name, email, subject, message } = event.target.elements;
    event.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        }),
      });
      setIsToastOpen(true);
      event.target.reset();
    } catch (e) {}
  }
  return (
    <section className="py-16 md:py-24 bg-gray-100 px-9" id="contact">
      <div className="relative max-w-6xl  mx-auto">
        {isToastOpen && (
          <EmailToast isOpen={isToastOpen} handleOpenChange={setIsToastOpen} />
        )}
        <div className="grid grid-cols-3 gap-12 ">
          <div className="col-span-3 text-center md:col-span-1 self-center">
            <h2 className="text-gray-700 text-4xl mb-2">Get in Touch</h2>
            <p className=" text-gray-700 text-lg">
              Feel free to contact me regarding any questions
            </p>
          </div>
          <form
            onSubmit={sendEmail}
            className="col-span-3 md:col-span-2 grid grid-cols-2 gap-6"
          >
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-1 ">
              <label className="text-grey-700 text-base mr-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full bg-gray-300 rounded-lg py-2.5 px-2"
                id="name"
                type="text"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col  gap-1">
              <label className="text-grey-700 text-base mr-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full bg-gray-300 rounded-lg py-2.5 px-2"
                id="email"
                type="email"
                required
              />
            </div>
            <div className="col-span-2 flex flex-col  gap-1">
              <label className="text-grey-700 text-base mr-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="w-full bg-gray-300 rounded-lg py-2.5 px-2"
                id="subject"
                type="text"
                required
              />
            </div>
            <div className="col-span-2 flex flex-col  gap-1">
              <label className="text-grey-700 text-base mr-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full bg-gray-300 rounded-lg py-2.5 px-2"
                rows={6}
                id="message"
                required
              ></textarea>
            </div>
            <div className=" col-span-2 flex justify-end">
              <button className=" px-10 text-bae  rounded-md text-white py-3 bg-light-emerald hover:bg-dark-emerald focus:bg-dark-emerald duration-200">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const EmailToast = ({ isOpen, handleOpenChange }) => {
  return (
    <Toast.Provider duration={500000} swipeDirection="left">
      <Toast.Root
        className="absolute  flex items-center h-10 left-1/2  -translate-x-1/2  w-3/4 -top-2  -translate-y-full  sm:w-auto  sm:left-0 sm:top-full sm:bottom-0 sm:translate-x-0 sm:translate-y-0  sm:h-12 px-4 py-2 border-l-[6px] border-l-light-emerald  bg-white shadow-md"
        open={isOpen}
        onOpenChange={handleOpenChange}
      >
        <Toast.Description className="flex items-center gap-4">
          <div className="text-light-emerald text-2xl sm:text-3xl  lg:text-4xl">
            <TbCircleCheck />
          </div>

          <p className="text-sm sm:text-base text-gray-700">
            Email has been sent successfully.
          </p>
        </Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
};
