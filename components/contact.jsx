import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const EmailButtonVariants = {
  idle: {
    opacity: 1,
    borderRadius: 0,
    borderRadius: "8px",
    width: 120,
    height: 48,
  },
  pending: {
    opacity: 0.75,
    borderRadius: 0,
    borderRadius: "8px",
    width: 120,
    height: 48,
  },
  success: { opacity: 1, borderRadius: "50%", width: 64, height: 64 },
};

export default function Contact() {
  const [emailStatus, setEmailStatus] = useState("idle");
  async function sendEmail(event) {
    const { name, email, subject, message } = event.target.elements;
    event.preventDefault();
    try {
      setEmailStatus("pending");
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        }),
      });
      setEmailStatus("success");
      event.target.reset();
      setTimeout(() => {
        setEmailStatus("idle");
      }, 2000);
    } catch (e) {
      setEmailStatus("idle");
    }
  }
  return (
    <section className="py-16 md:py-24 bg-gray-100 px-9" id="contact">
      <div className="relative max-w-6xl  mx-auto">
        <div className="grid grid-cols-3 gap-12 ">
          <motion.div
            variants={variants}
            whileInView="visible"
            initial="hidden"
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.4 }}
            className="col-span-3 text-center md:col-span-1 self-center"
          >
            <h2 className="text-gray-700 text-4xl mb-2">Get in Touch</h2>
            <p className=" text-gray-700 text-lg">
              Feel free to contact me regarding any questions
            </p>
          </motion.div>
          <motion.form
            variants={variants}
            whileInView="visible"
            initial="hidden"
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.4 }}
            onSubmit={sendEmail}
            className="col-span-3 md:col-span-2 grid grid-cols-2 gap-6"
          >
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-1 ">
              <label className="text-grey-700 text-base mr-2" htmlFor="name">
                Name
              </label>
              <input
                className={clsx(
                  "w-full bg-gray-300 rounded-lg py-2.5 px-2 duration-200 outline-none",
                  "focus:ring-4 focus:ring-light-emerald"
                )}
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
                className={clsx(
                  "w-full bg-gray-300 rounded-lg py-2.5 px-2 duration-200 outline-none",
                  "focus:ring-4 focus:ring-light-emerald"
                )}
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
                className={clsx(
                  "w-full bg-gray-300 rounded-lg py-2.5 px-2 duration-200 outline-none",
                  "focus:ring-4 focus:ring-light-emerald"
                )}
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
                className={clsx(
                  "w-full bg-gray-300 rounded-lg py-2.5 px-2 duration-200 outline-none",
                  "focus:ring-4 focus:ring-light-emerald"
                )}
                rows={6}
                id="message"
                required
              ></textarea>
            </div>
            <div className="relative col-span-2">
              <motion.button
                variants={EmailButtonVariants}
                initial={false}
                animate={emailStatus}
                whileFocus={{
                  backgroundColor: "var(--dark-emerald)",
                  transition: { duration: 0.25 },
                }}
                whileHover={{
                  backgroundColor: "var(--dark-emerald)",
                  transition: { duration: 0.25 },
                }}
                transition={{ duration: 0.5, type: "tween", ease: "backInOut" }}
                className={clsx(
                  "absolute right-0 text-base text-gray-100  bg-light-emerald outline-none"
                )}
                disabled={
                  emailStatus === "pending" || emailStatus === "fulfilled"
                }
              >
                {emailStatus === "success" ? <CheckIcon /> : <span>Send</span>}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <motion.path
        {...props}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          type: "tween",
          ease: "easeOut",
          delay: 0.75 * 0.5,
          duration: 0.25,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      ></motion.path>
    </svg>
  );
}
