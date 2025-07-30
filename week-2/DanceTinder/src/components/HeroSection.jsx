export const HeroSection = ({
  heroTitle,
  heroText,
  buttonText,
  actionCallText,
}) => {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-4 bg-white rounded-xl overflow-hidden pb-[5px]">
      <div className="aspect-[16/9] flex flex-col justify-end items-start w-full h-full px-[5px] pb-[5px] bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1631636864493-d4026e552236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8Y291cGxlJTI5MjBkYW5jaW5nJTI5MjBzdHVkaW98ZW58MXwwfHx8MTc1MzcyOTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080')]">
        <h1 className="text-[20px] font-medium text-white">{heroTitle}</h1>
        <p className="text-[16px] text-white">{heroText}</p>
      </div>
      <button className="rounded-[20px] p-[8px] text-white bg-violet-500">
        {buttonText}
      </button>
      <p className="text-black/60">{actionCallText}</p>
    </section>
  );
};
