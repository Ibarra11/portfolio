export default function Contact() {
  async function sendEmail(event) {
    const { name, email, subject, message } = event.target.elements;
    event.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      }),
    });
  }
  return (
    <section className="py-16 md:py-24 bg-gray-10 px-9" id="contact">
      <div className="relative max-w-6xl  mx-auto">
        <div className="grid grid-cols-3 gap-12 ">
          <div className="col-span-3 text-center md:col-span-1 self-center">
            <h2 className="text-gray-700 text-4xl mb-2">Get in Touch</h2>
            <p className=" text-gray-700 text-lg">
              {" "}
              Feel free to contact me regarding any questions
            </p>
          </div>
          <form
            onSubmit={sendEmail}
            className="border-2 border-gren-400 col-span-3 md:col-span-2 grid grid-cols-2 gap-6"
          >
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-1 ">
              <label className="text-grey-700 text-base mr-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full bg-gray-300 rounded-lg py-2.5 px-1"
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
                className="w-full bg-gray-300 rounded-lg py-2.5 px-1"
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
                className="w-full bg-gray-300 rounded-lg py-2.5 px-1"
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
                className="w-full bg-gray-300 rounded-lg py-2.5 px-1"
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
