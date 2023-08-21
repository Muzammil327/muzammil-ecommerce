import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Container from "../../elements/container/page";
import { Logow } from "../../elements/logo/page";

export default function Footer() {
  return (
    <div className="footer bg-slate-800 pt-10 mt-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 section gap-6 pb-12">
          <div className="item">
            <div className="log mb-7">
             <Logow />
              <p className="text-slate-200 pt-5">
                Lorem Ipsum is simply dummy text the printing and typesetting
                industry has been the industrys standard text ever since.
              </p>
            </div>
            <div className="social">
              <ul className="flex gap-4">
                <li className="border-white text-white flex items-center justify-center text-lg border-2 p-2 h-12 w-12 rounded-lg">
                  <Link href="">
                    <FaFacebook />
                  </Link>
                </li>
                <li className="border-white text-white flex items-center justify-center text-lg border-2 p-2 h-12 w-12 rounded-lg">
                  <Link href="">
                    <FaYoutube />
                  </Link>
                </li>
                <li className="border-white text-white flex items-center justify-center text-lg border-2 p-2 h-12 w-12 rounded-lg">
                  <Link href="">
                    <FaTwitter />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="item flex md:flex-row flex-col md:gap-20">
            <div className="item">
              <h2 className="md:mt-0 mt-5 text-white text-2xl mb-6 font-semibold">
                Explore
              </h2>
              <ul className="flex flex-col gap-4 text-slate-200 text-base">
                <li className="hover:ml-2 transition-all">
                  <Link href="">Home</Link>
                </li>
                <li className="hover:ml-2 transition-all">
                  <Link href="">Home</Link>
                </li>
                <li className="hover:ml-2 transition-all">
                  <Link href="">Home</Link>
                </li>
              </ul>
            </div>
            <div className="item">
              <h2 className="md:mt-0 mt-5 text-white text-2xl mb-6 font-semibold">
                Information
              </h2>
              <ul className="flex flex-col gap-4 text-slate-200 text-base">
                <li className="hover:ml-2 transition-all">
                  <Link href="">Blog List</Link>
                </li>
                <li className="hover:ml-2 transition-all">
                  <Link href="">Sign In</Link>
                </li>
                <li className="hover:ml-2 transition-all">
                  <Link href="">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="item">
            <h2 className="md:mt-0 mt-5 text-white text-2xl mb-6 font-semibold">
              Subscribe
            </h2>
            <p className="text-white leading-7 text-base">
              Subscribe our blog with unlimited access to all the post we offer.
            </p>
            <div className="mt-4 relative ">
              <input
                type="email"
                className="bg-slate-700 relative px-4 h-11 w-full rounded text-slate-200 outline-none block"
                placeholder="Enter Your Email"
              />
              <button className="absolute bg-slate-400 top-0 right-0 h-11 text-center text-white px-4">
                Submit
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div className="copyright bg-slate-700 py-4 w-full">
        <Container>
          <p className="text-center text-white">© 2022 design and developed by Brandbes. Powered by <Link href="/">Muzammil</Link>.</p>
        </Container>
      </div>
    </div>
  );
}
