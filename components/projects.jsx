import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Audiophile_img from "../public/audiophile.png";
import Moviespot_img from "../public/moviespot.png";
import { FiGithub, FiHexagon, FiGlobe } from "react-icons/fi";
export default function Projects({ onSectionEnter }) {
  const ref = useRef();
  // useEffect(() => {
  //   let options = {
  //     root: null,
  //     // rootMargin: "820px",
  //     threshold: 0,
  //   };

  //   let observer = new IntersectionObserver((e) => {
  //     const { isIntersecting, boundingClientRect, intersectionRatio } = e[0];
  //     const ratio = Math.floor(intersectionRatio * 100);
  //     // console.log(e[0]);
  //     // console.log(window.innerHeight);
  //     // console.log(e[0]);
  //     // console.log(e[0].boundingClientRect.y);
  //     // console.log(rootBounds);
  //     // console.log(intersectionRatio * 100);
  //     // if (
  //     //   isIntersecting &&
  //     //   (boundingClientRect.y < 20) & (boundingClientRect.y > 0)
  //     // ) {
  //     //   console.log("scrolling Down");
  //     //   onSectionEnter("projects");
  //     // }

  //     // if (
  //     //   isIntersecting &&
  //     //   boundingClientRect.y < 0 &&
  //     //   Math.floor(intersectionRatio * 100) === 10
  //     // ) {
  //     //   onSectionEnter("projects");
  //     // }
  //   }, options);
  //   observer.observe(ref.current);
  // }, [onSectionEnter]);
  return (
    <section ref={ref} id="projects" className=" bg-slate-800 py-24">
      <div className="relative max-w-6xl mx-auto">
        <h2 className=" relative text-center text-white text-4xl mb-24">
          Projects
        </h2>
        <div className="grid grid-cols-3 gap-x-9 h-80 mb-16">
          <div className="col-span-1 flex flex-col gap-2">
            <h3 className="text-2xl text-white">Movie Spot</h3>
            <p className=" text-light-grey text-lg">
              Movie Spot is an entertainment web app showcasing the most popular
              Movies and TV-series.
            </p>
            <h4 className="text-white text-lg">Features</h4>
            <ul className=" text-light-grey">
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Authentication</span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Account Creation</span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Data Persistence</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-auto">
              <Link href="/projects/moviespot">
                <a className="  text-white border-2 border-light-emerald px-2 h-12 rounded-xl">
                  View Details
                </a>
              </Link>
              <button className=" text-white border-2 border-light-emerald text-base  px-4 h-12  rounded-xl">
                Live
              </button>
              <button className="text-white border-2 border-light-emerald text-base  px-4 h-12  rounded-xl">
                <FiGithub size={16} />
              </button>
            </div>
          </div>
          <div className="relative col-span-2">
            <span className="absolute bg-dark-grey h-full w-full"></span>
            <Image
              src={Moviespot_img}
              alt="a screenshot of the moviespots website"
              layout="fill"
              className="object-cover rounded-lg"
            />{" "}
            ;
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-9 h-80 ">
          <div className="col-span-1 flex flex-col gap-2">
            <h3 className="text-2xl text-white">Audiophile</h3>
            <p className="text-light-grey text-lg">
              Audiophile is a multi page ecommerce site for headphones.
            </p>
            <h4 className="text-white text-lg">Features</h4>
            <ul className=" text-light-grey">
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Shopping Cart</span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Checkout Process</span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Page Animations</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-auto">
              <Link href="/projects/audiophile">
                <a className="  text-white border-2 border-light-emerald px-2 h-12 rounded-xl">
                  View Details
                </a>
              </Link>

              <button className=" text-white border-2 border-light-emerald text-base  px-4 h-12  rounded-xl">
                Live
              </button>
              <button className="text-white border-2 border-light-emerald text-base  px-4 h-12  rounded-xl">
                <FiGithub size={16} />
              </button>
            </div>
          </div>
          <div className=" relative col-span-2">
            <Image
              src={Audiophile_img}
              alt="a screenshot of the audiophile website"
              className="object-cover"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
