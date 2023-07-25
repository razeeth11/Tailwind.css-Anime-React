export function AppBar() {
  return (
    <div className="app-bar flex justify-between items-center px-5 py-5 md:py-[15px] md:px-[20px] shadow-lg w-full">
      <div>
        <span className="text-red-500 text-[34px] font-[1000]">Anime</span>
        <span className="text-stone-400 text-[32px] ms-4">Powers</span>
      </div>
      <div>
        <ul className="flex gap-[20px]">
          <li>
            <a href="#" className="md:text-[14px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] hover:text-red-500 cursor-pointer hover:border-b-[5px] border-red-300" >Naruto</a>
          </li>
          <li>
            <a href="#" className="md:text-[14px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] hover:text-red-500 cursor-pointer hover:border-b-[5px] border-red-300" >One Piece</a>
          </li>
          <li>
            <a href="#" className="md:text-[14px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] hover:text-red-500 cursor-pointer hover:border-b-[5px] border-red-300" >Bleach</a>
          </li>
          <li>
            <span class="material-symbols-outlined md:text-[24px] hover:text-red-500 cursor-pointer ps-5">shopping_cart</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
