"use client";
import Container from "../../elements/container/page";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="subheader bg-blue-500 py-3 text-white px-5 relative">
        <Container>
          <div className="flex flex-wrap items-center justify-between">
            <div className="left">
              <ul className="flex gap-4 text-base">
                <li>24/7 Customer Support</li>
                <li>992 314 7878528</li>
              </ul>
            </div>
            <div className="right ">
              <ul className="flex gap-4 text-base">
                <li>Shipping &amp; return</li>
                <li>Track order</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <div
          className={
            open
              ? "h-full absolute top-0 left-0 bottom-0 right-0 bg-blue-800"
              : "header bg-blue-200"
          }
        >
          <div className="border-b-2 border-slate-200">
            <Container>
              <div
                className={
                  open
                    ? "py-5 flex justify-center"
                    : "flex items-center justify-between py-4"
                }
              >
                <div className="log order-1">
                  <img
                    src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-logo.svg"
                    alt=""
                    title=""
                  />
                </div>
                <div className="md:flex hidden items-center gap-2 order-2">
                  <input
                    type="text"
                    placeholder="Search Products"
                    className="px-4 h-11 outline-none"
                  />
                  <button className="bg-black text-white h-11 px-4">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </Container>
          </div>

          <div
            className={
              open ? "mt-5" : "px-4 order-3 md:block hidden py-3"
            }
          >
            <Container>
              <ul
                className={
                  open ? "" : "flex gap-8 text-lg font-medium text-white relative"
                }
              >
                {data.map((data: any) => (
                  <>
                    <li
                      className={
                        open ? "py-2 text-left text-white text-lg" : "menu"
                      }
                      key={data.id}
                    >
                      <a href="" >{data.name}</a>
                      {/* <ul className="bg-red-400 submenu z-40 absolute left-0 ">
                        {data.link.map((data: any) => (
                          <li key={data.id} className="py-1 px-8">
                            <a href="" className="py-2 px-5">
                              {data.name}
                            </a>
                          </li>
                        ))}
                      </ul> */}
                    </li>
                  </>
                ))}
              </ul>
            </Container>
          </div>
          <div
            className={
              open
                ? "absolute top-4 right-4 bg-white text-black h-10 w-10 flex items-center justify-center text-2xl"
                : "md:hidden text-white order-2 z-20 flex items-center justify-center top-20 right-2 bg-blue-500 h-10 fixed w-10"
            }
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    id: 1,
    name: "Home",
    link: [
      {
        id: 1,
        name: "Link 1",
      },
      {
        id: 2,
        name: "Link 2",
      },
      {
        id: 3,
        name: "Link 3",
      },
      {
        id: 4,
        name: "Link 4",
      },
    ],
  },
  {
    id: 2,
    name: "Home appliances",
    link: [],
  },
  {
    id: 3,
    name: "Audio & video",
    link: [],
  },
  {
    id: 4,
    name: "Refrigerator",
    link: [],
  },
  {
    id: 5,
    name: "About",
    link: [],
  },
  {
    id: 6,
    name: "Contact",
    link: [],
  },
];
