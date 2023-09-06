// async function getSchedules() {
//   const data = await fetch(`http://localhost:3000/api/schedule`, {
//     cache: 'force-cache',
//   });
//   const scheds = await data.json();
//   return scheds;
// }

export default async function SchedulePage() {
  return (
    <>
      <div className="mt-[5rem]">
        <div className="flex flex-col gap-3">
          {/* row */}
          <ul className="flex justify-between w-full maxMd:flex-col maxMd:text-center">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="text-[18px] text-black font-bold mt-3">
                Kickboxing
              </p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">
                9:00am - 10:00am
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">
                Eddie Bravo
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full text-right maxMd:text-center">
              <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ffb703] ease-in duration-200 ">
                Join Now
              </button>
            </li>
          </ul>
          {/* row */}
          <ul className="flex justify-between w-full maxMd:flex-col maxMd:text-center">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="text-[18px] text-black font-bold mt-3">Boxing</p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">
                7:00pm - 8:00pm
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">
                Floyd Mayweather
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full text-right maxMd:text-center">
              <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ffb703] ease-in duration-200 ">
                Join Now
              </button>
            </li>
          </ul>
          {/* row */}
          <ul className="flex justify-between w-full maxMd:flex-col maxMd:text-center">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="text-[18px] text-black font-bold mt-3">Open Gym</p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">
                4:00pm - 5:00pm
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">Staff</p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full text-right maxMd:text-center">
              <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ffb703] ease-in duration-200 ">
                Join Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
