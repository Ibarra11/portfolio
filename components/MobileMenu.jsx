import * as Dialog from "@radix-ui/react-dialog";
import { TfiClose } from "react-icons/tfi";
import Link from "next/link";
import { useRouter } from "next/router";
export default function MobileMenu({ isOpen, handleOpenChange }) {
  const router = useRouter();
  return (
    <Dialog.Root onOpenChange={handleOpenChange} open={isOpen}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className="fixed top-0 z-[1000] inset-0  bg-black opacity-95 w-full ">
          <Dialog.Content className="absolute w-full h-full">
            <nav className=" pt-16 px-9" aria-label="mobile navigation">
              <ul className="flex flex-col items-center gap-6 text-gray-200">
                <li>
                  <button
                    onClick={() => {
                      handleOpenChange(false);
                      router.push("#", "#");
                    }}
                    className="text-2xl px-12 py-2 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleOpenChange(false);
                      router.push("#about");
                    }}
                    className="text-2xl px-12 py-2 focus hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleOpenChange(false);
                      router.push("#projects");
                    }}
                    className="text-2xl px-12 py-2 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleOpenChange(false);
                      router.push("#contact");
                    }}
                    className="text-2xl px-12 py-2 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                  >
                    Contact
                  </button>
                </li>
              </ul>
              <Dialog.Close
                aria-label="close navigation"
                className="absolute top-4 right-4 p-2 text-gray-200 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
              >
                <TfiClose size={32} />
              </Dialog.Close>
            </nav>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
