export function AppBar() {
  return (
    <div className="app-bar flex justify-between items-center p-5 md:py-[15px] md:px-[30px] shadow-lg w-full">
      <div>
        <span className="text-red-500 text-[34px] font-[1000]">NOLAN's</span>
        <span className="text-stone-400 text-[32px] ms-4">Magic</span>
      </div>
      <div>
        <ul className="flex space-x-5 items-center">
          <li>
            <a href="#" className="md:text-[15px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] hover:text-red-500 cursor-pointer hover:border-b-[5px] border-red-500" >Space</a>
          </li>
          <li>
            <a href="#" className="md:text-[15px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] hover:text-red-500 cursor-pointer hover:border-b-[5px] border-red-500" >Reality</a>
          </li>
          <li>
            <a href="#" className="md:text-[15px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] hover:text-red-500 cursor-pointer hover:border-b-[5px] border-red-500" >Time</a>
          </li>
          <li>
            <a href="#" className="md:text-[15px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] hover:text-red-500 cursor-pointer hover:border-b-[5px] border-red-500" >Powers</a>
          </li>
          <li>
            <a href="#" className="md:text-[15px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] hover:text-red-500 cursor-pointer hover:border-b-[5px] border-red-500" >Powers</a>
          </li>
          <li>
            <a href="#" className="md:text-[15px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] hover:text-red-500 cursor-pointer hover:border-b-[5px] border-red-500" >Powers</a>
          </li>
          <li>
            <span class="material-symbols-outlined md:text-[24px] hover:text-red-500 cursor-pointer ps-5">shopping_cart</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
