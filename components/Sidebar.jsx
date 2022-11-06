import Link from "next/link";
import { RiLayoutGridFill } from "react-icons/ri";
import { AiFillSignal, AiOutlineAreaChart, BsBack } from "react-icons/ai";
import { IoIosWallet, IoMdSettings } from "react-icons/io";
import { IoRibbon, IoLogInOutline, IoLogOutOutline } from "react-icons/io5";

import logo from "../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const active = router.pathname;

  return (
    <div className="h-screen bg-dark-secondary text-white flex flex-col justify-between items-center py-6 w-32 sm:w-16">
      <div className="cursor-pointer">
        <Image src={logo} alt="Logo" />
      </div>
      <div className="text-3xl sm:text-sm">
        <ul className="flex flex-col gap-y-10 sm:gap-y-2 ">
          <li>
            <Link href="/">
              <div
                className={`${
                  active === "/"
                    ? "bg-primary-color"
                    : "hover:text-primary-color active:bg-primary-color active:text-white"
                } p-3 rounded cursor-pointer tooltip tooltip-right`}
                data-tip="dashboard"
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
                } p-3 rounded cursor-pointer tooltip tooltip-right`}
                data-tip="swap"
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
                } p-3 rounded cursor-pointer tooltip tooltip-right`}
                data-tip="stat"
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
                } p-3 rounded cursor-pointer tooltip tooltip-right`}
                data-tip="wallet"
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
                } p-3 rounded cursor-pointer tooltip tooltip-right`}
                data-tip="rewards"
              >
                <IoRibbon />
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-3xl sm:text-sm">
        <ul className="flex flex-col gap-y-10">
          <li className="p-3 rounded cursor-pointer">
            <div className="tooltip tooltip-right" data-tip="setting">
              <Link href="#">
                <IoMdSettings />
              </Link>
            </div>
          </li>
          <li className="p-3 rounded cursor-pointer bg-dark-light">
            <div className="tooltip tooltip-right" data-tip="login">
              <Link href="#">
                <IoLogInOutline />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
