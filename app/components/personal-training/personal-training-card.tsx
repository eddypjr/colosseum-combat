import Button from '../button/button';

type PersonalTrainingCardProps = {
  price: number;
  title: string;
  descriptions: string[];
};

export default function PersonalTrainingCard({
  price,
  title,
  descriptions,
}: PersonalTrainingCardProps) {
  return (
    <>
      <div className="flex flex-col w-full bg-white shadow-xl items-center relative maxSm:w-full">
        <div style={{ transition: 'all 0.3s' }} className="relative">
          <div className="bg-white text-[28px] font-bold w-[90%] text-left py-6 text-black left-0 right-0 mx-auto">
            {title.toLocaleUpperCase()}
          </div>
        </div>
        <div className="flex flex-col w-[90%] items-left h-full">
          <p className="text-center text-[20px] font-bold relative py-[10px] ">
            ${price}/session
          </p>
          <div className="flex flex-col text-[16px] font-medium text-left gap-8 text-[#646464] ">
            {descriptions.map((desc) => (
              <p key={crypto.randomUUID()}>{desc}</p>
            ))}
          </div>

        </div>
          <Button
            text="Book Appointment"
            goTo="/contact"
            className="text-[15px] my-6 text-black hover:text-white bg-[#ffb703] self-center text-center pt-[14px] font-[600] w-[20rem] h-[5.5rem] uppercase hero-cta relative ml-2"
          />
      </div>
    </>
  );
}
