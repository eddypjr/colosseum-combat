export type Params = {
  params: {
    day: string;
  };
};

type FightClass = {
  class: string;
  startTime: string;
  endTime: string;
  coach: string;
};

async function getSchedule(day: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${day}`);
  const data = await response.json();
  return data;
}

export default async function DayPage({ params: { day } }: Params) {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const dayOfTheWeek = capitalizeFirstLetter(day);
  const schedule = await getSchedule(dayOfTheWeek);
  const { classes } = schedule[0];

  return (
    <>
      <div className="mt-[5rem]">
        <div className="flex flex-col gap-3">
          {classes.map((classItem: FightClass) => (
            <ul
              key={crypto.randomUUID()}
              className="flex justify-between w-full maxMd:flex-col maxMd:text-center"
            >
              <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Class Name
                </p>
                <p className="text-[18px] text-black font-bold mt-3">
                  {classItem.class}
                </p>
              </li>

              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
                <p className="text-[18px] text-black font-bold mt-3">
                  {classItem.startTime} - {classItem.endTime}
                </p>
              </li>

              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Trainer
                </p>
                <p className="text-[18px] text-black font-bold mt-3">
                  {classItem.coach}
                </p>
              </li>

              <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full text-right maxMd:text-center">
                <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ffb703] ease-in duration-200 ">
                  Join Now
                </button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
