"use client";
import Container from "../../elements/container/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import logo from '@/public/blogo.png'
import { FaTimes, FaBars } from "react-icons/fa";
export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <div className="text-black py-6 w-full">
      <Container>
        <div className="flex justify-between items-center">
          <div
            className="log text-2xl cursor-pointer"
            onClick={() => {
              router.push("/");
              setOpen(false);
            }}
          >
            <Image
              src={logo}
              alt=""
              className="md:w-40 w-28 h-auto"
              height={500}
              width={100}
            />
          </div>
          <div
            className={
              open
                ? "flex-col pt-7 p-4 overlay bg-slate-50 transition-all element md:w-[60%] w-full"
                : "menu justify-between items-center gap-5 md:flex hidden"
            }
          >
             <Image
              src={logo}
              alt=""
              className="md:w-40 w-28 h-auto md:hidden flex items-center justify-center py-5 mx-auto"
              height={500}
              width={100}
            />
            <ul
              className={
                open ? "flex-col m-2" : "flex gap-5 items-center text-lg"
              }
            >
              {data.map((datas: any) => (
                <>
                  <li
                    key={datas.id}
                    className={
                      open
                        ? "w-full py-4 border-slate-300 border-b-2 cursor-pointer"
                        : "cursor-pointer"
                    }
                    onClick={() => {
                      router.push(`${datas.link}`);
                      setOpen(false);
                    }}
                  >
                    {datas.name}
                  </li>
                </>
              ))}
            </ul>
            <a
              href=""
              className={
                open
                  ? "w-full bg-slate-600 py-3 mt-4 rounded-md text-white text-center font-semibold block"
                  : "bg-slate-600 rounded-md font-semibold text-white py-3 px-7"
              }
            >
              Contact US
            </a>
          </div>
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className="md:hidden block bg-slate-600 p-3 rounded-full text-white z-50"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </Container>
    </div>
  );
}

const data = [
  { id: "1", name: "Home", link: "/" },
  { id: "2", name: "About", link: "/about" },
  { id: "3", name: "Conatct", link: "/contact" },
  { id: "4", name: "Blogs", link: "/blog" },
  { id: "5", name: "Catgeory", link: "/catgeory" },
];
