import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import Profile_Img from "../public/headshot.jpeg";
export default function Landing() {
  return (
    <div className="h-screen bg-slate-900  flex items-center">
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
                <a className="group ring-0 relative border-2 border-light-emerald p-3 focus:ring-0 focus:ring-offset-0">
                  <span
                    className="absolute top-0 left-0  bg-light-emerald  h-full w-full scale-x-0 origin-left duration-150 group-hover:scale-x-100  group-hover:duration-300 group-focus:scale-x-100 group-focus:duration-300
                  "
                  ></span>
                  <FaLinkedinIn
                    className="relative z-10 text-white  duration-75 group-hover:text-black  group-hover:duration-100 group-hover:delay-150 group-focus:text-black group-focus:duration-100 group-focus:delay-150 "
                    size={24}
                  />
                </a>
              </Link>

              <Link href="/">
                <a className="group relative border-2 border-light-emerald p-3 focus:ring-0 focus:ring-offset-0">
                  <span
                    className="absolute top-0 left-0  bg-light-emerald  h-full w-full scale-x-0 origin-left duration-150 group-hover:scale-x-100  group-hover:duration-300 group-focus:scale-x-100 group-focus:duration-300
                  "
                  ></span>
                  <FiGithub
                    className="relative z-10 text-white  duration-75 group-hover:text-black  group-hover:duration-100 group-hover:delay-150 group-focus:text-black group-focus:duration-100 group-focus:delay-150 "
                    size={24}
                  />
                </a>
              </Link>
              <Link href="/">
                <a className="group relative border-2 border-light-emerald p-3 ">
                  <span
                    className="absolute top-0 left-0  bg-light-emerald  h-full w-full scale-x-0 origin-left duration-150 group-hover:scale-x-100  group-hover:duration-300 group-focus:scale-x-100 group-focus:duration-300
                  "
                  ></span>
                  <ImProfile
                    className="relative z-10 text-white  duration-75 group-hover:text-black  group-hover:duration-100 group-hover:delay-150 group-focus:text-black group-focus:duration-100 group-focus:delay-150 "
                    size={24}
                  />
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
