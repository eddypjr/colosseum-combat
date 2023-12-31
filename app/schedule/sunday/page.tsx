export default function Sunday() {
  return (
    <>
      {/* boxes */}
      <div className="mt-[5rem]">
        {/* monday */}
        <div className="flex flex-col gap-3">
          {/* row */}
          <ul className="flex justify-between w-full maxMd:flex-col maxMd:text-center">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="text-[18px] text-black font-bold mt-3">Closed</p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">N/A</p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">N/A</p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full text-right maxMd:text-center">
              <button disabled className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 ease-in duration-200 ">
                Join Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
