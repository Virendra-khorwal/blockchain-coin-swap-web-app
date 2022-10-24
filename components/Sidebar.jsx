import Link from "next/link";
import { RiLayoutGridFill } from "react-icons/ri";
import { AiFillSignal, AiOutlineAreaChart, BsBack } from "react-icons/ai";
import { IoIosWallet, IoMdSettings, } from "react-icons/io";
import { IoRibbon, IoLogInOutline, IoLogOutOutline } from "react-icons/io5";

import logo from '../public/logo.png'
import Image from "next/image";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const active = router.pathname;

  return (
    <div className="h-screen bg-dark-secondary text-white flex flex-col justify-between items-center py-6 w-32">
      <div className="cursor-pointer">
        <Image src={logo} alt="Logo" />
      </div>
      <div className="text-3xl">
        <ul className="flex flex-col gap-y-10 ">
          <li>
            <Link href="/">
              <div
                className={`${
                  active === "/"
                    ? "bg-primary-color"
                    : "hover:text-primary-color active:bg-primary-color active:text-white"
                } p-3 rounded cursor-pointer `}
              >
                <RiLayoutGridFill />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/swap">
              <div
                className={`${
                  active === "/swap"
                    ? "bg-primary-color"
                    : "hover:text-primary-color active:bg-primary-color active:text-white"
                } p-3 rounded cursor-pointer`}
              >
                <AiFillSignal />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/stat">
              <div
                className={`${
                  active === "/stat"
                    ? "bg-primary-color"
                    : "hover:text-primary-color active:bg-primary-color active:text-white"
                } p-3 rounded cursor-pointer`}
              >
                <AiOutlineAreaChart />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/wallet">
              <div
                className={`${
                  active === "/wallet"
                    ? "bg-primary-color"
                    : "hover:text-primary-color active:bg-primary-color active:text-white"
                } p-3 rounded cursor-pointer`}
              >
                <IoIosWallet />
              </div>
            </Link>
          </li>

          <li>
            <Link href="/rewards">
              <div
                className={`${
                  active === "/rewards"
                    ? "bg-primary-color"
                    : "hover:text-primary-color active:bg-primary-color active:text-white"
                } p-3 rounded cursor-pointer `}
              >
                <IoRibbon />
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-3xl">
        <ul className="flex flex-col gap-y-10">
          <li className="p-3 rounded cursor-pointer">
            <Link href="#">
              <IoMdSettings />
            </Link>
          </li>
          <li className="p-3 rounded cursor-pointer bg-dark-light">
            <Link href="#">
              <IoLogInOutline />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
