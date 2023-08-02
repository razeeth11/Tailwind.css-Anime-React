import { Navigate, useNavigate } from "react-router-dom";

export function AppBar() {
  const navigate = useNavigate();

  return (
    <div className="app-bar flex justify-between items-center p-5 md:py-[10px] md:px-[30px] shadow-lg w-full sticky top-0 bg-white">
      <div onClick={() => navigate("/")} className="cursor-pointer">
        <span className="text-red-500 text-[34px] font-[1000]">NOLAN's</span>
        <span className="text-stone-400 text-[32px] ms-4">Magic</span>
      </div>
      <div>
        <ul className="flex space-x-5 items-center">
          <li onClick={() => navigate("/space-movies")}>
            <a
              href="#"
              className="md:text-[15px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] hover:text-red-500 cursor-pointer hover:border-b-[5px] border-red-500"
            >
              Space
            </a>
          </li>
          <li onClick={() => navigate("/reality-movies")}>
            <a
              href="#"
              className="md:text-[15px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] hover:text-red-500 cursor-pointer hover:border-b-[5px] border-red-500"
            >
              Reality
            </a>
          </li>
          <li>
            <a
              href="#"
              className="md:text-[15px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] hover:text-red-500 cursor-pointer hover:border-b-[5px] border-red-500"
            >
              Time
            </a>
          </li>
          <li>
            <a
              href="#"
              className="md:text-[15px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] hover:text-red-500 cursor-pointer hover:border-b-[5px] border-red-500"
            >
              Powers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="md:text-[15px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] hover:text-red-500 cursor-pointer hover:border-b-[5px] border-red-500"
            >
              Soul
            </a>
          </li>
          <li>
            <a
              href="#"
              className="md:text-[15px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] hover:text-red-500 cursor-pointer hover:border-b-[5px] border-red-500"
            >
              Mind
            </a>
          </li>
          <li>
            <span className="material-symbols-outlined md:text-[24px] hover:text-red-500 cursor-pointer ps-5">
              shopping_cart
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
