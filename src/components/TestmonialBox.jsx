
const TestmonialBox = ({ name,desc, image, position }) => {
  return (
    <div className="text-white bg-[#21293c] rounded-md p-[30px] z-10 shadow-[5px_5px_10px_#1c202c]">
      <p className="text-sm tracking-wider mb-[30px]">{desc}</p>
      <div className="flex">
        <img src={`/src/assets/images/${image}`} alt="profile-img" className="w-[50px] h-[50px] rounded-full object-contain mr-3" />

        <div>
            <strong className="block mb-2">{name}</strong>
            <p className="text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestmonialBox;
