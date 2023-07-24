export function AppBar() {
  return (
    <div className="app-bar flex justify-between items-center my-5 mx-20">
      <div>
        <span className="text-red-500 text-[34px] font-[1000]">Anime</span>
        <span className="text-stone-500 text-[30px] ms-2">World</span>
      </div>
      <div>
        <ul className="flex gap-[20px]">
          <li className="px-[20px] py-[4px] rounded-full border-[1px] border-stone-300 hover:bg-red-500 hover:text-[white] text-[12px] shadow-xl">
            <a href="#">Naruto</a>
          </li>
          <li className="px-[20px] py-[4px] rounded-full border-[1px] border-stone-300 hover:bg-red-500 hover:text-[white] text-[12px] shadow-xl">
            <a href="#">One Piece</a>
          </li>
          <li className="px-[20px] py-[4px] rounded-full border-[1px] border-stone-300 hover:bg-red-500 hover:text-[white] text-[12px] shadow-xl">
            <a href="#">Bleach</a>
          </li>
          <li>

          </li>
        </ul>
      </div>
    </div>
  );
}
