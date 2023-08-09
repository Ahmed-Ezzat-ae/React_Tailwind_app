const StayProductive = () => {
  return (
    <section className="pb-[150px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div className="mb-[30px] md:mb-0">
          <img
            src="/src/assets/images/illustration-stay-productive.png"
            alt="stay productive"
            loading="lazy"
          />
        </div>

        <div className="text-white">
          <h3 className="text-[35px] leading-[50px]">
            Stay productive,
            <br />
            wherever you are
          </h3>

          <div className="my-4 text-sm tracking-[.8px]">
            <p className="mb-[15px] text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae ipsam doloribus nam commodi tempora consequuntur
              repellat dolores in, eos nostrum unde quibusdam cum. Dolore unde
              obcaecati placeat, corrupti commodi vitae?
            </p>
            <p className=" text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae ipsam doloribus nam commodi tempora consequuntur
              repellat dolores in, eos nostrum unde quibusdam cum. Dolore unde
              obcaecati placeat, corrupti commodi vitae?
            </p>
          </div>

          <a
            href="/"
            className="text-btnBG2 hover:text-btnBG transition-colors duration-300 border-b-2 border-btnBG2 border-solid pb-1 inline-flex items-center gap-[15px]"
          >
            See how fylo works
            <img
              src="/src/assets/images/icon-arrow.svg"
              alt="arrow-img"
              className="w-[20px] h-[20px] object-contain
             animate-moveRight"
             
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
