import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import Profile_Img from "../public/headshot.jpeg";
export default function Landing() {
  return (
    <div className="h-screen bg-dark-grey  flex items-center">
      <div className=" flex justify-between w-full max-w-6xl  mx-auto">
        <div className=" flex flex-col w-1/2  ">
          <h3 className=" text-light-emerald text-2xl mb-1">
            Frontend Developer
          </h3>
          <h1 className=" text-white text-6xl mb-4 ">Alan Ibarra</h1>
          <p className=" text-xl  text-light-grey">
            Web development for me is not a hobby, but a passion. Being able to
            take ideas and bring them to life is one of the most rewarding
            feelings.
          </p>
          <div className="mt-auto">
            <ul className="flex gap-4">
              <Link href="/">
                <a className="border-2 border-light-emerald p-3">
                  <FaLinkedinIn color="white" size={24} />
                </a>
              </Link>

              <Link href="/">
                <a className="border-2 border-light-emerald p-3">
                  <FiGithub color="white" size={24} />
                </a>
              </Link>
              <Link href="/">
                <a className="border-2 border-light-emerald p-3">
                  <ImProfile color="white" size={24} />
                </a>
              </Link>
            </ul>
          </div>
        </div>
        <div className="relative w-80 h-80 ml-auto rounded-full border-8 p-2 overflow-hidden border-light-emerald">
          <Image
            layout="fill"
            className="object-cover"
            src={Profile_Img}
            alt="profile picture"
          />
        </div>
      </div>
    </div>
  );
}
