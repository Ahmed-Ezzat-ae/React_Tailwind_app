const GetStarted = () => {
  return (
    <section>
      <div className="container relative">
        <div className="bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-md element-center w-[865px] max-w-full min-h-[275px] text-white text-center p-[30px]">
          <h3 className="text-[25px] md:text-[35px] font-semibold mb-[15px]">
            Get early access today
          </h3>
          <p className="w-[620px] max-w-full mx-auto mb-[30px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            fugit similique enim expedita laborum laboriosam est nemo.
          </p>

          <form
            action=""
            className="w-full flex justify-between items-center flex-wrap md:px-[60px] gap-[30px]"
          >
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full md:flex-1
             h-[50px] rounded-[30px] pl-[30px] text-black outline-none"
            />
            <button
              type="submit"
              className="bg-btnBG hover:bg-[#8cdae4] w-full md:w-[200px] h-[50px] transition-all duration-300 rounded-[30px]"
            >
              Get Started For Free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
