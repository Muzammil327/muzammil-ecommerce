import Image from "next/image";
import logo from "@/public/blogo.png";
import wlogo from "@/public/wlogo.png";

export function Logob() {
  return (
    <Image
      src={logo}
      alt=""
      className="md:w-40 w-28 h-auto"
      height={500}
      width={100}
    />
  );
}

export function Logow() {
  return (
    <Image
      src={wlogo}
      alt=""
      className="md:w-40 w-28 h-auto"
      height={500}
      width={100}
    />
  );
}
