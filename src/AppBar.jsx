export function AppBar() {
  return (
    <div className="app-bar flex justify-between items-center px-5 py-5 md:py-[10px] md:px-20 shadow-lg fixed w-full">
      <div>
        <span className="text-red-500 text-[34px] font-[1000]">Anime</span>
        <span className="text-stone-400 text-[32px] ms-4">Powers</span>
      </div>
      <div>
        <ul className="flex gap-[20px]">
          <li className="md:text-[14px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] focus:border-b-[5px] border-red-400">
            <a href="#">Naruto</a>
          </li>
          <li className="md:text-[14px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] focus:border-b-[5px] border-red-400">
            <a href="#">One Piece</a>
          </li>
          <li className="md:text-[14px] md:px-[20px] md:py-[4px] px-[10px] py-[4px] focus:border-b-[5px] border-red-400">
            <a href="#">Bleach</a>
          </li>
          <li>

          </li>
        </ul>
      </div>
    </div>
  );
}
