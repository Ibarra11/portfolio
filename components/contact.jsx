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
    console.log(res);
  }
  return (
    <section className="py-24 bg-black" id="contact">
      <div className="relative max-w-6xl  mx-auto">
        <div className="grid grid-cols-3 gap-12 ">
          <div className=" col-span-1 self-center">
            <h2 className="text-white text-4xl mb-2">Get in Touch</h2>
            <p className=" text-light-grey text-lg">
              {" "}
              Feel free to contact me regarding any questions
            </p>
          </div>
          <form
            onSubmit={sendEmail}
            className="col-span-2 grid grid-cols-2 gap-6"
          >
            <div className=" col-span-1 flex flex-col gap-1 ">
              <label className="text-white text-base mr-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full bg-slate-800 rounded-lg py-2.5 px-1"
                id="name"
                type="text"
                required
              />
            </div>
            <div className="col-span-1 flex flex-col  gap-1">
              <label className="text-white text-base mr-2" htmlFor="email">
                Email
              </label>
              <input
                className="flex-1 bg-slate-800 rounded-lg py-2.5 px-1"
                id="email"
                type="email"
                required
              />
            </div>
            <div className="col-span-2 flex flex-col  gap-1">
              <label className="text-white text-base mr-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="flex-1 bg-slate-800 rounded-lg py-2.5 px-1"
                id="subject"
                type="text"
                required
              />
            </div>
            <div className="col-span-2 flex flex-col  gap-1">
              <label className="text-white text-base mr-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="flex-1 bg-slate-800 rounded-lg py-2"
                rows={6}
                id="message"
                required
              ></textarea>
            </div>
            <div className="col-span-2 flex justify-end">
              <button className="px-6 py-2 bg-dark-emerald">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
