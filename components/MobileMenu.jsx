"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { TfiClose } from "react-icons/tfi";
import { useRouter } from "next/navigation";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
  },
};

const item = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export default function MobileMenu({ isOpen, handleOpenChange }) {
  const router = useRouter();
  return (
    <Dialog.Root onOpenChange={handleOpenChange} open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay asChild={true}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{
              width: 0,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className={`fixed top-0 right-0  bg-black/90 backdrop-blur-md z-[1000] h-full `}
          >
            <Dialog.Content className="absolute inset-0">
              <nav className="pt-16 px-9" aria-label="mobile navigation">
                <motion.ul
                  initial="hidden"
                  animate="show"
                  variants={container}
                  className="flex items-center flex-col gap-6 text-gray-200"
                >
                  <motion.li variants={item}>
                    <button
                      onClick={() => {
                        handleOpenChange(false);
                        router.push("/#home");
                      }}
                      className="text-2xl px-12 py-2 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                    >
                      Home
                    </button>
                  </motion.li>
                  <motion.li variants={item}>
                    <button
                      onClick={() => {
                        handleOpenChange(false);
                        router.push("/#about");
                      }}
                      className="text-2xl px-12 py-2 focus hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                    >
                      About
                    </button>
                  </motion.li>
                  <motion.li variants={item}>
                    <button
                      onClick={() => {
                        handleOpenChange(false);
                        router.push("/#projects");
                      }}
                      className="text-2xl px-12 py-2 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                    >
                      Projects
                    </button>
                  </motion.li>
                  <motion.li variants={item}>
                    <button
                      onClick={() => {
                        handleOpenChange(false);
                        router.push("/#contact");
                      }}
                      className="text-2xl px-12 py-2 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                    >
                      Contact
                    </button>
                  </motion.li>
                </motion.ul>
                <Dialog.Close
                  arai-label="close mobile menu"
                  className="absolute top-4 right-4 p-2 text-gray-200 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                >
                  <TfiClose size={32} />
                </Dialog.Close>
              </nav>
            </Dialog.Content>
          </motion.div>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
